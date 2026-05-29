import nodemailer from "nodemailer";

export interface InstallRequestPayload {
  domainName: string;
  ctaSource: string;
  pageUrl: string;
  honeypot?: string;
  metadata?: Record<string, unknown>;
}

export interface InstallRequestResponseBody {
  ok: boolean;
  message?: string;
  error?: string;
}

type HandlerResult = {
  status: number;
  body: InstallRequestResponseBody;
};

type PreparedMail = {
  from: string;
  to: string[];
  subject: string;
  text: string;
  html: string;
};

type HandlerDeps = {
  env?: NodeJS.ProcessEnv;
  now?: Date;
  sendMail?: (mail: PreparedMail) => Promise<void>;
};

type ValidatedPayload = {
  domainName: string;
  normalizedWebsite: string;
  ctaSource: string;
  pageUrl: string;
  honeypot: string;
  metadata: Record<string, unknown> | undefined;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DOMAIN_REGEX = /^(?!-)(?:[a-z0-9-]{1,63}\.)+[a-z]{2,63}$/i;

const FIELD_LIMITS = {
  domainName: 260,
  ctaSource: 120,
  pageUrl: 2048,
  honeypot: 200,
  metadata: 4000,
} as const;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function trimToString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function stringifyMetadata(metadata: Record<string, unknown> | undefined): string {
  if (!metadata || Object.keys(metadata).length === 0) {
    return "";
  }

  return JSON.stringify(metadata, null, 2);
}

function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

function normalizeWebsite(rawWebsite: string): { domainName: string; normalizedWebsite: string } {
  const trimmed = rawWebsite.trim();
  const candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  const url = new URL(candidate);

  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error("Unsupported protocol.");
  }

  const domainName = url.hostname.toLowerCase().replace(/^www\./, "");

  if (!DOMAIN_REGEX.test(domainName)) {
    throw new Error("Invalid domain.");
  }

  return {
    domainName,
    normalizedWebsite: url.toString(),
  };
}

function validateRequiredField(
  fieldName: string,
  value: string,
  maxLength: number,
): string | null {
  if (!value) {
    return `${fieldName} is required.`;
  }

  if (value.length > maxLength) {
    return `${fieldName} must be ${maxLength} characters or fewer.`;
  }

  return null;
}

function validatePayload(payload: unknown): { ok: true; data: ValidatedPayload } | HandlerResult {
  if (!isPlainObject(payload)) {
    return {
      status: 400,
      body: { ok: false, error: "Request body must be a JSON object." },
    };
  }

  const rawDomainName = trimToString(payload.domainName);
  const ctaSource = trimToString(payload.ctaSource);
  const pageUrl = trimToString(payload.pageUrl);
  const honeypot = trimToString(payload.honeypot);
  const metadata = payload.metadata;

  const requiredFieldErrors = [
    validateRequiredField("domainName", rawDomainName, FIELD_LIMITS.domainName),
    validateRequiredField("ctaSource", ctaSource, FIELD_LIMITS.ctaSource),
    validateRequiredField("pageUrl", pageUrl, FIELD_LIMITS.pageUrl),
  ].filter((value): value is string => value !== null);

  if (requiredFieldErrors.length > 0) {
    return {
      status: 400,
      body: { ok: false, error: requiredFieldErrors[0] },
    };
  }

  if (honeypot) {
    return {
      status: 400,
      body: { ok: false, error: "Spam check failed." },
    };
  }

  if (honeypot.length > FIELD_LIMITS.honeypot) {
    return {
      status: 400,
      body: { ok: false, error: "honeypot must be 200 characters or fewer." },
    };
  }

  let normalized: { domainName: string; normalizedWebsite: string };

  try {
    normalized = normalizeWebsite(rawDomainName);
  } catch {
    return {
      status: 400,
      body: { ok: false, error: "Please enter a valid website domain." },
    };
  }

  try {
    const parsedPageUrl = new URL(pageUrl);
    if (!["http:", "https:"].includes(parsedPageUrl.protocol)) {
      throw new Error("Invalid page URL.");
    }
  } catch {
    return {
      status: 400,
      body: { ok: false, error: "pageUrl must be a valid URL." },
    };
  }

  if (metadata !== undefined) {
    if (!isPlainObject(metadata)) {
      return {
        status: 400,
        body: { ok: false, error: "metadata must be an object when provided." },
      };
    }

    if (stringifyMetadata(metadata).length > FIELD_LIMITS.metadata) {
      return {
        status: 400,
        body: { ok: false, error: "metadata is too large." },
      };
    }
  }

  return {
    ok: true,
    data: {
      domainName: normalized.domainName,
      normalizedWebsite: normalized.normalizedWebsite,
      ctaSource,
      pageUrl,
      honeypot,
      metadata: metadata as Record<string, unknown> | undefined,
    },
  };
}

