import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { CtaBanner } from "@/components/sections";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the team in Muscat. Email, phone, WhatsApp, or send us your website and we will show you the chatbot reading it.",
  alternates: { canonical: "/contact/" },
};

const whatsappNumber = site.phone.replace(/[^0-9]/g, "");

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            Talk to the people who{" "}
            <span className="text-lime">actually built it.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We are in Muscat, we work your week, and there is no support queue in
            another time zone between you and an answer.
          </p>
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
              href={`https://wa.me/${whatsappNumber}`}
              className="bg-ink-2 p-7 transition-colors hover:bg-ink-3"
            >
              <MessageSquare className="h-6 w-6 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">WhatsApp</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Message us the way your customers message you
              </p>
            </a>
            <div className="bg-ink-2 p-7">
              <MapPin className="h-6 w-6 text-lime" aria-hidden />
              <h2 className="mt-4 text-base font-semibold">Office</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{site.address}</p>
            </div>
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
                your domain and we will have the chatbot reading it, then show you
                what it can already answer and where the gaps are.
              </p>
              <Link
                href="/get-started/"
                className="mt-7 inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
              >
                Get the chatbot <ArrowUpRight className="h-4 w-4" aria-hidden />
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
