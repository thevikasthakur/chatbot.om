import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import type { FaqItem, Section } from "@/data/types";

export function PageHero({
  badge,
  title,
  sub,
  cta = true,
}: {
  badge?: string;
  title: string;
  sub?: string;
  cta?: boolean;
}) {
  return (
    <section className="border-b border-border pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {badge && <span className="eyebrow inline-block mb-6">{badge}</span>}
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl leading-[1.06]">{title}</h1>
        {sub && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {sub}
          </p>
        )}
        {cta && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/get-started/"
              className="inline-flex h-11 items-center gap-2 border border-line-strong px-7 text-sm font-medium hover:bg-ink-3 transition-colors"
            >
              Get the chatbot <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function ProseSections({ sections }: { sections: Section[] }) {
  return (
    <div className="prose-chat mx-auto">
      {sections.map((s, i) => (
        <div key={i}>
          {s.h && <h2>{s.h}</h2>}
          {s.p.map((para, j) => (
            <p key={j}>{para}</p>
          ))}
          {s.bullets && (
            <ul>
              {s.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check className="h-5 w-5 text-lime shrink-0 mt-0.5" aria-hidden />
          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Faq({
  items,
  title = "FAQ",
  sub = "The questions Omani teams ask us most often.",
}: {
  items: FaqItem[];
  title?: string;
  sub?: string;
}) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl">{title}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{sub}</p>
          <div className="mt-10 divide-y divide-[rgba(212,255,79,0.18)] border-t border-b border-[rgba(212,255,79,0.18)]">
            {items.map((f, i) => (
              <details key={f.q} className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between text-base md:text-lg font-medium list-none">
                  {f.q}
                  <span
                    className="ml-4 text-lime transition-transform group-open:rotate-45 text-2xl leading-none shrink-0"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </p>
                {f.link && (
                  <Link
                    href={f.link.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-lime hover:underline underline-offset-4"
                  >
                    {f.link.label}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                )}
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section
      className="border-t border-border py-20 md:py-28"
      style={{
        backgroundImage:
          "radial-gradient(70% 45% at 50% 118%, rgba(212,255,79,0.45) 0%, rgba(212,255,79,0) 60%), linear-gradient(180deg, #0A0B0F 0%, #161C03 55%, #3A4A08 88%, #71900F 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl md:text-6xl">
          Your website is quiet. <span className="accent-italic">Fix that.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Give us your website and we will have the chatbot reading it today.
          Your customer data stays inside Oman.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/get-started/"
            className="inline-flex h-11 items-center gap-2 bg-lime px-7 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
          >
            Get the chatbot <span aria-hidden>+</span>
          </Link>
        </div>
        <p className="mt-7 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-lime" aria-hidden />
          Oman Personal Data Protection Law compliant · Data never leaves the Sultanate
        </p>
      </div>
    </section>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-6 py-8 text-center">
      <p className="font-display text-3xl md:text-4xl font-medium tracking-tight">{value}</p>
      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function StatStrip({ stats }: { stats: { v: string; l: string }[] }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-[rgba(212,255,79,0.28)] md:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.l} value={s.v} label={s.l} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CardGrid({
  items,
  cols = 3,
}: {
  items: { title: string; desc: string; href?: string }[];
  cols?: 2 | 3 | 4;
}) {
  const colCls =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-px border border-border bg-border ${colCls}`}>
      {items.map((it) => {
        const inner = (
          <>
            <h3 className="text-base font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </>
        );
        return it.href ? (
          <Link
            key={it.title}
            href={it.href}
            className="bg-ink-2 p-6 hover:bg-ink-3 transition-colors"
          >
            {inner}
          </Link>
        ) : (
          <div key={it.title} className="bg-ink-2 p-6">
            {inner}
          </div>
        );
      })}
    </div>
  );
}

/** Rule-topped column list, the layout used across every product page. */
export function RuleGrid({
  items,
  cols = 3,
}: {
  items: { title: string; desc: string; icon?: React.ComponentType<{ className?: string }> }[];
  cols?: 2 | 3 | 4;
}) {
  const colCls =
    cols === 2
      ? "sm:grid-cols-2"
      : cols === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-x-10 gap-y-12 ${colCls}`}>
      {items.map((it) => (
        <div key={it.title} className="border-t border-line-strong pt-5">
          {it.icon && <it.icon className="h-5 w-5 text-lime" aria-hidden />}
          <h3 className={`text-base font-semibold ${it.icon ? "mt-3" : ""}`}>{it.title}</h3>
          <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}
