import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plug } from "lucide-react";
import { integrations } from "@/data/integrations";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect chatbot.om to the calendar, CRM, store platform, and automation tools you already run. Google Calendar, HubSpot, Salesforce, Zoho, Odoo, Shopify, Zapier, and more.",
  alternates: { canonical: "/integration/" },
};

const order = ["Calendar", "CRM", "ERP", "Ecommerce", "Website", "Automation", "Productivity"];

const byCategory = order
  .map((category) => ({
    category,
    items: integrations.filter((i) => i.category === category),
  }))
  .filter((g) => g.items.length > 0);

export default function IntegrationsPage() {
  return (
    <>
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Integrations</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            It works with{" "}
            <span className="text-lime">what you already run.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Bookings into your calendar, leads into your CRM, order answers from
            your store. Connected with an authorisation, not a project.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/features/rest-apis-and-webhooks/"
              className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              <Plug className="h-4 w-4 text-lime" aria-hidden /> Or use the API
            </Link>
          </div>
        </div>
      </section>

      {byCategory.map((group) => (
        <section key={group.category} className="border-b border-border py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">{group.category}</p>
            <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((i) => (
                <Link
                  key={i.slug}
                  href={`/integration/${i.slug}/`}
                  className="group border-t border-line-strong pt-5"
                >
                  <h2 className="text-base font-semibold group-hover:text-lime transition-colors">
                    {i.name}
                  </h2>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{i.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-lime">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <h2 className="max-w-xl text-2xl md:text-4xl">
              Running something{" "}
              <span className="accent-italic">nobody else has heard of</span>?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Most Omani businesses have one system that matters and no connector
              for it. A documented REST API and signed webhooks mean a developer
              can wire the path you care about in an afternoon.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
