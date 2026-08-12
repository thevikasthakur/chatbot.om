import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  Clock,
  Download,
  Gauge,
  ListChecks,
  PieChart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { CtaBanner, Faq, StatStrip } from "@/components/sections";
import { DrillThrough } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Dashboard & Reporting",
  description:
    "Live reporting on every chat: what customers asked, how they felt, which tickets closed on time, and which leads are aging. Built for owners who want the number, not a data project.",
  alternates: { canonical: "/product/dashboard-reporting/" },
};

const stats = [
  { v: "Live", l: "Updated as chats happen" },
  { v: "Per channel", l: "Website, WhatsApp, email" },
  { v: "Arabic + English", l: "Counted in one view" },
  { v: "Export", l: "Any view, any period" },
];

const panels = [
  {
    src: "/teasers/sentiment-trends.webp",
    width: 1920,
    height: 1134,
    alt: "Line chart showing customer sentiment trending over several weeks",
    icon: Gauge,
    eyebrow: "Read the room at scale",
    title: "Mood moves before revenue does",
    body: "Customer sentiment is a leading indicator. Revenue is a lagging one. When the line dips on a Tuesday, something broke on Monday, and you see it in time to ask what. Not in next quarter's churn report.",
  },
  {
    src: "/teasers/sentiment-distribution.webp",
    width: 1760,
    height: 1330,
    alt: "Donut chart splitting conversations into positive, neutral, and negative",
    icon: PieChart,
    eyebrow: "The scoreboard",
    title: "The share of conversations that end well",
    body: "One number for how the week actually went, with the negative slice broken out and clickable. Every unhappy conversation is one you can open, read, and answer, rather than a percentage you argue about.",
  },
  {
    src: "/teasers/tasks-completion.webp",
    width: 1280,
    height: 2498,
    alt: "Task completion view showing which chatbot jobs succeeded and which did not",
    icon: ListChecks,
    eyebrow: "Accountability, not vibes",
    title: "Which jobs the chatbot nails, and which it does not",
    body: "If you cannot measure it, you cannot fix it. See where the chatbot answered cleanly, where it handed over, and where it should have. Most businesses guess at this. You get to operate on it.",
  },
];

const reports = [
  {
    icon: BarChart3,
    title: "Conversation volume",
    desc: "By day, hour, and channel, so you can see the evening peak nobody was staffing.",
  },
  {
    icon: Activity,
    title: "What people ask about",
    desc: "The topics that come up most, ranked, with the exact wording customers used.",
  },
  {
    icon: Clock,
    title: "Ticket ages and closures",
    desc: "How long issues stay open, how many missed their promised time, and why.",
  },
  {
    icon: TrendingUp,
    title: "Lead and pipeline health",
    desc: "New leads, owners, stage movement, and which ones have not been touched in days.",
  },
  {
    icon: Gauge,
    title: "Handover rate",
    desc: "How often the chatbot passed to a human, and whether that number is going the right way.",
  },
  {
    icon: Download,
    title: "Exports and scheduled emails",
    desc: "Any view as a file, or a weekly summary that lands in your inbox on Sunday morning.",
  },
];

const capabilities = [
  "Live view of conversations across every channel",
  "Sentiment scored per conversation, trended over time",
  "Topic clustering built from what customers actually wrote",
  "Ticket volumes, ages, and on-time closure rates",
  "Lead counts, owners, stage movement, and aging",
  "Handover rate and the reasons behind it",
  "Peak-hour view so you can staff the evenings properly",
  "Arabic and English conversations counted together",
  "Per-agent view of who is closing and who is stuck",
  "Scheduled summaries by email",
  "Exports for any view and any period",
  "All reporting data stored inside Oman",
];

const faqs = [
  {
    q: "Do we need someone technical to use this?",
    a: "No. It opens on a summary that answers the three questions most owners have: how many people talked to us, how did they feel, and what is still open. Everything else is one click deeper, and nothing needs to be built first.",
  },
  {
    q: "How is sentiment measured?",
    a: "Each conversation is scored on how it actually ended, not on individual words. A customer who starts annoyed and leaves satisfied counts as a good conversation, which is the only reading that is useful to you.",
  },
  {
    q: "Can we see the actual conversations?",
    a: "Yes. Every number in the dashboard is clickable down to the conversations behind it, with the full transcript in the language the customer used. No metric is a dead end.",
  },
  {
    q: "Does Arabic get counted properly?",
    a: "Yes. Arabic and English conversations are analysed with the same depth and reported in the same view, so your totals are not quietly missing half your customers.",
  },
  {
    q: "Where is the reporting data held?",
    a: "Inside Oman, on the same infrastructure as the conversations themselves, in line with the Personal Data Protection Law (Royal Decree 6/2022). Analytics is not shipped to a third-party service abroad.",
  },
];

export default function DashboardReportingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">Dashboard &amp; Reporting</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
              Chats become{" "}
              <span className="text-lime">operating intelligence.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Every visitor is a signal. Names, channels, topics, sentiment
              scored to the decimal. The machine does the boring work so the
              people can do the closing.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/get-started/"
                className="inline-flex h-11 items-center gap-2 bg-lime px-6 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                Get the chatbot <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-5xl border border-line-strong bg-ink-2 p-2">
            <Image
              src="/teasers/leads-sentiment.webp"
              alt="Dashboard listing recent conversations with channel, intent, and sentiment score"
              width={2160}
              height={1714}
              className="w-full"
              sizes="(max-width: 1024px) 92vw, 1024px"
              priority
            />
          </div>
        </div>
      </section>

      <StatStrip stats={stats} />

      {/* ── Panels ── */}
      {panels.map((panel, i) => (
        <section key={panel.title} className="border-b border-border py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className={i % 2 === 0 ? "md:order-2" : undefined}>
                <p className="eyebrow">
                  <panel.icon className="mr-2 inline h-4 w-4 text-lime" aria-hidden />
                  {panel.eyebrow}
                </p>
                <h2 className="mt-4 max-w-md text-3xl md:text-4xl">{panel.title}</h2>
                <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">{panel.body}</p>
              </div>
              <div className={i % 2 === 0 ? "md:order-1" : undefined}>
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  width={panel.width}
                  height={panel.height}
                  className="w-full border border-line-strong"
                  sizes="(max-width: 768px) 92vw, 560px"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Reports ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">What you get without asking for it</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            Six reports that answer{" "}
            <span className="text-lime">the questions you actually have.</span>
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {reports.map((r) => (
              <div key={r.title} className="border-t border-line-strong pt-5">
                <r.icon className="h-5 w-5 text-lime" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{r.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-3xl md:text-5xl">
              Everything on the board,{" "}
              <span className="accent-italic">nothing in a spreadsheet</span>.
            </h2>
            <BarChart3 className="h-10 w-10 text-lime" aria-hidden />
          </div>
          <figure className="mb-12">
            <DrillThrough className="mx-auto max-w-3xl" />
            <figcaption className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              Any figure opens into the conversations behind it
            </figcaption>
          </figure>
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

      {/* ── Residency ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="max-w-xl text-2xl md:text-3xl">
              Your reporting is{" "}
              <span className="accent-italic">your customer data</span>.
            </h2>
            <span className="inline-flex items-center gap-2.5 border border-line-strong bg-ink-2 px-4 py-3 text-xs font-mono uppercase tracking-[0.08em] text-muted-foreground">
              <ShieldCheck className="h-4 w-4 shrink-0 text-lime" aria-hidden />
              Stored and processed inside Oman
            </span>
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBanner />
    </>
  );
}
