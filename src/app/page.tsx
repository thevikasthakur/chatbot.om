import { ArrowRight, CheckCircle2 } from "lucide-react";
import { InstallRequestForm } from "@/components/InstallRequestForm";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { SovereignSection } from "@/components/SovereignSection";
import { VoiceSection } from "@/components/VoiceSection";
import { ChannelsSection } from "@/components/ChannelsSection";
import { CommandCarousel } from "@/components/CommandCarousel";

const trustBadges = [
  "Sovereign cloud-hosted",
  "Self-hosted option for enterprise",
  "Arabic + English",
  "Sales mindset by default",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "chatbot.om",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  areaServed: {
    "@type": "Country",
    name: "Oman",
  },
  description:
    "A sovereign, privacy-first AI sales chatbot for Omani businesses.",
  featureList: [
    "Sovereign cloud-hosted chatbot deployment",
    "Enterprise self-hosted deployment option",
    "Arabic and English customer support",
    "Lead qualification",
    "Appointment booking",
    "Sentiment analysis",
    "Sales follow-up",
  ],
};

export default function Home() {
  return (
    <>
    <main className="bg-[#f6f3ec] text-ink" style={{ overflowX: "clip" }}>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />

      <section className="hero-shell" id="top">
        <video
          aria-hidden="true"
          autoPlay
          className="hero-video"
          loop
          muted
          playsInline
          poster="/hero/chatbot-om-poster.webp"
          preload="metadata"
        >
          <source src="/hero/chat-om-5fps.av1.mp4" type="video/mp4; codecs=av01.0.05M.08" />
          <source src="/hero/chat-om-5fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </section>

      <section aria-label="Product promises" className="trust-strip">
        {trustBadges.map((badge) => (
          <div className="trust-item" key={badge}>
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
            <span>{badge}</span>
          </div>
        ))}
      </section>

      <SovereignSection />

      <VoiceSection />

      <ChannelsSection />

      <CommandCarousel />

      <ShowcaseSection />

      <section className="final-cta" id="install">
        <div className="final-copy">
          <p className="eyebrow">Your website is quiet. Fix that.</p>
          <h2>Install the chatbot that knows Oman.</h2>
          <p>
            Enter your website. We review the site, connect approved data,
            and launch the chatbot. Less than two minutes to start.
          </p>
        </div>
        <InstallRequestForm compact ctaSource="final-domain-cta" />
        <a className="final-link" href="#top">
          <span>Back to top</span>
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </section>
    </main>
    <div className="floating-cta">
      <InstallRequestForm ctaSource="hero-domain-cta" hideIdleStatus />
    </div>
    </>
  );
}
