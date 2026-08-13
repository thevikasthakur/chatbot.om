import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { AlarmClock, ArrowRight, Check, ClipboardList, Ticket, Users } from "lucide-react";
import { CtaBanner, Faq } from "@/components/sections";
import {
  RouteOwner,
  SpotIssue,
  TeamLoad,
  TicketAnatomy,
  WriteUp,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Automated Support Tickets",
  description:
    "Tickets raised straight out of the chat: summarised, graded, and routed to the person who owns them, in Arabic or English, with all data resident in Oman.",
  ...pageMeta("/product/automated-support-tickets/"),
};

const handsFree = [
  {
    art: SpotIssue,
    title: "Spotted mid-conversation",
    desc: "Chatbot.OM recognises a support issue while the customer is still typing: a double charge, a delivery that never arrived, an installation that failed. Nobody is asked to fill anything in.",
  },
  {
    art: WriteUp,
    title: "Written up, graded, categorised",
    desc: "A clear summary in English or Arabic, the full transcript attached in whichever language the customer used, and a severity taken from what was actually said.",
  },
  {
    art: RouteOwner,
    title: "Handed to the owner",
    desc: "Billing to accounts, faults to the technical team, escalations to whoever is on duty, each one carrying its due date and its chase reminders.",
  },
];

const board = [
  {
    column: "Open",
    tone: "text-lime",
    tickets: [
      { id: "CB-4821", title: "Order arrived with two items missing", meta: "Website chat · Arabic · High" },
      { id: "CB-4824", title: "Cannot log in to the customer portal", meta: "WhatsApp · English · Normal" },
    ],
  },
  {
    column: "In progress",
    tone: "text-muted-foreground",
    tickets: [
      { id: "CB-4816", title: "Air conditioning service booked twice", meta: "WhatsApp · Arabic · Owner: Salim" },
      { id: "CB-4809", title: "Invoice shows last month's rate", meta: "Email · English · Owner: Maha" },
    ],
  },
  {
    column: "Resolved",
    tone: "text-muted-foreground",
    tickets: [
      { id: "CB-4798", title: "Wrong delivery address on file", meta: "Website chat · Arabic · Closed in 3h" },
      { id: "CB-4791", title: "Refund not yet received", meta: "WhatsApp · English · Closed in 2d" },
    ],
  },
];

const capabilities = [
  "Tickets raised from website chat, WhatsApp, and email",
  "Summaries generated in English or Arabic",
  "Routing to the right person by category",
  "Ticket categories that match how you actually work",
  "Status tracked from open to resolved",
  "Priority set from urgency and sentiment",
  "Due dates and reminders that chase themselves",
  "Assignment with a view of who is already loaded",
  "Notes and a full activity log on every ticket",
  "Tickets linked to the customer record in your CRM",
  "An intake form for walk-in and web requests",
  "Volumes, ages, and resolution times in reporting",
];

const ticketFaqs = [
  {
    q: "Do customers have to fill in a form?",
    a: "No. The customer describes the problem in their own words, in the chat they were already in, and the record is built from that. The paperwork happens on our side rather than theirs.",
  },
  {
    q: "Which channels create tickets?",
    a: "Website chat, WhatsApp, and email, plus an intake form when you want one. Everything lands in one queue under one numbering scheme, so nothing is tracked in two places.",
  },
  {
    q: "Can the tickets be in Arabic?",
    a: "Yes. Summaries can be produced in Arabic or English no matter which language the conversation happened in, and the original transcript is always attached so nothing is lost in the write-up.",
  },
  {
    q: "How does routing work?",
    a: "You define the categories and their owners once: billing to accounts, maintenance to operations. The chatbot classifies each issue and assigns it, and anything ambiguous goes to a fallback owner rather than sitting unassigned.",
  },
  {
    q: "Does it work with the helpdesk we already use?",
    a: "It can run ticketing end to end, or push tickets into your existing helpdesk through our integrations. Small teams usually start with ours because there is nothing to buy or administer.",
    link: { label: "See integrations", href: "/integration/" },
  },
  {
    q: "What stops a ticket from going quiet?",
    a: "Smart Follow-Ups. Once a ticket has an owner, it chases that owner on the schedule you set and keeps the customer informed, including when the work is going to take longer than first promised.",
    link: { label: "Smart Follow-Ups", href: "/product/smart-follow-ups/" },
  },
];

