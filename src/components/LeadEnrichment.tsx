"use client";

import { useState } from "react";
import { Globe2, MessageSquare } from "lucide-react";

type Field = {
  label: string;
  value: string;
  /** where the fact came from: the chat itself, or your own records */
  from: "chat" | "enriched";
};

type Enquiry = {
  tab: string;
  channel: string;
  channelIcon: "web" | "whatsapp";
  when: string;
  transcript: { who: "them" | "bot"; text: string }[];
  verdict: string;
  fields: Field[];
};

const enquiries: Enquiry[] = [
  {
    tab: "Majlis set",
    channel: "Website chat",
    channelIcon: "web",
    when: "Thursday, 22:40",
    transcript: [
      { who: "them", text: "do you have majlis sets? moving into a new villa in Al Mouj next month" },
      {
        who: "bot",
        text: "We do, in eleven fabrics. For a villa majlis most customers take the ten seater. Is it for a formal majlis or a family sitting room?",
      },
      { who: "them", text: "formal. wife wants dark green velvet if you have it" },
      {
        who: "bot",
        text: "We have that in stock. Delivery to Al Mouj is free and takes about two weeks from order. Shall I ask Yousuf to send you the green velvet options and a price in the morning?",
      },
      { who: "them", text: "yes please. 9 is fine, whatsapp is better than calling" },
    ],
    verdict: "Serious. Named the property, the fabric, and a callback time.",
    fields: [
      { label: "Requirement", value: "Ten seater formal majlis, dark green velvet", from: "chat" },
      { label: "Deliver to", value: "Al Mouj, Muscat", from: "chat" },
      { label: "Timing", value: "Moving in next month", from: "chat" },
      { label: "Prefers", value: "WhatsApp, from 9am", from: "chat" },
      { label: "Fabric in stock", value: "Yes, 34m on the roll", from: "enriched" },
      { label: "Indicative value", value: "OMR 1,250 to 1,600", from: "enriched" },
      { label: "Previous orders", value: "None, new customer", from: "enriched" },
      { label: "Assigned to", value: "Yousuf, showroom sales", from: "enriched" },
    ],
  },
  {
    tab: "Kitchen extraction",
    channel: "WhatsApp",
    channelIcon: "whatsapp",
    when: "Friday, 13:15",
    transcript: [
      { who: "them", text: "السلام عليكم، عندكم أنظمة شفط للمطابخ التجارية؟" },
      {
        who: "bot",
        text: "وعليكم السلام. نعم، نركب أنظمة شفط للمطاعم. كم حجم المطبخ تقريباً، وكم موقد عندكم؟",
      },
      { who: "them", text: "مطعم جديد في نزوى، ٦ مواقد وفرن كبير. نفتح بعد رمضان" },
      {
        who: "bot",
        text: "واضح. لهذا الحجم نحتاج زيارة موقع قبل التسعير. متى يناسبكم هذا الأسبوع؟",
      },
      { who: "them", text: "الثلاثاء الصبح زين" },
    ],
    verdict: "Serious. Fixed opening date and agreed to a site visit.",
    fields: [
      { label: "Requirement", value: "Commercial extraction, 6 burners and one large oven", from: "chat" },
      { label: "Site", value: "New restaurant, Nizwa", from: "chat" },
      { label: "Opening", value: "After Ramadan", from: "chat" },
      { label: "Site visit", value: "Tuesday morning, agreed in chat", from: "chat" },
      { label: "Language", value: "Arabic, keep the thread in Arabic", from: "enriched" },
      { label: "Indicative value", value: "OMR 3,000 to 4,500 installed", from: "enriched" },
      { label: "Travel", value: "Nizwa, covered by the interior crew", from: "enriched" },
      { label: "Assigned to", value: "Nasser, projects", from: "enriched" },
    ],
  },
  {
    tab: "120 laptops",
    channel: "Website chat",
    channelIcon: "web",
    when: "Sunday, 11:05",
    transcript: [
      { who: "them", text: "We need pricing for 120 laptops for a school in Barka." },
      {
        who: "bot",
        text: "Happy to help. Are these for students or staff, and do you need them imaged with your own software before delivery?",
      },
      { who: "them", text: "Students, grades 7 to 9. Yes we would need them set up, we have no IT staff." },
      {
        who: "bot",
        text: "Understood. That changes the quote, so it goes to our education team rather than the online price. Do you have a budget approved, and by when do you need them in the classrooms?",
      },
      { who: "them", text: "Budget is approved for this academic year. We need them before the second term." },
    ],
    verdict: "Serious. Volume, approved budget, and a hard deadline.",
    fields: [
      { label: "Requirement", value: "120 student laptops, imaged before delivery", from: "chat" },
      { label: "Site", value: "School in Barka", from: "chat" },
      { label: "Deadline", value: "Before second term", from: "chat" },
      { label: "Budget", value: "Approved for this academic year", from: "chat" },
      { label: "Segment", value: "Education, eligible for volume terms", from: "enriched" },
      { label: "Indicative value", value: "OMR 22,000 to 28,000", from: "enriched" },
      { label: "Imaging capacity", value: "120 units, about 4 working days", from: "enriched" },
      { label: "Assigned to", value: "Fatma, education accounts", from: "enriched" },
    ],
  },
];

