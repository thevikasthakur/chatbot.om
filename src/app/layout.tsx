import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chatbot.om"),
  title: {
    default: "chatbot.om | Sovereign AI Sales Chatbot for Oman",
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
    title: "chatbot.om | Sovereign AI Sales Chatbot for Oman",
    description:
      "Stop replying manually. Start running sales, service, bookings, and follow-ups with a private chatbot built for Oman.",
    url: "https://chatbot.om",
    siteName: "chatbot.om",
    locale: "en_OM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "chatbot.om | Sovereign AI Sales Chatbot for Oman",
    description:
      "A sovereign, privacy-first AI sales chatbot for Omani businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
