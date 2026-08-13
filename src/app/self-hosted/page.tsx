import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cpu,
  KeyRound,
  Landmark,
  Lock,
  Server,
  ShieldCheck,
} from "lucide-react";
import { CtaBanner, Faq, RuleGrid } from "@/components/sections";

export const metadata: Metadata = {
  title: "Self-Hosted Deployment",
  description:
    "Run Chatbot.OM on your own infrastructure. Same product, same features, inside your network, for organisations whose compliance rules require it.",
  ...pageMeta("/self-hosted/"),
};

const reasons = [
  {
    icon: Landmark,
    title: "A regulator asked the question",
    desc: "Banks, insurers, and government-adjacent bodies in Oman are often required to keep customer data inside infrastructure they control, not merely inside the country.",
  },
  {
    icon: Lock,
    title: "The data is genuinely sensitive",
    desc: "Health records, legal matters, and anything touching national infrastructure. Where the answer to who else could technically read this has to be nobody, self-hosting is the answer.",
  },
  {
    icon: KeyRound,
    title: "You already run your own stack",
    desc: "Organisations with an established platform team frequently prefer one more service inside their perimeter over one more supplier outside it.",
  },
];

const included = [
  "Every feature of the hosted product, with nothing held back",
  "Website chat, WhatsApp, and email channels",
  "Tickets, follow-ups, lead pipeline, and reporting",
  "Arabic and English conversation handling",
  "Your own model hosting, or ours over a private link",
  "Deployment on your servers or your private cloud tenancy",
  "Air-gapped operation supported where required",
  "Single sign-on against your existing identity provider",
  "Audit logging exportable to your own tooling",
  "Backup and retention policies you set and control",
  "Upgrade cadence you approve rather than one imposed on you",
  "Support and updates from the same team in Muscat",
];

const faqs = [
  {
    q: "Is the self-hosted version behind on features?",
    a: "No. It is the same product. Upgrades are released to self-hosted customers on a schedule you approve rather than pushed automatically, which is usually the point of self-hosting, but nothing is withheld.",
  },
  {
    q: "What does it need to run on?",
    a: "A Linux environment with container support, either on your own servers or in your private cloud tenancy. We size it with you against your expected conversation volume before anything is provisioned.",
  },
  {
    q: "Can it run without internet access?",
    a: "Yes, for website chat with locally hosted models. WhatsApp is the exception: that channel requires outbound access to the WhatsApp Business Platform, because the messages physically arrive from there.",
  },
  {
    q: "Who runs it day to day?",
    a: "You do, with our support, or we manage it inside your environment under an agreement. Which of those fits usually depends on whether you already have a platform team.",
  },
  {
    q: "Is the hosted version less secure?",
    a: "No. The hosted product runs on infrastructure inside Oman with encryption and access controls in line with the Personal Data Protection Law. Self-hosting is about control and about specific compliance obligations, not about fixing a weakness.",
  },
  {
    q: "How long does a self-hosted deployment take?",
    a: "Longer than the hosted product, and the variable is almost always your side: provisioning, network approvals, and security review. The installation itself is measured in days.",
  },
];

export default function SelfHostedPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow">Self-Hosted Deployment</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
              Inside Oman is the default.{" "}
              <span className="text-lime">Inside your walls is an option.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              The hosted product already keeps every conversation on servers in
              the Sultanate. For organisations whose obligations go further than
              that, the same product runs on your own infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                Talk to us about deployment <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two options ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-lime bg-ink-2 p-8">
              <Server className="h-6 w-6 text-lime" aria-hidden />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-lime">
                Default
              </p>
              <h2 className="mt-1.5 text-2xl">Sovereign cloud</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                We run it on infrastructure inside Oman. Nothing to provision,
                nothing to patch, live in about a day. Conversations, transcripts,
                attachments, and reporting all stay in the Sultanate, in line with
                the Personal Data Protection Law.
              </p>
              <p className="mt-5 text-sm font-medium">
                Right for almost everyone, including most regulated businesses.
              </p>
            </div>
            <div className="border border-border bg-ink-2 p-8">
              <Cpu className="h-6 w-6 text-lime" aria-hidden />
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                On request
              </p>
              <h2 className="mt-1.5 text-2xl">Self-hosted</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                The same product deployed on your servers or in your private cloud
                tenancy, behind your network controls, under your identity
                provider, with an upgrade cadence you approve.
              </p>
              <p className="mt-5 text-sm font-medium">
                Right when a regulator or a policy requires infrastructure you own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">When it is worth the effort</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            Three reasons, and{" "}
            <span className="text-lime">one bad one.</span>
          </h2>
          <div className="mt-14">
            <RuleGrid items={reasons} />
          </div>
          <div className="mt-12 border border-border bg-ink-2 p-7 max-w-3xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              The bad reason
            </p>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
              A general feeling that self-hosted must be safer. It is not
              automatically safer, and an under-maintained deployment on a
              forgotten server is considerably worse than managed infrastructure
              inside Oman. If nobody is going to patch it, take the hosted
              product and put the effort somewhere it pays.
            </p>
          </div>
        </div>
      </section>

      {/* ── What is included ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-3xl md:text-5xl">
              The same product,{" "}
              <span className="accent-italic">nothing held back</span>.
            </h2>
            <ShieldCheck className="h-10 w-10 text-lime" aria-hidden />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((c) => (
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

      <Faq items={faqs} sub="What platform and compliance teams ask us first." />
      <CtaBanner />
    </>
  );
}
