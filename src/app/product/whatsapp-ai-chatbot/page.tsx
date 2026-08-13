import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Image from "next/image";
import Link from "next/link";
import {
  AlarmClock,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  Clock,
  Languages,
  Mic,
  PhoneOff,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";
import { CtaBanner, Faq, RuleGrid, StatStrip } from "@/components/sections";
import { ServiceWindow, VoiceNoteFlow } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "WhatsApp AI Chatbot",
  description:
    "Answer WhatsApp messages and voice notes in Arabic and English, and send the reminders and confirmations your customers actually read. Built for Oman, hosted in Oman.",
  ...pageMeta("/product/whatsapp-ai-chatbot/"),
};

const stats = [
  { v: "Voice notes", l: "Understood, not just stored" },
  { v: "24h", l: "Free-form reply window" },
  { v: "Templates", l: "For everything after that" },
  { v: "Opt-in", l: "Recorded on every number" },
];

const inbound = [
  {
    icon: Mic,
    title: "Voice notes, answered",
    desc: "A customer walks to their car and records fifteen seconds about a delivery. The chatbot understands it and replies in writing, or in a voice note back if you prefer.",
  },
  {
    icon: Languages,
    title: "Arabic, English, and the mix",
    desc: "Real Omani WhatsApp messages switch languages mid-sentence and drop half the vowels. The chatbot reads them the way a local colleague would.",
  },
  {
    icon: ClipboardList,
    title: "Questions become tickets",
    desc: "A complaint on WhatsApp does not stay a message. It becomes a ticket with an owner and a promised time, and the customer is told both.",
  },
  {
    icon: Users,
    title: "Handover keeps the thread",
    desc: "When your team steps in, they arrive with the whole conversation. The customer never gets asked to explain it again from the top.",
  },
];

const outbound = [
  {
    icon: CalendarCheck,
    title: "Appointment confirmations",
    desc: "The booking is confirmed the moment it is made, then confirmed again the day before, with a one-tap way to move it if the customer cannot come.",
  },
  {
    icon: AlarmClock,
    title: "Reminders that cut no-shows",
    desc: "Service due, renewal approaching, documents outstanding. The reminder goes out on the channel your customer actually checks.",
  },
  {
    icon: Send,
    title: "Ticket status updates",
    desc: "When an open ticket moves, or is going to be late, the customer hears it from you first rather than chasing you for it.",
  },
  {
    icon: BadgeCheck,
    title: "Follow-ups after the visit",
    desc: "A short message after the job asking whether it was sorted. Answers feed straight back into your reporting.",
  },
];

const faqs = [
  {
    q: "Can it send messages to customers who have not written to us first?",
    a: "Only where you have the customer's consent and only using message templates approved in advance on the WhatsApp Business Platform. Appointment reminders, delivery updates, and ticket status messages all fit that model. Cold marketing blasts to purchased lists do not, and we will not set them up.",
  },
  {
    q: "What is the 24-hour window everyone mentions?",
    a: "WhatsApp lets a business reply freely for 24 hours after the customer's last message. Outside that window you can only send pre-approved templates. The chatbot handles both sides of that rule for you: it converses freely while the window is open and switches to your approved templates once it has closed, so you never see a failed send.",
  },
  {
    q: "Does this make outbound calls too?",
    a: "No. Chatbot.OM is text and voice notes on chat channels. If you need an AI agent that actually dials customers, that is outbound calling on our sister product, CustomerCare.OM.",
    link: { label: "Compare the two", href: "/comparison/" },
  },
  {
    q: "Do we need a new phone number?",
    a: "Not necessarily. An existing business number can be migrated to the WhatsApp Business Platform if it is not already tied to a personal WhatsApp account. We check this with you before anything is switched over, because migrating a number that staff use personally causes more disruption than it is worth.",
  },
  {
    q: "How long does WhatsApp take to set up?",
    a: "Longer than the website widget. The number has to be verified and your message templates reviewed and approved, which is out of our hands and typically takes a few days. We start the approvals on day one and put the website chatbot live while they run.",
  },
  {
    q: "Where are WhatsApp conversations stored?",
    a: "On servers inside Oman, the same as every other channel, in line with the Personal Data Protection Law (Royal Decree 6/2022). Message content is not copied to a data centre outside the Sultanate.",
  },
];