export default function LeadEnrichment() {
  const [active, setActive] = useState(0);
  const e = enquiries[active];

  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">Three enquiries, three lead records</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl md:text-5xl">
          The chat is the interview.{" "}
          <span className="accent-italic">The record writes itself.</span>
        </h2>

        {/* tabs */}
        <div className="mt-10 grid gap-2 sm:grid-cols-3">
          {enquiries.map((q, i) => (
            <button
              key={q.tab}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`flex flex-col items-start gap-1 border px-3.5 py-3 text-left transition-colors ${
                i === active
                  ? "border-lime bg-lime text-ink"
                  : "border-line-strong bg-ink-2 text-muted-foreground hover:bg-ink-3"
              }`}
            >
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
                  i === active ? "text-ink/70" : "text-muted-foreground/70"
                }`}
              >
                {q.channel} · {q.when}
              </span>
              <span className="text-sm font-semibold">{q.tab}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* the conversation */}
          <div className="flex flex-col overflow-clip border border-black/10 bg-white">
            <div className="flex items-center gap-2 border-b border-black/10 px-4 py-2.5">
              {e.channelIcon === "web" ? (
                <Globe2 className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
              ) : (
                <MessageSquare className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
              )}
              <span className="text-xs font-semibold text-neutral-700">
                {e.channel}, {e.when}
              </span>
            </div>
            <div className="flex-1 space-y-2.5 p-5">
              {e.transcript.map((m, i) => (
                <p
                  key={i}
                  dir={/[؀-ۿ]/.test(m.text) ? "rtl" : "ltr"}
                  className={
                    m.who === "them"
                      ? "w-fit max-w-[88%] border border-black/10 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-700"
                      : "ml-auto w-fit max-w-[88%] bg-lime px-3.5 py-2.5 text-sm font-medium text-ink"
                  }
                >
                  {m.text}
                </p>
              ))}
            </div>
            <p className="border-t border-black/10 px-5 py-3 text-xs text-neutral-500">
              {e.verdict}
            </p>
          </div>

          {/* the lead record */}
          <div className="flex flex-col overflow-clip border border-black/10 bg-white">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
              <span className="text-xs font-semibold text-neutral-700">Lead record</span>
              <span className="bg-lime/30 px-2.5 py-1 text-[10px] font-semibold text-neutral-800">
                Qualified
              </span>
            </div>
            <dl className="flex-1 divide-y divide-black/5">
              {e.fields.map((f) => (
                <div key={f.label} className="flex items-start justify-between gap-4 px-5 py-2.5">
                  <dt className="flex items-center gap-2 text-xs text-neutral-500">
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        f.from === "chat" ? "bg-neutral-800" : "bg-lime"
                      }`}
                      aria-hidden
                    />
                    {f.label}
                  </dt>
                  <dd className="text-right text-xs font-medium text-neutral-800">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-4 border-t border-black/10 px-5 py-3 text-[11px] text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" aria-hidden />
                Said in the chat
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden />
                Attached from your records
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
