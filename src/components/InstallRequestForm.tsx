"use client";

import { FormEvent, useId, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

type InstallRequestFormProps = {
  ctaSource: string;
  compact?: boolean;
  hideIdleStatus?: boolean;
};

type FormState =
  | { kind: "idle"; message: string }
  | { kind: "submitting"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

function looksLikeWebsite(value: string): boolean {
  const trimmed = value.trim();

  if (trimmed.length < 4 || /\s/.test(trimmed)) {
    return false;
  }

  const candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const url = new URL(candidate);

    return ["http:", "https:"].includes(url.protocol) && url.hostname.includes(".");
  } catch {
    return false;
  }
}

export function InstallRequestForm({
  ctaSource,
  compact = false,
  hideIdleStatus = false,
}: InstallRequestFormProps) {
  const inputId = useId();
  const [domainName, setDomainName] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<FormState>({
    kind: "idle",
    message: compact
      ? "Enter your website. We will inspect it and start the install request."
      : "Enter your website. One click starts the install request.",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedDomain = domainName.trim();

    if (!looksLikeWebsite(trimmedDomain)) {
      setState({
        kind: "error",
        message: "Enter a valid website, like brand.om or https://brand.com.",
      });
      return;
    }

    setState({
      kind: "submitting",
      message: "Creating the request.",
    });

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL ?? "";
      const response = await fetch(`${apiUrl}/api/install-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          domainName: trimmedDomain,
          ctaSource,
          pageUrl: window.location.href,
          honeypot,
          metadata: {
            referrer: document.referrer || "direct",
            userAgent: navigator.userAgent,
          },
        }),
      });

      const body = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(body?.error || "The request could not be sent.");
      }

      setState({
        kind: "success",
        message:
          "Request sent. We will review the site and handle the manual install steps.",
      });
      setDomainName("");
    } catch (error) {
      setState({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "The request could not be sent. Try again in a moment.",
      });
    }
  }

  const isSubmitting = state.kind === "submitting";
  const statusIcon =
    state.kind === "success" ? (
      <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-emerald-600" />
    ) : state.kind === "error" ? (
      <AlertCircle aria-hidden="true" className="h-4 w-4 text-signal" />
    ) : null;
  const shouldShowStatus = !hideIdleStatus || state.kind !== "idle";

  return (
    <form
      className={compact ? "install-form install-form-compact" : "install-form"}
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor={inputId}>
        Website domain
      </label>
      <div className="install-form-shell">
        <input
          id={inputId}
          className="install-input"
          inputMode="url"
          name="domainName"
          onChange={(event) => setDomainName(event.target.value)}
          placeholder="yourcompany.om"
          type="text"
          value={domainName}
        />
        <button className="install-button" disabled={isSubmitting} type="submit">
          {isSubmitting ? (
            <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" />
          ) : (
            <Send aria-hidden="true" className="h-5 w-5" />
          )}
          <span>{compact ? "Start" : "Build my chatbot"}</span>
        </button>
      </div>
      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        name="companyWebsite"
        onChange={(event) => setHoneypot(event.target.value)}
        tabIndex={-1}
        type="text"
        value={honeypot}
      />
      {shouldShowStatus ? (
        <p
          aria-live="polite"
          className={
            state.kind === "error"
              ? "install-status text-signal"
              : state.kind === "success"
                ? "install-status text-emerald-700"
                : "install-status text-white/70"
          }
        >
          {statusIcon}
          <span>{state.message}</span>
        </p>
      ) : null}
    </form>
  );
}
