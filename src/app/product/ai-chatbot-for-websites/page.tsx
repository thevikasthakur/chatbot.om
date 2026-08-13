import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BookOpen,
  Database,
  Globe2,
  Landmark,
  Lock,
  MessageSquare,
  Mic,
  Repeat2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CtaBanner, Faq, RuleGrid, StatStrip } from "@/components/sections";
import { GroundedAnswer } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "AI Chatbot for Websites",
  description:
    "Oman's own sovereign chatbot for your website. It replies in Arabic and English in seconds, raises tickets, books appointments, and builds your lead sheet. All chat data stays inside Oman.",
  ...pageMeta("/product/ai-chatbot-for-websites/"),
};

const stats = [
  { v: "Seconds", l: "To the first reply, any hour" },
  { v: "3", l: "Channels, one memory" },
  { v: "24/7", l: "Including Fridays and Eid" },
  { v: "~1 day", l: "From your domain to live" },
];

const jobs = [
  {
    title: "Replies to serious buyers",
    desc: "Your best enquiries do not wait. The chatbot answers in seconds, not hours, and not on Sunday morning after the weekend.",
  },
  {
    title: "Turns chats into leads",
    desc: "Every conversation is a data point. Name, intent, channel, sentiment, all captured before anyone on your team opens the CRM.",
  },
  {
    title: "Enriches every lead",
    desc: "A raw phone number is worth little. The chatbot attaches context: what they asked for, how they sounded, and what they almost bought.",
  },
  {
    title: "Books appointments",
    desc: "No back and forth, no waiting for someone to check the diary. The chatbot finds the open slot and holds it.",
  },
  {
    title: "Raises the ticket",
    desc: "When it is a complaint rather than a sale, Chatbot.OM opens a ticket, routes it to the right person, and tells the customer what happens next.",
  },
  {
    title: "Follows up without nagging",
    desc: "Quiet leads get one useful nudge. No-shows get offered a new slot. Nobody on your team has to remember to do it.",
  },
];

const knowledge = [
  {
    icon: BookOpen,
    title: "It reads your website first",
    desc: "Give us your domain and Chatbot.OM ingests your pages, price lists, and policies. It answers from what you actually published, not from a general model's guesswork.",
  },
  {
    icon: Database,
    title: "You add what is not on the site",
    desc: "Delivery windows, warranty terms, which branch stocks what. Upload documents or type the answers in, and they take effect on the next message.",
  },
  {
    icon: Lock,
    title: "It declines what it does not know",
    desc: "Outside its knowledge, the chatbot says so and hands over rather than inventing an answer. You choose which topics always go to a human.",
  },
];

const voiceCards = [
  {
    icon: Mic,
    title: "Voice notes processed natively",
    desc: "The customer talks, Chatbot.OM understands. No transcription step for anyone to babysit.",
  },
  {
    icon: AudioLines,
    title: "Omani and Gulf Arabic, plus English",
    desc: "Handled naturally, including tone, dialect, and the mix of both in one sentence.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp voice notes supported",
    desc: "Voice notes work exactly the way your customers already use them, with no app to install.",
  },
  {
    icon: Sparkles,
    title: "The sale keeps moving",
    desc: "Voice becomes intent, intent becomes a lead, and the lead lands with an owner.",
  },
];

const faqs = [
  {
    q: "How long does it take to go live?",
    a: "About a day for a standard website. You give us the domain, the chatbot reads your published pages, you review the answers it gives to your twenty most common questions, and we put the widget on your site. WhatsApp takes a little longer because the number has to be approved on the WhatsApp Business Platform.",
  },
  {
    q: "Will it make things up?",
    a: "It answers from your website and the documents you upload. When a question falls outside that, it says it will check and passes the conversation to your team rather than guessing. You can also mark topics, such as pricing or legal terms, that must always go to a human.",
  },
  {
    q: "Does it handle Arabic properly, or just translated English?",
    a: "It handles the conversation in the language the customer writes in, including Omani and Gulf Arabic, and including messages that switch between Arabic and English mid-sentence. Replies are written in that language, not translated word for word from an English answer.",
  },
  {
    q: "Where is the chat data stored?",
    a: "Inside Oman. Conversations, contact details, and transcripts are stored and processed on servers in the Sultanate, in line with the Personal Data Protection Law (Royal Decree 6/2022). Nothing is copied to a data centre abroad.",
  },
  {
    q: "What happens when a customer wants a human?",
    a: "Chatbot.OM hands over. It notifies the person or team you nominate, passes the full conversation so nobody asks the customer to repeat themselves, and tells the customer who has picked it up and when to expect a reply.",
  },
  {
    q: "How is this different from CustomerCare.OM?",
    a: "Chatbot.OM covers chat: your website, WhatsApp, and email replies. CustomerCare.OM is the full suite for organisations that also need the phone line answered, outbound calling campaigns, and a dedicated email agent working the inbox. Same platform family, same data residency, different scope.",
    link: { label: "See the full comparison", href: "/comparison/" },
  },
];

