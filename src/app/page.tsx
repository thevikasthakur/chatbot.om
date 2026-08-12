import { ArrowRight, CheckCircle2 } from "lucide-react";
import { InstallRequestForm } from "@/components/InstallRequestForm";
import { FloatingInstallCta } from "@/components/FloatingInstallCta";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { SovereignSection } from "@/components/SovereignSection";
import { VoiceSection } from "@/components/VoiceSection";
import { ChannelsSection } from "@/components/ChannelsSection";
import { CommandCarousel } from "@/components/CommandCarousel";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";

const trustBadges = [
  "Hosted inside Oman",
  "Sells while you sleep",
  "Arabic + English",
  "Live in about a day",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: site.url,
  areaServed: { "@type": "Country", name: "Oman" },
  description: site.description,
  inLanguage: "en-OM",
  featureList: [
    "AI chatbot for websites",
    "WhatsApp chatbot with voice note handling",
    "Automated support tickets",
    "Smart follow-ups on open tickets",
    "Automated lead pipeline and lead enrichment",
    "Dashboard and reporting",
    "Arabic and English customer conversations",
    "Sovereign hosting inside Oman",
    "Self-hosted deployment option",
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />

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
        <div className="hero-copy">
          <h1>
            <span className="hero-highlight">Oman&rsquo;s Own Sovereign Chatbot</span>
          </h1>
          <p className="hero-subline">
            It answers your customers on the website and on WhatsApp, in Arabic
            and English, raises the ticket, chases it to closure, and leaves your
            team a lead sheet worth working. Every message stays inside Oman.
          </p>
        </div>
      </section>

      <section aria-label="Product promises" className="trust-strip">
        {trustBadges.map((badge) => (
          <div className="trust-item" key={badge}>
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
            <span>{badge}</span>
          </div>
        ))}
      </section>

      <CommandCarousel />

      <ChannelsSection />

      <VoiceSection />

      <ShowcaseSection />

      <SovereignSection />

      <section className="final-cta" id="install">
        <div className="final-copy">
          <p className="eyebrow">Your website is quiet. Fix that.</p>
          <h2>
            <span className="hero-highlight">Install the chatbot that knows Oman.</span>
          </h2>
          <p>
            Enter your website. We review the site, connect the data you approve,
            and launch the chatbot. Less than two minutes to start.
          </p>
        </div>
        <InstallRequestForm compact ctaSource="final-domain-cta" />
        <a className="final-link" href="#top">
          <span>Back to top</span>
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </section>

      <FloatingInstallCta hideBelow="#install" />
    </>
  );
}
