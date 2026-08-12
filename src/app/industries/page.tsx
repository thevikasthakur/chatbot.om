import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { CtaBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How chatbot.om is set up for real estate, workshops, clinics, retail, hospitality, contractors, property management, and more, across Oman.",
  alternates: { canonical: "/industries/" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Industries</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            The same chatbot.{" "}
            <span className="text-lime">Set up for your trade.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
            A workshop and a dental clinic get asked completely different
            questions. These pages cover what each one actually receives, and
            what the chatbot does with it.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}/`}
                className="group bg-ink-2 p-6 transition-colors hover:bg-ink-3"
              >
                <h2 className="text-base font-semibold group-hover:text-lime transition-colors">
                  {ind.name}
                </h2>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                  {ind.heroSub}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-lime">
                  Read more
                  <ArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Not on the list? The setup is the same whatever the trade.{" "}
            <Link href="/contact/" className="text-lime hover:underline underline-offset-4">
              Tell us what your customers ask
            </Link>{" "}
            and we will show you the version for your business.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