function getOwnerEmails(env: NodeJS.ProcessEnv): string[] {
  const emails = (env.CTA_OWNER_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (emails.length === 0) {
    throw new Error("CTA_OWNER_EMAILS is not configured.");
  }

  const invalidEmail = emails.find((email) => !validateEmail(email));

  if (invalidEmail) {
    throw new Error(`CTA_OWNER_EMAILS contains an invalid email: ${invalidEmail}`);
  }

  return emails;
}

function getTransportConfig(env: NodeJS.ProcessEnv) {
  const host = env.SMTP_HOST?.trim();
  const portRaw = env.SMTP_PORT?.trim();
  const user = env.SMTP_USER?.trim();
  const pass = env.SMTP_PASS;
  const from = env.SMTP_FROM?.trim();

  if (!host || !portRaw || !user || !pass || !from) {
    const missing = {
      SMTP_HOST: !host,
      SMTP_PORT: !portRaw,
      SMTP_USER: !user,
      SMTP_PASS: !pass,
      SMTP_FROM: !from,
    };
    throw new Error(
      `SMTP env missing: ${Object.entries(missing)
        .filter(([, v]) => v)
        .map(([k]) => k)
        .join(", ")}`,
    );
  }

  if (!validateEmail(from)) {
    throw new Error("SMTP_FROM must be a valid email address.");
  }

  const port = Number(portRaw);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("SMTP_PORT must be a valid positive integer.");
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
    from,
  };
}

function buildMail(
  payload: ValidatedPayload,
  ownerEmails: string[],
  from: string,
  now: Date,
): PreparedMail {
  const submittedAt = now.toISOString();
  const subject = `${payload.domainName} wants to install chatbot`;
  const metadataString = stringifyMetadata(payload.metadata);
  const lines = [
    `${payload.domainName} wants to install chatbot.`,
    "",
    `Website: ${payload.normalizedWebsite}`,
    `Domain: ${payload.domainName}`,
    `CTA Source: ${payload.ctaSource}`,
    `Page URL: ${payload.pageUrl}`,
    `Submitted At: ${submittedAt}`,
  ];

  if (metadataString) {
    lines.push("", "Metadata:", metadataString);
  }

  const htmlSections = [
    `<p><strong>${escapeHtml(payload.domainName)} wants to install chatbot.</strong></p>`,
    '<table cellpadding="6" cellspacing="0" border="0">',
    `<tr><td><strong>Website</strong></td><td><a href="${escapeHtml(payload.normalizedWebsite)}">${escapeHtml(payload.normalizedWebsite)}</a></td></tr>`,
    `<tr><td><strong>Domain</strong></td><td>${escapeHtml(payload.domainName)}</td></tr>`,
    `<tr><td><strong>CTA Source</strong></td><td>${escapeHtml(payload.ctaSource)}</td></tr>`,
    `<tr><td><strong>Page URL</strong></td><td><a href="${escapeHtml(payload.pageUrl)}">${escapeHtml(payload.pageUrl)}</a></td></tr>`,
    `<tr><td><strong>Submitted At</strong></td><td>${escapeHtml(submittedAt)}</td></tr>`,
    "</table>",
  ];

  if (metadataString) {
    htmlSections.push(
      "<p><strong>Metadata</strong></p>",
      `<pre>${escapeHtml(metadataString)}</pre>`,
    );
  }

  return {
    from,
    to: ownerEmails,
    subject,
    text: lines.join("\n"),
    html: htmlSections.join(""),
  };
}

async function defaultSendMail(mail: PreparedMail, env: NodeJS.ProcessEnv): Promise<void> {
  const transport = getTransportConfig(env);
  const transporter = nodemailer.createTransport({
    host: transport.host,
    port: transport.port,
    secure: transport.secure,
    auth: transport.auth,
  });

  await transporter.sendMail(mail);
}

export async function handleInstallRequestEmail(
  payload: unknown,
  deps: HandlerDeps = {},
): Promise<HandlerResult> {
  const validated = validatePayload(payload);

  if ("status" in validated) {
    return validated;
  }

  const env = deps.env ?? process.env;
  const now = deps.now ?? new Date();

  try {
    const transport = getTransportConfig(env);
    const ownerEmails = getOwnerEmails(env);
    const mail = buildMail(validated.data, ownerEmails, transport.from, now);
    const sendMail = deps.sendMail ?? ((preparedMail) => defaultSendMail(preparedMail, env));

    await sendMail(mail);

    return {
      status: 200,
      body: {
        ok: true,
        message: "Install request sent.",
      },
    };
  } catch (error) {
    console.error("Install request email failed", error);

    return {
      status: 500,
      body: { ok: false, error: "Failed to send install request." },
    };
  }
}
