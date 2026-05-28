import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Database,
  Gauge,
  Globe2,
  Headphones,
  Languages,
  LineChart,
  LockKeyhole,
  MessageSquare,
  RefreshCcw,
  Server,
  ShieldCheck,

  Users,
  Workflow,
} from "lucide-react";
import { InstallRequestForm } from "@/components/InstallRequestForm";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { SovereignSection } from "@/components/SovereignSection";
import { VoiceSection } from "@/components/VoiceSection";

type IconItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const trustBadges = [
  "Sovereign cloud-hosted",
  "Self-hosted option for enterprise",
  "Arabic + English",
  "Sales mindset by default",
];

const comparisonRows = [
  {
    old: "Answers FAQs when a visitor asks.",
    new: "Qualifies the visitor, recommends the next step, and captures the lead.",
  },
  {
    old: "Cloud-only logs with unclear data movement.",
    new: "Sovereign cloud-hosted by default, with self-hosted deployment when enterprise governance requires it.",
  },
  {
    old: "English-first flow with translated Arabic.",
    new: "Arabic-English customer journeys designed for Oman from day one.",
  },
  {
    old: "Stops when a staff member is offline.",
    new: "Books, follows up, escalates, and keeps the sales thread alive.",
  },
];

const commandCards: IconItem[] = [
  {
    icon: MessageSquare,
    title: "Reply to every serious buyer",
    body: "Website chat, WhatsApp handoff, product questions, quote requests, branch timings, and delivery questions get a consistent first response.",
  },
  {
    icon: CalendarCheck,
    title: "Book the meeting",
    body: "Push qualified prospects toward appointments, demos, site visits, callbacks, and service slots with clear human escalation.",
  },
  {
    icon: RefreshCcw,
    title: "Follow up without drama",
    body: "Recover silent leads, remind no-shows, re-open abandoned quote requests, and keep the tone respectful.",
  },
  {
    icon: LineChart,
    title: "Turn chats into signals",
    body: "Track sentiment, intent, churn risk, objections, repeated questions, and the jobs your customers keep asking you to do.",
  },
];

const omanSignals: IconItem[] = [
  {
    icon: Globe2,
    title: "Mobile-first buyers",
    body: "Omani customers often move between search, Instagram, WhatsApp, and your website before they trust a business enough to call.",
  },
  {
    icon: Languages,
    title: "Arabic, English, Omani & Gulf dialects",
    body: "Chatbot handles all questions naturally, including tones, dialects & accents.",
  },
  {
    icon: Clock3,
    title: "After-hours demand",
    body: "Evenings, weekends, Ramadan timings, and holiday changes create high-intent questions when your team may be away.",
  },
  {
    icon: Building2,
    title: "Local operating detail",
    body: "Wilayat coverage, branch availability, OMR pricing, delivery windows, and appointment rules matter more than generic automation.",
  },
];

const privacyItems: IconItem[] = [
  {
    icon: Server,
    title: "Sovereign cloud-hosted",
    body: "Start with controlled cloud hosting designed around Omani data expectations, without forcing a heavy infrastructure project on day one.",
  },
  {
    icon: ShieldCheck,
    title: "PDPL-aware workflows",
    body: "Support consent-aware data capture, retention controls, deletion workflows, and clear escalation paths for sensitive requests.",
  },
  {
    icon: Database,
    title: "Self-hosted for enterprise",
    body: "When policy demands it, run the chatbot layer, knowledge base, and conversation logs in your own approved environment.",
  },
  {
    icon: LockKeyhole,
    title: "Audit trail by default",
    body: "Every handoff, answer source, task, and lead action can be reviewed so teams know what happened and why.",
  },
];

const agents: IconItem[] = [
  {
    icon: Bot,
    title: "Sales Agent",
    body: "Qualifies leads, handles objections, recommends products, and asks for the meeting when the signal is strong.",
  },
  {
    icon: Headphones,
    title: "Service Agent",
    body: "Answers repetitive service questions, checks order context when connected, and escalates edge cases to staff.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Agent",
    body: "Collects appointment details, explains availability, reduces no-shows, and prepares clean handoffs.",
  },
  {
    icon: BarChart3,
    title: "Retention Agent",
    body: "Finds churn signals, complaint patterns, failed tasks, and follow-up moments before revenue leaks quietly.",
  },
];

const useCases = [
  "Lead qualification",
  "Customer service",
  "Appointment booking",
  "Sales follow-up",
  "Churn reduction",
  "Sentiment analysis",
  "Quote request routing",
  "Branch and delivery support",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "chatbot.om",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  areaServed: {
    "@type": "Country",
    name: "Oman",
  },
  description:
    "A sovereign, privacy-first AI sales chatbot for Omani businesses.",
  featureList: [
    "Sovereign cloud-hosted chatbot deployment",
    "Enterprise self-hosted deployment option",
    "Arabic and English customer support",
    "Lead qualification",
    "Appointment booking",
    "Sentiment analysis",
    "Sales follow-up",
  ],
};

