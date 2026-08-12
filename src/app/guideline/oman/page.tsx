import type { Metadata } from "next";
import Link from "next/link";
import { Check, FileCheck2, Landmark, Lock, ShieldCheck } from "lucide-react";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "AI Chat and Customer Messaging Rules in Oman",
  description:
    "A practical guide to Oman's Personal Data Protection Law, WhatsApp Business Platform rules, and the etiquette of automated customer messaging in the Sultanate. General guidance, not legal advice.",
  alternates: { canonical: "/guideline/oman/" },
};

const glance = [
  { icon: Landmark, label: "Royal Decree 6/2022, in force Feb 2023" },
  { icon: FileCheck2, label: "Executive Regulations, MD 34/2024" },
  { icon: ShieldCheck, label: "Regulator: MTCIT" },
  { icon: Lock, label: "Consent-centric processing" },
];

const sections = [
  {
    h: "The Personal Data Protection Law at a glance",
    p: [
      "Oman's Personal Data Protection Law was issued by Royal Decree 6/2022 in February 2022 and entered into force on 13 February 2023, replacing the older data provisions of the Electronic Transactions Law. It is supervised by the Ministry of Transport, Communications and Information Technology, which issued the law's Executive Regulations by Ministerial Decision 34/2024 with a transition period for existing controllers.",
      "The law is consent-centric. As a general rule, personal data may be processed only with the express consent of the data subject unless another lawful basis in the law applies, and consent must be informed and evidenced.",
    ],
  },
  {
    h: "A chat transcript is personal data",
    p: [
      "It is easy to think of a chat window as less serious than a recorded phone call. Legally it is not. From the first message you are processing personal data, and a chat transcript usually contains more identifiable detail than a call, because customers paste order numbers, addresses, and photographs into it without thinking.",
    ],
    bullets: [
      "The message content itself, in any language",
      "Phone number, name, and email attached to the conversation",
      "Attachments: photographs of documents, invoices, and premises",
      "Voice notes and their transcripts",
      "Derived data: sentiment scores, intent labels, lead scoring",
    ],
  },
  {
    h: "Sensitive categories need a permit",
    p: [
      "Processing of sensitive categories, including health data, genetic and biometric data, and data about criminal convictions, requires a permit from the ministry. This is a live issue for clinics and insurers running a chatbot, because patients volunteer symptoms in a chat window whether you asked for them or not.",
      "The practical answer is to design the conversation so sensitive data is not solicited, to escalate those conversations to a human immediately, and to make sure your retention settings do not keep what you did not need.",
    ],
  },
  {
    h: "Say that it is an AI",
    p: [
      "There is no Omani statute that specifically mandates disclosing an automated agent in a chat window, but there are good reasons to do it anyway. It is consistent with the honest-dealing expectations of consumer protection law, it is what customers overwhelmingly say they prefer, and it removes any argument later about what they believed they were agreeing to.",
      "In practice, disclosure costs nothing. Customers who are told plainly that they are talking to an assistant, and that a person is available, are measurably more patient with the conversation, not less.",
    ],
    bullets: [
      "Open with a short, plain statement that this is an automated assistant",
      "Make the route to a human obvious at any point",
      "Confirm the same thing honestly if the customer asks outright",
    ],
  },
  {
    h: "Rights your chat flows have to honour",
    p: [
      "Customers in Oman hold enforceable rights over their data, and a chatbot that cannot act on them is a liability rather than an asset. Your conversation records, tickets, and lead data all need to be reachable when a request arrives.",
    ],
    bullets: [
      "Access: a copy of the personal data you hold about them",
      "Correction: fixing inaccurate or outdated records",
      "Erasure: deletion when processing is no longer justified",
      "Transfer: receiving their data in a usable form",
      "Withdrawal: revoking consent as easily as it was given",
    ],
  },
  {
    h: "Breaches, transfers, and penalties",
    p: [
      "Controllers must notify the ministry, and in qualifying cases the affected individuals, of personal data breaches within the timeframes set by the Executive Regulations. Transfers of personal data outside Oman are permitted only under the law's conditions.",
      "That last point is why data residency is the simplest architectural decision you can make. If processing never leaves the Sultanate, the transfer question never arises. Violations carry administrative fines that can reach into the hundreds of thousands of rials, alongside possible criminal liability for the most serious offences.",
    ],
  },
  {
    h: "The WhatsApp Business Platform has its own rules",
    p: [
      "Separately from Omani law, WhatsApp imposes its own conditions on business messaging, and breaking them gets your number restricted regardless of whether you were compliant with the statute. Businesses may reply freely for 24 hours after a customer's last message. Outside that window, only templates registered and approved in advance may be sent.",
      "Templates are reviewed, and promotional content sent to people who did not opt in is the fastest route to losing the channel. Reminders, confirmations, and service updates to existing customers are exactly what the platform is designed for.",
    ],
    bullets: [
      "Free-form replies only inside the 24-hour service window",
      "Pre-approved templates outside it, no exceptions",
      "Opt-in recorded before any outbound message",
      "Opt-out honoured immediately and permanently",
      "No messaging to purchased or scraped lists",
    ],
  },
  {
    h: "The etiquette layer: how Oman expects to be messaged",
    p: [
      "Beyond the statutes and the platform rules, there is local custom. A greeting matters, and an abrupt opener in a chat window reads as rudely in Arabic as it would in person. Automated messages should hold outside working hours unless genuinely urgent, and campaign pacing should respect Friday prayers, Ramadan daytime fasting, and Eid.",
      "An assistant that observes these norms in Omani Arabic is not merely compliant. It is representing your business the way a good employee would.",
    ],
  },
  {
    h: "How chatbot.om implements all of this",
    p: [
      "chatbot.om was built in Oman, for these rules. Disclosure opens every conversation, consent is captured with timestamps, opt-outs propagate across channels immediately, and messaging windows respect Omani working hours and the seasonal calendar. Sensitive topics are configured to escalate rather than to be answered.",
      "All conversations, transcripts, attachments, and derived data are processed and stored on infrastructure inside the Sultanate, so cross-border transfer questions simply do not arise. Organisations with stricter requirements can run the whole thing on their own infrastructure instead.",
    ],
  },
];

