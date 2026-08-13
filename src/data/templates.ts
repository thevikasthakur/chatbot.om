import type { Template } from "./types";

export const templates: Template[] = [
  {
    slug: "villa-maintenance-requests-on-whatsapp",
    name: "Villa Maintenance Requests on WhatsApp",
    industry: "Property Management",
    short:
      "Tenants report a fault on WhatsApp, Chatbot.OM triages it, raises the ticket, and keeps them informed until it is fixed.",
    featured: true,
    sections: [
      {
        h: "What this template does",
        p: [
          "Maintenance requests are the highest volume conversation a property manager has, and the one most likely to be lost. This template takes the report on WhatsApp, works out how urgent it is, captures the unit and the access arrangements, and raises a ticket with the right owner.",
          "It then keeps the tenant informed. When the visit is booked, when it slips, and when it is done, the tenant is told without anyone remembering to tell them.",
        ],
      },
      {
        h: "Why it works in Oman",
        p: [
          "Air conditioning failures dominate the Omani summer and generate an unmanageable spike of requests, exactly when contractors are hardest to book. Being clear with tenants about when someone is coming does more for satisfaction than the repair speed itself.",
          "Tenants report in Arabic, English, Hindi, and Malayalam, frequently by voice note and often with a photograph of the problem. All of that is handled in one thread.",
        ],
      },
    ],
    steps: [
      "Recognise the tenant from their number and confirm the unit",
      "Understand the fault, including from a voice note or a photograph",
      "Triage urgency against your emergency categories",
      "Alert the on-call contact immediately for water, electrical, and security",
      "Capture access arrangements and preferred visit times",
      "Raise the ticket with a category, priority, and named owner",
      "Update the tenant when the visit is booked, delayed, or completed",
    ],
  },
  {
    slug: "clinic-appointment-booking-chat",
    name: "Clinic Appointment Booking",
    industry: "Clinics & Wellness",
    short:
      "Patients book, reschedule, and receive their preparation instructions in chat, while anything clinical goes to your staff.",
    featured: true,
    sections: [
      {
        h: "What this template does",
        p: [
          "Chatbot.OM handles the entire administrative side of an appointment: which service, which practitioner, when they are free, what the patient should bring, and where to park. It writes the booking into your calendar and sends the reminder.",
          "Everything clinical is configured as an always-escalate topic. Symptoms, medication, and results go to your staff with the full conversation attached, never to an automatic answer.",
        ],
      },
      {
        h: "Why it works in Oman",
        p: [
          "Private clinics in Muscat compete on how quickly they respond, and a large share of booking messages arrive in the evening when reception has gone home. Answering at the time the patient asked is often the whole difference.",
          "Patients ask in Arabic, English, Hindi, and Malayalam, and preparation instructions matter most when they are read, which means sending them in the patient's own language.",
        ],
      },
    ],
    steps: [
      "Identify the service and the practitioner requested",
      "Offer only slots that are genuinely free, with the right duration",
      "Confirm the booking and write it into the clinic calendar",
      "Send preparation instructions in the patient's language",
      "Escalate any clinical question immediately to your staff",
      "Send a reminder the day before with one-tap rescheduling",
    ],
  },
  {
    slug: "car-service-booking-chat",
    name: "Car Service Booking",
    industry: "Car Dealers & Workshops",
    short:
      "Service bookings, parts availability, and status chasing handled while your advisors are checking cars in.",
    sections: [
      {
        h: "What this template does",
        p: [
          "Booking a service turns into a short conversation: which car, which service, when. Chatbot.OM checks the workshop calendar, offers real slots, confirms with the address, and reminds the customer the day before.",
          "It also handles the two other messages every workshop receives constantly: whether a part is in stock, and whether the car is ready yet.",
        ],
      },
      {
        h: "Why it works in Oman",
        p: [
          "Workshops in Muscat, Sohar, and Salalah receive their booking rush exactly when the floor is busiest. Enquiries arrive in Omani Arabic and in Hindi or Malayalam, and very often as voice notes recorded next to a running engine.",
          "Customers describe symptoms by talking, not typing, so understanding voice notes properly is what makes this template work rather than frustrate.",
        ],
      },
    ],
    steps: [
      "Capture the vehicle, the service needed, and the symptoms described",
      "Understand voice notes and attached photographs",
      "Offer workshop slots that account for the job length",
      "Confirm the booking with the address and what to bring",
      "Answer parts availability from the list you maintain",
      "Give live job status to customers chasing their car",
    ],
  },
  {
    slug: "online-store-order-status-chat",
    name: "Online Store Order Status and Returns",
    industry: "Ecommerce & Retail",
    short:
      "Where is my order, is it in stock, and can I return this, answered from live store data without an account login.",
    featured: true,
    sections: [
      {
        h: "What this template does",
        p: [
          "The three questions that make up most of a retailer's inbox are answered from the store itself. Order status comes from the real order record, stock from live inventory, and returns are checked against your actual policy and the order date.",
          "Anything that is not a routine answer, a damaged item or a delivery that has gone wrong, becomes a ticket with the order already attached.",
        ],
      },
      {
        h: "Why it works in Oman",
        p: [
          "A great deal of Omani online retail runs through WhatsApp rather than a website account, so asking customers to log in to check an order does not fit how they shop.",
          "Delivery expectations differ between Muscat and the interior, and honest windows for Sohar, Nizwa, and Salalah generate far fewer complaints than a single optimistic national promise.",
        ],
      },
    ],
    steps: [
      "Verify the customer against an order number and phone or email",
      "Return live order status and the expected delivery window",
      "Answer stock questions by size, colour, and branch",
      "Check return eligibility against your policy and the order date",
      "Raise a ticket for damaged, lost, or delayed shipments",
      "Follow up on unresolved issues until the customer confirms",
    ],
  },
  {
    slug: "property-viewing-qualification-chat",
    name: "Property Viewing Qualification",
    industry: "Real Estate",
    short:
      "Listing questions answered instantly, serious buyers separated from browsers, and the viewing booked in the same conversation.",
    sections: [
      {
        h: "What this template does",
        p: [
          "Every listing enquiry gets an immediate answer on availability, price, furnishing, and parking. Chatbot.OM then asks the two or three questions that reveal whether this is a real prospect, and books the viewing if it is.",
          "The agent receives a lead that already contains the budget, the timeline, whether finance is needed, and a confirmed appointment.",
        ],
      },
      {
        h: "Why it works in Oman",
        p: [
          "Property browsing in Oman happens late in the evening and at the weekend, and the agency that replies first almost always gets the viewing.",
          "The same building attracts Arabic enquiries from Omani buyers and English enquiries from expatriate tenants, and both need to be handled properly without two separate setups.",
        ],
      },
    ],
    steps: [
      "Answer availability, price, and specification from your listings",
      "Establish budget, timeline, and finance requirements",
      "Separate rental, sales, and commercial enquiries",
      "Offer viewing slots from the agent's real calendar",
      "Confirm the viewing with the exact location",
      "Hand the qualified lead to the agent covering that area",
    ],
  },
  {
    slug: "restaurant-reservations-chat",
    name: "Restaurant Reservations and Group Bookings",
    industry: "Restaurants & Cafés",
    short:
      "Tables booked and confirmed during service, with large group enquiries captured properly for your events team.",
    sections: [
      {
        h: "What this template does",
        p: [
          "Standard reservations are taken and confirmed inside the chat, with a reminder that reduces the tables you held for nobody. Larger bookings follow a different path, collecting the date, headcount, budget, and menu preference before handing to a person.",
          "It also answers the questions that arrive constantly: parking, the family section, dietary options, and this year's Ramadan timings.",
        ],
      },
      {
        h: "Why it works in Oman",
        p: [
          "The Thursday and Friday evening rush is when both bookings and floor pressure peak, so this is precisely the moment nobody can answer a phone.",
          "Ramadan changes everything for a month: iftar bookings arrive in volume, timings shift nightly, and the answers need to be right without editing five different listings.",
        ],
      },
    ],
    steps: [
      "Take the reservation with date, time, and party size",
      "Confirm against your capacity rules or booking system",
      "Send a confirmation and a reminder that allows rescheduling",
      "Route large group and event enquiries to a named person",
      "Answer menu, allergen, and facility questions from your own material",
      "Give correct Ramadan and public holiday timings automatically",
    ],
  },
  {
    slug: "tuition-enrolment-enquiry-chat",
    name: "Tuition Enrolment Enquiries",
    industry: "Tuition Centres",
    short:
      "Parents get course details, fees, and a trial class booked at nine in the evening, when they are actually deciding.",
    sections: [
      {
        h: "What this template does",
        p: [
          "Chatbot.OM answers which subjects and grades are covered, when classes run, how many students are in a class, and what it costs per month in OMR. It then offers a trial class and captures the enrolment enquiry as a lead.",
          "Every enquiry lands with a named person, with the student's grade and subjects already recorded, rather than in a shared inbox to be sorted out later.",
        ],
      },
      {
        h: "Why it works in Oman",
        p: [
          "Parents research tuition after work, between eight and eleven at night, and message several centres at once. A clear fee stated immediately is worth more than any advertising.",
          "The fortnight before term produces more enquiries than the rest of the quarter, and it always lands on the two people least able to absorb it.",
        ],
      },
    ],
    steps: [
      "Identify the student's grade and the subjects needed",
      "Answer timetable, class size, and location questions",
      "State monthly and term fees in OMR from your approved list",
      "Apply sibling and early payment discounts where they exist",
      "Book a trial class and remind the parent the day before",
      "Create the enrolment lead with a named owner",
    ],
  },
  {
    slug: "contractor-site-visit-qualification",
    name: "Contractor Site Visit Qualification",
    industry: "Contractors & Builders",
    short:
      "Job enquiries qualified before anyone drives out, so site visits are only booked for work worth quoting.",
    sections: [
      {
        h: "What this template does",
        p: [
          "Before a site visit is offered, Chatbot.OM establishes what the job actually is, where it is, when it is needed, and roughly what the customer expects to spend. Photographs sent by the customer are attached to the enquiry.",
          "Urgent repairs are separated from planned projects, so a burst pipe reaches your phone immediately while a bathroom renovation waits for the evening.",
        ],
      },
      {
        h: "Why it works in Oman",
        p: [
          "Renovation enquiries cluster before Ramadan and Eid and again after the summer heat, which is when contractors are least able to answer messages.",
          "Driving across Muscat to quote a job that turns out to be a small repair costs a working afternoon, and qualification in the first message is what prevents it.",
        ],
      },
    ],
    steps: [
      "Establish the type of work, the location, and the timeline",
      "Collect photographs and attach them to the enquiry",
      "Ask about the expected budget band",
      "Separate urgent repairs from planned projects",
      "Alert immediately for anything marked urgent",
      "Offer and confirm a site visit slot with directions",
    ],
  },
  {
    slug: "gym-membership-enquiry-chat",
    name: "Gym Membership Enquiries",
    industry: "Gyms & Fitness",
    short:
      "Membership tiers, class timetables, and ladies-only hours answered instantly, with the trial session booked and reminded.",
    sections: [
      {
        h: "What this template does",
        p: [
          "Every membership question is answered consistently: tiers, OMR prices, joining fees, freezing rules, and what is included. Class timetables and instructor availability come from your published schedule.",
          "A trial session is offered, confirmed, and reminded, which converts substantially more trials into actual visits than a booking nobody follows up.",
        ],
      },
      {
        h: "Why it works in Oman",
        p: [
          "Ladies-only hours are a decisive factor for a large share of prospective members, and it is one of the most frequently asked questions. Getting it right immediately matters.",
          "Through the Omani summer, activity moves indoors and later into the evening, which is exactly when enquiries arrive and the desk is least likely to be watched.",
        ],
      },
    ],
    steps: [
      "Answer membership tiers and OMR pricing from your list",
      "Explain joining fees, freezing, and cancellation rules",
      "Give class timetables including ladies-only sessions",
      "Book a trial session and send a reminder",
      "Qualify personal training enquiries with goals and availability",
      "Create the membership lead with a named owner",
    ],
  },
  {
    slug: "equipment-hire-availability-chat",
    name: "Equipment Hire Availability",
    industry: "Equipment Rental",
    short:
      "Availability, day rates, and delivery answered on the spot, plus the off-hire reminder that stops idle equipment.",
    sections: [
      {
        h: "What this template does",
        p: [
          "A contractor asking whether a generator is free next week gets an answer immediately, along with the daily, weekly, and monthly rates, the deposit, and what delivery costs to their site.",
          "The template also handles the end of the hire, sending a reminder before the period expires so equipment is either extended properly or collected.",
        ],
      },
      {
        h: "Why it works in Oman",
        p: [
          "Hire demand tracks the construction cycle and the heat, with generators, pumps, and cooling equipment in short supply through the summer. The yard that answers first wins the hire.",
          "Deliveries into the interior need different planning from a compound in Muscat, and capturing site access constraints in the first conversation avoids a wasted lorry.",
        ],
      },
    ],
    steps: [
      "Check availability for the machine and dates requested",
      "State daily, weekly, and monthly rates in OMR",
      "Explain deposit, operator options, and what the hirer must provide",
      "Capture the site location and access constraints",
      "Book delivery and collection into your dispatch schedule",
      "Send an off-hire reminder before the period ends",
    ],
  },
];
