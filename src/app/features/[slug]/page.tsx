import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { features } from "@/data/features";
import { PageHero, ProseSections, CheckList, CtaBanner } from "@/components/sections";

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const f = features.find((x) => x.slug === slug);
  if (!f) return {};
  return {
    title: f.name,
    description: f.short,
    alternates: { canonical: `/features/${f.slug}/` },
  };
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = features.find((x) => x.slug === slug);
  if (!f) notFound();

  const others = features.filter((x) => x.slug !== f.slug).slice(0, 3);

  return (
    <>
      <PageHero badge="Feature" title={f.heroTitle} sub={f.heroSub} />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProseSections sections={f.sections} />
          <div className="mx-auto mt-12 max-w-3xl">
            <h2 className="mb-6 text-xl font-semibold">Capabilities</h2>
            <CheckList items={f.bullets} />
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Keep reading</p>
          <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/features/${o.slug}/`}
                className="group border-t border-line-strong pt-5"
              >
                <h3 className="text-base font-semibold group-hover:text-lime transition-colors">
                  {o.name}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{o.short}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-lime">
                  Learn more <ArrowRight className="h-3 w-3" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/features/"
            className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:underline underline-offset-4"
          >
            All features <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
