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
    "Chatbot.OM plans from free to unlimited: 100 monthly sessions free, 2,000 for OMR 10, 25,000 for OMR 40, or unlimited for OMR 135.",
  ...pageMeta("/pricing/"),
  openGraph: {
    title: "Compare all four plans.",
    description:
      "Monthly plans: Free 100 sessions; Starter OMR 10/2,000; Business OMR 40/25,000; Enterprise OMR 135/unlimited. Overage: 250, 50, and 25 Bz.",
    url: "/pricing/",
    images: [
      {
        url: "/media/pricing-og-v6.png",
        width: 1200,
        height: 630,
        alt: "Chatbot.OM Free, Starter, Business, and Enterprise pricing plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare all four plans.",
    description:
      "Monthly plans: Free 100 sessions; Starter OMR 10/2,000; Business OMR 40/25,000; Enterprise OMR 135/unlimited. Overage: 250, 50, and 25 Bz.",
    images: ["/media/pricing-og-v6.png"],
  },
};

const plans = [
  {
    id: "free",
    name: "Free",
    price: "0",
    included: "100",
    overage: "250 Bz",
  },
  {
    id: "starter",
    name: "Starter",
    price: "10",
    included: "2,000",
    overage: "50 Bz",
  },
  {
    id: "business",
    name: "Business",
    price: "40",
    included: "25,000",
    overage: "25 Bz",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "135",
    included: "Unlimited",
    overage: "No overage",
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
    a: "Business is OMR 40 per month and includes 25,000 chat sessions each month. After that allowance, each additional chat session costs 25 Bz (OMR 0.025).",
  },
  {
    q: "What does the Enterprise plan cost?",
    a: "Enterprise is OMR 135 per month with unlimited chat sessions. An on-premises deployment on your servers or private cloud is also available on request.",
    link: { label: "See the on-premises option", href: "/self-hosted/" },
  },
  {
    q: "When does the next plan cost less?",
    a: "Free and Starter cost the same at 140 monthly sessions; Starter and Business cost the same at 2,600; Business and Enterprise cost the same at 28,800. After each of those points, the next plan costs less.",
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
        "25,000 chat sessions each month, then OMR 0.025 per additional session.",
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

      <section className="hatch-gutters border-b border-border pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl items-center gap-4 sm:gap-6">
            <span className="h-px flex-1 bg-lime" aria-hidden />
            <p className="shrink-0 border border-lime px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground sm:px-7 sm:text-sm">
              Chatbot.OM
            </p>
            <span className="h-px flex-1 bg-lime" aria-hidden />
          </div>
          <h1 className="mx-auto mt-8 max-w-6xl text-5xl leading-[0.98] md:text-7xl lg:text-[5.5rem]">
            Compare all four plans.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Choose by monthly conversation volume. Start free, pay less as chats
            grow, or choose unlimited with Enterprise. On-premises deployment is
            available on request.
          </p>
        </div>
      </section>

      <section className="hatch-gutters border-b border-border py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only" id="plan-comparison-heading">
            Compare pricing plans
          </h2>
          <div
            aria-describedby="plan-comparison-hint"
            aria-labelledby="plan-comparison-heading"
            className="isolate overflow-x-auto overscroll-x-contain pb-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            role="region"
            tabIndex={0}
          >
            <table className="w-full min-w-[60rem] table-fixed border-separate [border-spacing:0.5rem_0] text-center">
              <caption className="sr-only">
                Compare Chatbot.OM monthly pricing plans
              </caption>
              <colgroup>
                {plans.map((plan) => (
                  <col className="w-1/4" key={plan.id} />
                ))}
              </colgroup>
              <thead>
                <tr>
                  {plans.map((plan) => (
                    <th
                      className={
                        "px-5 py-5 font-mono text-base font-semibold uppercase tracking-[0.14em] xl:text-lg " +
                        (plan.id === "enterprise"
                          ? "border-x-[3px] border-t-[3px] border-b border-lime bg-lime text-ink"
                          : "border border-[rgba(212,255,79,0.78)] bg-ink-2 text-foreground")
                      }
                      id={"plan-" + plan.id}
                      key={plan.id}
                      scope="col"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {plans.map((plan) => (
                    <td
                      className={
                        "h-36 px-4 py-7 align-middle " +
                        (plan.id === "enterprise"
                          ? "border-x-[3px] border-b border-lime bg-ink shadow-[0_0_32px_rgba(212,255,79,0.13)]"
                          : "border-x border-b border-[rgba(212,255,79,0.78)] bg-ink-2")
                      }
                      headers={"plan-" + plan.id}
                      key={plan.id}
                    >
                      <span className="sr-only">Monthly price: </span>
                      <span className="inline-flex items-end justify-center gap-2">
                        <span className="font-sans text-6xl font-semibold leading-none tracking-tight text-lime tabular-nums xl:text-7xl">
                          {plan.price}
                        </span>
                        <span className="mb-1 whitespace-nowrap text-sm font-medium xl:text-base">
                          Rials / month
                        </span>
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  {plans.map((plan) => (
                    <td
                      className={
                        "h-24 px-5 py-5 align-middle " +
                        (plan.id === "enterprise"
                          ? "border-x-[3px] border-b border-lime bg-ink shadow-[0_0_32px_rgba(212,255,79,0.13)]"
                          : "border-x border-b border-[rgba(212,255,79,0.78)] bg-ink-2")
                      }
                      headers={"plan-" + plan.id}
                      key={plan.id}
                    >
                      <span className="sr-only">Included sessions per month: </span>
                      <span className="flex items-center gap-3 text-left">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                          <Check className="size-5" strokeWidth={3} aria-hidden />
                        </span>
                        <span className="text-base font-medium leading-snug xl:text-lg">
                          {plan.id === "enterprise"
                            ? plan.included
                            : plan.included + " sessions"}
                        </span>
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  {plans.map((plan) => (
                    <td
                      className={
                        "h-24 px-5 py-5 align-middle " +
                        (plan.id === "enterprise"
                          ? "border-x-[3px] border-b border-lime bg-ink shadow-[0_0_32px_rgba(212,255,79,0.13)]"
                          : "border-x border-b border-[rgba(212,255,79,0.78)] bg-ink-2")
                      }
                      headers={"plan-" + plan.id}
                      key={plan.id}
                    >
                      {plan.id === "enterprise" ? (
                        <Link
                          href="/self-hosted/"
                          className="flex items-center gap-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
                        >
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                            <Check className="size-5" strokeWidth={3} aria-hidden />
                          </span>
                          <span className="text-base font-medium leading-snug xl:text-lg">
                            On-premises on request
                          </span>
                        </Link>
                      ) : (
                        <span className="flex items-center gap-3 text-left">
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                            <Check className="size-5" strokeWidth={3} aria-hidden />
                          </span>
                          <span className="text-base font-medium leading-snug xl:text-lg">
                            <span className="sr-only">Overage: </span>
                            {plan.overage}{" "}
                            <span className="text-sm font-normal text-muted-foreground">
                              / extra session
                            </span>
                          </span>
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  {plans.map((plan) => (
                    <td
                      className={
                        "px-4 py-4 " +
                        (plan.id === "enterprise"
                          ? "border-x-[3px] border-b-[3px] border-lime bg-ink shadow-[0_0_32px_rgba(212,255,79,0.13)]"
                          : "border-x border-b border-[rgba(212,255,79,0.78)] bg-ink-2")
                      }
                      headers={"plan-" + plan.id}
                      key={plan.id}
                    >
                      <span className="sr-only">Get started: </span>
                      <Link
                        href={"/get-started/?plan=" + plan.id}
                        className={
                          "inline-flex min-h-11 w-full items-center justify-center gap-1.5 px-3 text-center text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime " +
                          (plan.id === "enterprise"
                            ? "bg-lime text-ink transition-[filter] hover:brightness-110"
                            : "border border-[rgba(212,255,79,0.78)] transition-colors hover:bg-ink-3")
                        }
                      >
                        Choose {plan.name}
                        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p
            className="mt-3 text-xs text-muted-foreground lg:hidden"
            id="plan-comparison-hint"
          >
            Swipe sideways to compare all four plans.
          </p>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 shrink-0 text-lime" aria-hidden />
            Every plan is hosted in Oman. Enterprise can also run on your servers
            or private cloud.
          </p>
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
                at: "28,800 sessions",
                tie: "Business = Enterprise at OMR 135",
                after: "From 28,801, Enterprise costs less.",
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
