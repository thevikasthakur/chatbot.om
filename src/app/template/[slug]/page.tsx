import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { templates } from "@/data/templates";
import { ProseSections, CtaBanner } from "@/components/sections";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = templates.find((x) => x.slug === slug);
  if (!t) return {};
  return {
    title: t.name,
    description: t.short,
    ...pageMeta(`/template/${t.slug}/`),
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = templates.find((x) => x.slug === slug);
  if (!t) notFound();

  const related = templates.filter((x) => x.slug !== t.slug).slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow">{t.industry} template</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.06]">{t.name}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {t.short}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/get-started/"
              className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              Start with this template <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── The flow ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">What the chatbot does, in order</p>
          <h2 className="mt-4 text-3xl md:text-4xl">The flow</h2>
          <ol className="mt-10 divide-y divide-[rgba(212,255,79,0.18)] border-t border-b border-[rgba(212,255,79,0.18)]">
            {t.steps.map((s, i) => (
              <li key={s} className="flex items-start gap-5 py-5">
                <span className="font-mono text-xs text-lime pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm md:text-base leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Detail ── */}
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProseSections sections={t.sections} />
        </div>
      </section>

      {/* ── Related ── */}
      <section className="border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Other templates</p>
          <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/template/${r.slug}/`}
                className="group border-t border-line-strong pt-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {r.industry}
                </p>
                <h3 className="mt-2 text-base font-semibold group-hover:text-lime transition-colors">
                  {r.name}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{r.short}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/template/"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:underline underline-offset-4"
          >
            All templates <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