export default function WhatsAppChatbotPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">WhatsApp AI Chatbot</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
              Your customers already{" "}
              <span className="text-lime">messaged you on WhatsApp.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              They sent it at nine in the evening, half of it as a voice note,
              and they are waiting. The chatbot reads it, answers it, and tells
              them what happens next.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/get-started/"
                className="inline-flex h-11 items-center gap-2 bg-lime px-6 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                Get Chatbot.OM <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/product/ai-chatbot-for-websites/"
                className="inline-flex h-11 items-center gap-1 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Start with the website chatbot{" "}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <Image
              src="/teasers/omani-man-voice-noting-chatbot.webp"
              alt="A man in Muscat recording a WhatsApp voice note to a business"
              width={594}
              height={771}
              /* no border: the asset is a cutout on transparency, so a frame
                 would box empty space around the figure */
              className="mx-auto w-full max-w-sm"
              sizes="(max-width: 768px) 80vw, 384px"
              priority
            />
          </div>
        </div>
      </section>

      <StatStrip stats={stats} />

      {/* ── Inbound ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">When they message you</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
            A voice note is not a problem to solve later.{" "}
            <span className="text-lime">It is a customer talking.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Most businesses in Oman treat their WhatsApp inbox as an overflow
            pipe: someone opens it when they get a minute. The messages sitting
            in it are usually the most urgent ones you receive all day.
          </p>
          <figure className="mt-12 max-w-3xl">
            <VoiceNoteFlow />
            <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              Recorded &middot; understood in place &middot; answered
            </figcaption>
          </figure>
          <div className="mt-14">
            <RuleGrid items={inbound} cols={4} />
          </div>
        </div>
      </section>

      {/* ── Outbound ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">When you need to reach them</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
            The message they will actually read,{" "}
            <span className="text-lime">sent without anyone remembering to.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Email gets filed. A phone call at the wrong moment gets declined. A
            WhatsApp message from a business the customer already deals with
            gets opened. These are the four things worth sending on it.
          </p>
          <div className="mt-14">
            <RuleGrid items={outbound} cols={4} />
          </div>
        </div>
      </section>

      {/* ── The rules ── */}
      <section className="hatch-gutters border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <figure className="mb-14">
            <ServiceWindow className="mx-auto max-w-4xl" />
          </figure>
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
            <div>
              <p className="eyebrow">Played by the rules</p>
              <h2 className="mt-4 text-3xl md:text-4xl">
                WhatsApp is strict.{" "}
                <span className="accent-italic">That is the point.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
                The platform limits what businesses may send and when, which is
                exactly why customers still trust messages that arrive there.
                Working inside those limits is not a compromise. It is what
                keeps your number from being blocked.
              </p>
            </div>
            <div className="divide-y divide-[rgba(212,255,79,0.18)] border-t border-b border-[rgba(212,255,79,0.18)]">
              {[
                {
                  icon: Clock,
                  title: "Free-form replies inside 24 hours",
                  desc: "While the window from the customer's last message is open, Chatbot.OM converses normally.",
                },
                {
                  icon: ShieldCheck,
                  title: "Approved templates after that",
                  desc: "Outside the window it switches to templates you have registered, so messages still land.",
                },
                {
                  icon: BadgeCheck,
                  title: "Consent recorded per number",
                  desc: "Opt-in and opt-out are stored against the contact and honoured on every later send.",
                },
                {
                  icon: PhoneOff,
                  title: "No cold lists, ever",
                  desc: "We do not configure campaigns to numbers that never asked to hear from you.",
                },
              ].map((r) => (
                <div key={r.title} className="flex items-start gap-4 py-5">
                  <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden />
                  <div>
                    <h3 className="text-base font-semibold">{r.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-link ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl">
            WhatsApp is one door.{" "}
            <span className="text-lime">The work happens behind it.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Every message that arrives here can raise a ticket, start a
            follow-up, or open a lead. The channel is the easy part.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/product/automated-support-tickets/"
              className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              Automated Support Tickets <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/product/automated-lead-pipeline/"
              className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              Automated Lead Pipeline <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Faq items={faqs} sub="The WhatsApp questions that come up in every first meeting." />

      <CtaBanner />
    </>
  );
}
