"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type ShowcaseItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  eyebrow: string;
  headline: string;
  body: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    src: "/teasers/leads-sentiment.webp",
    alt: "Lead queue showing Omani contacts with channel and sentiment scores",
    width: 2160,
    height: 1714,
    eyebrow: "Every visitor is a signal",
    headline: "",
    body: "Names. Channels. Sentiment scored to the decimal. The chatbot doesn’t just answer people. It builds a live lead sheet while your team sleeps. WhatsApp, web chat, email. Every thread becomes a row in your pipeline. No CRM tab-switching. No copy-paste. The machine does the boring work so humans can do the closing.",
  },
  {
    src: "/teasers/tasks-completion.webp",
    alt: "Task completion dashboard for chatbot jobs",
    width: 1280,
    height: 2498,
    eyebrow: "Accountability, not vibes",
    headline: "If you can’t measure it, you can’t fix it.",
    body: "See exactly which jobs the bot nails and where it falls short. Most businesses guess. You operate.",
  },
  {
    src: "/teasers/sentiment-trends.webp",
    alt: "Sentiment trend chart over time",
    width: 1920,
    height: 1134,
    eyebrow: "Read the room at scale",
    headline: "Customer mood is a leading indicator. Revenue is a lagging one.",
    body: "When the line dips, something broke. You see the shift in real time, not in next quarter’s churn report.",
  },
  {
    src: "/teasers/sentiment-distribution.webp",
    alt: "Sentiment distribution donut chart",
    width: 1760,
    height: 1330,
    eyebrow: "The scoreboard",
    headline: "81.8% positive. That number should terrify your competitors.",
    body: "Nine out of eleven conversations end positive. The 9% negative get flagged, escalated, and fixed. Nothing hides.",
  },
];

export function ShowcaseSection() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add("sc-visible");
            } else {
              el.classList.remove("sc-visible");
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="sc-showcase">
      <div className="sc-showcase-header">
        <p className="eyebrow">The dashboard that makes people lean in</p>
        <h2><span className="hero-highlight">Chats become operating intelligence.</span></h2>
      </div>

      {showcaseItems.map((item, i) => {
        const isHero = i === 0;
        const isReversed = !isHero && i % 2 !== 0;
        return (
          <div
            key={item.src}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className={`sc-row ${isHero ? "sc-row-hero" : ""} ${isReversed ? "sc-row-reversed" : ""} ${i === 1 ? "sc-row-sticky" : ""}`}
          >
            <div className={i === 1 ? "sc-copy-wrap" : undefined}>
              <div className="sc-copy">
                <p className="sc-eyebrow">{item.eyebrow}</p>
                <h3 className="sc-headline">
                  {item.headline && <span className="hero-highlight">{item.headline}</span>}
                </h3>
                <p className="sc-body">{item.body}</p>
              </div>
            </div>

            <div className="sc-image-wrap">
              <div className="sc-image-inner">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  quality={84}
                  sizes={isHero ? "100vw" : "(max-width: 768px) 92vw, 520px"}
                  className="sc-image"
                />
                {isHero && (
                  <div className="sc-hero-overlay-text">
                    <h3>{item.headline}</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