export default function TicketsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="eyebrow mb-5 inline-block border border-border bg-ink-2 px-3 py-1.5">
                Automated Support Tickets
              </p>
              <h1 className="max-w-xl text-4xl md:text-[3.4rem] leading-[1.08]">
                <span className="text-lime">Ticketing without the typing.</span>{" "}
                Raised, ranked, and routed out of the chat itself.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                The customer has already explained the whole problem. The chatbot
                turns that into a proper record, grades how urgent it is, and
                hands it to whoever owns it.{" "}
                <strong className="text-foreground">
                  Before they close the tab.
                </strong>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/get-started/"
                  className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Get Chatbot.OM <span aria-hidden>+</span>
                </Link>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {[
                  { v: "3", l: "Channels into one queue" },
                  { v: "0", l: "Forms for the customer" },
                  { v: "Same day", l: "Live on chat and email" },
                ].map((m) => (
                  <div key={m.l}>
                    <p className="font-display text-2xl md:text-3xl font-medium tracking-tight">
                      {m.v}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {m.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* board mock */}
            <div className="border border-line-strong bg-ink-2 p-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {board.map((col) => (
                  <div key={col.column}>
                    <p
                      className={`font-mono text-[10px] uppercase tracking-[0.14em] ${col.tone}`}
                    >
                      {col.column}
                    </p>
                    <div className="mt-3 space-y-3">
                      {col.tickets.map((t) => (
                        <div key={t.id} className="border border-border bg-ink p-3">
                          <p className="font-mono text-[10px] text-lime">{t.id}</p>
                          <p className="mt-1.5 text-xs font-medium leading-snug">
                            {t.title}
                          </p>
                          <p className="mt-2 text-[10px] text-muted-foreground">{t.meta}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Illustrative board · every ticket written from a real conversation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The support problem ── */}
      <section className="border-b border-border py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">The support problem</p>
          <h2 className="mt-4 text-3xl md:text-5xl">
            Support should begin with a conversation,{" "}
            <span className="accent-italic">not a form</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            The customer has already set out the whole problem, in their own
            words, in Arabic or English. A portal login and a page of form fields
            only make them say it a second time, and whoever picks the case up
            still starts with no context at all.
          </p>
          <p className="mt-5 font-semibold">
            The chatbot was already in that conversation, so the record is
            written from it.
          </p>
        </div>
      </section>

      {/* ── Chat to owned ticket ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(70% 45% at 50% 112%, rgba(212,255,79,0.35) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-5xl">
            One conversation in,{" "}
            <span className="accent-italic">one owned ticket out.</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {handsFree.map((s, i) => (
              <div key={s.title} className="relative border border-border bg-ink-2/95 p-8">
                <s.art className="max-w-[240px]" />
                <h3 className="mt-6 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < handsFree.length - 1 && (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-lime md:block"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-lime">
            Zero typing. Full history. Correct owner.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-8">
            <p className="max-w-xl text-sm text-muted-foreground leading-relaxed">
              And once it is owned, somebody has to keep it moving. Smart
              Follow-Ups chases the assignee and updates the customer until the
              ticket reaches a confirmed ending.
            </p>
            <Link
              href="/product/smart-follow-ups/"
              className="inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              Smart Follow-Ups <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-3xl md:text-5xl">
              Every queue, owner and outcome{" "}
              <span className="accent-italic">on one board</span>.
            </h2>
            <Ticket className="h-10 w-10 text-lime" aria-hidden />
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <figure className="mx-auto w-full max-w-md">
              <TicketAnatomy />
              <figcaption className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground lg:text-left">
                One ticket, and everything the board keeps about it
              </figcaption>
            </figure>
            <ul className="grid gap-3 sm:grid-cols-2">
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
        </div>
      </section>

      {/* ── Sized for the team you actually have ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_1.05fr]">
            <div>
              <h2 className="max-w-xl text-2xl md:text-4xl">
                Sized for the team{" "}
                <span className="accent-italic">you actually have</span>.
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
                Most businesses in Oman are not running a support floor. They are
                running four people who also do everything else. This keeps the
                queue ordered without adding a system anyone has to administer.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: ClipboardList, label: "One queue, all channels" },
                  { icon: AlarmClock, label: "Due dates that chase" },
                  { icon: Users, label: "Assignment by category" },
                  { icon: Ticket, label: "Data resident in Oman" },
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
            <TeamLoad />
          </div>
        </div>
      </section>

      <Faq items={ticketFaqs} />
      <CtaBanner />
    </>
  );
}
