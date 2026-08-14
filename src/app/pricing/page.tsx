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
    "Chatbot.OM plans from free to unlimited: 100 monthly sessions free, 2,000 for OMR 10, 10,000 for OMR 40, or unlimited for OMR 135.",
  ...pageMeta("/pricing/"),
  openGraph: {
    title: "Pricing that grows with you.",
    description:
      "Free 100; Starter OMR 10/2,000; Business OMR 40/10,000; Enterprise OMR 135/unlimited. Overage rates: 250, 50, and 25 Bz.",
    url: "/pricing/",
    images: [
      {
        url: "/media/pricing-og-v2.png",
        width: 1200,
        height: 630,
        alt: "Chatbot.OM Free, Starter, Business, and Enterprise pricing plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing that grows with you.",
    description:
      "Free 100; Starter OMR 10/2,000; Business OMR 40/10,000; Enterprise OMR 135/unlimited. Overage rates: 250, 50, and 25 Bz.",
    images: ["/media/pricing-og-v2.png"],
  },
};

const plans = [
  {
    id: "free",
    name: "Free",
    price: "0",
    sessions: "100 chat sessions",
    sessionsNote: "included every month",
    detailLabel: "After the monthly allowance",
    detailMain: "250 Bz",
    detailSuffix: "/ extra session",
    detailNote: "OMR 0.250 per session",
  },
  {
    id: "starter",
    name: "Starter",
    price: "10",
    sessions: "2,000 chat sessions",
    sessionsNote: "included every month",
    detailLabel: "After the monthly allowance",
    detailMain: "50 Bz",
    detailSuffix: "/ extra session",
    detailNote: "OMR 0.050 per session",
  },
  {
    id: "business",
    name: "Business",
    price: "40",
    sessions: "10,000 chat sessions",
    sessionsNote: "included every month",
    detailLabel: "After the monthly allowance",
    detailMain: "25 Bz",
    detailSuffix: "/ extra session",
    detailNote: "OMR 0.025 per session",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "135",
    sessions: "Unlimited chat sessions",
    sessionsNote: "with no per-session overage",
    detailLabel: "Deployment option",
    detailMain: "On-premises",
    detailSuffix: "available on request",
    detailNote: "Run it on your servers or private cloud",
  },
];

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
    q: "What does the Business plan cost?",
    a: "Business is OMR 40 per month and includes 10,000 chat sessions each month. After that allowance, each additional chat session costs 25 Bz (OMR 0.025).",
  },
  {
    q: "What does the Enterprise plan cost?",
    a: "Enterprise is OMR 135 per month with unlimited chat sessions. An on-premises deployment on your servers or private cloud is also available on request.",
    link: { label: "See the on-premises option", href: "/self-hosted/" },
  },
  {
    q: "When does the next plan cost less?",
    a: "Free and Starter cost the same at 140 monthly sessions; Starter and Business cost the same at 2,600; Business and Enterprise cost the same at 13,800. After each of those points, the next plan costs less.",
  },
  {
    q: "Are these prices in Omani Rials?",
    a: "Yes. All prices are in Omani Rials. The per-session amounts are shown in baisa: 250 Bz is OMR 0.250, 50 Bz is OMR 0.050, and 25 Bz is OMR 0.025.",
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
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "0",
        priceCurrency: "OMR",
        billingDuration: "P1M",
        unitCode: "MON",
      },
      description:
        "100 chat sessions each month, then OMR 0.250 per additional session.",
    },
    {
      "@type": "Offer",
      name: "Starter",
      price: "10",
      priceCurrency: "OMR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "10",
        priceCurrency: "OMR",
        billingDuration: "P1M",
        unitCode: "MON",
      },
      description:
        "2,000 chat sessions each month, then OMR 0.050 per additional session.",
    },
    {
      "@type": "Offer",
      name: "Business",
      price: "40",
      priceCurrency: "OMR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "40",
        priceCurrency: "OMR",
        billingDuration: "P1M",
        unitCode: "MON",
      },
      description:
        "10,000 chat sessions each month, then OMR 0.025 per additional session.",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "135",
      priceCurrency: "OMR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "135",
        priceCurrency: "OMR",
        billingDuration: "P1M",
        unitCode: "MON",
      },
      description: "Unlimited chat sessions each month.",
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
            Four plans sized to the number of customer conversations you expect
            each month. Enterprise also offers on-premises deployment.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {plans.map((plan) => (
              <article
                aria-labelledby={plan.id + "-plan-title"}
                className={
                  "flex flex-col border bg-ink-2 p-7 md:p-9 " +
                  (plan.id === "enterprise"
                    ? "border-lime shadow-[0_0_40px_rgba(212,255,79,0.08)]"
                    : "border-line-strong")
                }
                key={plan.id}
              >
                <h2
                  className={
                    "font-mono text-[11px] uppercase tracking-[0.14em] " +
                    (plan.id === "enterprise" ? "text-lime" : "text-muted-foreground")
                  }
                  id={plan.id + "-plan-title"}
                >
                  {plan.name}
                </h2>
                <div className="mt-5 flex items-end gap-2">
                  <span className="font-display text-6xl font-medium tracking-tight">
                    {plan.price}
                  </span>
                  <span className="pb-2 text-sm text-muted-foreground">Rials / month</span>
                </div>
                <p className="mt-6 text-2xl font-semibold">{plan.sessions}</p>
                <p className="mt-1 text-sm text-muted-foreground">{plan.sessionsNote}</p>
                <div
                  className={
                    "my-7 border-t " +
                    (plan.id === "enterprise"
                      ? "border-[rgba(212,255,79,0.24)]"
                      : "border-border")
                  }
                />
                <p className="text-sm text-muted-foreground">{plan.detailLabel}</p>
                <p className="mt-2 text-xl font-semibold">
                  {plan.detailMain}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    {plan.detailSuffix}
                  </span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{plan.detailNote}</p>
                {plan.id === "enterprise" && (
                  <Link
                    href="/self-hosted/"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-lime underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                  >
                    See the on-premises option
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
                <div className="mt-auto pt-8">
                  <Link
                    href={"/get-started/?plan=" + plan.id}
                    className={
                      "inline-flex min-h-11 w-full items-center justify-center gap-2 px-6 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime " +
                      (plan.id === "enterprise"
                        ? "bg-lime text-ink transition-[filter] hover:brightness-110"
                        : "border border-line-strong transition-colors hover:bg-ink-3")
                    }
                  >
                    Choose {plan.name} <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <h2 className="sr-only">Plan break-even points</h2>
          <div className="mt-5 grid gap-px border border-border bg-border lg:grid-cols-3">
            {[
              {
                at: "140 sessions",
                tie: "Free = Starter at OMR 10",
                after: "From 141, Starter costs less.",
              },
              {
                at: "2,600 sessions",
                tie: "Starter = Business at OMR 40",
                after: "From 2,601, Business costs less.",
              },
              {
                at: "13,800 sessions",
                tie: "Business = Enterprise at OMR 135",
                after: "From 13,801, Enterprise costs less.",
              },
            ].map((point) => (
              <div className="bg-ink-2 px-5 py-5" key={point.at}>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-lime">
                  {point.at}
                </p>
                <p className="mt-2 text-sm font-medium">{point.tie}</p>
                <p className="mt-1 text-xs text-muted-foreground">{point.after}</p>
              </div>
            ))}
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
