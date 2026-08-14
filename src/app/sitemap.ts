import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getPublishedArticles, getSeriesList } from "@/lib/articles";
import { features } from "@/data/features";
import { industries } from "@/data/industries";
import { integrations } from "@/data/integrations";
import { templates } from "@/data/templates";

/** Routes that exist but should not be advertised to crawlers. */
const EXCLUDED = new Set(["/thank-you/"]);

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const standalone: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/product/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/product/ai-chatbot-for-websites/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/product/whatsapp-ai-chatbot/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/product/automated-support-tickets/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/product/smart-follow-ups/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/product/automated-lead-pipeline/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/product/dashboard-reporting/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/features/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/integration/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/template/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/comparison/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guideline/oman/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/self-hosted/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact/", priority: 0.6, changeFrequency: "yearly" },
  { path: "/get-started/", priority: 0.9, changeFrequency: "monthly" },
];

const collections: Entry[] = [
  ...features.map((f) => ({
    path: `/features/${f.slug}/`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  })),
  ...industries.map((i) => ({
    path: `/industries/${i.slug}/`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  ...integrations.map((i) => ({
    path: `/integration/${i.slug}/`,
    priority: 0.5,
    changeFrequency: "monthly" as const,
  })),
  ...templates.map((t) => ({
    path: `/template/${t.slug}/`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const blog: (Entry & { lastModified?: Date })[] = [
    { path: "/blog/", priority: 0.8, changeFrequency: "daily" },
    ...getSeriesList().map((s) => ({
      path: `/blog/series/${s.slug}/`,
      priority: 0.6,
      changeFrequency: "daily" as const,
    })),
    ...getPublishedArticles().map((a) => ({
      path: `/blog/${a.slug}/`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: new Date(`${a.modifiedDate}T00:00:00Z`),
    })),
  ];

  return [...standalone, ...collections, ...blog]
    .filter((e) => !EXCLUDED.has(e.path))
    .map((e) => ({
      url: `${site.url}${e.path}`,
      lastModified: "lastModified" in e && e.lastModified instanceof Date ? e.lastModified : lastModified,
      changeFrequency: e.changeFrequency,
      priority: e.priority,
    }));
}
