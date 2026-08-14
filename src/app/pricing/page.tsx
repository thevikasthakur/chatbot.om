import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { CtaBanner, Faq } from "@/components/sections";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple Chatbot.OM pricing: 100 monthly chat sessions free, or 2,000 monthly sessions for OMR 10. Clear per-session rates after each allowance.",
  ...pageMeta("/pricing/"),
  openGraph: {
    title: "Simple pricing. Built for Oman.",
    description:
      "Free: 100 sessions monthly, then 250 Bz per session. Starter: 2,000 sessions monthly for OMR 10, then 50 Bz per session.",
    url: "/pricing/",
    images: [
      {
        url: "/media/pricing-og.png",
        width: 1200,
        height: 630,
        alt: "Chatbot.OM Free and Starter pricing plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple pricing. Built for Oman.",
    description:
      "Free: 100 sessions monthly, then 250 Bz per session. Starter: 2,000 sessions monthly for OMR 10, then 50 Bz per session.",
    images: ["/media/pricing-og.png"],
  },
};

const productCapabilities = [
  "Website chat and WhatsApp",
  "Arabic and English conversations",
  "Answers grounded in your approved business information",
  "Support tickets, follow-ups, leads, and reporting",
  "Conversation data hosted inside Oman",
];

const faqs = [
  {
    q: "What does the Free plan cost?",
    a: "There is no monthly charge. Your first 100 chat sessions each month are included, then each additional chat session costs 250 Bz (OMR 0.250).",
  },
  {
    q: "What does the Starter plan cost?",
    a: "Starter is OMR 10 per month and includes 2,000 chat sessions each month. After that allowance, each additional chat session costs 50 Bz (OMR 0.050).",
  },
  {
    q: "When does Starter cost less than Free?",
    a: "At 140 chat sessions in a month, both plans cost OMR 10. From session 141 onward, Starter costs less and includes usage up to 2,000 sessions before its per-session rate begins.",
  },
  {
    q: "Are these prices in Omani Rials?",
    a: "Yes. All prices are in Omani Rials. The per-session amounts are shown in baisa: 250 Bz is OMR 0.250 and 50 Bz is OMR 0.050.",
  },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: site.url + "/pricing/",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "OMR",
      description:
        "100 chat sessions each month, then OMR 0.250 per additional session.",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "10",
      priceCurrency: "OMR",
      description:
        "2,000 chat sessions each month, then OMR 0.050 per additional session.",
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingJsonLd} />

      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="eyebrow">Pricing</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl leading-[1.06] md:text-6xl">
            Start free. <span className="text-lime">Pay less as chats grow.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Two plans, one clear difference: how many customer conversations
            you expect each month. No maze of feature bundles.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <article
              aria-labelledby="free-plan-title"
              className="flex flex-col border border-line-strong bg-ink-2 p-7 md:p-9"
            >
              <h2
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
                id="free-plan-title"
              >
                Free
              </h2>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-6xl font-medium tracking-tight">0</span>
                <span className="pb-2 text-sm text-muted-foreground">Rials / month</span>
              </div>
              <p className="mt-6 text-2xl font-semibold">100 chat sessions</p>
              <p className="mt-1 text-sm text-muted-foreground">included every month</p>
              <div className="my-7 border-t border-border" />
              <p className="text-sm text-muted-foreground">After the monthly allowance</p>
              <p className="mt-2 text-xl font-semibold">
                250 Bz <span className="text-sm font-normal text-muted-foreground">/ extra session</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">OMR 0.250 per session</p>
              <Link
                href="/get-started/?plan=free"
                className="mt-8 inline-flex h-11 items-center justify-center gap-2 border border-line-strong px-6 text-sm font-medium transition-colors hover:bg-ink-3"
              >
                Get started <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>

            <article
              aria-labelledby="starter-plan-title"
              className="relative flex flex-col border border-lime bg-ink-2 p-7 shadow-[0_0_40px_rgba(212,255,79,0.08)] md:p-9"
            >
              <span className="mb-4 self-start bg-lime px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ink md:absolute md:right-4 md:top-4 md:mb-0">
                Best from session 141
              </span>
              <h2
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-lime"
                id="starter-plan-title"
              >
                Starter
              </h2>
              <div className="mt-5 flex items-end gap-2">
                <span className="font-display text-6xl font-medium tracking-tight">10</span>
                <span className="pb-2 text-sm text-muted-foreground">Rials / month</span>
              </div>
              <p className="mt-6 text-2xl font-semibold">2,000 chat sessions</p>
              <p className="mt-1 text-sm text-muted-foreground">included every month</p>
              <div className="my-7 border-t border-[rgba(212,255,79,0.24)]" />
              <p className="text-sm text-muted-foreground">After the monthly allowance</p>
              <p className="mt-2 text-xl font-semibold">
                50 Bz <span className="text-sm font-normal text-muted-foreground">/ extra session</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">OMR 0.050 per session</p>
              <Link
                href="/get-started/?plan=starter"
                className="mt-8 inline-flex h-11 items-center justify-center gap-2 bg-lime px-6 text-sm font-medium text-ink transition-[filter] hover:brightness-110"
              >
                Get started <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          </div>

          <div className="mt-5 border border-border bg-ink-2 px-5 py-4 text-center">
            <p className="text-sm text-muted-foreground">
              At <strong className="font-semibold text-foreground">140 sessions</strong>, both plans cost OMR 10. From session 141,
              Starter is the lower-cost plan.
            </p>
          </div>
        </div>
      </section>

      <section className="hatch-gutters border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:items-start">
            <div>
              <p className="eyebrow">The product</p>
              <h2 className="mt-4 max-w-xl text-3xl md:text-5xl">
                Built for the whole conversation.{" "}
                <span className="accent-italic">And what comes next.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Pricing is based on monthly conversation volume. Chatbot.OM is
                built to answer, route, follow up, and keep the work inside Oman.
              </p>
            </div>

            <ul className="space-y-3 border-t border-line-strong pt-5">
              {productCapabilities.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 border-b border-border pb-3 text-sm text-muted-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-lime" aria-hidden />
            Oman Personal Data Protection Law compliant · Data never leaves the Sultanate
          </p>
        </div>
      </section>

      <Faq items={faqs} sub="The arithmetic, without the fine-print fog." />
      <CtaBanner />
    </>
  );
}
