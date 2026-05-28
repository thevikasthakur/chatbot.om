import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chatbot.om"),
  title: {
    default: "Oman's Own Sovereign Chatbot | AI, Sales, Meetings, Bookings",
    template: "%s | chatbot.om",
  },
  description:
    "A sovereign, privacy-first AI sales chatbot for Omani businesses. Built for Arabic-English customers, Oman PDPL-aware workflows, bookings, follow-ups, and support.",
  applicationName: "chatbot.om",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "chatbot Oman",
    "AI chatbot Oman",
    "private chatbot",
    "sovereign chatbot Oman",
    "Arabic chatbot Oman",
    "sales chatbot Muscat",
    "Oman PDPL chatbot",
  ],
  openGraph: {
    title: "Oman's Own Sovereign Chatbot | AI, Sales, Meetings, Bookings",
    description:
      "Stop replying manually. Start running sales, service, bookings, and follow-ups with a private chatbot built for Oman.",
    url: "https://chatbot.om",
    siteName: "chatbot.om",
    locale: "en_OM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oman's Own Sovereign Chatbot | AI, Sales, Meetings, Bookings",
    description:
      "A sovereign, privacy-first AI sales chatbot for Omani businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffd046",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
