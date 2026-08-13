import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import {
  AlarmClock,
  ArrowRight,
  ArrowUpRight,
  BellRing,
  Check,
  CircleAlert,
  Clock3,
  MessageSquare,
  Repeat,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { CtaBanner, Faq } from "@/components/sections";
import FollowUpTimeline from "@/components/FollowUpTimeline";
import { EscalationLadder, TicketLifeGap } from "@/components/illustrations";

/** The three jobs one honest delay message has to do at once. */
const messageParts = [
  {
    n: "1",
    text: "The count at our Sohar warehouse does not match the picking list, so we need them to confirm in the morning before we ship.",
    does: "The real reason, in words the customer can repeat to someone else.",
  },
  {
    n: "2",
    text: "You will have a firm answer by 11am tomorrow.",
    does: "A new time with a number on it. Not soon, not shortly.",
  },
  {
    n: "3",
    text: "If you would rather have a refund for the two items now, reply REFUND and we will process it today.",
    does: "A way out, so the delay becomes their decision rather than your announcement.",
  },
];

export const metadata: Metadata = {
  title: "Smart Follow-Ups",
  description:
    "Assigned is not finished. Chatbot.OM chases the staff member who owns the ticket, tells the customer where it stands, and explains the delay before they have to ask.",
  ...pageMeta("/product/smart-follow-ups/"),
};

const chases = [
  {
    icon: UserCheck,
    title: "It chases the person, not the queue",
    desc: "A ticket assigned to Maha is chased on Maha's phone, at intervals you set, until she acknowledges it or it goes back to the pool. Nobody has to notice that it went quiet.",
  },
  {
    icon: Clock3,
    title: "It knows what was promised",
    desc: "Whatever the customer was told in the chat becomes the deadline. Every reminder is measured against that promise rather than against when the ticket happened to be opened.",
  },
  {
    icon: MessageSquare,
    title: "It tells the customer, on their channel",
    desc: "Updates go back on WhatsApp or wherever the conversation started. The customer never has to open a portal to discover what is happening.",
  },
];

const ladder = [
  {
    step: "01",
    title: "Reminder to the owner",
    desc: "Quiet, private, and repeated on your schedule. Most tickets never get past this step.",
  },
  {
    step: "02",
    title: "Back to the queue",
    desc: "If it is still unacknowledged after your limit, the ticket is released so someone else can take it.",
  },
  {
    step: "03",
    title: "Supervisor told",
    desc: "The person who has to answer for the delay hears about it while there is still time to fix it.",
  },
  {
    step: "04",
    title: "Customer told, with the reason",
    desc: "A revised time and the honest cause, sent before the original promise expires rather than after.",
  },
];

const capabilities = [
  "Chase schedules set per category and per priority",
  "Acknowledgement tracking on every assignment",
  "Automatic return to the queue when nobody accepts",
  "Escalation to a supervisor before the deadline, not after",
  "Customer updates sent on the channel they wrote from",
  "Delay reasons recorded against the ticket",
  "Revised time windows the customer can accept or move",
  "Silence rules, so trivial internal steps never bother the customer",
  "Confirmation asked for after resolution, not assumed",
  "Reopening when the customer says it is not fixed",
  "Working hours and Omani public holidays respected",
  "Delay causes rolled up into reporting so patterns surface",
];

const faqs = [
  {
    q: "How is this different from a reminder in our helpdesk?",
    a: "A helpdesk reminder tells your team a date has passed. This chases a named person until they respond, escalates when they do not, and separately keeps the customer informed. The customer side is the part almost nobody automates, and it is the part they judge you on.",
  },
  {
    q: "Will customers be spammed with updates?",
    a: "No. Chatbot.OM only messages the customer when something they were told has changed. Internal steps like a ticket being opened or reassigned do not generate a message, because the customer's expectation has not moved.",
  },
  {
    q: "What counts as late?",
    a: "Whatever you promised. If the chat said an answer before 5pm, 5pm is the deadline. You set the point before it, typically an hour or two, when the chatbot must either confirm the work will land or start preparing the customer for a new time.",
  },
  {
    q: "Can staff reply to the chase?",
    a: "Yes. A one-line reply from the owner, such as needing another two hours or a part being out of stock, becomes the recorded delay reason and feeds the message the customer receives.",
  },
  {
    q: "Does it respect Omani working hours?",
    a: "Yes. You set the working week, the daily hours, and public holidays. Chases and customer updates hold outside those windows unless the ticket is marked urgent, so nobody gets a work reminder at 11pm on a Friday.",
  },
  {
    q: "Does this need Automated Support Tickets?",
    a: "It is built on it. Tickets are what get chased. If you already run a helpdesk we can chase tickets there instead, but the pairing is where it works best.",
    link: { label: "Automated Support Tickets", href: "/product/automated-support-tickets/" },
  },
];

export default function SmartFollowUpsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="eyebrow mb-5 inline-block border border-border bg-ink-2 px-3 py-1.5">
                Smart Follow-Ups
              </p>
              <h1 className="max-w-xl text-4xl md:text-[3.4rem] leading-[1.08]">
                <span className="text-lime">Assigned is not finished.</span> Somebody
                has to keep asking.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Tickets do not usually fail loudly. They go quiet on a Tuesday
                and nobody notices until the customer writes again, angrier. The
                chatbot chases the person who owns the ticket and tells the
                customer where it stands.{" "}
                <strong className="text-foreground">Every single day it is open.</strong>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/get-started/"
                  className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
                >
                  Get Chatbot.OM <span aria-hidden>+</span>
                </Link>
                <Link
                  href="/product/automated-support-tickets/"
                  className="inline-flex h-11 items-center gap-1 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Start with tickets <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>

            {/* status card mock */}
            <div className="border border-line-strong bg-ink-2 p-5">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-lime">
                  CB-4821
                </span>
                <span className="inline-flex items-center gap-1.5 bg-amber-100 px-2.5 py-1 text-[10px] font-semibold text-amber-800">
                  <CircleAlert className="h-3 w-3" aria-hidden />
                  Running late
                </span>
              </div>
              <p className="mt-4 text-sm font-medium">
                Order 88214, two items missing
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Al Khuwair · WhatsApp · Owner: Maha, Fulfilment
              </p>
              <dl className="mt-5 space-y-3 border-t border-border pt-4 text-xs">
                {[
                  ["Promised to customer", "Today, before 5pm"],
                  ["Owner acknowledged", "09:26, 14 minutes after assignment"],
                  ["Chases sent to owner", "2"],
                  ["Customer updates sent", "1, with reason"],
                  ["Revised promise", "Tomorrow, by 11am"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Illustrative ticket
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The gap ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Where support actually breaks</p>
            <h2 className="mt-4 text-3xl md:text-5xl">
              An assigned ticket is{" "}
              <span className="accent-italic">not a finished one</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
              Almost every system in the market is good at the first ten minutes:
              capture the issue, write it up, give it an owner. Then it stops, and
              the rest is left to whoever remembers. Meanwhile the customer is
              holding a promise nobody is tracking.
            </p>
          </div>
          <TicketLifeGap className="mt-12" />
        </div>
      </section>

      {/* ── Three chases ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {chases.map((c) => (
              <div key={c.title} className="border border-border bg-ink-2 p-8">
                <c.icon className="h-6 w-6 text-lime" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FollowUpTimeline />

      {/* ── Say it first ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(70% 45% at 50% 112%, rgba(212,255,79,0.35) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <p className="eyebrow">The message nobody wants to send</p>
              <h2 className="mt-4 max-w-xl text-3xl md:text-5xl">
                When it will take longer,{" "}
                <span className="accent-italic">say so first</span>.
              </h2>
              <p className="mt-5 max-w-lg text-muted-foreground leading-relaxed">
                Customers forgive delay. What they do not forgive is finding out
                about it themselves, at the end of the window, after clearing an
                afternoon. A message that arrives before the deadline with an
                honest reason and a new time costs you almost nothing. The same
                message an hour late costs you the customer.
              </p>
              <p className="mt-5 max-w-lg text-muted-foreground leading-relaxed">
                So the chatbot watches the promise, not the ticket. When the
                promise is at risk it gets the reason from the person doing the
                work, sends it in the customer&rsquo;s own language, and offers
                them a way to change their mind.
              </p>
            </div>
            <figure className="w-full">
              <div className="overflow-clip border border-black/10 bg-white">
                <div className="flex items-center gap-3 border-b border-black/10 px-4 py-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-[11px] font-semibold text-neutral-600">
                    FA
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-neutral-800">Fatma Al-Harthi</p>
                    <p className="text-[10px] text-neutral-500">WhatsApp &middot; 16:21</p>
                  </div>
                  <span className="ml-auto border border-black/10 px-2 py-1 font-mono text-[10px] text-neutral-500">
                    CB-4821
                  </span>
                </div>

                <div className="px-4 py-5">
                  <p className="text-center text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                    Sent 39 minutes before the 5pm we promised
                  </p>
                  <div className="ml-auto mt-4 w-fit max-w-[94%] space-y-2.5 bg-lime px-4 py-3.5">
                    {messageParts.map((part) => (
                      <p key={part.n} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink text-[9px] font-bold text-lime">
                          {part.n}
                        </span>
                        {part.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <figcaption className="mt-6 space-y-3">
                {messageParts.map((part) => (
                  <p key={part.n} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lime text-[9px] font-bold text-ink">
                      {part.n}
                    </span>
                    {part.does}
                  </p>
                ))}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Escalation ladder ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">When nobody answers</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            Four steps, and the customer{" "}
            <span className="text-lime">only sees the last one.</span>
          </h2>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <EscalationLadder />
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-1">
              {ladder.map((l) => (
                <div key={l.step} className="border-t border-line-strong pt-4">
                  <span className="font-mono text-xs text-lime">{l.step}</span>
                  <h3 className="mt-1.5 text-base font-semibold">{l.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
                </div>
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
              Everything it does{" "}
              <span className="accent-italic">between assigned and closed</span>.
            </h2>
            <BellRing className="h-10 w-10 text-lime" aria-hidden />
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

      {/* ── Pairing ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="max-w-xl text-2xl md:text-4xl">
                One raises the ticket.{" "}
                <span className="accent-italic">This one refuses to let it rot</span>.
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
                Automated Support Tickets ends the moment the ticket has an
                owner. Smart Follow-Ups starts there and does not stop until the
                customer has confirmed it is actually sorted.
              </p>
              <Link
                href="/product/automated-support-tickets/"
                className="mt-6 inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                Automated Support Tickets <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: AlarmClock, label: "Chases on your schedule" },
                { icon: Repeat, label: "Escalates before the deadline" },
                { icon: MessageSquare, label: "Updates on their channel" },
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

      <Faq items={faqs} />
      <CtaBanner />
    </>
  );
}