export default function OmanGuidePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Oman AI Chat Guide</p>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            The rules for automated customer messaging{" "}
            <span className="accent-italic">in Oman</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            What the Personal Data Protection Law, the WhatsApp Business
            Platform, and Omani etiquette mean for a chatbot on your website and
            your business number. Written from Muscat, kept current, and offered
            as general guidance rather than legal advice: confirm specifics with
            qualified Omani counsel.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {glance.map((g) => (
              <span
                key={g.label}
                className="inline-flex items-center gap-2.5 border border-line-strong bg-ink-2 px-4 py-3 text-xs font-mono uppercase tracking-[0.08em] text-muted-foreground"
              >
                <g.icon className="h-4 w-4 shrink-0 text-lime" aria-hidden />
                {g.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose-chat mx-auto">
            {sections.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Checklist ── */}
      <section className="hatch-gutters border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Before you switch anything on</p>
          <h2 className="mt-4 text-2xl md:text-4xl">
            A short list worth{" "}
            <span className="accent-italic">going through once</span>.
          </h2>
          <ul className="mt-8 space-y-3">
            {[
              "Decide what your chatbot is allowed to say, and write it down",
              "Add a plain disclosure at the start of every conversation",
              "Make the route to a human obvious and always available",
              "Configure sensitive topics to escalate rather than answer",
              "Record consent with a timestamp before any outbound message",
              "Set a retention period and make sure deletion actually happens",
              "Confirm where your conversation data is stored, in writing",
              "Have a plan for an access or erasure request before you get one",
            ].map((l) => (
              <li key={l} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            If you would rather not work through this alone,{" "}
            <Link href="/contact/" className="text-lime hover:underline underline-offset-4">
              talk to us
            </Link>
            . Most of it is configured once and then simply holds.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
