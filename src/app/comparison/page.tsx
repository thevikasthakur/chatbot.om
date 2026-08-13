import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { ArrowUpRight, Check, Minus } from "lucide-react";
import { CtaBanner, Faq } from "@/components/sections";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Chatbot.OM or AI Customer Care",
  description:
    "Two Omani products, one platform family. Chatbot.OM covers chat channels affordably. AI Customer Care adds the phone line, outbound calling, and a dedicated email agent.",
  ...pageMeta("/comparison/"),
};

type Row = { label: string; chat: boolean | string; suite: boolean | string; note?: string };

const rows: Row[] = [
  { label: "Website chat", chat: true, suite: true },
  { label: "WhatsApp conversations", chat: true, suite: true },
  { label: "WhatsApp voice notes", chat: true, suite: true },
  {
    label: "Email replies",
    chat: "Replies on the thread",
    suite: "Full inbox agent",
    note: "Chatbot.OM answers on an email thread as another chat channel. Triaging, organising, and drafting across a whole inbox is the AI Email Agent, which lives on the suite.",
  },
  {
    label: "Inbound phone calls",
    chat: false,
    suite: true,
    note: "Answering a telephone line needs a SIP trunk from Omantel or Ooredoo and a voice agent. That is the suite.",
  },
  { label: "Outbound calling campaigns", chat: false, suite: true },
  {
    label: "Outbound messages",
    chat: "WhatsApp reminders and confirmations",
    suite: "WhatsApp, SMS, email, and voice",
  },
  { label: "Automated support tickets", chat: true, suite: true },
  { label: "Smart follow-ups", chat: true, suite: true },
  { label: "Automated lead pipeline", chat: true, suite: true },
  { label: "Dashboard and reporting", chat: true, suite: true },
  { label: "Arabic and English", chat: true, suite: true },
  {
    label: "Additional languages",
    chat: "On request",
    suite: "Nine as standard",
  },
  { label: "Data hosted inside Oman", chat: true, suite: true },
  { label: "Personal Data Protection Law compliant", chat: true, suite: true },
  { label: "Self-hosted deployment", chat: true, suite: true },
  {
    label: "Typical time to live",
    chat: "About a day for the website, a few days for WhatsApp",
    suite: "About a week, mostly waiting on the SIP trunk",
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-2 text-sm">
        <Check className="h-4 w-4 shrink-0 text-lime" aria-hidden />
        <span className="sr-only">Included</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
        <Minus className="h-4 w-4 shrink-0" aria-hidden />
        <span className="sr-only">Not included</span>
      </span>
    );
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

const faqs = [
  {
    q: "Can we start on Chatbot.OM and move up later?",
    a: "Yes, and most businesses should. The two run on the same platform family and the same infrastructure inside Oman, so your knowledge base, conversation history, tickets, and leads carry across rather than being rebuilt.",
  },
  {
    q: "Why not just take the full suite from the start?",
    a: "Because answering the phone properly is a bigger commitment than answering chat. It needs a telecom line, call flows, and usually a change to how your team works. If most of your enquiries already arrive by WhatsApp and your website, chat is where the return is, and it is live in a day.",
  },
  {
    q: "Is Chatbot.OM a cut-down version?",
    a: "No. Within chat it is the full thing: the same knowledge grounding, guardrails, ticketing, follow-ups, lead pipeline, and reporting. What differs is the channels it covers, not the depth of what it does on them.",
  },
  {
    q: "We get a lot of calls. Does that rule Chatbot.OM out?",
    a: "Not necessarily. A good chat presence often reduces call volume, because the questions people ring about get answered before they pick up the phone. If the calls are still the bulk of your work after that, the suite is the right answer.",
  },
  {
    q: "Do both keep our data in Oman?",
    a: "Yes. Both store and process customer conversations on servers inside the Sultanate, in line with the Personal Data Protection Law (Royal Decree 6/2022), and both offer a self-hosted option for organisations with their own requirements.",
  },
];

export default function ComparisonPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Comparison</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            Two Omani products.{" "}
            <span className="text-lime">One of them is yours.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Chatbot.OM and {site.sister.name} come from the same team, run on the
            same platform family, and keep data in the same place. The difference
            is how many doors you need answered.
          </p>
        </div>
      </section>

      {/* ── The two in a sentence ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-lime bg-ink-2 p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-lime">
                You are here
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl">Chatbot.OM</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Chat, done properly and affordably. Your website and your
                WhatsApp number answered around the clock, with tickets,
                follow-ups, leads, and reporting behind them. Live in about a
                day, and within reach of a business with four staff.
              </p>
              <p className="mt-5 text-sm font-medium">
                Right if most of your enquiries already arrive as messages.
              </p>
            </div>
            <div className="border border-border bg-ink-2 p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                The full suite
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl">{site.sister.name}</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Everything above, plus the telephone. Inbound calls answered by
                a voice agent in Omani Arabic, outbound calling campaigns, and a
                dedicated agent working your email inbox. Built for organisations
                running an IVR and a floor of human agents.
              </p>
              <a
                href={site.sister.url}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:underline underline-offset-4"
              >
                Visit {site.sister.domain}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Table ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            Line by line, <span className="accent-italic">no asterisks</span>.
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-[rgba(212,255,79,0.32)]">
                  <th scope="col" className="py-4 pr-6 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    Capability
                  </th>
                  <th scope="col" className="py-4 pr-6 font-mono text-[10px] uppercase tracking-[0.14em] text-lime">
                    Chatbot.OM
                  </th>
                  <th scope="col" className="py-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {site.sister.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-b border-border align-top">
                    <th scope="row" className="py-4 pr-6 text-sm font-medium">
                      {r.label}
                      {r.note && (
                        <span className="mt-1.5 block max-w-md text-xs font-normal text-muted-foreground leading-relaxed">
                          {r.note}
                        </span>
                      )}
                    </th>
                    <td className="py-4 pr-6">
                      <Cell value={r.chat} />
                    </td>
                    <td className="py-4">
                      <Cell value={r.suite} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Pick one ── */}
      <section className="hatch-gutters border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-4xl">
            How to choose in{" "}
            <span className="accent-italic">about a minute</span>.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="border border-border bg-ink-2 p-7">
              <h3 className="text-lg font-semibold">Take Chatbot.OM if</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Most enquiries reach you on WhatsApp or through your website",
                  "Your phone rings, but nobody is drowning in calls",
                  "You want something live this week, not this quarter",
                  "Budget matters and the team is small",
                  "You need tickets and leads more than you need telephony",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-border bg-ink-2 p-7">
              <h3 className="text-lg font-semibold">Take the full suite if</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Your phone line is the main way customers reach you",
                  "You run an IVR and a floor of human agents",
                  "You need outbound calling, not just outbound messages",
                  "Your email inbox needs an agent of its own",
                  "You are procuring at enterprise scale and can wait for a SIP trunk",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                    {l}
                  </li>
                ))}
              </ul>
              <a
                href={site.sister.url}
                className="mt-6 inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                Go to {site.sister.domain} <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            If you are genuinely unsure,{" "}
            <Link href="/contact/" className="text-lime hover:underline underline-offset-4">
              tell us where your enquiries come from
            </Link>{" "}
            and we will say which one fits. We would rather put you on the
            cheaper product that works than the bigger one that does not.
          </p>
        </div>
      </section>

      <Faq items={faqs} sub="What people ask when they are deciding between the two." />
      <CtaBanner />
    </>
  );
}
