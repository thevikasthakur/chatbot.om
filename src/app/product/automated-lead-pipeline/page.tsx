import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Filter,
  Layers,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import { CtaBanner, Faq } from "@/components/sections";
import LeadEnrichment from "@/components/LeadEnrichment";
import { EnquiryFunnel } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Automated Lead Pipeline",
  description:
    "Most chat is not support, it is enquiry. chatbot.om qualifies the serious ones, enriches them from your own records, and hands each lead to a named owner who keeps it to the sale.",
  alternates: { canonical: "/product/automated-lead-pipeline/" },
};

const steps = [
  {
    icon: Filter,
    title: "Qualify",
    desc: "Most chats are browsing. The chatbot asks the two or three questions that separate a real buyer from a price check, without making the customer feel processed.",
  },
  {
    icon: Layers,
    title: "Enrich",
    desc: "What the customer said is only half the record. The rest comes from your own data: stock, past orders, indicative value, segment, which branch covers the area.",
  },
  {
    icon: UserPlus,
    title: "Assign",
    desc: "The lead lands with a named person, not a shared inbox. They get the full conversation, the enriched record, and a first action with a time on it.",
  },
];

const board = [
  {
    column: "New",
    tickets: [
      { name: "Al Mouj villa", meta: "Majlis set · OMR 1.4k · Website" },
      { name: "Nizwa restaurant", meta: "Extraction · OMR 3.8k · WhatsApp" },
    ],
  },
  {
    column: "Contacted",
    tickets: [
      { name: "Barka school", meta: "120 laptops · OMR 25k · Fatma" },
      { name: "Sohar workshop", meta: "Compressor · OMR 900 · Yousuf" },
    ],
  },
  {
    column: "Quoted",
    tickets: [{ name: "Qurum clinic", meta: "Reception fit-out · OMR 6.2k · Nasser" }],
  },
  {
    column: "Won",
    tickets: [{ name: "Seeb logistics", meta: "Shelving · OMR 11k · Closed" }],
  },
];

const ownership = [
  {
    title: "One name, not a team inbox",
    desc: "A lead in a shared inbox belongs to nobody. Every lead here carries an owner from the moment it is created, and that owner is who the reporting asks about.",
  },
  {
    title: "Ownership survives the handover",
    desc: "If the lead moves to someone else, the whole thread moves with it: the original chat, everything attached since, and the promises already made to the customer.",
  },
  {
    title: "Aging is visible, not discovered",
    desc: "A lead that has not moved in four days is on the board in a colour nobody can miss, long before it becomes a quarterly surprise.",
  },
];

const capabilities = [
  "Enquiries qualified inside the conversation, not by a form",
  "Serious buyers separated from price checks",
  "Records enriched from your stock, pricing, and history",
  "Indicative value estimated per lead",
  "Assignment to a named owner with a first action and a deadline",
  "Pipeline stages you define, from new to won",
  "Aging leads surfaced before they go cold",
  "Follow-ups run on the customer's own channel",
  "Handover that carries the full thread",
  "Leads pushed into the CRM you already use",
  "Arabic and English conversations in one pipeline",
  "Won and lost reasons captured for reporting",
];

const faqs = [
  {
    q: "How does it know which enquiries are serious?",
    a: "By what the customer actually says. Volume, timing, location, budget, and whether they will commit to a next step. You set the bar for your own business: for a car workshop a named car and a date is enough, for a contractor it may need a site visit agreed.",
  },
  {
    q: "What does enrichment actually add?",
    a: "Facts you already hold but nobody has time to look up mid-conversation: whether the item is in stock, what this customer bought before, what a job like this normally comes to in OMR, and which of your people covers that area. It is your data, joined up.",
  },
  {
    q: "Does it replace our sales team?",
    a: "No. It does the part your sales team is worst at, which is being awake at 10pm and writing everything down. Humans still sell. They just start from a lead that is already qualified, already written up, and already theirs.",
  },
  {
    q: "Can leads go into our CRM?",
    a: "Yes. Leads can be created directly in the CRM you already use, with the enriched fields mapped to your own field names, so your team never has two places to look.",
    link: { label: "See integrations", href: "/integration/" },
  },
  {
    q: "What happens to enquiries that are not serious?",
    a: "They still get a good answer. They are logged as enquiries rather than leads, so your pipeline stays honest and your reporting still shows how much interest the business is generating.",
  },
  {
    q: "Who follows up, and when?",
    a: "The same engine that chases tickets chases deals. The owner is reminded, the customer gets the follow-up on the channel they wrote from, and nothing depends on somebody remembering.",
    link: { label: "Smart Follow-Ups", href: "/product/smart-follow-ups/" },
  },
];

