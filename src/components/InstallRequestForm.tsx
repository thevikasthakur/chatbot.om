"use client";

import { FormEvent, useCallback, useEffect, useId, useRef, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send, X } from "lucide-react";

type InstallRequestFormProps = {
  ctaSource: string;
  compact?: boolean;
  hideIdleStatus?: boolean;
};

type Toast = {
  id: number;
  kind: "success" | "error";
  message: string;
};

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

let toastCounter = 0;

function ToastContainer({
  toasts,
  onDismiss,
}: {
  toasts: Toast[];
  onDismiss: (id: number) => void;
}) {
  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((t) => (
        <ToastItem key={t.id} toast={t} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

function ToastItem({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: (id: number) => void;
}) {
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const dismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => onDismiss(toast.id), 300);
  }, [onDismiss, toast.id]);

  useEffect(() => {
    timerRef.current = setTimeout(dismiss, 5000);
    return () => clearTimeout(timerRef.current);
  }, [dismiss]);

  return (
    <div
      className={`toast toast-${toast.kind}${exiting ? " toast-exit" : ""}`}
    >
      {toast.kind === "success" ? (
        <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
      ) : (
        <AlertCircle aria-hidden="true" className="h-4 w-4" />
      )}
      <span className="toast-msg">{toast.message}</span>
      <button
        className="toast-close"
        onClick={dismiss}
        aria-label="Dismiss"
        type="button"
      >
        <X aria-hidden="true" className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export function InstallRequestForm({
  ctaSource,
  compact = false,
  hideIdleStatus = false,
}: InstallRequestFormProps) {
  const inputId = useId();
  const [domainName, setDomainName] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const idleMessage = compact
    ? "Enter your website. We will inspect it and start the install request."
    : "Enter your website. One click starts the install request.";

  function pushToast(kind: "success" | "error", message: string) {
    const id = ++toastCounter;
    setToasts((prev) => [...prev, { id, kind, message }]);
  }

  function dismissToast(id: number) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedDomain = domainName.trim();

    if (!looksLikeWebsite(trimmedDomain)) {
      pushToast("error", "Enter a valid website, like brand.om or https://brand.com.");
      return;
    }

    setSubmitting(true);

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

      pushToast(
        "success",
        "Request sent. We will review the site and handle the install.",
      );
      setDomainName("");
    } catch (error) {
      pushToast(
        "error",
        error instanceof Error
          ? error.message
          : "The request could not be sent. Try again in a moment.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
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
          <button className="install-button" disabled={submitting} type="submit">
            {submitting ? (
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
        {!hideIdleStatus && (
          <p aria-live="polite" className="install-status text-white/70">
            <span>{idleMessage}</span>
          </p>
        )}
      </form>
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </>
  );
}
