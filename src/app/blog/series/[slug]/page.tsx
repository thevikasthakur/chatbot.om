import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleThumbnail from "@/components/ArticleThumbnail";
import JsonLd from "@/components/JsonLd";
import { CtaBanner } from "@/components/sections";
import { pageMeta } from "@/lib/meta";
import { site } from "@/data/site";
import {
  formatArticleDate,
  getArticlesBySeriesSlug,
  getSeriesList,
  readTimeMinutes,
} from "@/lib/articles";

/** What each series is about, shown on its page and in its meta description. */
const SERIES_DESCRIPTIONS: Record<string, string> = {
  "chats-into-customers":
    "How conversations on WhatsApp, your website and Instagram become enquiries, bookings and paying customers, one selling skill at a time.",
  "oman-digital-pulse":
    "The Monday scan of what changed for businesses that sell and serve by message in Oman: consent rules, platform policies, scams to dodge and national digital pushes.",
  "whatsapp-at-work":
    "The channel where Omani business actually happens, done properly: setup, etiquette, templates, catalogues, voice notes and the rules of the platform.",
  "your-website-working":
    "Making a small business website earn its keep: visitors who finally ask, chat over forms, bilingual pages and being found and trusted online.",
  "small-team-playbook":
    "Running a two-to-ten person business from a phone: the operational pains, costed honestly in OMR, and the fixes from habits to automation.",
  "the-friday-story":
    "Friday stories of small business life in Oman, told through the chats, voice notes and DMs where the work really happens.",
  "ready-for-the-rush":
    "Getting a small business's chats, catalogue and coverage ready for what Oman's calendar brings next: Ramadan, Eid, khareef, National Day and more.",
};

export function generateStaticParams() {
  return getSeriesList().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSeriesList().find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.series}, from the ${site.name} Blog`,
    description: SERIES_DESCRIPTIONS[slug] ?? `Articles in the ${s.series} series.`,
    ...pageMeta(`/blog/series/${slug}/`),
  };
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getSeriesList().find((x) => x.slug === slug);
  if (!s) notFound();
  const articles = getArticlesBySeriesSlug(slug);

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${s.series}, from the ${site.name} Blog`,
    url: `${site.url}/blog/series/${slug}/`,
    inLanguage: "en-OM",
    isPartOf: { "@id": `${site.url}/blog/#blog` },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${site.url}/blog/${a.slug}/`,
        name: a.title,
      })),
    },
  };

  return (
    <>
      <JsonLd data={collection} />
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow inline-block mb-6">
            <Link href="/blog/" className="hover:text-lime transition-colors">
              Blog
            </Link>{" "}
            · Series
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl md:text-5xl leading-[1.08]">{s.series}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {SERIES_DESCRIPTIONS[slug] ?? `Every article in the ${s.series} series.`}
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}/`} className="group bg-ink-2 hover:bg-ink-3 transition-colors">
                <ArticleThumbnail article={a} />
                <div className="p-6">
                  <p className="eyebrow">{formatArticleDate(a.publishDate)}</p>
                  <h2 className="mt-3 font-display text-xl font-medium leading-snug group-hover:text-lime transition-colors">
                    {a.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{readTimeMinutes(a)} min read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
