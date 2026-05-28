"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AudioLines, Globe2, Languages, MessageSquare } from "lucide-react";

export function VoiceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("voice-visible");
          } else {
            el.classList.remove("voice-visible");
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="voice-section" ref={sectionRef}>
      <div className="voice-grid">
        {/* Left: Image */}
        <div className="voice-image-wrap">
          <Image
            src="/teasers/omani-man-voice-noting-chatbot.webp"
            alt="Omani man sending a voice note on his phone"
            width={1200}
            height={600}
            quality={84}
            sizes="(max-width: 768px) 92vw, 50vw"
            className="voice-photo"
          />
        </div>

        {/* Center: Mic */}
        <div className="voice-mic-col">
          <div className="voice-ring voice-ring-1" />
          <div className="voice-ring voice-ring-2" />
          <div className="voice-ring voice-ring-3" />
          <div className="voice-mic-glow" />
          <div className="voice-mic">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="voice-mic-icon"
            >
              <rect x="9" y="1" width="6" height="12" rx="3" />
              <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
              <line x1="12" y1="18" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </div>
          <div className="voice-waves">
            <span className="voice-bar" style={{ animationDelay: "0s" }} />
            <span className="voice-bar" style={{ animationDelay: "0.12s" }} />
            <span className="voice-bar" style={{ animationDelay: "0.24s" }} />
            <span className="voice-bar" style={{ animationDelay: "0.08s" }} />
            <span className="voice-bar" style={{ animationDelay: "0.32s" }} />
            <span className="voice-bar" style={{ animationDelay: "0.16s" }} />
            <span className="voice-bar" style={{ animationDelay: "0.28s" }} />
          </div>
        </div>

        {/* Right: Copy */}
        <div className="voice-copy">
          <p className="voice-eyebrow">Voice-first by design</p>
          <h2 className="voice-headline">
            Oman doesn&rsquo;t type. Oman talks.
          </h2>
          <p className="voice-sub">
            Your customers send voice notes on WhatsApp.
          </p>

          <div className="voice-points">
            <div className="voice-point">
              <div className="voice-point-icon">
                <AudioLines aria-hidden="true" />
              </div>
              <div>
                <h3>Voice messages processed natively</h3>
                <p>The customer speaks, Chatbot understands.</p>
              </div>
            </div>

            <div className="voice-point">
              <div className="voice-point-icon">
                <Languages aria-hidden="true" />
              </div>
              <div>
                <h3>Arabic, English, Omani & Gulf</h3>
                <p>Handles all naturally including tone & accent.</p>
              </div>
            </div>

            <div className="voice-point">
              <div className="voice-point-icon">
                <MessageSquare aria-hidden="true" />
              </div>
              <div>
                <h3>WhatsApp voice notes supported</h3>
                <p>Voice notes work exactly how your you already use it.</p>
              </div>
            </div>

            <div className="voice-point">
              <div className="voice-point-icon">
                <Globe2 aria-hidden="true" />
              </div>
              <div>
                <h3>The sale moves forward</h3>
                <p>Voice becomes intent. Intent becomes a lead.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
