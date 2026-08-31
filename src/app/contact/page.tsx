import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { ArrowUpRight, CalendarCheck, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { CtaBanner } from "@/components/sections";
import JsonLd from "@/components/JsonLd";
import { site, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Muscat Office",
  description:
    `Chatbot.OM moves to Office 315, Muscat Pavilion, Muscat Hills on ${site.office.availableFromLabel}. Until then, in-person meetings in Muscat and Seeb are by appointment only.`,
  ...pageMeta("/contact/"),
};

const officePage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${site.url}/contact/#page`,
  url: `${site.url}/contact/`,
  name: "Chatbot.OM contact and Muscat office",
  description: metadata.description,
  dateModified: "2026-08-31",
  mainEntity: {
    "@type": "Place",
    name: `Chatbot.OM — Muscat Hills office from ${site.office.availableFromLabel}`,
    description:
      `Chatbot.OM will be available at this office from ${site.office.availableFromLabel}. Until then, in-person meetings in Muscat and Seeb are available by appointment only.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 315, Muscat Pavilion, Hayy al Arafat Road, Muscat Hills",
      addressLocality: "Muscat",
      addressCountry: "OM",
    },
    hasMap: site.office.mapsUrl,
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={officePage} />
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            Talk to the people who{" "}
            <span className="text-lime">actually built it.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We are in Muscat, we work your week, and you talk directly to the
            people who built the product.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-ink-2 py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <p className="eyebrow">Office update · Effective {site.office.availableFromLabel}</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                More room. More conversations. <span className="text-lime">Same mission.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Chatbot.OM is moving to a bigger space in Muscat Hills. We are
                building it for the footfall ahead—not the footfall behind.
              </p>
              <address className="mt-6 not-italic text-base leading-relaxed">
                <span className="block font-semibold">From {site.office.availableFromLabel}</span>
                <span className="mt-1 block text-muted-foreground">{site.office.address}</span>
              </address>
            </div>
            <div className="border border-border bg-ink p-6">
              <CalendarCheck className="h-6 w-6 text-lime" aria-hidden />
              <h3 className="mt-4 text-base font-semibold">Until launch day</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Meetings are by appointment only. In-person meetings are available
                in Muscat and Seeb.
              </p>
              <a
                href={site.office.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-10 items-center gap-2 border border-line-strong px-4 text-sm font-medium transition-colors hover:bg-ink-3"
              >
                Open the new location <ArrowUpRight className="h-4 w-4 text-lime" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`mailto:${site.email}`}
              className="bg-ink-2 p-7 transition-colors hover:bg-ink-3"
            >
              <Mail className="h-6 w-6 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">Email</h2>
              <p className="mt-2 text-sm text-muted-foreground break-words">{site.email}</p>
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="bg-ink-2 p-7 transition-colors hover:bg-ink-3"
            >
              <Phone className="h-6 w-6 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">Phone</h2>
              <p className="mt-2 text-sm text-muted-foreground">{site.phone}</p>
            </a>
            <a
              href={whatsappUrl}
              className="bg-ink-2 p-7 transition-colors hover:bg-ink-3"
            >
              <MessageSquare className="h-6 w-6 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">WhatsApp</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Message us the way your customers message you
              </p>
            </a>
            <a
              href={site.office.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-ink-2 p-7 transition-colors hover:bg-ink-3"
            >
              <MapPin className="h-6 w-6 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">New office · from 1 Dec</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{site.office.address}</p>
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">The fastest route</p>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Send us your website{" "}
                <span className="text-lime">instead of a message.</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                Most conversations start better with something to look at. Give us
                your domain and we will have Chatbot.OM reading it, then show you
                what it can already answer and where the gaps are.
              </p>
              <Link
                href="/get-started/"
                className="mt-7 inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                Get Chatbot.OM <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div>
              <p className="eyebrow">Not sure which product</p>
              <h2 className="mt-4 text-3xl md:text-4xl">
                We will tell you if{" "}
                <span className="text-lime">the other one fits better.</span>
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                If your enquiries mostly arrive by telephone, chat is not where
                your problem is, and we would rather say so. {site.sister.name} is
                the sister product for organisations that need the phone line
                answered too.
              </p>
              <Link
                href="/comparison/"
                className="mt-7 inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                Compare the two <ArrowUpRight className="h-4 w-4 text-lime" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