export default function Home() {
  return (
    <>
    <main className="bg-[#f6f3ec] text-ink" style={{ overflowX: "clip" }}>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />

      <section className="hero-shell" id="top">
        <video
          aria-hidden="true"
          autoPlay
          className="hero-video"
          loop
          muted
          playsInline
          poster="/hero/chatbot-om-poster.webp"
          preload="metadata"
        >
          <source src="/hero/chat-om-5fps.av1.mp4" type="video/mp4; codecs=av01.0.05M.08" />
          <source src="/hero/chat-om-5fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </section>

      <section aria-label="Product promises" className="trust-strip">
        {trustBadges.map((badge) => (
          <div className="trust-item" key={badge}>
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
            <span>{badge}</span>
          </div>
        ))}
      </section>

      <SovereignSection />

      <VoiceSection />

      <section className="channels-hero">
        <Image
          alt="Omani woman using chatbot on her phone in Muscat"
          className="channels-hero-img"
          fill
          priority
          quality={84}
          sizes="100vw"
          src="/teasers/one-bot-for-website-whatsapp-email.webp"
        />
        <div className="channels-hero-overlay" />
        <div className="channels-hero-content">
          <h2>One Chatbot. All Channels.</h2>
          <p>Website. WhatsApp. Email. <br/>The chatbot shows up everywhere.</p>
        </div>
      </section>

      <section className="section command-section">
        <div className="section-heading left">
          <p className="eyebrow dark">Not a chatbot. A coworker</p>
          <h2>Tell it what the business needs. It works the chat.</h2>
        </div>
        <div className="command-grid">
          {commandCards.map((item) => (
            <article className="feature-card" key={item.title}>
              <item.icon aria-hidden="true" className="h-7 w-7" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section market-section" id="oman">
        <div className="section-heading">
          <p className="eyebrow dark">Built for the Omani customer journey</p>
          <h2>Oman is not a generic market.</h2>
          <p>
            Buyers ask differently here. Trust is local. Language switches
            mid-sentence. The chatbot has to understand the business, the
            buyer, and the rules around the data.
          </p>
        </div>
        <div className="signal-grid">
          {omanSignals.map((item) => (
            <article className="signal-card" key={item.title}>
              <item.icon aria-hidden="true" className="h-6 w-6" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <ShowcaseSection />

   
      <section className="operator-section">
        <div className="section-heading">
          <p className="eyebrow dark">Meet the AI team</p>
          <h2>One chatbot. Four jobs.</h2>
          <p>
            It behaves like a small commercial team: sales, service, booking,
            and retention. The human team stays in control.
          </p>
        </div>
        <div className="agent-grid">
          {agents.map((agent) => (
            <article className="agent-card" key={agent.title}>
              <div className="agent-icon">
                <agent.icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3>{agent.title}</h3>
              <p>{agent.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section steps-section">
        <div className="section-heading">
          <p className="eyebrow dark">Setup without the theater</p>
          <h2>Less than two minutes to start.</h2>
          <p>
            Enter your website. We receive the install request. Then the manual
            work starts: review the site, connect approved data, and launch the
            chatbot cleanly.
          </p>
        </div>
        <div className="steps-grid">
          {[
            {
              icon: Gauge,
              step: "01",
              title: "Enter the website",
              body: "The CTA sends your domain to the install queue and tells us where to begin.",
            },
            {
              icon: Workflow,
              step: "02",
              title: "Map the work",
              body: "We define answers, escalation rules, sales goals, booking logic, and privacy boundaries.",
            },
            {
              icon: Users,
              step: "03",
              title: "Launch with humans in control",
              body: "The chatbot handles repeatable work and escalates the moments that deserve judgment.",
            },
          ].map((item) => (
            <article className="step-card" key={item.step}>
              <div className="step-top">
                <span>{item.step}</span>
                <item.icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="use-case-section" id="use-cases">
        <div className="section-heading left">
          <p className="eyebrow dark">Use cases</p>
          <h2>Sales mindset. Service discipline.</h2>
          <p>
            The default behavior is commercial, but not reckless. Sell when the
            signal is there. Help when the customer needs help. Escalate when AI
            should stop.
          </p>
        </div>
        <div className="use-case-track">
          {useCases.map((useCase) => (
            <span key={useCase}>{useCase}</span>
          ))}
        </div>
      </section>

      <section className="final-cta" id="install">
        <div className="final-copy">
          <p className="eyebrow">Your website is quiet. Fix that.</p>
          <h2>Install the chatbot that knows Oman.</h2>
          <p>
            Private where it matters. Fast where customers expect speed.
            Commercial where revenue is on the line.
          </p>
        </div>
        <InstallRequestForm compact ctaSource="final-domain-cta" />
        <a className="final-link" href="#top">
          <span>Back to top</span>
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </section>
    </main>
    <div className="floating-cta">
      <InstallRequestForm ctaSource="hero-domain-cta" hideIdleStatus />
    </div>
    </>
  );
}
