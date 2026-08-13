import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, TriangleAlert } from "lucide-react";
import { industries } from "@/data/industries";
import { CtaBanner, Faq } from "@/components/sections";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) return {};
  return {
    title: ind.heroTitle,
    description: ind.heroSub,
    ...pageMeta(`/industries/${ind.slug}/`),
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) notFound();

  const others = industries.filter((x) => x.slug !== ind.slug).slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow">{ind.name}</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl md:text-6xl leading-[1.06]">
            {ind.heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {ind.heroSub}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/get-started/"
              className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              Get Chatbot.OM <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pain points ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">What goes wrong today</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            The messages you{" "}
            <span className="text-lime">did not get around to.</span>
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {ind.painPoints.map((p) => (
              <div key={p.title} className="border-t border-line-strong pt-5">
                <TriangleAlert className="h-5 w-5 text-lime" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ── */}
      <section
        className="border-b border-border py-16 md:py-24"
        style={{
          backgroundImage:
            "radial-gradient(70% 45% at 50% 112%, rgba(212,255,79,0.35) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">What it handles instead</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            Answered, booked, and{" "}
            <span className="accent-italic">written down</span>.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {ind.useCases.map((u) => (
              <div key={u.title} className="border border-border bg-ink-2/95 p-6">
                <Check className="h-5 w-5 text-lime" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{u.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Oman note ── */}
      <section className="hatch-gutters border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Why it is different here</p>
          <h2 className="mt-4 text-2xl md:text-4xl">
            {ind.name} <span className="accent-italic">in Oman</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{ind.omanNote}</p>
        </div>
      </section>

      <Faq items={ind.faqs} sub={`What ${ind.name.toLowerCase()} ask us before they start.`} />

      {/* ── Other industries ── */}
      <section className="border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Other trades</p>
          <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/industries/${o.slug}/`}
                className="group border-t border-line-strong pt-5"
              >
                <h3 className="text-base font-semibold group-hover:text-lime transition-colors">
                  {o.name}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-lime">
                  Read more <ArrowRight className="h-3 w-3" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/industries/"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:underline underline-offset-4"
          >
            All industries <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
