import type { Integration } from "./types";

export const integrations: Integration[] = [
  {
    slug: "google-calendar",
    name: "Google Calendar",
    category: "Calendar",
    short:
      "The chatbot reads real availability and writes confirmed bookings straight into the calendar your team already lives in.",
    sections: [
      {
        h: "What it does",
        p: [
          "Connect one or more Google calendars and the chatbot offers only slots that are genuinely free, respecting working hours, buffers, and the length of the service being booked. When the customer accepts, the event is created with their name, contact details, and what they asked for in the description.",
          "Reschedules and cancellations made in the conversation update the same event, so your team never works from a calendar that is quietly out of date.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Authorise the connection once from the integrations panel and choose which calendars are bookable. You set the working week, the daily hours, buffers between appointments, and how far ahead customers may book.",
          "Different services can point at different calendars, so a workshop with three bays or a clinic with four practitioners keeps its bookings separated correctly.",
        ],
        bullets: [
          "One-time authorisation, no code required",
          "Per-service durations, buffers, and lead times",
          "Multiple calendars for multiple people or resources",
        ],
      },
    ],
    capabilities: [
      "Read live availability across multiple calendars",
      "Create bookings with full customer context attached",
      "Handle reschedules and cancellations from the chat",
      "Respect working hours and Omani public holidays",
      "Route different services to different calendars",
    ],
  },
  {
    slug: "microsoft-outlook",
    name: "Microsoft Outlook",
    category: "Calendar",
    short:
      "Bookings written into Outlook and Microsoft 365 calendars, with availability read from the same place your team already checks.",
    sections: [
      {
        h: "What it does",
        p: [
          "For businesses running Microsoft 365, the chatbot books directly into Outlook calendars. Availability is read live, so a slot filled by an internal meeting five minutes ago is not offered to a customer.",
          "Created events carry the customer's details and the conversation summary, so whoever opens the appointment knows what it is about before they arrive.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Authorise the connection with a Microsoft 365 account that has access to the calendars you want bookable. Permissions can be limited to specific mailboxes rather than the whole tenant.",
          "Room and equipment calendars can be included where you need to book a resource as well as a person.",
        ],
        bullets: [
          "Works with Microsoft 365 business accounts",
          "Permissions scoped to specific mailboxes",
          "Room and resource calendars supported",
        ],
      },
    ],
    capabilities: [
      "Live availability from Outlook calendars",
      "Bookings created with the conversation summary attached",
      "Reschedules and cancellations synchronised",
      "Scoped permissions rather than tenant-wide access",
      "Room and resource booking supported",
    ],
  },
  {
    slug: "calendly",
    name: "Calendly",
    category: "Calendar",
    short:
      "Keep the scheduling rules you already built in Calendly and let the chatbot do the asking.",
    sections: [
      {
        h: "What it does",
        p: [
          "If your scheduling logic already lives in Calendly, there is no reason to rebuild it. The chatbot works the conversation, qualifies the request, and then books against your Calendly event type rather than handing over a bare link and hoping.",
          "The customer never leaves the chat, which is the whole point. Sending a link mid-conversation is where a meaningful share of bookings quietly stop.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Connect your Calendly account and map each event type to the services your chatbot offers. Durations, buffers, and availability rules stay exactly as you configured them.",
          "Where an event type requires custom questions, the chatbot collects the answers conversationally and passes them through with the booking.",
        ],
        bullets: [
          "Existing event types and rules reused as they are",
          "Booking completed inside the chat, not on a separate page",
          "Custom questions collected conversationally",
        ],
      },
    ],
    capabilities: [
      "Book against existing Calendly event types",
      "Keep durations, buffers, and availability rules unchanged",
      "Collect custom question answers in conversation",
      "Confirm in the chat without sending the customer away",
      "Reschedule requests handled in the same thread",
    ],
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM",
    short:
      "Qualified leads and enriched contact records created in HubSpot as the conversation happens, not after someone types them up.",
    sections: [
      {
        h: "What it does",
        p: [
          "Every qualified enquiry becomes a HubSpot contact and deal, with the conversation transcript attached as an activity and the enriched fields mapped to your own properties. Existing contacts are matched on phone number or email rather than duplicated.",
          "Deal stage, owner, and value can all be set from what the chatbot established in the conversation, so your pipeline reflects reality without a manual step.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Authorise HubSpot from the integrations panel and map chatbot fields to your properties. Custom properties are supported, so requirement, timeline, and indicative value land where your team already looks for them.",
          "You choose which conversations create records. Most businesses create a contact for every enquiry but a deal only for qualified ones, which keeps the pipeline honest.",
        ],
        bullets: [
          "Field mapping including custom properties",
          "Existing contacts matched, not duplicated",
          "Rules for which conversations create a deal",
        ],
      },
    ],
    capabilities: [
      "Create and update contacts and deals in real time",
      "Attach the full transcript as a HubSpot activity",
      "Map enriched fields to your own custom properties",
      "Assign the deal owner from the chatbot's routing rules",
      "Match on phone or email to avoid duplicate records",
    ],
  },
  {
    slug: "salesforce",
    name: "Salesforce",
    category: "CRM",
    short:
      "Leads, contacts, and cases created in Salesforce from the conversation, mapped to your existing objects and fields.",
    sections: [
      {
        h: "What it does",
        p: [
          "Qualified enquiries become Leads or Opportunities and support issues become Cases, each carrying the transcript and the enriched fields. Assignment follows either the chatbot's routing rules or your existing Salesforce assignment rules, whichever you prefer to keep as the source of truth.",
          "Because records are created as the conversation happens, a customer who messages at ten at night is in the pipeline before your team opens the next morning.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Connect with a Salesforce user that has the right object permissions, then map chatbot fields to standard or custom fields. Both Sales Cloud and Service Cloud objects are supported.",
          "Sandbox connections are available so you can validate the mapping against test data before pointing it at production.",
        ],
        bullets: [
          "Leads, Opportunities, and Cases supported",
          "Standard and custom field mapping",
          "Sandbox connection for validating before go-live",
        ],
      },
    ],
    capabilities: [
      "Create Leads, Opportunities, and Cases from conversations",
      "Attach transcripts and enriched fields to the record",
      "Honour your existing Salesforce assignment rules",
      "Map to custom objects and fields",
      "Validate in a sandbox before connecting production",
    ],
  },
  {
    slug: "zoho-crm",
    name: "Zoho CRM",
    category: "CRM",
    short:
      "A practical fit for Omani small and medium businesses already running Zoho, with leads created straight from the chat.",
    sections: [
      {
        h: "What it does",
        p: [
          "Qualified enquiries become Zoho leads or deals with the conversation attached, and existing records are matched on phone or email rather than duplicated. Lead source is set automatically so you can see how much of your pipeline the chatbot is generating.",
          "Support issues can be pushed to Zoho Desk instead where you run both, keeping sales and service in the places your team expects.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Authorise your Zoho account and map fields to your modules. Custom modules and fields are supported, which matters because most Zoho deployments are heavily customised.",
          "You pick which of your users own which lead types, and assignment follows the same routing the chatbot uses internally.",
        ],
        bullets: [
          "Zoho CRM and Zoho Desk both supported",
          "Custom modules and fields mapped",
          "Lead source set automatically for attribution",
        ],
      },
    ],
    capabilities: [
      "Create leads and deals with full conversation context",
      "Push support issues to Zoho Desk",
      "Map to custom modules and fields",
      "Automatic lead source attribution",
      "Owner assignment matching your routing rules",
    ],
  },
  {
    slug: "pipedrive",
    name: "Pipedrive",
    category: "CRM",
    short:
      "Deals created in the right stage with the right owner, so your board reflects what was actually said in the chat.",
    sections: [
      {
        h: "What it does",
        p: [
          "Each qualified enquiry becomes a Pipedrive deal in the stage you nominate, with the person and organisation created or matched, and the transcript attached as a note.",
          "Indicative value estimated during the conversation can be written to the deal value, which makes your forecast meaningful from the first day rather than after someone has cleaned it up.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Connect with an API token and map chatbot fields to your deal and person fields, including custom ones. You choose the pipeline and the entry stage.",
          "Activities can be created alongside the deal, so the owner opens their day with a call or follow-up already scheduled rather than a bare card.",
        ],
        bullets: [
          "Pipeline and entry stage chosen by you",
          "Custom deal and person fields supported",
          "Follow-up activities created with the deal",
        ],
      },
    ],
    capabilities: [
      "Create deals, persons, and organisations from chats",
      "Write indicative value to the deal",
      "Attach transcripts as deal notes",
      "Create the first follow-up activity automatically",
      "Assign owners from the chatbot's routing rules",
    ],
  },
  {
    slug: "odoo",
    name: "Odoo",
    category: "ERP",
    short:
      "For the many Omani businesses running Odoo, leads, helpdesk tickets, and customer records created straight from the conversation.",
    sections: [
      {
        h: "What it does",
        p: [
          "Odoo is widely used across Oman for everything from stock to invoicing, which makes it the natural destination for what the chatbot produces. Qualified enquiries become CRM leads, support issues become helpdesk tickets, and customer records are matched or created as needed.",
          "Where you run Odoo inventory, stock levels can be read back into the conversation, so a customer asking whether something is available gets the real answer.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Connect to your Odoo instance, whether hosted by Odoo or on your own infrastructure, and map fields to the models you use. Custom fields added by your implementer are supported.",
          "Because Odoo deployments differ so much, we walk the mapping through with you rather than assuming a standard configuration.",
        ],
        bullets: [
          "Odoo Online and self-hosted instances both supported",
          "CRM, Helpdesk, and Contacts models covered",
          "Stock levels readable back into the conversation",
        ],
      },
    ],
    capabilities: [
      "Create CRM leads from qualified enquiries",
      "Create helpdesk tickets from support conversations",
      "Match or create customer records automatically",
      "Read stock availability into the chat",
      "Work with self-hosted and cloud Odoo instances",
    ],
  },
  {
    slug: "zapier",
    name: "Zapier",
    category: "Automation",
    short:
      "Connect the chatbot to thousands of applications without waiting for a native integration to exist.",
    sections: [
      {
        h: "What it does",
        p: [
          "Chatbot events, a conversation started, a ticket created, a lead qualified, a handover requested, become Zapier triggers. From there you can send them anywhere Zapier reaches, which covers most of what a small business runs.",
          "It also works the other way. A Zap can push knowledge updates or contact records into the chatbot, so a change made in your own system reaches the conversation without a manual step.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Connect your Zapier account with an API key and pick the events you want to trigger on. No development work is needed, and most useful Zaps take a few minutes to build.",
          "Common first Zaps: new lead into a spreadsheet, negative sentiment into a team channel, new ticket into a project tool.",
        ],
        bullets: [
          "Triggers on conversation, ticket, and lead events",
          "Actions for pushing data back into the chatbot",
          "No development work required",
        ],
      },
    ],
    capabilities: [
      "Trigger Zaps on conversations, tickets, and leads",
      "Send data to thousands of connected applications",
      "Push updates back into the chatbot from your systems",
      "Filter which events fire to keep task usage sensible",
      "Build without any development work",
    ],
  },
  {
    slug: "make",
    name: "Make",
    category: "Automation",
    short:
      "Build multi-step workflows around chatbot events when a single trigger and action is not enough.",
    sections: [
      {
        h: "What it does",
        p: [
          "Make suits the workflows Zapier finds awkward: branching on the value of a lead, looping over line items, calling two systems and combining the results before writing anything back.",
          "The same chatbot events are available, so you can start simple and move a scenario to Make when the logic outgrows a straight line.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Connect with an API key and build scenarios against the chatbot modules. Webhook triggers give near-immediate execution rather than polling on a schedule.",
          "Error handling and retry behaviour are configured in Make, so a downstream system being briefly unavailable does not lose the event.",
        ],
        bullets: [
          "Webhook triggers for immediate execution",
          "Branching and looping for complex workflows",
          "Error handling configured per scenario",
        ],
      },
    ],
    capabilities: [
      "Immediate webhook triggers on chatbot events",
      "Branch on lead value, category, or sentiment",
      "Combine several systems before writing back",
      "Configure retries and error handling per scenario",
      "Move workflows here as they outgrow simpler tools",
    ],
  },
  {
    slug: "slack",
    name: "Slack",
    category: "Productivity",
    short:
      "The conversations your team needs to see, in the channel they already have open, with a link straight to the thread.",
    sections: [
      {
        h: "What it does",
        p: [
          "Choose which events reach Slack: a high-value lead, a negative conversation, a handover request, a ticket about to breach its promised time. Each arrives as a message with the customer, a summary, and a link into the full conversation.",
          "Handovers can be accepted from Slack, so the person who picks it up is recorded without anyone opening another tool.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Install the app into your workspace and pick a channel per event type. Most teams route leads and escalations to different channels so neither drowns the other.",
          "Notification volume is worth tuning in the first week. Sending everything to one channel is the fastest way to have the whole thing muted.",
        ],
        bullets: [
          "Per-event channel routing",
          "Handover accepted directly from Slack",
          "Links straight into the full conversation",
        ],
      },
    ],
    capabilities: [
      "Route leads, escalations, and alerts to chosen channels",
      "Accept a handover without leaving Slack",
      "Link directly into the conversation record",
      "Alert before a ticket breaches its promised time",
      "Tune notification volume per event type",
    ],
  },
  {
    slug: "microsoft-teams",
    name: "Microsoft Teams",
    category: "Productivity",
    short:
      "The same alerting and handover flow for organisations that run on Microsoft 365 rather than Slack.",
    sections: [
      {
        h: "What it does",
        p: [
          "Leads, escalations, ticket breaches, and negative conversations arrive in the Teams channel you nominate, each with a summary and a link to the full thread. Handovers can be claimed from the message.",
          "For businesses already standardised on Microsoft 365 alongside Outlook calendars, this keeps everything the chatbot produces inside one environment.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Add the connector to the team and channel you want, then choose which events it receives. Different channels can take different event types.",
          "Permissions are scoped to posting in the channels you select rather than to your whole tenant.",
        ],
        bullets: [
          "Per-channel event routing",
          "Handover claimed from the Teams message",
          "Scoped permissions rather than tenant-wide",
        ],
      },
    ],
    capabilities: [
      "Post leads, escalations, and alerts to chosen channels",
      "Claim a handover from inside Teams",
      "Link directly into the conversation record",
      "Pair naturally with Outlook calendar booking",
      "Scoped channel permissions",
    ],
  },
  {
    slug: "wordpress",
    name: "WordPress",
    category: "Website",
    short:
      "A plugin that puts the chatbot on your WordPress site without touching a theme file.",
    sections: [
      {
        h: "What it does",
        p: [
          "Install the plugin, paste your site key, and the widget appears. No theme editing, no child theme, and nothing that breaks the next time your theme updates.",
          "The plugin also tells the chatbot which pages and posts exist, so newly published content is picked up for answering without waiting for a re-crawl.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Install from the plugin file we provide, enter your site key, and choose where the widget appears. You can exclude specific pages, such as checkout or account pages, where a chat window would be in the way.",
          "It works with common caching and optimisation plugins, because the widget loads asynchronously rather than being rendered into the cached page.",
        ],
        bullets: [
          "No theme file editing",
          "Page-level exclusions supported",
          "Compatible with caching and optimisation plugins",
        ],
      },
    ],
    capabilities: [
      "Install with a plugin and a site key",
      "Exclude specific pages from showing the widget",
      "New posts and pages picked up for answering",
      "Survives theme updates",
      "Works alongside caching plugins",
    ],
  },
  {
    slug: "shopify",
    name: "Shopify",
    category: "Ecommerce",
    short:
      "Order status, stock, and returns answered from live Shopify data rather than from a page that was accurate last week.",
    sections: [
      {
        h: "What it does",
        p: [
          "The chatbot reads your Shopify catalogue and orders, so a customer asking whether a size is in stock or where their order is gets the real answer, in the conversation, without logging into an account.",
          "Return and exchange requests are checked against your policy and the order date, then raised as a ticket with the order attached, so your team is not searching for it.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Connect your store and choose what the chatbot may read: products, inventory, orders, and customers. Order lookup can be restricted to require both an order number and a matching phone number or email.",
          "The widget can be added through the same connection, so there is no separate theme edit.",
        ],
        bullets: [
          "Live product, inventory, and order access",
          "Order lookup gated on matching customer details",
          "Widget installed through the same connection",
        ],
      },
    ],
    capabilities: [
      "Answer stock questions from live inventory",
      "Give order status without an account login",
      "Check return eligibility against your policy",
      "Raise tickets with the order already attached",
      "Install the widget without editing your theme",
    ],
  },
  {
    slug: "woocommerce",
    name: "WooCommerce",
    category: "Ecommerce",
    short:
      "The same live catalogue and order answers for stores running WooCommerce on WordPress.",
    sections: [
      {
        h: "What it does",
        p: [
          "Products, stock, and order status are read from WooCommerce, so the chatbot answers availability and delivery questions from the real state of the store rather than a copy.",
          "Returns and order problems become tickets with the order reference attached, which removes the most tedious part of handling them.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Generate WooCommerce API keys with read access to the resources you want exposed, and connect them from the integrations panel. Write access is not required for answering questions.",
          "Order lookup requires a matching phone number or email alongside the order number, so one customer cannot read another's order.",
        ],
        bullets: [
          "Read-only API keys are sufficient",
          "Order lookup gated on matching customer details",
          "Pairs with the WordPress plugin for the widget",
        ],
      },
    ],
    capabilities: [
      "Answer stock and variant questions from live data",
      "Give order status against a verified customer",
      "Raise return tickets with the order attached",
      "Operate with read-only API credentials",
      "Work alongside the WordPress plugin",
    ],
  },
  {
    slug: "google-sheets",
    name: "Google Sheets",
    category: "Productivity",
    short:
      "The simplest possible destination for leads and tickets, and a genuinely good place to start.",
    sections: [
      {
        h: "What it does",
        p: [
          "Every lead, ticket, or conversation summary can be appended as a row in a Google Sheet you own, with the columns you choose. For a business with no CRM, this is a complete and perfectly workable system.",
          "It also works in the other direction. A sheet of prices, stock, or opening hours can be read by the chatbot as a knowledge source, so updating a cell updates the answers.",
        ],
      },
      {
        h: "Setting it up",
        p: [
          "Authorise access to the specific spreadsheet rather than to your whole Drive, and map which fields go in which columns. New rows appear as conversations happen.",
          "Many businesses start here and move to a CRM later. Nothing is lost in that move, because the same data is already being produced.",
        ],
        bullets: [
          "Access scoped to one spreadsheet",
          "Column mapping you control",
          "Sheets readable as a knowledge source",
        ],
      },
    ],
    capabilities: [
      "Append leads and tickets as rows in real time",
      "Read prices and stock from a sheet as knowledge",
      "Access limited to the spreadsheets you choose",
      "Custom column mapping",
      "A complete starting point for businesses with no CRM",
    ],
  },
];
