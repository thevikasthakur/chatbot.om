"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const cards = [
  {
    src: "/teasers/chatbot-replies-to-serious-buyers.webp",
    title: "Replies to serious buyers",
    body: "Your best leads don't wait. The chatbot answers in seconds — not hours, not Monday morning.",
  },
  {
    src: "/teasers/chatbot-turns-chats-into-leads.webp",
    title: "Turns chats into leads",
    body: "Every conversation is a data point. Name, intent, channel, sentiment — captured before your team even opens the CRM.",
  },
  {
    src: "/teasers/chabot-enriches-the-leads.webp",
    title: "Enriches every lead",
    body: "Raw contacts are worthless. The chatbot adds context — what they asked, how they felt, what they almost bought.",
  },
  {
    src: "/teasers/chatbot-books-appointments.webp",
    title: "Books appointments",
    body: "No back-and-forth. No 'let me check my calendar.' The chatbot finds the slot and locks it down.",
  },
  {
    src: "/teasers/chatbot-books-meetings.webp",
    title: "Books meetings",
    body: "High-intent prospect wants a demo? The meeting is booked before they finish their coffee.",
  },
  {
    src: "/teasers/chatbot-follows-up-without-drama.webp",
    title: "Follows up without drama",
    body: "Silent leads get a nudge. No-shows get rescheduled. The chatbot doesn't take it personally.",
  },
  {
    src: "/teasers/chatbot-reduces-no-shows.webp",
    title: "Reduces no-shows",
    body: "Reminders, confirmations, and gentle pressure — automated. Your calendar stops lying to you.",
  },
];

export function CommandCarousel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    function onScroll() {
      const rect = wrap!.getBoundingClientRect();
      const viewH = window.innerHeight;
      const totalScroll = wrap!.scrollHeight - viewH;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScroll, 0), 1);

      const trackWidth = track!.scrollWidth;
      const visibleWidth = track!.parentElement!.clientWidth;
      const maxTranslate = trackWidth - visibleWidth;

      track!.style.transform = `translateX(-${progress * maxTranslate}px)`;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="cmd-wrap" ref={wrapRef}>
      <section className="cmd-section">
        <div className="cmd-header">
          <p className="cmd-eyebrow">Not a chatbot. A coworker.</p>
          <h2 className="cmd-headline">
            Tell it what the business needs. It works the chat.
          </h2>
        </div>
        <div className="cmd-viewport">
          <div className="cmd-track" ref={trackRef}>
            {cards.map((card) => (
              <article className="cmd-card" key={card.src}>
                <div className="cmd-card-img">
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={600}
                    height={600}
                    quality={84}
                    sizes="320px"
                  />
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
