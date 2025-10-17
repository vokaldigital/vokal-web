import Image from "next/image";
import Link from "next/link";
import { AnimatedNeonText } from "@/components/AnimatedNeonText";
import { ScrollNeonText } from "@/components/ScrollNeonText";
import { FAQCard } from "@/components/FAQCard";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <section className="min-h-[80svh] grid place-items-center px-6 pb-24 pt-12 text-white md:pb-32">
        <div className="w-full max-w-3xl space-y-4 text-left">
          <h1 className="text-3xl font-medium text-white sm:text-4xl">
            Get <span className="inline-flex text-white"><ScrollNeonText text="Loud." /></span>
          </h1>
          <p className="text-white/80">Your brand. Amplified by AI.</p>
          <Link
            href="/get-started"
            className="inline-flex w-fit items-center justify-center rounded-2xl border border-transparent bg-[#B4FF00]/90 px-4 py-2 text-sm font-medium text-[#1C1D1B]/80 backdrop-blur-[5px] transition-all hover:border-[#B4FF00] hover:bg-[#B4FF00]/20 hover:text-[#B4FF00] hover:backdrop-blur-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60"
          >
            Get started
          </Link>
        </div>
      </section>

      {/* Services segment */}
      <section aria-labelledby="services-heading" className="w-full text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-28 space-y-10">
          <div className="space-y-3 text-center text-white">
            <span className="inline-flex items-center justify-center rounded-2xl border border-white/40 px-4 py-2 text-xs font-medium uppercase tracking-wide text-white/80 backdrop-blur-sm">
              Services we deliver
            </span>
            <h2 className="text-3xl font-semibold drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:text-4xl">
              All the tools you need to grow louder
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/80 drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] sm:text-base">
              Strategy, storytelling, and automation built for teams that want momentum without the extra headcount.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.highlight}
                className="group flex items-start gap-4 rounded-[28px] bg-black/30 p-6 backdrop-blur-[14px]"
              >
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-black/40 p-1">
                  <Image
                    src={service.iconSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="h-full w-full object-contain filter invert"
                  />
                </span>
                <div>
                  <h3 className="font-medium text-white">
                    {service.titlePrefix}{" "}
                    <AnimatedNeonText
                      text={service.highlight}
                      className="items-baseline gap-[0.04em] text-[#B4FF00] md:text-white"
                    />
                  </h3>
                  <p className="mt-2 text-sm text-white/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help — productized spread */}
      <section aria-labelledby="help-heading" className="w-full text-[#1C1D1B]">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-28 space-y-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-2xl border border-[#1C1D1B]/70 px-4 py-2 text-xs font-medium uppercase tracking-wide text-[#1C1D1B]">
                How it works
              </span>
              <h2
                id="help-heading"
                className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
              >
                How we help improve your business
              </h2>
              <p className="max-w-xl text-base text-[#2A2B28] sm:text-lg">
                We partner with your team to remove the guesswork, install repeatable systems, and keep everything moving without adding overhead.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between md:hidden">
            <span className="text-xs font-medium uppercase tracking-wide text-white/70">
              Swipe to view
            </span>
            <span
              aria-hidden
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-base text-white/80"
            >
              →
            </span>
          </div>

          <div
            className="flex gap-5 overflow-x-auto px-4 pb-6 snap-x snap-mandatory scroll-smooth scrollbar-hide [-webkit-overflow-scrolling:touch] md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:snap-none"
            style={{ scrollPaddingInline: "1.5rem" }}
          >
            {helpSteps.map((step, index) => (
              <article
                key={step.title}
                className="group flex min-h-[220px] min-w-[min(22rem,calc(100vw-4rem))] max-w-[min(22rem,calc(100vw-4rem))] shrink-0 snap-center snap-always flex-col justify-between gap-6 rounded-[28px] bg-black/30 p-6 text-white backdrop-blur-[14px] transition-transform md:translate-y-2 md:hover:translate-y-0 md:min-w-0 md:max-w-none md:shrink md:snap-normal"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-black/40 text-sm font-semibold uppercase tracking-wide text-[#B4FF00]">
                    {index + 1}
                  </span>
                  <div className="space-y-3">
                    <span className="text-xs font-medium uppercase tracking-wide text-white/60">
                      Step {index + 1}
                    </span>
                    <h3 className="text-2xl font-semibold leading-tight text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      {step.description}
                    </p>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-base text-white/80 transition-all group-hover:border-white/40 group-hover:bg-white/10 group-hover:text-white group-hover:translate-x-1 self-end"
                >
                  →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div aria-hidden className="h-14 md:h-20" />

      {/* Free call CTA */}
      <section aria-labelledby="call-heading" className="w-full text-[#1C1D1B]">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-20 text-center space-y-6">
          <span className="inline-flex items-center rounded-2xl border border-[#1C1D1B]/70 px-4 py-2 text-xs font-medium uppercase tracking-wide text-[#1C1D1B]">
            Free Call
          </span>
          <h2 id="call-heading" className="text-3xl font-semibold sm:text-4xl">
            Book a 30-minute strategy call with our team.
          </h2>
          <p className="mx-auto max-w-2xl text-[#2A2B28]">
            Share your goals, ask questions, and leave with a clear plan for what comes next—no strings attached.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-[#B4FF00]/90 px-4 py-2 text-sm font-medium text-[#1C1D1B]/80 backdrop-blur-[5px] transition-all hover:border-[#B4FF00] hover:bg-[#B4FF00]/20 hover:text-[#B4FF00] hover:backdrop-blur-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl bg-black/25 opacity-0 transition-opacity group-hover:opacity-80 group-focus-visible:opacity-80"
            />
            <span className="relative z-10">Schedule your free call</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="w-full text-[#1C1D1B]">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24 md:py-28 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full max-w-xl space-y-6 lg:self-start">
            <span className="inline-flex items-center rounded-2xl border border-[#1C1D1B]/70 px-4 py-2 text-xs font-medium uppercase tracking-wide text-[#1C1D1B]">
              FAQ
            </span>
            <h2 id="faq-heading" className="text-3xl font-semibold sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-sm text-[#2A2B28]">
              Answers to the most common questions about working with Vokal.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-[#B4FF00]/90 px-4 py-2 text-sm font-medium text-[#1C1D1B]/80 backdrop-blur-[5px] transition-all hover:border-[#B4FF00] hover:bg-[#B4FF00]/20 hover:text-[#B4FF00] hover:backdrop-blur-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl bg-black/25 opacity-0 transition-opacity group-hover:opacity-80 group-focus-visible:opacity-80"
              />
              <span className="relative z-10">Contact us</span>
            </Link>
          </div>

          <div className="w-full max-w-2xl space-y-4">
            {faqItems.map((item) => (
              <FAQCard key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

const helpSteps = [
  {
    title: "Clarify objectives",
    description: "We start with a quick audit to understand your goals, customers, and current momentum.",
  },
  {
    title: "Design the roadmap",
    description: "Together we shape a focused plan, assign ownership, and set the milestones that matter most.",
  },
  {
    title: "Launch and iterate",
    description: "Our team partners with yours to execute, measure impact, and keep improvements rolling every week.",
  },
];

const services = [
  {
    titlePrefix: "Amplify your",
    highlight: "presence",
    description: "Position your brand with compelling messaging, identity, and customer experiences that convert.",
    iconSrc: "/Icons/amplify.png",
  },
  {
    titlePrefix: "Automate your",
    highlight: "workflow",
    description: "Streamline tools, workflows, and automations so teams can move faster without extra headcount.",
    iconSrc: "/Icons/automate.png",
  },
  {
    titlePrefix: "Upgrade your",
    highlight: "experience",
    description: "Identify growth bets, validate them quickly, and launch offerings that meet demand.",
    iconSrc: "/Icons/upgrade.png",
  },
  {
    titlePrefix: "Engineer your",
    highlight: "growth",
    description: "Measure performance, iterate in short cycles, and keep momentum with ongoing guidance.",
    iconSrc: "/Icons/Engineer.png",
  },
];

const faqItems = [
  {
    question: "What services do you offer?",
    answer: "We focus on strategy, design, implementation, and support tailored to your growth targets.",
  },
  {
    question: "How quickly can we start?",
    answer: "We typically begin within two weeks of a signed proposal and kick-off meeting.",
  },
  {
    question: "Do you work with existing teams?",
    answer: "Yes, we integrate with in-house or partner teams to keep initiatives aligned and moving forward.",
  },
  {
    question: "How do we get in touch?",
    answer: "Use the contact form or email through the footer form—our team responds within one business day.",
  },
];
