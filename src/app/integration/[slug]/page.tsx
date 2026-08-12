import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { integrations } from "@/data/integrations";
import { PageHero, ProseSections, CheckList, CtaBanner } from "@/components/sections";

export function generateStaticParams() {
  return integrations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const i = integrations.find((x) => x.slug === slug);
  if (!i) return {};
  return {
    title: `${i.name} integration`,
    description: i.short,
    alternates: { canonical: `/integration/${i.slug}/` },
  };
}

export default async function IntegrationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const i = integrations.find((x) => x.slug === slug);
  if (!i) notFound();

  const related = integrations
    .filter((x) => x.slug !== i.slug && x.category === i.category)
    .slice(0, 3);

  return (
    <>
      <PageHero
        badge={i.category}
        title={`${i.name} and chatbot.om`}
        sub={i.short}
      />

      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProseSections sections={i.sections} />
          <div className="mx-auto mt-12 max-w-3xl">
            <h2 className="mb-6 text-xl font-semibold">What you can do</h2>
            <CheckList items={i.capabilities} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-b border-border py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="eyebrow">Other {i.category.toLowerCase()} connections</p>
            <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/integration/${r.slug}/`}
                  className="group border-t border-line-strong pt-5"
                >
                  <h3 className="text-base font-semibold group-hover:text-lime transition-colors">
                    {r.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{r.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/integration/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:underline underline-offset-4"
          >
            All integrations <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
