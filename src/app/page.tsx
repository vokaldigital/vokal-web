import Image from "next/image";
import Link from "next/link";
import { AnimatedNeonText } from "@/components/AnimatedNeonText";
import { ScrollNeonText } from "@/components/ScrollNeonText";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <section className="min-h-[80svh] grid place-items-center px-6 pb-24 pt-12 text-white md:pb-32">
        <div className="w-full max-w-3xl space-y-4 text-left">
          <h1 className="text-3xl font-medium text-white sm:text-4xl">
            Get <span className="inline-flex text-white"><ScrollNeonText text="Loud." /></span>
          </h1>
          <p className="text-white/80">Your brand. Amplified by AI.</p>
        </div>
      </section>

      {/* Services segment */}
      <section aria-labelledby="services-heading" className="w-full text-white">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-28 space-y-10">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.highlight}
                className="group flex items-start gap-4 rounded-[28px] bg-black/30 p-6 backdrop-blur-md"
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
                    {service.titlePrefix} <span className="text-[#B4FF00]">{service.highlight}</span>
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
              <span className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium uppercase tracking-wide">
                How it works
              </span>
              <h2
                id="help-heading"
                className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
              >
                How we help improve your business
              </h2>
              <p className="max-w-xl text-base text-gray-600 sm:text-lg">
                We partner with your team to remove the guesswork, install repeatable systems, and keep everything moving without adding overhead.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-base text-[#1C1D1B]">
                ←
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-900 bg-gray-900 text-base text-white">
                →
              </span>
              <span className="ml-4 hidden text-gray-500 sm:block">
                Swipe to explore our approach.
              </span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {helpSteps.map((step, index) => (
              <article
                key={step.title}
                className="group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-black/5 p-8 text-gray-900 transition-transform transition-colors transition-shadow hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-xl"
              >
                <div className="space-y-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-500 transition-colors group-hover:text-white/70">
                    Step {index + 1}
                  </span>
                  <h3 className="text-2xl font-semibold leading-tight transition-colors group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 transition-colors group-hover:text-white/80">
                    {step.description}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="mt-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-base text-gray-900 transition-colors transition-transform group-hover:border-white/60 group-hover:bg-white/10 group-hover:text-white group-hover:translate-x-1"
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
          <span className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            Free Call
          </span>
          <h2 id="call-heading" className="text-3xl font-semibold sm:text-4xl">
            Book a 30-minute strategy call with our team.
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Share your goals, ask questions, and leave with a clear plan for what comes next—no strings attached.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-2xl bg-black/30 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-black/40 focus-visible:bg-black/40 focus-visible:outline-none"
          >
            <AnimatedNeonText text="Schedule your free call" className="gap-[0.08em]" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="w-full text-[#1C1D1B]">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24 md:py-28 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-xl space-y-6">
            <span className="inline-flex items-center rounded-full border border-[#1C1D1B]/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#1C1D1B]">
              FAQ
            </span>
            <h2 id="faq-heading" className="text-3xl font-semibold sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-sm text-gray-600">
              Answers to the most common questions about working with Vokal.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-2xl border border-[#1C1D1B]/20 px-4 py-2 text-sm font-medium text-[#1C1D1B] transition-colors hover:border-[#B4FF00] focus-visible:outline-none"
            >
              <AnimatedNeonText text="Contact us" className="gap-[0.08em]" />
            </Link>
          </div>

          <div className="w-full max-w-2xl space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-[#1C1D1B]/10 p-4 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                  <span>{item.question}</span>
                  <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#1C1D1B]/15 transition-transform group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
              </details>
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