export default function LeadPipelinePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="eyebrow mb-5 inline-block border border-border bg-ink-2 px-3 py-1.5">
                Automated Lead Pipeline
              </p>
              <h1 className="max-w-xl text-4xl md:text-[3.4rem] leading-[1.08]">
                Your chat window is already{" "}
                <span className="text-lime">your busiest sales channel.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Most of what arrives is enquiry, not support. The chatbot works
                out which of those enquiries are real, fills the record in from
                your own data, and gives each one to a person by name.{" "}
                <strong className="text-foreground">
                  While the customer is still interested.
                </strong>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/get-started/"
                  className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Get the chatbot <span aria-hidden>+</span>
                </Link>
                <Link
                  href="/product/dashboard-reporting/"
                  className="inline-flex h-11 items-center gap-1 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  See the reporting <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>

            {/* pipeline mock */}
            <div className="border border-line-strong bg-ink-2 p-4">
              <div className="grid gap-3 sm:grid-cols-4">
                {board.map((col) => (
                  <div key={col.column}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-lime">
                      {col.column}
                    </p>
                    <div className="mt-3 space-y-3">
                      {col.tickets.map((t) => (
                        <div key={t.name} className="border border-border bg-ink p-3">
                          <p className="text-xs font-medium leading-snug">{t.name}</p>
                          <p className="mt-2 text-[10px] text-muted-foreground">{t.meta}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Illustrative pipeline · every card started as a chat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The premise ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What is actually in your inbox</p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Ninety enquiries, <span className="accent-italic">nine buyers</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
              A business in Oman with a decent website and a WhatsApp number takes
              far more enquiries than it realises. Most are asking the price, the
              location, or the opening hours. A handful are ready to buy this
              week, and they look exactly the same in an unread inbox at eight in
              the morning.
            </p>
            <p className="mt-5 font-semibold">
              Someone has to tell them apart while the conversation is still warm.
            </p>
          </div>
          <EnquiryFunnel className="mt-12" />
        </div>
      </section>

      {/* ── Three steps ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(70% 45% at 50% 112%, rgba(212,255,79,0.35) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            Qualify, enrich,{" "}
            <span className="accent-italic">hand to a human</span>.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative border border-border bg-ink-2/95 p-8">
                <s.icon className="h-6 w-6 text-lime" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-lime md:block"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-lime">
            No form. No copy-paste. No lead sitting in a shared inbox.
          </p>
        </div>
      </section>

      <LeadEnrichment />

      {/* ── Ownership ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">Ownership, not visibility</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                A lead everyone can see is{" "}
                <span className="text-lime">a lead nobody is working.</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                Dashboards make people feel informed. Ownership makes them
                responsible. Every lead here belongs to one person from creation
                to the sale, and the record says who, since when, and what they
                promised.
              </p>
              <div className="mt-8 space-y-5">
                {ownership.map((o) => (
                  <div key={o.title} className="border-t border-line-strong pt-4">
                    <h3 className="text-base font-semibold">{o.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <Image
              src="/teasers/leads-sentiment.webp"
              alt="Lead list showing contacts with channel, intent, and sentiment scores"
              width={2160}
              height={1714}
              className="w-full border border-line-strong"
              sizes="(max-width: 768px) 92vw, 560px"
            />
          </div>
        </div>
      </section>

      {/* ── Shared engine ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow">One engine, two jobs</p>
              <h2 className="mt-4 max-w-xl text-2xl md:text-4xl">
                The same engine that chases tickets{" "}
                <span className="accent-italic">chases deals</span>.
              </h2>
              <p className="mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed">
                A quote that goes unanswered for a week and a ticket that goes
                quiet for a week are the same failure. Smart Follow-Ups handles
                both: it reminds the owner, it messages the customer on the
                channel they used, and it escalates when the promise is about to
                break. This page is about creating good leads. That one is about
                refusing to let them go stale.
              </p>
              <Link
                href="/product/smart-follow-ups/"
                className="mt-6 inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                Smart Follow-Ups <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Target, label: "Named owner per lead" },
                { icon: TrendingUp, label: "Aging surfaced early" },
                { icon: Sparkles, label: "Enriched from your data" },
                { icon: ShieldCheck, label: "Data resident in Oman" },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2.5 border border-line-strong bg-ink-2 px-4 py-3 text-xs font-mono uppercase tracking-[0.08em] text-muted-foreground"
                >
                  <b.icon className="h-4 w-4 shrink-0 text-lime" aria-hidden />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-3xl md:text-5xl">
              From first message{" "}
              <span className="accent-italic">to closed won</span>.
            </h2>
            <Target className="h-10 w-10 text-lime" aria-hidden />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2.5 border border-border bg-ink-2 px-4 py-3.5 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBanner />
    </>
  );
}
