import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { InstallRequestForm } from "@/components/InstallRequestForm";
import { Faq } from "@/components/sections";

export const metadata: Metadata = {
  title: "Get the chatbot",
  description:
    "Give us your website and we will have the chatbot reading it today. Live in about a day, hosted inside Oman, in Arabic and English.",
  alternates: { canonical: "/get-started/" },
};

const steps = [
  {
    n: "01",
    t: "You give us the domain",
    d: "That is the whole form. No account to create, no card, nothing to install yet.",
  },
  {
    n: "02",
    t: "The chatbot reads your site",
    d: "Services, prices, policies, hours, locations. We come back with what it can already answer and where the gaps are.",
  },
  {
    n: "03",
    t: "You fill the gaps",
    d: "Upload what is not published and tell us which topics must always reach a person. Usually an hour of your time.",
  },
  {
    n: "04",
    t: "It goes live",
    d: "One script tag on your website, and WhatsApp once the number and templates are approved.",
  },
];

const faqs = [
  {
    q: "What happens after I send my website?",
    a: "A person reads it, the chatbot ingests it, and we come back to you with what it can answer out of the box and which questions it cannot yet. That report is useful whether or not you go ahead.",
  },
  {
    q: "Do I need to install anything to see it?",
    a: "No. We show you the chatbot answering questions about your own business before anything touches your site. The script tag comes later, once you are satisfied with the answers.",
  },
  {
    q: "How long until it is actually live?",
    a: "About a day for the website chatbot once you have approved the answers. WhatsApp takes a few days longer because the number and your message templates have to be approved on the WhatsApp Business Platform.",
  },
  {
    q: "What do you do with my website details?",
    a: "We read your published pages to configure the chatbot and we contact you about it. Nothing is shared with anyone else, and conversation data lives on servers inside Oman in line with the Personal Data Protection Law.",
  },
  {
    q: "We are not sure this is the right product for us.",
    a: "Say so and we will look at where your enquiries actually come from. If most of them are telephone calls, our sister product is the better fit and we will point you there instead.",
    link: { label: "Compare the two", href: "/comparison/" },
  },
];

export default function GetStartedPage() {
  return (
    <>
      {/* ── Hero with the form ── */}
      <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow">Get started</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.06]">
            Give us your website.{" "}
            <span className="text-lime">We will do the rest.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            One field, and less than two minutes. We read the site, connect the
            data you approve, and show you the chatbot answering questions about
            your own business.
          </p>

          <div className="mt-10 flex justify-center">
            <InstallRequestForm ctaSource="get-started-page" />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              "No account needed",
              "No card",
              "Nothing to install to see it",
              "Hosted inside Oman",
            ].map((b) => (
              <span key={b} className="eyebrow border border-border bg-ink-2 px-3 py-1.5">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">What happens next</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            Four steps, and{" "}
            <span className="text-lime">only one of them is yours.</span>
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-line-strong pt-5">
                <span className="font-mono text-xs text-lime">{s.n}</span>
                <h3 className="mt-2 text-base font-semibold">{s.t}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What you get ── */}
      <section className="hatch-gutters border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="max-w-xl text-2xl md:text-4xl">
                What is included{" "}
                <span className="accent-italic">from the first day</span>.
              </h2>
              <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
                There is no starter tier that quietly leaves out the parts that
                matter. Everything below is how the product works, not an upsell.
              </p>
              <Link
                href="/product/"
                className="mt-6 inline-flex h-10 items-center gap-2 border border-line-strong px-5 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                See the whole product <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <ul className="space-y-3">
              {[
                "Website chat and WhatsApp, with one shared memory",
                "Arabic and English, including voice notes",
                "Answers grounded in your own published material",
                "Handover to a person, with the whole conversation",
                "Support tickets raised and chased to closure",
                "Qualified leads with a named owner",
                "Live dashboard and reporting",
                "Every conversation stored inside Oman",
              ].map((l) => (
                <li key={l} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime" aria-hidden />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-lime" aria-hidden />
            Oman Personal Data Protection Law compliant · Data never leaves the Sultanate
          </p>
        </div>
      </section>

      <Faq items={faqs} sub="Before you send us anything." />
    </>
  );
}
