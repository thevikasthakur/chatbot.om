import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank you",
  description: "We have your request and we will be in touch shortly.",
  robots: { index: false },
  alternates: { canonical: "/thank-you/" },
};

export default function ThankYouPage() {
  return (
    <section className="border-b border-border pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-lime" aria-hidden />
        <h1 className="mt-6 text-4xl md:text-5xl">Got it.</h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground leading-relaxed">
          Someone in Muscat is reading your website now. You will hear from us
          with what the chatbot can already answer, and where the gaps are.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/product/"
            className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
          >
            See what it does <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/guideline/oman/"
            className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
          >
            Read the Oman guide
          </Link>
        </div>
      </div>
    </section>
  );
}