export default function ChatbotForWebsitesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">AI Chatbot for Websites</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
              <span className="text-lime">Oman&rsquo;s own sovereign chatbot.</span>
              <br />
              Not a chatbot. A coworker.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground">
              It replies to serious buyers, books the meeting, raises the ticket,
              and builds your lead sheet while your team sleeps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/get-started/"
                className="inline-flex h-11 items-center gap-2 bg-lime px-6 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                <Globe2 className="h-4 w-4" aria-hidden /> Build my chatbot
              </Link>
              <Link
                href="/product/"
                className="inline-flex h-11 items-center gap-1 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                See everything it does <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {[
                "Hosted inside Oman",
                "Sells while you sleep",
                "Arabic + English",
                "Sales mindset by default",
              ].map((b) => (
                <span key={b} className="eyebrow border border-border bg-ink-2 px-3 py-1.5">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* hero video panel */}
          <div className="mx-auto mt-14 max-w-5xl overflow-clip border border-line-strong bg-ink-2 p-2">
            <video
              className="w-full"
              autoPlay
              loop
              muted
              playsInline
              poster="/hero/chatbot-om-poster.webp"
              aria-label="Chatbot.OM answering a customer conversation on a website"
            >
              <source src="/hero/chat-om-5fps.av1.mp4" type="video/mp4; codecs=av01.0.05M.08" />
              <source src="/hero/chat-om-5fps.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <StatStrip stats={stats} />

      {/* ── Jobs ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">What it does all day</p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl">
            Tell it what the business needs.{" "}
            <span className="text-lime">It works the chat.</span>
          </h2>
          <div className="mt-14">
            <RuleGrid items={jobs} />
          </div>
        </div>
      </section>

      {/* ── Knowledge ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Where the answers come from</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            It knows your business,{" "}
            <span className="text-lime">not the internet&rsquo;s version of it.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            A chatbot that improvises is a liability. This one is grounded in
            what you publish and what you upload, and it is honest about the
            edge of its own knowledge.
          </p>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <GroundedAnswer />
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-1">
              {knowledge.map((k) => (
                <div key={k.title} className="border-t border-line-strong pt-5">
                  <k.icon className="h-5 w-5 text-lime" aria-hidden />
                  <h3 className="mt-3 text-base font-semibold">{k.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{k.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── All channels ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">Everywhere your customers are</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                One chatbot. <span className="text-lime">All channels.</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                Website, WhatsApp, and email. It shows up where your customers
                already are, recognises returning visitors across channels and
                across visits, and picks up every conversation exactly where it
                left off, whoever handled it last.
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-lime">
                Channels change. Context never breaks.
              </p>
              <Link
                href="/product/whatsapp-ai-chatbot/"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:underline underline-offset-4"
              >
                More on the WhatsApp channel
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <Image
              src="/teasers/multi-channel-support.webp"
              alt="Omani customers asking about an order in Muscat, delivery to Salalah, and WhatsApp support, each routed to the channel it arrived on"
              width={1448}
              height={1086}
              className="w-full"
              sizes="(max-width: 768px) 92vw, 560px"
            />
          </div>
        </div>
      </section>

      {/* ── Continuity ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <Image
                src="/teasers/one-bot-for-website-whatsapp-email.webp"
                alt="A customer in Muscat continuing a website conversation on WhatsApp from her phone"
                width={1916}
                height={821}
                className="w-full border border-line-strong"
                sizes="(max-width: 768px) 92vw, 560px"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="eyebrow">
                <Repeat2 className="mr-2 inline h-4 w-4 text-lime" aria-hidden />
                One thread, three doors
              </p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Nobody should have to{" "}
                <span className="text-lime">explain themselves twice.</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                A customer asks about a delivery on your website at noon, then
                messages the same question on WhatsApp that evening. The chatbot
                already knows which order they mean, what it told them earlier,
                and what it promised. Your team sees one thread, not three
                strangers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Voice-first ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Voice-first by design</p>
          <h2 className="mt-4 max-w-xl text-3xl md:text-5xl">
            Oman does not type. <span className="text-lime">Oman talks.</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Your customers send voice notes on WhatsApp. The chatbot treats them
            as first-class conversations rather than attachments somebody has to
            listen to later.
          </p>
          <div className="mt-14">
            <RuleGrid items={voiceCards} cols={4} />
          </div>
        </div>
      </section>

      {/* ── Data residency ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow">Your data. Our commitment.</p>
              <h2 className="mt-4 max-w-xl text-2xl md:text-4xl">
                Your chat data stays <span className="accent-italic">inside Oman</span>
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
                We store and process every customer conversation exclusively
                within Oman. Your data stays local, private, and secure, and one
                hundred percent of chat data remains within the Sultanate.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Landmark, label: "Stored in Oman" },
                { icon: Lock, label: "Private & secure" },
                { icon: ShieldCheck, label: "Personal Data Protection Law compliant" },
                { icon: Database, label: "Sensitive data encrypted" },
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

      <Faq items={faqs} sub="What Omani businesses ask before they put it on the site." />

      <CtaBanner />
    </>
  );
}
