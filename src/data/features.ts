import type { Feature } from "./types";

export const features: Feature[] = [
  {
    slug: "website-chat-widget",
    name: "Website Chat Widget",
    short:
      "A chat window that loads in milliseconds, matches your brand, and works the same on a phone in Sohar as on a desktop in Muscat.",
    heroTitle: "The Widget Your Visitors Will Actually Open",
    heroSub:
      "One script tag puts a fast, quiet chat window on every page of your site, styled to your brand and ready to answer in Arabic or English.",
    sections: [
      {
        h: "How it works",
        p: [
          "You paste a single script tag into your site, or install the plugin if you run WordPress or Shopify. The widget loads asynchronously, so it never delays your pages, and it appears as a small launcher in the corner until someone opens it.",
          "Colours, position, greeting, and the launcher icon are yours to set. The widget picks up the visitor's browser language for its first greeting and then follows whatever language they actually write in.",
        ],
        bullets: [
          "One script tag, or a plugin for WordPress and Shopify",
          "Loads asynchronously so page speed is unaffected",
          "Brand colours, position, and greeting configured by you",
          "Right-to-left layout when the conversation is in Arabic",
        ],
      },
      {
        h: "Why the first impression decides the conversation",
        p: [
          "Visitors judge a chat window in about a second. A slow widget that covers the page, or one that opens with a cheerful message in the wrong language, gets dismissed and never reopened. A quiet launcher that responds instantly gets used.",
          "Because the widget is rendered from your own configuration rather than a generic template, it looks like part of your site instead of a bolted-on service, which measurably changes how many people start a conversation.",
        ],
      },
      {
        h: "Built for how Oman browses",
        p: [
          "The overwhelming majority of website traffic in Oman arrives on a phone, often on a mobile connection outside the main cities. The widget is built mobile-first: it opens full screen on small devices, keeps the input above the keyboard, and holds the conversation if the connection drops mid-sentence.",
          "Proactive prompts are available but off by default. If you do turn one on, you choose the page and the delay, so it appears where it helps rather than interrupting everyone on arrival.",
        ],
      },
    ],
    bullets: [
      "Single script tag or a plugin for common platforms",
      "Full mobile layout with the input pinned above the keyboard",
      "Right-to-left rendering for Arabic conversations",
      "Optional proactive prompts, per page, off by default",
      "Conversation survives a dropped connection",
    ],
  },
  {
    slug: "whatsapp-business-channel",
    name: "WhatsApp Business Channel",
    short:
      "Your business number, answered automatically, with the reminders and confirmations customers actually open.",
    heroTitle: "The Channel Your Customers Already Use",
    heroSub:
      "Connect a number to the WhatsApp Business Platform and the chatbot handles messages, voice notes, and the outbound templates that cut no-shows.",
    sections: [
      {
        h: "How it works",
        p: [
          "We connect a business number to the WhatsApp Business Platform, verify it, and register the message templates you want to send. Once approved, every message to that number reaches the chatbot, and every message from your business goes out under your verified business name.",
          "Inside the 24-hour window that opens when a customer messages you, the chatbot converses freely. Outside it, it sends only your approved templates, so nothing fails silently and your number stays in good standing.",
        ],
        bullets: [
          "Number verification and template registration handled for you",
          "Free-form replies inside the 24-hour service window",
          "Approved templates for reminders, confirmations, and updates",
          "Opt-in and opt-out recorded against every contact",
        ],
      },
      {
        h: "Why the rules are worth respecting",
        p: [
          "WhatsApp is strict about what businesses may send, which is exactly why a message from a business still gets opened there while email does not. Working inside those limits protects the only thing that makes the channel valuable.",
          "We do not configure campaigns to purchased lists or to numbers that never asked to hear from you. Beyond being against the platform's rules, it is the fastest way to have your number restricted.",
        ],
      },
      {
        h: "Where it fits in Oman",
        p: [
          "For most Omani businesses WhatsApp is not a marketing channel, it is the actual customer service desk. Enquiries, complaints, order changes, and photographs of broken parts all arrive there, usually outside working hours.",
          "Handing that inbox to the chatbot means the evening messages get an answer at the time they were sent, and the ones that need a person are waiting with a full summary when your team opens up.",
        ],
      },
    ],
    bullets: [
      "Verified business number with your name on outgoing messages",
      "Automatic switch between free-form replies and approved templates",
      "Reminders and confirmations that reduce no-shows",
      "Consent tracked per contact and honoured on every send",
      "Full conversation handed to a person on escalation",
    ],
  },
  {
    slug: "voice-note-understanding",
    name: "Voice Note Understanding",
    short:
      "Voice notes are treated as conversation, not as attachments for somebody to listen to later.",
    heroTitle: "When Your Customer Would Rather Talk Than Type",
    heroSub:
      "The chatbot understands WhatsApp voice notes in Omani and Gulf Arabic and in English, and answers the question that was actually asked.",
    sections: [
      {
        h: "How it works",
        p: [
          "A voice note arriving on WhatsApp is transcribed and understood in place, as part of the conversation, rather than queued for a human to play back. The chatbot replies in writing by default, and can reply with a voice note instead if that suits your audience better.",
          "The transcript is attached to the conversation record, so anything created from it, a ticket or a lead, carries the customer's own words rather than someone's summary of them.",
        ],
        bullets: [
          "Transcription and understanding in one step, with no queue",
          "Omani and Gulf Arabic, Standard Arabic, and English",
          "Written or spoken reply, your choice",
          "Original audio and transcript both kept on the record",
        ],
      },
      {
        h: "Why this matters more here than elsewhere",
        p: [
          "A large share of WhatsApp traffic in Oman is spoken rather than typed. Arabic is slower to type on a phone keyboard than to say, and for many customers a thirty-second voice note is simply the natural way to explain a problem.",
          "Businesses that cannot process voice notes automatically end up with an inbox of unheard audio, which is the least visible and most expensive kind of backlog. Nobody can tell from the outside which of those messages was urgent.",
        ],
      },
      {
        h: "Dialect, not textbook Arabic",
        p: [
          "Real voice notes are dialect, not Modern Standard Arabic, and they routinely switch into English for product names, numbers, and place names. Understanding is tuned for that mix rather than for formal written Arabic.",
          "Where a recording is genuinely unclear, the chatbot says so and asks a short clarifying question instead of guessing, which is the behaviour customers find least irritating.",
        ],
      },
    ],
    bullets: [
      "Voice notes understood without a human listening first",
      "Omani and Gulf dialect handled, not just Standard Arabic",
      "Code-switching between Arabic and English within one message",
      "Clarifying question asked when audio is genuinely unclear",
      "Transcript carried through to any ticket or lead created",
    ],
  },
  {
    slug: "arabic-english-conversations",
    name: "Arabic and English Conversations",
    short:
      "The conversation happens in the customer's language, including when they switch language halfway through a sentence.",
    heroTitle: "Two Languages, One Conversation",
    heroSub:
      "Replies are written in the language the customer used, in the register they used, without a translated-from-English feel.",
    sections: [
      {
        h: "How it works",
        p: [
          "The chatbot detects the language of each incoming message and answers in it. There is no menu asking the customer to choose, and no separate Arabic version of your chatbot to maintain in parallel.",
          "Where a customer writes half in Arabic and half in English, which is normal in Oman, the reply follows the dominant language of the message and keeps product names, model numbers, and place names in the form the customer used.",
        ],
        bullets: [
          "Automatic detection per message, not per session",
          "No language menu for the customer to work through",
          "One knowledge base serving both languages",
          "Right-to-left rendering applied automatically",
        ],
      },
      {
        h: "Why translated English reads badly",
        p: [
          "Most multilingual chatbots write an English answer and translate it. The result is grammatically correct and immediately recognisable as machine output, which undermines the trust the rest of the conversation is trying to build.",
          "Answers here are composed in the target language from your source material, so Arabic replies read as Arabic rather than as English wearing Arabic script.",
        ],
      },
      {
        h: "Beyond the two headline languages",
        p: [
          "Oman's workforce is multilingual, and businesses serving construction, logistics, and domestic services regularly take enquiries in Hindi, Urdu, Malayalam, and Bengali. Those can be enabled alongside Arabic and English where your customer base needs them.",
          "Whatever the language, the record kept for your team can be produced in English or Arabic so your staff can work from one consistent view.",
        ],
      },
    ],
    bullets: [
      "Replies composed in the customer's language, not translated",
      "Language detected per message, so switching is handled",
      "One knowledge base behind every language",
      "Additional languages available where your customers need them",
      "Internal summaries in English or Arabic, whichever your team prefers",
    ],
  },
  {
    slug: "knowledge-base",
    name: "Knowledge Base",
    short:
      "The chatbot answers from your website and your documents, and tells you what it was asked but could not answer.",
    heroTitle: "It Knows Your Business, Not the Internet's Version of It",
    heroSub:
      "Point it at your domain, upload what is not published, and every answer is traceable back to something you wrote.",
    sections: [
      {
        h: "How it works",
        p: [
          "Give us your domain and the chatbot reads your published pages: services, prices, policies, opening hours, locations. You then add what is not on the site, either as uploaded documents or as short written answers, and changes take effect on the next message.",
          "Every answer the chatbot gives is grounded in that material. Where a question falls outside it, the chatbot says it will check rather than improvising, and the gap is logged for you to fill.",
        ],
        bullets: [
          "Your website ingested from the domain, no export required",
          "Documents and typed answers for what is not published",
          "Changes live on the next message, with no rebuild",
          "Unanswered questions logged as a list of gaps to fill",
        ],
      },
      {
        h: "Why grounding matters commercially",
        p: [
          "A chatbot that improvises about delivery times, warranty terms, or prices creates commitments you have to honour or explain away. Neither is cheap. Grounding every answer in your own published material removes that category of risk.",
          "It also makes the chatbot auditable. When a customer says they were told something, you can open the conversation and see exactly which source the answer came from.",
        ],
      },
      {
        h: "The gap report is the useful part",
        p: [
          "Within a fortnight of going live, the list of questions the chatbot could not answer becomes the single most useful document your business has about its own customers. It is a ranked list of what people want to know and cannot find.",
          "Most businesses discover two or three questions in that list that they had no idea were being asked, and fixing them improves the website as much as the chatbot.",
        ],
      },
    ],
    bullets: [
      "Answers grounded in your website and your uploads",
      "No answer invented when the source material is silent",
      "Every reply traceable to the material it came from",
      "Ranked report of questions it could not answer",
      "Updates take effect immediately, with nothing to redeploy",
    ],
  },
  {
    slug: "human-handover",
    name: "Human Handover",
    short:
      "When a person should take over, the chatbot hands across the whole conversation and tells the customer who has it.",
    heroTitle: "Knowing When to Stop Is a Feature",
    heroSub:
      "Handover happens on the rules you set or the moment a customer asks, with full context and a named person on the other side.",
    sections: [
      {
        h: "How it works",
        p: [
          "You define what must always reach a human: certain topics, an angry customer, a named account, a request for a person, or anything the chatbot could not answer twice in a row. When one of those triggers, the conversation moves.",
          "The person picking it up receives the whole thread, the customer's details, and a short summary of what has been asked and promised. The customer is told who has it and when to expect a reply, rather than being left in silence.",
        ],
        bullets: [
          "Handover triggers you define, including on request",
          "Whole thread and a summary handed to the person taking over",
          "Customer told who has it and when to expect a reply",
          "Fallback owner when nobody is available",
        ],
      },
      {
        h: "Why silent handover fails",
        p: [
          "The common failure is not that a chatbot hands over too late, it is that the handover is invisible. The customer stops receiving replies and cannot tell whether anyone is coming. Within a few minutes they either write again or leave.",
          "Announcing the handover, with a name and a time, converts a moment of friction into a moment of reassurance, and it costs nothing.",
        ],
      },
      {
        h: "Out of hours",
        p: [
          "Handover at ten at night has to work differently from handover at ten in the morning. Outside your working hours the chatbot says so plainly, gives a realistic time for a human reply, and creates the ticket so the request is waiting when your team opens.",
          "For genuinely urgent categories you nominate, it can still alert an on-call person immediately rather than waiting for the morning.",
        ],
      },
    ],
    bullets: [
      "Triggers on topic, sentiment, account, or direct request",
      "Full conversation and summary passed to the person taking over",
      "Customer told who has it and when to expect a reply",
      "Out-of-hours handling with an honest reply time",
      "Immediate alerting for the categories you mark urgent",
    ],
  },
  {
    slug: "appointment-booking",
    name: "Appointment Booking",
    short:
      "Slots offered, held, confirmed, and reminded, straight out of the conversation and into your calendar.",
    heroTitle: "The Booking Made Before They Change Their Mind",
    heroSub:
      "The chatbot reads your real availability, offers slots that exist, and writes the confirmed booking into the calendar your team already uses.",
    sections: [
      {
        h: "How it works",
        p: [
          "Connect Google Calendar, Microsoft Outlook, or your existing scheduling tool, and the chatbot offers only slots that are genuinely free, respecting your working hours, buffers, and the length of the service being booked.",
          "The booking is written into the calendar immediately with the customer's details and what they asked for, and the confirmation goes out on the channel the conversation happened in.",
        ],
        bullets: [
          "Live availability read from your real calendar",
          "Service-specific durations and buffers respected",
          "Booking written straight into the calendar with full context",
          "Confirmation and reminder sent on the customer's channel",
        ],
      },
      {
        h: "Why the reminder is half the value",
        p: [
          "A booking that nobody turns up to costs more than the enquiry that never converted, because the slot was held. Reminders on WhatsApp are opened far more reliably than an email confirmation sent a fortnight earlier.",
          "Every reminder carries a one-tap way to move or cancel, which sounds like it invites cancellation but in practice converts silent no-shows into rescheduled bookings.",
        ],
      },
      {
        h: "Rescheduling without the back and forth",
        p: [
          "Customers reschedule. Handled by hand, that is three messages, a calendar check, and a call. Handled in the conversation, it is one exchange, and the calendar is updated before anyone on your team has to look at it.",
          "Where a reschedule affects a route or a technician's day, the change is visible to your team immediately rather than at the point somebody arrives at the wrong address.",
        ],
      },
    ],
    bullets: [
      "Live availability from Google Calendar, Outlook, or your scheduler",
      "Slots offered that account for duration, buffers, and hours",
      "Confirmation on the channel the customer wrote from",
      "Reminders with a one-tap reschedule or cancel",
      "Changes reflected in your calendar immediately",
    ],
  },
  {
    slug: "sentiment-analysis",
    name: "Sentiment Analysis",
    short:
      "Every conversation scored on how it ended, so unhappy customers surface while you can still do something about it.",
    heroTitle: "The Customers Who Do Not Complain Are the Expensive Ones",
    heroSub:
      "Each conversation is scored, trended, and clickable, so a bad week shows up as a line on a chart rather than as churn next quarter.",
    sections: [
      {
        h: "How it works",
        p: [
          "Each conversation is scored on how it actually resolved, not on the presence of angry words. A customer who opens frustrated and leaves satisfied counts as a good conversation, because that is the outcome that matters to your business.",
          "Scores are trended over time and split by channel and topic, so a dip can be traced to the thing that caused it rather than noticed as a general sense that things feel worse.",
        ],
        bullets: [
          "Scored on outcome rather than on individual words",
          "Trended by day, channel, and topic",
          "Negative conversations flagged for review",
          "Every score clickable down to the transcript behind it",
        ],
      },
      {
        h: "Why mood leads revenue",
        p: [
          "Customer sentiment moves before revenue does. By the time a dissatisfied customer shows up in a churn report or a lost renewal, the conversation that lost them happened weeks earlier and nobody read it.",
          "Watching the line gives you the chance to open that conversation while the customer is still yours, which is the only point at which it is cheap to fix.",
        ],
      },
      {
        h: "What to do with a negative flag",
        p: [
          "A flagged conversation is not a report to file, it is a task. You can route negative conversations straight to a supervisor, raise a ticket automatically, or simply have them collected for a daily review, depending on your volumes.",
          "Because the score sits on the conversation record, the pattern behind repeated negatives, a particular product, a particular branch, a particular promise you keep failing to meet, becomes visible quickly.",
        ],
      },
    ],
    bullets: [
      "Outcome-based scoring on every conversation",
      "Trends by day, channel, and topic",
      "Automatic flagging and optional routing of negatives",
      "Drill-through from any number to the transcripts",
      "Patterns surfaced by product, branch, or promise type",
    ],
  },
  {
    slug: "conversation-memory",
    name: "Conversation Memory",
    short:
      "Returning customers are recognised across channels and across visits, so nobody has to explain themselves twice.",
    heroTitle: "One Thread, However Many Doors They Come Through",
    heroSub:
      "A question asked on your website at noon and followed up on WhatsApp at nine is one conversation, not two strangers.",
    sections: [
      {
        h: "How it works",
        p: [
          "Contacts are matched across channels using the identifiers you already hold: phone number, email, order reference, or an account login on your site. Where a match is confident, the history travels with the customer.",
          "That means the chatbot knows which order is being discussed, what it told the customer last time, and what your business promised, without the customer restating any of it.",
        ],
        bullets: [
          "Matching across website chat, WhatsApp, and email",
          "History carried into every new conversation",
          "Open tickets and leads visible in the same thread",
          "Confident matches only, with no risky guessing",
        ],
      },
      {
        h: "Why repetition costs you the customer",
        p: [
          "Being asked to explain the same problem a second time is the single most reliable way to turn a patient customer into an angry one. It signals that the first conversation went nowhere and that nobody is coordinating.",
          "Continuity is also what makes the handover to a human work, because the person taking over inherits everything rather than starting from a one-line ticket title.",
        ],
      },
      {
        h: "Careful about identity",
        p: [
          "Matching people across channels has to be conservative. A shared family phone number or a company address should not expose one person's conversation to another, so matches are only made where the evidence is strong.",
          "Where the chatbot is not confident, it asks a short confirming question rather than assuming, and it never reveals prior details before that confirmation.",
        ],
      },
    ],
    bullets: [
      "Cross-channel matching on the identifiers you already hold",
      "Prior conversations, tickets, and leads visible in context",
      "Conservative matching, with confirmation when unsure",
      "No prior detail revealed before identity is confirmed",
      "Full history handed over when a person takes the conversation",
    ],
  },
  {
    slug: "guardrails-and-escalation-rules",
    name: "Guardrails and Escalation Rules",
    short:
      "You decide what the chatbot may never say, never promise, and never handle alone.",
    heroTitle: "The Answers It Is Not Allowed to Give",
    heroSub:
      "Topic bans, promise limits, and escalation triggers, configured once, applied on every conversation in every language.",
    sections: [
      {
        h: "How it works",
        p: [
          "You set the boundaries: topics the chatbot must decline, figures it may never quote, discounts it may never offer, and categories that always go to a person. These are enforced before any reply is sent, in whichever language the conversation is happening in.",
          "Where a rule fires, the chatbot says something useful rather than something evasive, and moves the conversation to whoever should own it.",
        ],
        bullets: [
          "Topic bans applied across every language",
          "Limits on prices, discounts, and commitments",
          "Categories that always escalate, regardless of confidence",
          "Rules enforced before the reply is sent, not after",
        ],
      },
      {
        h: "Why the limits are the product",
        p: [
          "Any modern language model can hold a plausible conversation. The commercially important question is what happens at the edges: when a customer pushes for a discount, asks for legal or medical advice, or tries to get a commitment your business cannot honour.",
          "Guardrails are what make an automated conversation safe to put in front of customers without someone reading every message afterwards.",
        ],
      },
      {
        h: "Sensitive categories in Oman",
        p: [
          "Some sectors have specific limits. Clinics should not be giving clinical advice in a chat window, law firms should not be giving legal opinions, and financial services have rules about what may be said about products before a customer is identified.",
          "Those constraints are configured explicitly rather than hoped for, and the resulting behaviour is testable before you go live.",
        ],
      },
    ],
    bullets: [
      "Banned topics enforced in every language",
      "Ceilings on prices, discounts, and commitments",
      "Always-escalate categories for regulated advice",
      "Rules applied before a message is sent",
      "Behaviour testable against your own scripts before launch",
    ],
  },
  {
    slug: "chat-analytics-dashboard",
    name: "Chat Analytics Dashboard",
    short:
      "Volumes, topics, sentiment, ticket ages, and pipeline health in one live view, with every number clickable.",
    heroTitle: "Numbers You Can Open",
    heroSub:
      "A dashboard that answers the three questions owners actually have, and lets you read the conversations behind any figure on it.",
    sections: [
      {
        h: "How it works",
        p: [
          "The dashboard opens on a summary: how many people talked to you, how they felt, and what is still open. Everything else is one level deeper, split by channel, topic, language, and hour of day.",
          "Every figure is a link. Click the negative sentiment slice and you are reading the eleven conversations behind it, in the language the customer used.",
        ],
        bullets: [
          "Summary view first, detail on demand",
          "Split by channel, topic, language, and hour",
          "Every number drills through to the transcripts",
          "Exports and scheduled email summaries",
        ],
      },
      {
        h: "Why most dashboards go unread",
        p: [
          "Reporting fails when it produces figures nobody can act on. A chart showing conversation volume by week tells an owner nothing they can do on Monday morning.",
          "The views here are built around decisions: staff the evening peak, fix the question nobody can answer, call the customer who left unhappy, chase the lead that has not moved in four days.",
        ],
      },
      {
        h: "Where the data lives",
        p: [
          "Analytics runs on the same infrastructure inside Oman as the conversations themselves, in line with the Personal Data Protection Law (Royal Decree 6/2022). Nothing is shipped to a third-party analytics service abroad.",
          "Exports are available for any view and period when you need the numbers in a board pack or a spreadsheet of your own.",
        ],
      },
    ],
    bullets: [
      "Live summary of volume, sentiment, and open work",
      "Drill-through from any number to the conversations",
      "Peak-hour view for staffing decisions",
      "Scheduled email summaries and one-click exports",
      "Reporting data stored and processed inside Oman",
    ],
  },
  {
    slug: "rest-apis-and-webhooks",
    name: "REST APIs and Webhooks",
    short:
      "Read conversations, push knowledge, and receive events in your own systems, without waiting for an integration to be built.",
    heroTitle: "Everything the Interface Does, Your Systems Can Do Too",
    heroSub:
      "A documented REST API and signed webhooks for teams that want the chatbot wired into what they already run.",
    sections: [
      {
        h: "How it works",
        p: [
          "The API exposes conversations, contacts, tickets, and leads over authenticated REST endpoints. Anything you can see in the interface, you can read or create programmatically, using your own field names where mapping is needed.",
          "Webhooks fire on the events worth reacting to: a conversation started, a ticket created or closed, a lead qualified, a handover requested. Payloads are signed so your endpoint can verify they came from us.",
        ],
        bullets: [
          "Authenticated REST endpoints for conversations, tickets, and leads",
          "Signed webhooks on the events that matter",
          "Retries with backoff when your endpoint is unavailable",
          "Field mapping so payloads match your own schema",
        ],
      },
      {
        h: "Why an API beats waiting for a connector",
        p: [
          "Every business has one system nobody else has heard of: a bespoke ERP, an old stock database, a spreadsheet that runs the whole warehouse. Waiting for a native integration to that is not a plan.",
          "With webhooks and a REST API, a developer can wire the important path, usually a lead into your CRM or a ticket into your operations system, in an afternoon.",
        ],
      },
      {
        h: "Operational detail",
        p: [
          "Failed webhook deliveries are retried with exponential backoff and are visible in a delivery log, so a brief outage at your end does not silently lose events.",
          "Rate limits are documented and generous, and test credentials are available so you can build against a sandbox before touching live conversations.",
        ],
      },
    ],
    bullets: [
      "Documented REST API over conversations, tickets, and leads",
      "Signed webhook payloads your endpoint can verify",
      "Automatic retries with a visible delivery log",
      "Sandbox credentials for building before go-live",
      "Field mapping to match your existing schema",
    ],
  },
];
