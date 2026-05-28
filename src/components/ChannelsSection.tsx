"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const lines = [
  { text: "Website. WhatsApp. Email.", bg: "#ffd046", color: "#080a12" },
  { text: "Shows up where your customers already are.", bg: "#e27042", color: "#fff" },
  { text: "Identifies returning visitors across channels.", bg: "#10875a", color: "#fff" },
  { text: "Picks up every conversation where it left off.", bg: "#3b82f6", color: "#fff" },
  { text: "Channels change. Context never breaks.", bg: "#a78bfa", color: "#fff" },
];

export function ChannelsSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const prevIdx = useRef(-1);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    function onScroll() {
      const rect = wrap!.getBoundingClientRect();
      const viewH = window.innerHeight;
      const totalScroll = wrap!.scrollHeight - viewH;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScroll, 0), 1);

      const idx = Math.min(
        Math.floor(progress * lines.length),
        lines.length - 1
      );

      if (idx !== prevIdx.current) {
        const prev = linesRef.current[prevIdx.current];
        if (prev) prev.classList.remove("channels-line-active");
        const next = linesRef.current[idx];
        if (next) next.classList.add("channels-line-active");
        prevIdx.current = idx;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="channels-wrap" ref={wrapRef}>
      <section className="channels-hero channels-hero-sticky">
        <Image
          alt="Omani woman using chatbot on her phone in Muscat"
          className="channels-hero-img"
          fill
          priority
          quality={84}
          sizes="100vw"
          src="/teasers/one-bot-for-website-whatsapp-email.webp"
        />
        <div className="channels-hero-overlay" />
        <div className="channels-hero-content">
          <h2>One Chatbot. All Channels.</h2>
          <div className="channels-lines">
            {lines.map((line, i) => (
              <p
                key={line.text}
                ref={(el) => { linesRef.current[i] = el; }}
                className={`channels-line${i === 0 ? " channels-line-active" : ""}`}
                style={{
                  backgroundColor: line.bg,
                  color: line.color,
                }}
              >
                {line.text}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
