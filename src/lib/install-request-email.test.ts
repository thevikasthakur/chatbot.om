import assert from "node:assert/strict";
import test from "node:test";
import { handleInstallRequestEmail } from "./install-request-email.ts";

const validEnv = {
  NODE_ENV: "test",
  SMTP_HOST: "smtp-mail.outlook.com",
  SMTP_PORT: "587",
  SMTP_USER: "system-emails@example.com",
  SMTP_PASS: "secret",
  SMTP_FROM: "system-emails@example.com",
  CTA_OWNER_EMAILS: "owner1@example.com,owner2@example.com",
} satisfies NodeJS.ProcessEnv;

const validPayload = {
  domainName: "example.om",
  ctaSource: "hero-domain-cta",
  pageUrl: "https://chatbot.om/",
  honeypot: "",
  metadata: {
    path: "/",
  },
};

test("valid payload sends email", async () => {
  let sentMailSubject = "";
  let sentMailText = "";

  const result = await handleInstallRequestEmail(validPayload, {
    env: validEnv,
    now: new Date("2026-05-28T06:00:00.000Z"),
    sendMail: async (mail) => {
      sentMailSubject = mail.subject;
      sentMailText = mail.text;
    },
  });

  assert.equal(result.status, 200);
  assert.equal(result.body.ok, true);
  assert.equal(sentMailSubject, "example.om wants to install chatbot");
  assert.match(sentMailText, /example\.om wants to install chatbot\./);
});

test("plain domains are normalized to https", async () => {
  let sentMailText = "";

  const result = await handleInstallRequestEmail(
    {
      ...validPayload,
      domainName: "www.retailer.om/path",
    },
    {
      env: validEnv,
      sendMail: async (mail) => {
        sentMailText = mail.text;
      },
    },
  );

  assert.equal(result.status, 200);
  assert.match(sentMailText, /Website: https:\/\/www\.retailer\.om\/path/);
  assert.match(sentMailText, /Domain: retailer\.om/);
});

test("invalid website returns 400", async () => {
  const result = await handleInstallRequestEmail(
    {
      ...validPayload,
      domainName: "not a website",
    },
    {
      env: validEnv,
      sendMail: async () => undefined,
    },
  );

  assert.equal(result.status, 400);
  assert.equal(result.body.error, "Please enter a valid website domain.");
});

test("honeypot filled returns 400", async () => {
  const result = await handleInstallRequestEmail(
    {
      ...validPayload,
      honeypot: "bot-data",
    },
    {
      env: validEnv,
      sendMail: async () => undefined,
    },
  );

  assert.equal(result.status, 400);
  assert.equal(result.body.error, "Spam check failed.");
});

test("smtp failure returns 500", async () => {
  const originalConsoleError = console.error;
  console.error = () => undefined;

  try {
    const result = await handleInstallRequestEmail(validPayload, {
      env: validEnv,
      sendMail: async () => {
        throw new Error("SMTP unavailable");
      },
    });

    assert.equal(result.status, 500);
    assert.equal(result.body.error, "Failed to send install request.");
  } finally {
    console.error = originalConsoleError;
  }
});
