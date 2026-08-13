import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { templates } from "@/data/templates";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Ready-made chatbot setups for Omani businesses: maintenance requests, clinic bookings, car servicing, order status, property viewings, and more.",
  ...pageMeta("/template/"),
};

export default function TemplatesPage() {
  const featured = templates.filter((t) => t.featured);
  const rest = templates.filter((t) => !t.featured);

  return (
    <>
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Templates</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            Start from a setup{" "}
            <span className="text-lime">that already works.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Each template is a complete configuration for one job: the questions
            it asks, the order it asks them in, and what it creates at the end.
            Adapt it to your business on day one.
          </p>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="border-b border-border py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">
              <Star className="mr-2 inline h-4 w-4 text-lime" aria-hidden />
              Most used
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {featured.map((t) => (
                <Link
                  key={t.slug}
                  href={`/template/${t.slug}/`}
                  className="group border border-border bg-ink-2 p-7 transition-colors hover:bg-ink-3"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {t.industry}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold group-hover:text-lime transition-colors">
                    {t.name}
                  </h2>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{t.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-lime">
                    Open template
                    <ArrowRight
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-border py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Every template</p>
          <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((t) => (
              <Link
                key={t.slug}
                href={`/template/${t.slug}/`}
                className="group border-t border-line-strong pt-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {t.industry}
                </p>
                <h2 className="mt-2 text-base font-semibold group-hover:text-lime transition-colors">
                  {t.name}
                </h2>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{t.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-lime">
                  Open template <ArrowRight className="h-3 w-3" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
