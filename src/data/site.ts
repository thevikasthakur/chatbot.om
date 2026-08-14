export const site = {
  name: "Chatbot.OM",
  domain: "chatbot.om",
  url: "https://chatbot.om",
  tagline: "Oman's own sovereign chatbot",
  description:
    "Chatbot.OM is a sovereign AI-powered chatbot for Omani businesses. It handles customer questions on your website and on WhatsApp in Arabic and English, raises support tickets, chases them to closure, turns enquiries into enriched leads, and keeps every conversation on servers inside the Sultanate.",
  /** Sister site running the full customer care suite, including voice. */
  sister: {
    name: "CustomerCare.OM",
    domain: "customercare.om",
    url: "https://customercare.om",
  },
  languages: [
    "Omani Arabic",
    "Gulf Arabic",
    "English",
    "Standard Arabic",
    "Hindi",
    "Urdu",
    "Malayalam",
    "Bengali",
    "Swahili",
  ],
  email: "contact@chatbot.om",
  phone: "+968 9730 2812",
  address: "1st Floor, Al Muzn Mall, Al Hail North, Muscat, Sultanate of Oman",
  /** Channels chatbot.om itself covers. Voice calls belong to the sister site. */
  channels: ["Website chat", "WhatsApp", "Email replies"],
};

/**
 * Click-to-chat link for the business number.
 *
 * Uses WhatsApp's `api.whatsapp.com/send` endpoint rather than the `wa.me`
 * short link: as of August 2026 wa.me resolves but resets the TLS connection,
 * so those links fail to open. Both are WhatsApp's own, and this one is the
 * older, documented form. Keep the number digits-only, country code first.
 */
export const whatsappUrl = `https://api.whatsapp.com/send?phone=${site.phone.replace(/\D/g, "")}`;

export type NavChild = { label: string; desc?: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  {
    label: "Product",
    children: [
      {
        label: "AI Chatbot for Websites",
        desc: "The sovereign chatbot that answers while you sleep",
        href: "/product/ai-chatbot-for-websites/",
      },
      {
        label: "WhatsApp AI Chatbot",
        desc: "Chats, voice notes, reminders, and confirmations",
        href: "/product/whatsapp-ai-chatbot/",
      },
      {
        label: "Automated Support Tickets",
        desc: "Tickets raised and routed straight out of the chat",
        href: "/product/automated-support-tickets/",
      },
      {
        label: "Smart Follow-Ups",
        desc: "Staff chased, customers told where their issue stands",
        href: "/product/smart-follow-ups/",
      },
      {
        label: "Automated Lead Pipeline",
        desc: "Enquiry chats turned into enriched, owned leads",
        href: "/product/automated-lead-pipeline/",
      },
      {
        label: "Dashboard & Reporting",
        desc: "Live reporting on chats, tickets, sentiment, and leads",
        href: "/product/dashboard-reporting/",
      },
    ],
  },
  { label: "Pricing", href: "/pricing/" },
  {
    label: "Resources",
    children: [
      { label: "Blog", desc: "One new read every day on selling and serving by chat", href: "/blog/" },
      { label: "Features", desc: "Everything Chatbot.OM can do", href: "/features/" },
      { label: "Integrations", desc: "Connect the tools you already use", href: "/integration/" },
      { label: "Templates", desc: "Ready-made chatbot setups by trade", href: "/template/" },
      {
        label: "Compare",
        desc: "Chatbot.OM or the full AI Customer Care suite",
        href: "/comparison/",
      },
      {
        label: "Oman AI Chat Guide",
        desc: "The rules for automated customer chat in Oman",
        href: "/guideline/oman/",
      },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About", desc: "Why we built Chatbot.OM only for Oman", href: "/about/" },
      { label: "Contact us", desc: "Talk to the team directly", href: "/contact/" },
    ],
  },
  { label: "Industries", href: "/industries/" },
  { label: "Self-Hosted", href: "/self-hosted/" },
];

export const footerNav: { title: string; wide?: boolean; links: NavChild[] }[] = [
  {
    title: "Product",
    wide: true,
    links: [
      { label: "AI Chatbot for Websites", href: "/product/ai-chatbot-for-websites/" },
      { label: "WhatsApp AI Chatbot", href: "/product/whatsapp-ai-chatbot/" },
      { label: "Automated Support Tickets", href: "/product/automated-support-tickets/" },
      { label: "Smart Follow-Ups", href: "/product/smart-follow-ups/" },
      { label: "Automated Lead Pipeline", href: "/product/automated-lead-pipeline/" },
      { label: "Dashboard & Reporting", href: "/product/dashboard-reporting/" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/features/" },
      { label: "Integrations", href: "/integration/" },
      { label: "Templates", href: "/template/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "Self-Hosted", href: "/self-hosted/" },
      { label: "Get Started", href: "/get-started/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "Oman AI Chat Guide", href: "/guideline/oman/" },
      { label: "Comparison", href: "/comparison/" },
      { label: "Industries", href: "/industries/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];
