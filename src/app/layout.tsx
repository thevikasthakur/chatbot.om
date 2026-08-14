import type { Metadata, Viewport } from "next";
import { pageMeta } from "@/lib/meta";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";

const organisation = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/android-chrome-512x512.png`,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1st Floor, Al Muzn Mall, Al Hail North",
    addressLocality: "Muscat",
    addressCountry: "OM",
  },
  areaServed: { "@type": "Country", name: "Oman" },
  knowsLanguage: site.languages,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: site.email,
    telephone: site.phone,
    areaServed: "OM",
    availableLanguage: site.languages,
  },
  sameAs: [site.sister.url],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: "en-OM",
  publisher: { "@id": `${site.url}/#organization` },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.tagline} | AI chat, tickets, follow-ups, leads`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  ...pageMeta("/"),
  keywords: [
    "chatbot Oman",
    "AI chatbot Oman",
    "sovereign chatbot Oman",
    "Arabic chatbot Oman",
    "WhatsApp chatbot Oman",
    "customer support chatbot Muscat",
    "Oman Personal Data Protection Law chatbot",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_OM",
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0b0f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The next/font variable classes belong on <html>, not <body>: the theme
    // declares --font-display as var(--font-fraunces) at :root, and a custom
    // property is resolved where it is declared. Defining the font variables
    // one level lower leaves --font-display, --font-sans and --font-mono
    // empty, so every font-family rule falls back to system sans.
    <html lang="en-OM" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      <head>
        <JsonLd data={organisation} />
        <JsonLd data={website} />
      </head>
      <body className="page-frame min-h-screen bg-background text-foreground antialiased">
        <Header />
        {/* clip, not hidden: the homepage carousel overflows sideways but
            several sections rely on position: sticky, which hidden would break */}
        <main className="overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
