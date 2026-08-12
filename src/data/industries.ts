import type { Industry } from "./types";

export const industries: Industry[] = [
  {
    slug: "real-estate-agencies-ai-chatbot",
    name: "Real Estate Agencies",
    heroTitle: "AI chat for real estate agencies in Oman",
    heroSub:
      "Listing enquiries arrive at eleven at night from people scrolling on their phones. The chatbot answers them, qualifies the serious ones, and books the viewing before anyone else replies.",
    painPoints: [
      {
        title: "Every listing generates the same five questions",
        desc: "Is it still available, what is the rent, is it furnished, how many parking spaces, can I see it Friday. Your agents answer them a hundred times a week instead of showing property.",
      },
      {
        title: "Enquiries peak when nobody is working",
        desc: "Property browsing happens in the evening and at the weekend. By Sunday morning the person who messaged on Friday has already viewed something with another agency.",
      },
      {
        title: "Time wasters look exactly like buyers",
        desc: "In an unread WhatsApp thread, someone with an approved mortgage and someone curious about prices are indistinguishable until an agent has spent twenty minutes finding out.",
      },
    ],
    useCases: [
      {
        title: "Instant listing answers",
        desc: "Availability, rent in OMR, furnishing, parking, and building amenities answered from your own listing data, at any hour, in Arabic or English.",
      },
      {
        title: "Viewing slots booked in the chat",
        desc: "The chatbot offers times the agent is genuinely free, holds the slot, and sends a reminder the day before with the exact location.",
      },
      {
        title: "Qualification before the agent invests time",
        desc: "Budget range, timeline, whether they need finance, and whether they have seen the area. The agent opens a lead that is already worth a phone call.",
      },
      {
        title: "Landlord and tenant queries separated",
        desc: "Maintenance requests from existing tenants become tickets and go to property management, while buying and renting enquiries go to sales.",
      },
    ],
    omanNote:
      "Property demand in Oman clusters around a handful of areas at once: Al Mouj and Qurum for expatriate rentals, Al Khoudh and Al Amerat for family villas, and the growing developments around Barka. Enquiries come in Arabic from Omani buyers and in English from expatriate tenants, often about the same building. The chatbot answers both in the language they wrote in, and every conversation stays on servers inside the Sultanate in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it pull details from our listings?",
        a: "Yes. It reads your published listing pages, and where you have a property management system it can be connected so availability and price are always current rather than copied.",
      },
      {
        q: "What stops it quoting a price we have changed?",
        a: "It answers from your live source. If a listing has been updated, the next conversation uses the new figure. You can also mark price as a topic that always goes to an agent.",
      },
      {
        q: "Does it handle both sales and rentals?",
        a: "Yes, and it routes them differently. You set which agents cover sales, which cover rentals, and which handle commercial, and leads land with the right person.",
      },
    ],
  },
  {
    slug: "car-dealers-and-workshops-ai-chatbot",
    name: "Car Dealers & Workshops",
    heroTitle: "AI chat for car dealers and repair workshops in Oman",
    heroSub:
      "Service bookings, parts availability, and test drive requests handled in the chat while your advisors are under a bonnet.",
    painPoints: [
      {
        title: "The service desk is busiest when the phone is busiest",
        desc: "Every workshop in Oman gets a wave of booking messages right after opening, which is exactly when advisors are checking cars in and nobody can reply.",
      },
      {
        title: "Parts questions interrupt skilled work",
        desc: "Asking whether a filter or a bumper is in stock pulls a technician off the floor for a question a well-briefed chatbot could answer in seconds.",
      },
      {
        title: "Evening buyers go quiet by morning",
        desc: "People browse cars at night. An enquiry about a specific model at nine in the evening is worth far less at nine the next morning.",
      },
    ],
    useCases: [
      {
        title: "Service booking around the clock",
        desc: "The chatbot checks your calendar, books oil changes and major services, and confirms with the workshop address and what to bring.",
      },
      {
        title: "Test drive scheduling",
        desc: "Enquiries about a specific model get the key specs, the OMR guidance you approve, and a confirmed test drive slot inside the same conversation.",
      },
      {
        title: "Breakdown triage",
        desc: "Urgent messages are identified, the location is captured, and your duty driver is alerted immediately while routine bookings wait their turn.",
      },
      {
        title: "Status without the chase",
        desc: "Customers asking whether their car is ready get the status you have logged, instead of ringing three times before lunch.",
      },
    ],
    omanNote:
      "Oman's car trade runs on messages as much as on calls: dealers along the Al Wattayah strip and independent garages in Sohar and Salalah all compete for the same booking. Enquiries arrive in Omani Arabic from local owners and in English, Hindi, or Malayalam from expatriate drivers, frequently as WhatsApp voice notes recorded in a noisy car park. Every conversation stays on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it quote prices for services and parts?",
        a: "Yes, from a price list you control. It quotes only the OMR figures you have approved and hands anything outside that list to your team as a callback.",
      },
      {
        q: "Does it work with our booking system?",
        a: "It connects to common calendars and scheduling tools, and can also log bookings to a shared sheet or send structured emails if you would rather start simple.",
      },
      {
        q: "What about voice notes from the workshop floor?",
        a: "They are understood the same as typed messages, which matters because most customers describe a noise or a warning light by talking rather than typing.",
      },
    ],
  },
  {
    slug: "dental-clinics-ai-chatbot",
    name: "Dental Clinics",
    heroTitle: "AI chat for dental clinics in Oman",
    heroSub:
      "Appointment requests, treatment questions, and insurance queries answered while your reception desk is with a patient.",
    painPoints: [
      {
        title: "Reception cannot be in two places",
        desc: "The person at the desk is checking a patient in, taking payment, and holding a phone. The WhatsApp message about a broken crown waits until lunch.",
      },
      {
        title: "Price questions never get a straight answer",
        desc: "Patients want to know what a cleaning or a whitening costs before they will book. Without a quick answer, they ask the clinic down the road instead.",
      },
      {
        title: "No-shows are expensive and predictable",
        desc: "A missed forty-five minute appointment is revenue that cannot be recovered, and most of them were avoidable with a reminder the patient actually read.",
      },
    ],
    useCases: [
      {
        title: "Booking and rescheduling in the chat",
        desc: "Real availability by treatment type and by dentist, with the slot confirmed and written into the clinic calendar immediately.",
      },
      {
        title: "Treatment and price questions",
        desc: "Clear answers on what a procedure involves and what it costs in OMR, from the list you approve, with anything clinical passed to a person.",
      },
      {
        title: "Insurance eligibility triage",
        desc: "Which insurers you accept and what a patient should bring, answered up front so nobody arrives with the wrong paperwork.",
      },
      {
        title: "Reminders that cut no-shows",
        desc: "A WhatsApp reminder the day before with a one-tap way to move the appointment, which turns silent no-shows into reschedules.",
      },
    ],
    omanNote:
      "Dental clinics across Muscat compete on convenience as much as clinical reputation, and the first clinic to answer a message about a chipped tooth usually gets the patient. Enquiries arrive in Arabic and English, often after hours and often from a parent asking on behalf of a child. Clinical advice is never given automatically: those conversations go to your team. Patient conversations are stored on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Will it give clinical advice?",
        a: "No. Anything clinical is configured as an always-escalate topic and goes to your team. The chatbot handles scheduling, pricing, logistics, and insurance questions.",
      },
      {
        q: "Can it handle emergencies?",
        a: "It recognises urgency from what the patient describes, tells them plainly what to do now, and alerts your on-call contact immediately rather than logging a routine request.",
      },
      {
        q: "Is patient data safe?",
        a: "Conversations are stored and processed on servers inside Oman in line with the Personal Data Protection Law. Nothing is copied to a data centre abroad.",
      },
    ],
  },
  {
    slug: "medical-and-wellness-ai-chatbot",
    name: "Clinics & Wellness Centres",
    heroTitle: "AI chat for clinics and wellness centres in Oman",
    heroSub:
      "Appointments, opening hours, insurance, and preparation instructions handled automatically, with anything clinical routed straight to your staff.",
    painPoints: [
      {
        title: "Administrative questions crowd out clinical work",
        desc: "Most incoming messages are about hours, parking, insurance, and what to bring. They are easy questions that still consume your front desk all day.",
      },
      {
        title: "Patients arrive unprepared",
        desc: "Fasting instructions, documents, and arrival times get missed, appointments overrun, and the whole day's schedule slips.",
      },
      {
        title: "Weekend and evening enquiries go unanswered",
        desc: "Wellness and physiotherapy bookings are made outside working hours, which is precisely when nobody is watching the inbox.",
      },
    ],
    useCases: [
      {
        title: "Booking by service and practitioner",
        desc: "Availability offered per service and per practitioner, with the right appointment length and buffer applied automatically.",
      },
      {
        title: "Preparation instructions sent in advance",
        desc: "Fasting, documents, arrival time, and what to wear, sent on WhatsApp in the patient's language before they set off.",
      },
      {
        title: "Insurance and payment questions",
        desc: "Which insurers you accept, what is covered, and what to bring, answered consistently rather than differently by whoever picks up.",
      },
      {
        title: "Clinical questions escalated immediately",
        desc: "Anything about symptoms, medication, or results is passed to your staff with the full conversation, never answered automatically.",
      },
    ],
    omanNote:
      "Oman's private clinics serve a mixed patient base: Omani families, long-term expatriate residents, and workers whose employers hold their insurance. That means the same question arrives in Arabic, English, Hindi, and Malayalam in the same week. Answering each in the patient's own language removes a real barrier to care, and every conversation is stored on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it discuss symptoms or results?",
        a: "No. Symptoms, medication, and results are always-escalate topics that go to your clinical staff with the full conversation attached.",
      },
      {
        q: "Does it work with our clinic management system?",
        a: "It connects to common calendars and can push appointments and enquiries into your system through our integrations or the API.",
      },
      {
        q: "Can patients book in Arabic?",
        a: "Yes, and the confirmation and reminders are sent in the same language they used, with no separate Arabic chatbot to maintain.",
      },
    ],
  },
  {
    slug: "ecommerce-and-retail-ai-chatbot",
    name: "Ecommerce & Retail",
    heroTitle: "AI chat for online stores and retailers in Oman",
    heroSub:
      "Where is my order, do you have it in stock, and can I return this. Answered in seconds, at the hour people actually shop.",
    painPoints: [
      {
        title: "Order status swamps everything else",
        desc: "The majority of messages a retailer receives are asking where an order is. Answering them by hand leaves no capacity for the messages that are actually sales.",
      },
      {
        title: "Stock questions lose the sale",
        desc: "A customer asking whether a size or colour is available will not wait until morning. They will buy it somewhere that answered.",
      },
      {
        title: "Returns turn into complaints",
        desc: "An unclear returns process handled slowly becomes a public review. Handled clearly and quickly, it usually becomes a repeat customer.",
      },
    ],
    useCases: [
      {
        title: "Order tracking in the conversation",
        desc: "The customer gives an order number or a phone number and gets the live status and delivery window, without logging into anything.",
      },
      {
        title: "Stock and variant answers",
        desc: "Availability by size, colour, and branch, answered from your catalogue rather than from a page that was accurate last week.",
      },
      {
        title: "Returns and exchanges started in the chat",
        desc: "Eligibility checked, the process explained, and a ticket raised with the order attached so your team is not searching for it.",
      },
      {
        title: "Abandoned enquiries recovered",
        desc: "Someone who asked about a product and did not buy gets one useful follow-up on the channel they used, not a marketing blast.",
      },
    ],
    omanNote:
      "Online retail in Oman still runs substantially through WhatsApp, with many stores taking orders, payments, and complaints in the same thread. Delivery expectations differ sharply between Muscat and the interior, which makes clear, honest delivery windows more valuable than optimistic ones. Conversations happen in Arabic and English and stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it connect to our store platform?",
        a: "Yes. Common platforms connect directly, and anything bespoke can be wired through our API so stock and order status are read from the real source.",
      },
      {
        q: "Can it take payment?",
        a: "It does not handle card details in the conversation. It sends your existing payment link and confirms once the payment is recorded on your side.",
      },
      {
        q: "What happens when a customer is angry?",
        a: "Negative sentiment can trigger an immediate handover and a ticket, so a complaint reaches a person quickly rather than being handled automatically.",
      },
    ],
  },
  {
    slug: "restaurants-and-cafes-ai-chatbot",
    name: "Restaurants & Cafés",
    heroTitle: "AI chat for restaurants and cafés in Oman",
    heroSub:
      "Reservations, large group bookings, and the questions about parking and the menu, handled without pulling anyone off the floor.",
    painPoints: [
      {
        title: "Nobody can answer the phone during service",
        desc: "The busiest hour for booking messages is the busiest hour on the floor. Every message answered late is a table that went elsewhere.",
      },
      {
        title: "Group bookings need a conversation",
        desc: "A table for twenty on a Thursday needs a deposit, a menu decision, and a seating plan, and none of that fits a booking form.",
      },
      {
        title: "The same questions, endlessly",
        desc: "Opening hours during Ramadan, whether there is parking, whether the kitchen is halal certified, whether there is a family section.",
      },
    ],
    useCases: [
      {
        title: "Reservations taken and confirmed",
        desc: "Table availability by size and time, confirmed on WhatsApp with a reminder that reduces the empty tables you held.",
      },
      {
        title: "Large group and event enquiries qualified",
        desc: "Date, headcount, budget, and menu preference captured in the chat, then handed to your events person as a proper lead.",
      },
      {
        title: "Menu and dietary questions",
        desc: "Answered from your actual menu, including allergens and whether a dish can be made without a specific ingredient.",
      },
      {
        title: "Ramadan and holiday hours",
        desc: "Timings that change every year answered correctly, in Arabic and English, without editing five different listings.",
      },
    ],
    omanNote:
      "Restaurants in Muscat live and die by the Thursday and Friday evening rush, and by the completely different rhythm of Ramadan, when iftar bookings arrive in volume and suhoor service runs late. Guests message in Arabic and English, and often ask about the family section, prayer facilities, and parking before they ask about the food. Conversations stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it manage our real table availability?",
        a: "Yes, where you use a reservation system we can connect to. Otherwise it works from the capacity rules you set per service and per day.",
      },
      {
        q: "Does it handle Ramadan timings?",
        a: "Yes. You set the seasonal hours once and the chatbot answers with the correct timings for the date being asked about.",
      },
      {
        q: "What about delivery orders?",
        a: "It answers delivery questions and shares your ordering link. Taking the order itself stays with whichever platform you already use.",
      },
    ],
  },
  {
    slug: "hotels-and-resorts-ai-chatbot",
    name: "Hotels & Resorts",
    heroTitle: "AI chat for hotels and resorts in Oman",
    heroSub:
      "Pre-arrival questions, in-stay requests, and booking enquiries handled in the guest's own language, at the hour they ask.",
    painPoints: [
      {
        title: "Guests ask before they book, and again before they arrive",
        desc: "Airport transfers, check-in times, whether the pool is heated, whether the room has a bath. Each one is a small question and there are hundreds a week.",
      },
      {
        title: "The front desk is the bottleneck",
        desc: "In-stay requests arrive by WhatsApp because guests prefer it, and they land with the same person who is checking in a coach party.",
      },
      {
        title: "International enquiries arrive overnight",
        desc: "European and Asian guests message in their own time zone, which is the middle of the night in Muscat.",
      },
    ],
    useCases: [
      {
        title: "Pre-arrival questions answered instantly",
        desc: "Transfers, check-in and check-out times, facilities, and directions, answered from your own information at any hour.",
      },
      {
        title: "In-stay requests turned into tickets",
        desc: "Housekeeping, maintenance, and amenity requests become tickets with an owner and a promised time, and the guest is told both.",
      },
      {
        title: "Booking enquiries qualified and passed on",
        desc: "Dates, party size, room preference, and occasion captured and handed to reservations as a lead worth calling.",
      },
      {
        title: "Event and wedding enquiries",
        desc: "Function enquiries collected properly the first time, with the date, headcount, and requirements your events team needs to quote.",
      },
    ],
    omanNote:
      "Oman's hospitality market spans city hotels in Muscat, desert camps in the Wahiba, and resorts in Salalah whose season is driven entirely by the khareef. Guests arrive from the Gulf, Europe, and increasingly from Asia, and the same property fields questions in Arabic, English, and several other languages in a single day. Guest conversations stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it take a booking?",
        a: "It qualifies the enquiry and passes it to reservations, or sends your booking link. Direct booking through the chat can be wired to your engine through the API.",
      },
      {
        q: "Does it work for in-stay service requests?",
        a: "Yes, and this is where most properties see the biggest gain. Requests become tracked tickets rather than messages someone may or may not have actioned.",
      },
      {
        q: "Which languages does it handle?",
        a: "Arabic and English as standard, with additional languages enabled where your guest mix needs them.",
      },
    ],
  },
  {
    slug: "travel-agencies-ai-chatbot",
    name: "Travel Agencies",
    heroTitle: "AI chat for travel agencies in Oman",
    heroSub:
      "Package questions, visa requirements, and quote requests captured properly the first time, day or night.",
    painPoints: [
      {
        title: "Quote requests arrive incomplete",
        desc: "Dates, travellers, and budget are missing, so every enquiry costs three messages before anyone can price it.",
      },
      {
        title: "Visa questions consume the day",
        desc: "Requirements change by destination and by nationality, and staff answer the same handful of questions repeatedly and sometimes inconsistently.",
      },
      {
        title: "Enquiries peak in the evening",
        desc: "People plan holidays after dinner. An agency that answers at nine at night quotes first and usually wins.",
      },
    ],
    useCases: [
      {
        title: "Complete quote requests",
        desc: "Destination, dates, travellers, cabin class, and budget captured in the chat, so your consultant opens a request they can actually price.",
      },
      {
        title: "Visa and document guidance",
        desc: "Consistent answers on requirements by destination and passport, from material you maintain, with complex cases sent to a person.",
      },
      {
        title: "Package and availability questions",
        desc: "Answered from your published packages, with anything time-sensitive routed to a consultant rather than guessed at.",
      },
      {
        title: "Follow-up on unquoted enquiries",
        desc: "A traveller who asked and did not book gets one timely follow-up rather than being forgotten in an inbox.",
      },
    ],
    omanNote:
      "Travel demand in Oman is strongly seasonal, spiking around Eid, the summer exodus to cooler climates, and the Salalah khareef. Agencies serve Omani families booking for large groups and expatriate residents booking home visits, which are completely different conversations. Both arrive by WhatsApp, in Arabic and English, and both stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it quote prices?",
        a: "It shares published package prices you maintain. Bespoke itineraries go to a consultant, because those prices move too fast to automate safely.",
      },
      {
        q: "Will it give visa advice?",
        a: "It gives general requirements from material you control, and escalates anything specific to a person. Visa rules are a topic where a wrong answer is expensive.",
      },
      {
        q: "Can it handle group bookings?",
        a: "Yes. Group enquiries are captured with headcount and dates and routed to whoever handles groups, as a lead with an owner.",
      },
    ],
  },
  {
    slug: "tuition-centres-ai-chatbot",
    name: "Tuition Centres",
    heroTitle: "AI chat for tuition centres and training institutes in Oman",
    heroSub:
      "Course questions, timetables, and fee enquiries answered for parents in the evening, when they are actually deciding.",
    painPoints: [
      {
        title: "Parents enquire after work",
        desc: "The messages arrive between eight and eleven at night. By the time the centre opens, the parent has messaged three other centres.",
      },
      {
        title: "Fee questions never get a direct answer",
        desc: "Parents want the monthly figure in OMR before they will visit. Vague replies read as expensive and lose the enrolment.",
      },
      {
        title: "Enrolment surges are unmanageable",
        desc: "The fortnight before term starts produces more enquiries than the rest of the quarter, and it always lands on the same two people.",
      },
    ],
    useCases: [
      {
        title: "Course and timetable answers",
        desc: "Which subjects, which grades, which days and times, and how many students per class, answered from your own schedule.",
      },
      {
        title: "Fees stated clearly",
        desc: "Monthly and term fees in OMR from the list you approve, including sibling and early payment discounts where you offer them.",
      },
      {
        title: "Trial classes booked",
        desc: "A trial slot offered and confirmed in the conversation, with a reminder to the parent the day before.",
      },
      {
        title: "Enrolment enquiries captured as leads",
        desc: "Student name, grade, subjects, and preferred timing collected and assigned to a named person to follow up.",
      },
    ],
    omanNote:
      "Tuition demand in Oman follows the school calendar closely, with sharp peaks before term and around examination periods. Parents ask in Arabic and English, sometimes in the same conversation, and they are usually comparing several centres at once on WhatsApp. Being the one that answers immediately with a clear fee is worth more than any advertising. Conversations stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it enrol a student directly?",
        a: "It collects everything needed and creates the lead. Final enrolment and payment stay with your staff, which parents generally prefer.",
      },
      {
        q: "Does it handle both school subjects and professional courses?",
        a: "Yes. You define the catalogue, and enquiries are routed to whoever handles that category.",
      },
      {
        q: "What about parents who write in Arabic?",
        a: "The whole conversation happens in Arabic, including fees and timetables, with no separate Arabic setup to maintain.",
      },
    ],
  },
  {
    slug: "gyms-and-fitness-studios-ai-chatbot",
    name: "Gyms & Fitness Studios",
    heroTitle: "AI chat for gyms and fitness studios in Oman",
    heroSub:
      "Membership questions, class timetables, and trial bookings answered instantly, including the ladies-only session times everyone asks about.",
    painPoints: [
      {
        title: "Membership pricing questions never stop",
        desc: "Monthly, quarterly, annual, couple, and student rates, asked a dozen times a day by people who will not visit until they know.",
      },
      {
        title: "Class timetables change and messages pile up",
        desc: "Every timetable change generates a wave of questions, and each one is answered by whoever happens to be on the desk.",
      },
      {
        title: "Trials are booked and forgotten",
        desc: "A free trial nobody reminds the prospect about is a slot held for someone who was never coming.",
      },
    ],
    useCases: [
      {
        title: "Membership options explained",
        desc: "Every tier and its OMR price, freezing rules, and joining fees, answered consistently from your own list.",
      },
      {
        title: "Class schedules and availability",
        desc: "What is on, when, with which instructor, and whether there is space, including ladies-only sessions.",
      },
      {
        title: "Trial sessions booked and reminded",
        desc: "A slot offered, confirmed, and reminded on WhatsApp, which converts far more trials into visits.",
      },
      {
        title: "Personal training enquiries qualified",
        desc: "Goals, availability, and budget captured and handed to a specific trainer rather than to a shared inbox.",
      },
    ],
    omanNote:
      "Fitness in Oman is heavily shaped by climate and by scheduling: activity moves indoors and later in the evening through the summer, and ladies-only hours are a decisive factor for a large share of prospective members. Enquiries arrive in Arabic and English and almost entirely on WhatsApp. Conversations stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it sign someone up?",
        a: "It collects everything and creates the lead, then shares your payment link. Contract signing stays with your staff.",
      },
      {
        q: "Can it answer questions about ladies-only hours?",
        a: "Yes, and it is one of the most common questions asked. It answers from your published timetable so the information is always current.",
      },
      {
        q: "Does it handle class cancellations?",
        a: "Where you connect a booking system, it can confirm and cancel. Otherwise it raises a ticket so nothing is lost.",
      },
    ],
  },
  {
    slug: "beauty-salons-and-spas-ai-chatbot",
    name: "Salons & Spas",
    heroTitle: "AI chat for salons and spas in Oman",
    heroSub:
      "Bookings taken while your team has both hands busy, with reminders that stop the empty chair.",
    painPoints: [
      {
        title: "Nobody can answer while working on a client",
        desc: "Booking messages arrive continuously and are answered in gaps, which means the fastest-moving customers book elsewhere.",
      },
      {
        title: "No-shows waste a held slot",
        desc: "A missed two-hour treatment is not recoverable, and most no-shows would have rescheduled if asked the day before.",
      },
      {
        title: "Service and price lists are long",
        desc: "Customers ask what a treatment includes, how long it takes, and what it costs, and the answers vary depending on who replies.",
      },
    ],
    useCases: [
      {
        title: "Booking by service and stylist",
        desc: "Availability offered with the correct duration for the treatment, and the slot written into your calendar immediately.",
      },
      {
        title: "Treatment and price answers",
        desc: "What is included, how long it takes, and the OMR price, answered the same way every time from your own list.",
      },
      {
        title: "Reminders and easy rescheduling",
        desc: "A WhatsApp reminder the day before with one tap to move the appointment, which turns no-shows into rebookings.",
      },
      {
        title: "Bridal and package enquiries",
        desc: "Larger bookings captured properly with date, party size, and services, then handed to a named person to quote.",
      },
    ],
    omanNote:
      "Salon bookings in Oman surge before Eid, before the wedding season, and before every long weekend, and they arrive almost entirely on WhatsApp, frequently as voice notes. Privacy matters: many customers prefer to book a specific stylist or a private room, and that preference belongs on the record rather than in someone's memory. Conversations stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can customers book a specific stylist?",
        a: "Yes. Availability is offered per stylist and per service, and the preference is stored so returning customers do not have to ask again.",
      },
      {
        q: "Does it handle voice note bookings?",
        a: "Yes, which matters here because a large share of salon bookings arrive as voice notes rather than typed messages.",
      },
      {
        q: "Can it take a deposit?",
        a: "It sends your payment link and confirms once payment is recorded. It never handles card details in the conversation.",
      },
    ],
  },
  {
    slug: "contractors-and-builders-ai-chatbot",
    name: "Contractors & Builders",
    heroTitle: "AI chat for contractors and builders in Oman",
    heroSub:
      "Job enquiries qualified before anyone drives out to quote, and site visits booked without leaving the conversation.",
    painPoints: [
      {
        title: "You cannot hold a phone on site",
        desc: "Enquiries arrive while you are in the middle of a job. They are answered hours later, by which point somebody else has visited.",
      },
      {
        title: "Unqualified visits burn a day",
        desc: "Driving across Muscat to quote a job that turns out to be a small repair costs fuel and an afternoon that nobody bills for.",
      },
      {
        title: "Quote chasing interrupts work",
        desc: "Customers ring to ask where their quotation is, and each interruption slows the job you are actually being paid for.",
      },
    ],
    useCases: [
      {
        title: "Job qualification in the first message",
        desc: "What the work is, where, the timeline, and the budget range, captured before anyone commits to a visit.",
      },
      {
        title: "Site visits booked",
        desc: "Visit slots you keep open are offered and confirmed, and the calendar entry carries the brief and directions.",
      },
      {
        title: "Quote status answered",
        desc: "Customers chasing a quotation get the status you have logged and a firm time for an answer, without calling you.",
      },
      {
        title: "After-hours enquiries captured",
        desc: "Evening enquiries from villa owners planning renovations are captured in full and waiting when you start.",
      },
    ],
    omanNote:
      "Construction and renovation enquiries in Oman cluster before Ramadan and Eid, when families refresh their homes, and again after the summer when heat damage needs repairing. Enquiries come in Arabic from villa owners and in English, Hindi, or Bengali from site supervisors and project managers, often with photographs attached. Conversations stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "We are a small firm. Is this worth it?",
        a: "Small firms lose the most enquiries, because there is nobody free to answer. One recovered job usually covers a long stretch of the monthly cost.",
      },
      {
        q: "Can it tell urgent repairs from projects?",
        a: "Yes. You define what counts as urgent and those messages alert you immediately, while project enquiries are logged for the evening.",
      },
      {
        q: "Can customers send photographs?",
        a: "Yes, and they are attached to the enquiry, which usually saves an entire round of questions before you quote.",
      },
    ],
  },
  {
    slug: "interior-fit-out-ai-chatbot",
    name: "Interior & Fit-Out",
    heroTitle: "AI chat for interior and fit-out companies in Oman",
    heroSub:
      "Design enquiries captured with the detail you need to quote, and consultations booked before the client contacts a competitor.",
    painPoints: [
      {
        title: "Enquiries are vague by nature",
        desc: "A message saying they want to redo the majlis tells you nothing about size, budget, or timeline, and every quote starts with a discovery call.",
      },
      {
        title: "Design leads are high value and easily lost",
        desc: "A fit-out job is worth thousands of rials. Losing one because nobody replied on Friday is an expensive silence.",
      },
      {
        title: "Showroom staff cannot cover the inbox",
        desc: "The people best placed to answer are with a client in the showroom, not watching WhatsApp.",
      },
    ],
    useCases: [
      {
        title: "Scope captured up front",
        desc: "Space, approximate size, style, timeline, and budget band, collected conversationally rather than through a form nobody completes.",
      },
      {
        title: "Consultations and site visits booked",
        desc: "A designer's real availability offered, confirmed, and reminded, with the brief attached to the appointment.",
      },
      {
        title: "Portfolio and material questions",
        desc: "Previous work, available finishes, and lead times answered from your own material at any hour.",
      },
      {
        title: "Leads assigned by value and area",
        desc: "Larger projects routed to senior designers, and enquiries outside Muscat routed to whoever covers that region.",
      },
    ],
    omanNote:
      "Fit-out work in Oman spans residential majlis and villa projects, restaurant and retail builds, and office refurbishment, and each has a different buying cycle. Residential enquiries arrive in Arabic in the evening, commercial ones in English during the working day, and both expect to see previous work before they will meet. Conversations stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it give an indicative price?",
        a: "Only within bands you define. Fit-out pricing depends on too many variables to quote automatically, so the chatbot qualifies and books the consultation instead.",
      },
      {
        q: "Can it share our portfolio?",
        a: "Yes. It sends relevant previous work based on what the client described, rather than a single generic link.",
      },
      {
        q: "Does it handle commercial and residential differently?",
        a: "Yes. The questions asked and the person the lead is assigned to both differ by project type.",
      },
    ],
  },
  {
    slug: "logistics-and-delivery-ai-chatbot",
    name: "Logistics & Delivery",
    heroTitle: "AI chat for logistics and delivery companies in Oman",
    heroSub:
      "Tracking, delivery windows, and failed delivery rebooking handled automatically, so your dispatchers can dispatch.",
    painPoints: [
      {
        title: "Tracking questions dominate the inbox",
        desc: "Almost every message is asking where a shipment is. Answering by hand leaves no time for the exceptions that actually need a person.",
      },
      {
        title: "Failed deliveries generate three conversations",
        desc: "The driver, the customer, and the office all discuss the same missed delivery separately, and the rebooking still slips.",
      },
      {
        title: "Address problems surface too late",
        desc: "In areas without formal street addressing, a wrong pin is discovered when the driver is already there.",
      },
    ],
    useCases: [
      {
        title: "Live tracking answers",
        desc: "The customer gives a reference and gets the current status and expected window, without a portal or an app.",
      },
      {
        title: "Delivery rebooking in the chat",
        desc: "A failed delivery becomes a rescheduled one in the same conversation, with the new window confirmed to the customer.",
      },
      {
        title: "Address and pin confirmation",
        desc: "Location confirmed before dispatch, including a shared pin, which removes the most common cause of failed delivery.",
      },
      {
        title: "Exceptions raised as tickets",
        desc: "Damaged, lost, or delayed shipments become tickets with an owner and a promised time, and the customer is kept informed.",
      },
    ],
    omanNote:
      "Delivery across Oman is a genuinely different operation inside Muscat and beyond it. Runs to Sohar, Nizwa, and Salalah operate on their own schedules, and customer expectations should match that rather than a single national promise. Recipients message in Arabic and English and frequently share a location pin rather than an address. Conversations stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it connect to our tracking system?",
        a: "Yes, through our API, so the status the customer receives is the real one rather than a copy that drifts out of date.",
      },
      {
        q: "Can recipients share a location?",
        a: "Yes. A location pin shared on WhatsApp is attached to the delivery record, which is often more useful than a written address.",
      },
      {
        q: "Does it handle drivers as well as customers?",
        a: "The chatbot is customer-facing. Driver exceptions raised in the field become tickets that your operations team owns.",
      },
    ],
  },
  {
    slug: "property-management-ai-chatbot",
    name: "Property Management",
    heroTitle: "AI chat for property management companies in Oman",
    heroSub:
      "Maintenance requests logged, routed, and chased, with tenants told what is happening before they have to ask twice.",
    painPoints: [
      {
        title: "Maintenance requests arrive everywhere",
        desc: "WhatsApp, the website, a phone call to whoever the tenant met once. Nothing is in one queue and everything is chased by memory.",
      },
      {
        title: "Tenants chase because nobody updates them",
        desc: "A tenant with no update assumes nothing is happening, and repeats the request angrily two days later.",
      },
      {
        title: "Emergencies get the same treatment as a dripping tap",
        desc: "Without triage, a burst pipe sits in the same unread list as a request for a new door handle.",
      },
    ],
    useCases: [
      {
        title: "Maintenance requests as tickets",
        desc: "Every request becomes a ticket with a category, a priority, a unit reference, and an owner, from whichever channel it arrived on.",
      },
      {
        title: "Urgency triaged immediately",
        desc: "Water, electrical, and security issues are identified from what the tenant describes and alerted to your duty contact at once.",
      },
      {
        title: "Tenants kept informed automatically",
        desc: "When a job is booked, delayed, or done, the tenant hears about it on the channel they used, without anyone remembering to tell them.",
      },
      {
        title: "Lease and payment questions answered",
        desc: "Renewal dates, notice periods, and payment references answered from your own records rather than by email chain.",
      },
    ],
    omanNote:
      "Property management in Oman routinely spans mixed portfolios: villa compounds, apartment blocks, and commercial units under one manager, with Omani owners and a largely expatriate tenant base. That means the same maintenance issue is reported in Arabic by one tenant and in English or Malayalam by their neighbour. Air conditioning failures dominate the summer, and how quickly a tenant is told what is happening matters as much as the repair itself. Conversations stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it identify which unit a tenant is in?",
        a: "Yes. Returning tenants are recognised from their number, and new ones are asked once. The unit reference goes onto every ticket.",
      },
      {
        q: "How are emergencies handled?",
        a: "You define the emergency categories. Those alert your on-call contact immediately rather than joining the routine queue.",
      },
      {
        q: "Does it chase our contractors?",
        a: "It chases whoever owns the ticket, including external contractors where they are set up as owners, and escalates when nobody responds.",
      },
    ],
  },
  {
    slug: "equipment-rental-ai-chatbot",
    name: "Equipment Rental",
    heroTitle: "AI chat for equipment rental companies in Oman",
    heroSub:
      "Availability, day rates, and delivery questions answered on the spot, so the machine goes out rather than sitting in the yard.",
    painPoints: [
      {
        title: "Availability questions need an immediate answer",
        desc: "A contractor needing a generator tomorrow will call three yards. The one that answers first gets the hire.",
      },
      {
        title: "Rate questions are asked constantly",
        desc: "Daily, weekly, and monthly rates, with and without an operator, with and without delivery, asked repeatedly all day.",
      },
      {
        title: "Off-hire is forgotten",
        desc: "Equipment sits on a site long after the job finished because nobody confirmed the collection, and the paperwork argument follows.",
      },
    ],
    useCases: [
      {
        title: "Availability checked in the conversation",
        desc: "Whether a machine is free on the dates requested, answered from your own fleet data rather than a guess.",
      },
      {
        title: "Rates and terms stated clearly",
        desc: "Daily, weekly, and monthly rates in OMR, delivery charges, deposit, and what the hirer needs to provide.",
      },
      {
        title: "Delivery and collection booked",
        desc: "Site location, access constraints, and a time window captured, with the job written into your dispatch schedule.",
      },
      {
        title: "Off-hire reminders",
        desc: "A message before the hire period ends asking whether to extend or collect, which stops both disputes and idle equipment.",
      },
    ],
    omanNote:
      "Equipment hire in Oman follows the construction cycle and the weather: demand for generators, pumps, and cooling equipment surges through the summer, and access to sites in the interior needs a different delivery plan from a compound in Muscat. Enquiries arrive from Omani contractors in Arabic and from site engineers in English and Hindi, usually urgently. Conversations stay on servers inside Oman in line with the Personal Data Protection Law (Royal Decree 6/2022).",
    faqs: [
      {
        q: "Can it check real fleet availability?",
        a: "Where your fleet system can be connected, yes. Otherwise it works from availability rules you maintain and confirms with your team before committing.",
      },
      {
        q: "Can it take the booking?",
        a: "It captures everything and creates the lead or the job. Contract and deposit stay with your staff, which is usually what hirers expect.",
      },
      {
        q: "Does it handle off-hire?",
        a: "Yes, and it is often the fastest payback. Automatic reminders before the hire period ends reduce both idle equipment and billing disputes.",
      },
    ],
  },
];
