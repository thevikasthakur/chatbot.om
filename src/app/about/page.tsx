import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import { ArrowUpRight, MapPin, ShieldCheck, Zap } from "lucide-react";
import { CtaBanner, RuleGrid } from "@/components/sections";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we built Chatbot.OM only for Oman: local dialect, local hosting, local hours, and a price a business with four staff can actually pay.",
  ...pageMeta("/about/"),
};

const principles = [
  {
    icon: MapPin,
    title: "Built for one country",
    desc: "A general-purpose chatbot handles Omani Arabic badly, does not know what khareef season does to a business in Salalah, and stores your customers' messages somewhere you cannot point to on a map. We only build for here.",
  },
  {
    icon: Zap,
    title: "Live this week, not this quarter",
    desc: "Software that takes three months to deploy never gets deployed by a business with four staff. Give us your domain and the chatbot is reading your website today.",
  },
  {
    icon: ShieldCheck,
    title: "Your data does not leave",
    desc: "Every conversation, transcript, and attachment is processed and stored inside the Sultanate. Not as a premium option. As the only way we run it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="border-b border-border pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">About</p>
          <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl leading-[1.08]">
            Most Omani businesses do not need{" "}
            <span className="accent-italic">an AI strategy</span>. They need
            somebody to answer.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            That is the entire idea behind Chatbot.OM. Not a platform to build
            agents on, not a project to run for six months. A chatbot that knows
            your business, answers your customers in their own language, and
            leaves your team work that is already written down.
          </p>
        </div>
      </section>

      {/* ── The story ── */}
      <section className="border-b border-border py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="prose-chat mx-auto">
            <h2>Why a separate product for Oman</h2>
            <p>
              The international chatbot products are good at a lot of things. They
              are not good at Omani Arabic, because dialect is not what they were
              trained to prioritise. They do not understand that a voice note is
              the normal way to describe a problem here. And they store your
              customers&rsquo; conversations wherever their infrastructure happens
              to be, which is a question the Personal Data Protection Law makes it
              your problem to answer.
            </p>
            <p>
              We started from the opposite end: build for the way business
              actually happens in Oman, and let everything else follow from that.
              WhatsApp first, because that is where the messages are. Voice notes
              as first-class conversation, because that is how people talk.
              Hosting inside the Sultanate, because that is the simplest correct
              answer to a question every business will eventually be asked.
            </p>

            <h2>Affordable was a design constraint, not a discount</h2>
            <p>
              The businesses that lose the most enquiries in Oman are the small
              ones, because there is nobody free to answer. They are also the
              businesses least able to afford enterprise software, sign a
              twelve-month contract, or dedicate someone to a deployment.
            </p>
            <p>
              So Chatbot.OM is deliberately narrow. It covers chat channels
              completely and does not try to be a phone system. That narrowness is
              what makes it fast to launch and cheap enough to be worth trying,
              which is the only reason a small business ever adopts anything.
            </p>

            <h2>The sister product</h2>
            <p>
              Some organisations genuinely do need the phone answered, outbound
              calling campaigns, and an agent working their email inbox. For those
              we build {site.sister.name}, on the same platform family and the
              same infrastructure inside Oman. If you would be better served by
              that, we will tell you, and the two are designed so that starting
              here and moving there costs you nothing you have already built.
            </p>

            <h2>Where we are</h2>
            <p>
              We are in Muscat. That matters more than it sounds: it means we can
              sit in your office, we work the same week you do, and when something
              is wrong you are talking to the people who built it rather than a
              support queue eight time zones away.
            </p>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">What we hold to</p>
          <h2 className="mt-4 max-w-2xl text-3xl md:text-5xl">
            Three things we will not{" "}
            <span className="text-lime">trade away.</span>
          </h2>
          <div className="mt-14">
            <RuleGrid items={principles} />
          </div>
        </div>
      </section>

      {/* ── Contact strip ── */}
      <section className="hatch-gutters border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="max-w-xl text-2xl md:text-4xl">
                Come and see it{" "}
                <span className="accent-italic">on your own website</span>.
              </h2>
              <p className="mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed">
                {site.address}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/contact/"
                className="inline-flex h-11 items-center gap-2 border border-line-strong px-6 text-sm font-medium hover:bg-ink-3 transition-colors"
              >
                Contact us <ArrowUpRight className="h-4 w-4 text-lime" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
