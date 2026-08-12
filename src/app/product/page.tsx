import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Globe2,
  MessageSquare,
  Target,
  Ticket,
} from "lucide-react";
import { CtaBanner, Faq } from "@/components/sections";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Product",
  description:
    "One chatbot, six jobs: website chat, WhatsApp, support tickets, follow-ups, lead pipeline, and reporting. Built for Oman and hosted inside the Sultanate.",
  alternates: { canonical: "/product/" },
};

const modules = [
  {
    icon: Globe2,
    name: "AI Chatbot for Websites",
    href: "/product/ai-chatbot-for-websites/",
    line: "The front door",
    desc: "It reads your website, answers in Arabic and English in seconds, and knows when to stop guessing and fetch a human.",
  },
  {
    icon: MessageSquare,
    name: "WhatsApp AI Chatbot",
    href: "/product/whatsapp-ai-chatbot/",
    line: "Where Oman actually talks",
    desc: "Messages and voice notes answered on the channel your customers already use, plus the reminders and confirmations they actually read.",
  },
  {
    icon: Ticket,
    name: "Automated Support Tickets",
    href: "/product/automated-support-tickets/",
    line: "When it is a problem",
    desc: "The complaint becomes a written, graded, routed ticket without anyone filling in a form.",
  },
  {
    icon: BellRing,
    name: "Smart Follow-Ups",
    href: "/product/smart-follow-ups/",
    line: "After it is assigned",
    desc: "It chases the person who owns the ticket and tells the customer where things stand, including when it is going to be late.",
  },
  {
    icon: Target,
    name: "Automated Lead Pipeline",
    href: "/product/automated-lead-pipeline/",
    line: "When it is money",
    desc: "Serious enquiries are qualified, enriched from your own records, and handed to a named owner who keeps them to the sale.",
  },
  {
    icon: BarChart3,
    name: "Dashboard & Reporting",
    href: "/product/dashboard-reporting/",
    line: "So you can see it",
    desc: "Volumes, topics, sentiment, ticket ages, and pipeline health, live, in one view that does not need an analyst to read.",
  },
];

const faqs = [
  {
    q: "Do we have to take all six?",
    a: "No. Almost everyone starts with the website chatbot and adds WhatsApp next. Tickets, follow-ups, and the lead pipeline switch on when you want them, and they use the conversations you are already having, so there is nothing to migrate.",
  },
  {
    q: "How long until it is live?",
    a: "The website chatbot is usually live in about a day. WhatsApp takes a few days longer because the number and your message templates have to be approved on the WhatsApp Business Platform, which is out of our hands.",
  },
  {
    q: "What is not included?",
    a: "Anything that involves a phone line. chatbot.om does not answer calls, does not dial out, and does not run an email agent through your inbox. Those live on our sister product for organisations that need them.",
    link: { label: "Compare the two", href: "/comparison/" },
  },
  {
    q: "Can we host it ourselves?",
    a: "Yes. The default is our sovereign cloud inside Oman. Organisations with their own compliance requirements can run the whole thing on their own infrastructure instead.",
    link: { label: "Self-hosted deployment", href: "/self-hosted/" },
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow">The product</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.06]">
            One chatbot. <span className="text-lime">Six jobs.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            It is not six products bolted together. It is one conversation with
            your customer, and everything your business needs to happen because
            of it.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                className="group bg-ink-2 p-7 transition-colors hover:bg-ink-3"
              >
                <m.icon className="h-6 w-6 text-lime" aria-hidden />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {m.line}
                </p>
                <h2 className="mt-1.5 text-lg font-semibold">{m.name}</h2>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-lime">
                  Open
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How they fit ── */}
      <section className="hatch-gutters border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl text-3xl md:text-4xl">
            One message in.{" "}
            <span className="accent-italic">Four things out.</span>
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { n: "01", t: "A customer writes", d: "On your website, or on WhatsApp, at any hour, in Arabic or English." },
              { n: "02", t: "It is answered", d: "From what you published and uploaded, or handed to a person when it should be." },
              { n: "03", t: "Something is created", d: "A ticket if it is a problem, a lead if it is money, both with an owner." },
              { n: "04", t: "It is chased and counted", d: "Followed to a confirmed ending, and reflected in your reporting the same day." },
            ].map((s) => (
              <div key={s.n} className="border-t border-line-strong pt-5">
                <span className="font-mono text-xs text-lime">{s.n}</span>
                <h3 className="mt-2 text-base font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sister site ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow">Where this one stops</p>
              <h2 className="mt-4 max-w-xl text-2xl md:text-4xl">
                Chat is the whole scope here.{" "}
                <span className="accent-italic">Deliberately.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed">
                chatbot.om is the affordable, fast way to get an Omani business
                answering properly. It does not answer your phone line, it does
                not run outbound calling campaigns, and it does not work your
                email inbox as a dedicated agent. Organisations that need all of
                that run {site.sister.name} instead, on the same platform family
                and the same infrastructure inside Oman.
              </p>
            </div>
            <Link
              href="/comparison/"
              className="inline-flex h-11 w-fit items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              See the full comparison <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Faq items={faqs} sub="What people ask before they pick a starting point." />
      <CtaBanner />
    </>
  );
}
