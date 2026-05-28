"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, LockKeyhole, MapPin, Scale, ShieldCheck } from "lucide-react";

export function SovereignSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function onScroll() {
      const viewH = window.innerHeight;
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const raw = 1 - rect.top / viewH;
        const progress = Math.min(Math.max(raw, 0), 1);
        const scale = 0.55 + progress * 0.45;
        const opacity = Math.min(progress * 1.8, 1);
        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="sovereign-section">
      <div className="sovereign-grid">
        <div className="sovereign-copy">
          <div className="sovereign-badge">
            <CheckCircle2 aria-hidden="true" className="sovereign-badge-icon" />
            <span>Your data. Our commitment.</span>
          </div>

          <h2 className="sovereign-headline">
            Your chat data stays{" "}
            <span className="sovereign-accent">inside Oman</span>
          </h2>

          <p className="sovereign-sub">
            We store and process all customer chat data exclusively within Oman.
            Your data stays local, private, and secure.
          </p>

          <div className="sovereign-points">
            <div className="sovereign-point">
              <div className="sovereign-point-icon">
                <MapPin aria-hidden="true" />
              </div>
              <div>
                <h3>Stored in Oman</h3>
                <p>All data is hosted on secure servers located in Oman.</p>
              </div>
            </div>

            <div className="sovereign-point">
              <div className="sovereign-point-icon">
                <ShieldCheck aria-hidden="true" />
              </div>
              <div>
                <h3>Private &amp; Secure</h3>
                <p>Your conversations are protected with industry-leading security.</p>
              </div>
            </div>

            <div className="sovereign-point">
              <div className="sovereign-point-icon">
                <CheckCircle2 aria-hidden="true" />
              </div>
              <div>
                <h3>Data Protection Compliance</h3>
                <p>We comply with Oman&rsquo;s data protection laws and regulations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sovereign-image-wrap">
          <Image
            alt="Oman sovereign AI chatbot with data stored in Oman on local servers"
            src="/teasers/oman-sovereign-ai-chabot-oman.webp"
            width={800}
            height={700}
            quality={84}
            sizes="(max-width: 768px) 90vw, 560px"
            className="sovereign-image"
          />

          {/* Top-left card — encryption */}
          <div
            className="sovereign-card sovereign-card-tl"
            ref={(el) => { cardsRef.current[0] = el; }}
          >
            <div className="sovereign-card-icon">
              <LockKeyhole aria-hidden="true" />
            </div>
            <div className="sovereign-card-copy">
              <span className="sovereign-card-number">Data Encrypted</span>
              <span className="sovereign-card-text">Sensitive data stays protected</span>
            </div>
          </div>

          {/* Bottom-right card — 100% data */}
          <div
            className="sovereign-card sovereign-card-br"
            ref={(el) => { cardsRef.current[1] = el; }}
          >
            <div className="sovereign-card-icon">
              <ShieldCheck aria-hidden="true" />
            </div>
            <div className="sovereign-card-copy">
              <span className="sovereign-card-number">100% of chat data</span>
              <span className="sovereign-card-text">remains within Oman</span>
            </div>
          </div>

          {/* Top-right card — PDPL compliant */}
          <div
            className="sovereign-card sovereign-card-tr"
            ref={(el) => { cardsRef.current[2] = el; }}
          >
            <div className="sovereign-card-icon">
              <Scale aria-hidden="true" />
            </div>
            <div className="sovereign-card-copy">
              <span className="sovereign-card-number">PDPL compliant</span>
              <span className="sovereign-card-text">Oman&rsquo;s Data Protection Law</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
