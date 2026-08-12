import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { features } from "@/data/features";
import { CtaBanner, StatStrip } from "@/components/sections";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything chatbot.om does: website chat, WhatsApp, voice notes, Arabic and English, knowledge grounding, handover, booking, sentiment, reporting, and an API.",
  alternates: { canonical: "/features/" },
};

const stats = [
  { v: "Seconds", l: "To the first reply" },
  { v: "3", l: "Channels, one memory" },
  { v: "Arabic + English", l: "In one conversation" },
  { v: "100%", l: "Data resident in Oman" },
];

const channels = [
  { icon: Globe2, label: "Website chat" },
  { icon: MessageSquare, label: "WhatsApp" },
  { icon: Mail, label: "Email" },
];

const bySlug = Object.fromEntries(features.map((f) => [f.slug, f]));

const pillars: {
  eyebrow: string;
  title: string;
  accent: string;
  sub: string;
  slugs: string[];
  extra?: { label: string; href: string; desc: string };
}[] = [
  {
    eyebrow: "Where it answers",
    title: "Three doors,",
    accent: "one conversation.",
    sub: "The same chatbot, with the same memory, wherever your customer decides to write from.",
    slugs: ["website-chat-widget", "whatsapp-business-channel", "voice-note-understanding", "conversation-memory"],
  },
  {
    eyebrow: "How it answers",
    title: "Grounded in your business,",
    accent: "honest about the edges.",
    sub: "Every reply traces back to something you published, in the language the customer used, inside the limits you set.",
    slugs: ["knowledge-base", "arabic-english-conversations", "guardrails-and-escalation-rules", "human-handover"],
  },
  {
    eyebrow: "What it produces",
    title: "Work that lands with",
    accent: "a person by name.",
    sub: "Bookings, tickets, and leads created from the conversation, then chased until they finish.",
    slugs: ["appointment-booking"],
    extra: {
      label: "Tickets, follow-ups, and leads",
      href: "/product/",
      desc: "The three modules that turn a conversation into work somebody owns.",
    },
  },
  {
    eyebrow: "What you see",
    title: "Numbers you can",
    accent: "actually open.",
    sub: "Sentiment, volumes, and topics, plus the API for wiring all of it into what you already run.",
    slugs: ["sentiment-analysis", "chat-analytics-dashboard", "rest-apis-and-webhooks"],
    extra: {
      label: "16 integrations",
      href: "/integration/",
      desc: "Calendars, CRMs, store platforms, and automation tools, connected without development work.",
    },
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Features</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            <span className="text-lime">Everything a small team needs.</span>
            <br />
            Nothing it has to build.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
            A chatbot that answers properly is the easy half. These are the parts
            that make it worth having on a Tuesday afternoon in month four.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/get-started/"
              className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              Get the chatbot <span aria-hidden>+</span>
            </Link>
          </div>
        </div>
      </section>

      <StatStrip stats={stats} />

      {/* ── Channels ── */}
      <section className="border-b border-border py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Answer</p>
              <h2 className="mt-3 max-w-xl text-3xl md:text-4xl">
                Three channels. <span className="text-lime">One memory.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              Customers are recognised across channels and across visits, so a
              question asked on your website can be finished on WhatsApp without
              anyone repeating themselves.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-x-10 gap-y-8">
            {channels.map((c) => (
              <div key={c.label} className="border-t border-line-strong pt-5 text-center">
                <c.icon className="mx-auto h-6 w-6 text-lime" aria-hidden />
                <p className="mt-3 text-sm font-medium">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pillars ── */}
      {pillars.map((pillar) => (
        <section key={pillar.eyebrow} className="border-b border-border py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">{pillar.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl text-3xl md:text-5xl">
              {pillar.title} <span className="text-lime">{pillar.accent}</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">{pillar.sub}</p>
            <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {pillar.slugs.map((slug) => {
                const f = bySlug[slug];
                if (!f) return null;
                return (
                  <Link
                    key={slug}
                    href={`/features/${slug}/`}
                    className="group border-t border-line-strong pt-5"
                  >
                    <h3 className="text-base font-semibold group-hover:text-lime transition-colors">
                      {f.name}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                      {f.short}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-lime">
                      Learn more <ArrowRight className="h-3 w-3" aria-hidden />
                    </span>
                  </Link>
                );
              })}
              {pillar.extra && (
                <Link href={pillar.extra.href} className="group border-t border-lime/50 pt-5">
                  <h3 className="text-base font-semibold text-lime">{pillar.extra.label}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {pillar.extra.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-lime">
                    Explore <ArrowRight className="h-3 w-3" aria-hidden />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ── Compliance strip ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <h2 className="max-w-xl text-2xl md:text-4xl">
              And underneath all of it:{" "}
              <span className="accent-italic">Omani data residency</span>, audit
              trails, and the Personal Data Protection Law, built in.
            </h2>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/guideline/oman/"
                className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                <ShieldCheck className="h-4 w-4 text-lime" aria-hidden /> Read the Oman guide
              </Link>
              <Link
                href="/self-hosted/"
                className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                Self-hosted deployment <ArrowRight className="h-4 w-4 text-lime" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
