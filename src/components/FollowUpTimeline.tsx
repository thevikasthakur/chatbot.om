"use client";

import { useState } from "react";
import { BellRing, CalendarClock, MessageSquare, UserCheck } from "lucide-react";

type Stage = {
  label: string;
  time: string;
  state: "on-track" | "attention" | "done";
  internal: { to: string; text: string }[];
  customer: { text: string } | null;
  /** what the customer is holding on to when no new message goes out */
  standing: { expects: string; since: string };
  note: string;
};

const stages: Stage[] = [
  {
    label: "Assigned",
    time: "09:12",
    state: "on-track",
    internal: [
      {
        to: "Maha, Fulfilment",
        text: "CB-4821 is yours. Order 88214 delivered to Al Khuwair with two items missing. Promised to the customer: an answer today before 5pm.",
      },
    ],
    customer: {
      text: "Thanks for telling us. Your missing items are logged as CB-4821 and Maha in our fulfilment team is on it. You will hear back before 5pm today.",
    },
    standing: { expects: "An answer today, before 5pm", since: "Told at 09:12" },
    note: "The promise made in the chat becomes the clock everything else is measured against.",
  },
  {
    label: "Acknowledged",
    time: "09:26",
    state: "on-track",
    internal: [
      {
        to: "Maha, Fulfilment",
        text: "CB-4821 has been sitting unopened for 10 minutes. Take it, or send it back to the queue.",
      },
      { to: "Queue", text: "Maha accepted CB-4821 at 09:26. Chase cleared." },
    ],
    customer: null,
    standing: { expects: "An answer today, before 5pm", since: "Unchanged since 09:12" },
    note: "Whether Maha opened the ticket at 09:16 or 09:26 changes nothing for the customer, so they are not told about it. What they were promised still stands.",
  },
  {
    label: "Chased",
    time: "14:30",
    state: "on-track",
    internal: [
      {
        to: "Maha, Fulfilment",
        text: "Two and a half hours to the 5pm promise on CB-4821 and the warehouse count has not come back. Do you need someone to walk the aisle?",
      },
    ],
    customer: null,
    standing: { expects: "An answer today, before 5pm", since: "Unchanged since 09:12" },
    note: "Maha is behind, but 5pm is still reachable. The nudge goes to her, not to the customer, because the promise has not moved yet.",
  },
  {
    label: "Running late",
    time: "16:20",
    state: "attention",
    internal: [
      {
        to: "Maha, Fulfilment",
        text: "You reported the stock count is out by three units, so this needs the Sohar warehouse to confirm in the morning. Give me a new time and I will tell the customer why.",
      },
      {
        to: "Duty supervisor",
        text: "CB-4821 has moved to tomorrow, 11am. Cause recorded: stock discrepancy at Sohar, second time this month.",
      },
    ],
    customer: {
      text: "Update on CB-4821. The count at our Sohar warehouse does not match the picking list, so we need them to confirm in the morning before we ship. You will have a firm answer by 11am tomorrow. If you would rather have a refund for the two items now, reply REFUND and we will process it today.",
    },
    standing: { expects: "A firm answer tomorrow by 11am", since: "Revised at 16:21" },
    note: "The customer hears the new time and the reason for it from you, before they have to come back and ask.",
  },
  {
    label: "Resolved",
    time: "Next day, 10:40",
    state: "done",
    internal: [
      {
        to: "Queue",
        text: "Maha closed CB-4821. Both items shipped on the morning run with tracking attached. 25 hours 28 minutes against a 48 hour target.",
      },
    ],
    customer: {
      text: "Both missing items are on the road to you now, arriving tomorrow. Here is the tracking link. Nothing has been charged twice.",
    },
    standing: { expects: "Delivery tomorrow, tracking sent", since: "Confirmed at 10:40" },
    note: "Closure is a message the customer receives, not a status only your team can see.",
  },
  {
    label: "Confirmed",
    time: "Two days later, 18:00",
    state: "done",
    internal: [
      {
        to: "Operations",
        text: "Customer confirmed both items arrived. CB-4821 closed. Delay tagged to Sohar stock accuracy.",
      },
    ],
    customer: {
      text: "Did both items reach you today? Reply yes to close this off, or tell us what is still missing.",
    },
    standing: { expects: "Nothing further", since: "Closed after confirmation" },
    note: "The last question is asked by us. That is the difference between a closed ticket and a solved problem.",
  },
];

const stateStyle: Record<Stage["state"], string> = {
  "on-track": "bg-neutral-900 text-lime",
  attention: "bg-amber-100 text-amber-800",
  done: "bg-lime/30 text-neutral-800",
};

export default function FollowUpTimeline() {
  const [active, setActive] = useState(0);
  const s = stages[active];

  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">One ticket, followed the whole way</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl md:text-5xl">
          Two items missing in Al Khuwair,{" "}
          <span className="accent-italic">from assignment to confirmed</span>.
        </h2>

        {/* stage rail */}
        <div className="mt-10 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {stages.map((st, i) => (
            <button
              key={st.label}
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
                {st.time}
              </span>
              <span className="text-sm font-semibold">{st.label}</span>
            </button>
          ))}
        </div>

        {/* internal + customer */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* what the staff member gets */}
          <div className="flex flex-col overflow-clip border border-black/10 bg-white">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
              <span className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                <BellRing className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
                Inside your team
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${stateStyle[s.state]}`}
              >
                {s.label}
              </span>
            </div>
            <div className="flex-1 space-y-3 p-5">
              {s.internal.map((m, i) => (
                <div key={i} className="border border-black/10 bg-neutral-50 px-4 py-3">
                  <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                    <UserCheck className="h-3 w-3" aria-hidden />
                    {m.to}
                  </p>
                  <p className="mt-1.5 text-sm text-neutral-700">{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* what the customer gets */}
          <div className="flex flex-col overflow-clip border border-black/10 bg-white">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-2.5">
              <span className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                <MessageSquare className="h-3.5 w-3.5 text-neutral-500" aria-hidden />
                On the customer&rsquo;s side
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  s.customer ? "bg-lime/30 text-neutral-800" : "bg-neutral-100 text-neutral-500"
                }`}
              >
                {s.customer ? "We message them" : "We stay quiet"}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              {s.customer && (
                <p className="w-fit max-w-[92%] bg-lime px-4 py-3 text-sm font-medium text-ink">
                  {s.customer.text}
                </p>
              )}
              <div
                className={`border border-black/10 bg-neutral-50 px-4 py-3 ${s.customer ? "mt-4" : ""}`}
              >
                <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-neutral-500">
                  <CalendarClock className="h-3 w-3" aria-hidden />
                  What they are now expecting
                </p>
                <p className="mt-1.5 text-sm font-medium text-neutral-800">{s.standing.expects}</p>
                <p className="mt-0.5 text-xs text-neutral-500">{s.standing.since}</p>
              </div>
              <p className="mt-auto pt-5 text-xs leading-relaxed text-neutral-500">{s.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
