import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <section className="min-h-[80svh] grid place-items-center px-6 pb-24 pt-12 md:pb-32">
        <div className="w-full max-w-3xl space-y-4 text-left">
          <h1 className="text-3xl font-medium sm:text-4xl">Get loud with Vokal.</h1>
          <p className="text-gray-600">You’re looking at a fresh start.</p>
          <form className="flex max-w-md items-center gap-2" action="/contact">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              aria-label="Your email"
              required
              autoComplete="email"
              className="h-11 w-full flex-1 rounded-md bg-white px-3 text-gray-900 placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
            <button
              type="submit"
              className="h-11 rounded-md bg-gray-900 px-4 text-white transition-colors hover:bg-black"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Services segment */}
      <section aria-labelledby="services-heading" className="w-full bg-white text-black">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-28 space-y-10">
          <div className="text-center space-y-4">
            <span className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-wide text-gray-700">
              Services
            </span>
            <h2 id="services-heading" className="text-3xl font-semibold sm:text-4xl">
              Your Growth Partnership Platform
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600">
              We combine strategy, execution, and support so you can stay focused on leading the business forward.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-sm font-semibold text-white">
                  {service.icon}
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free call CTA */}
      <section aria-labelledby="call-heading" className="w-full bg-white text-black">
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
            className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            Schedule your free call
          </Link>
        </div>
      </section>

      {/* Spacer */}
      <div aria-hidden className="h-14 md:h-20" />

      {/* How we help — productized spread */}
      <section aria-labelledby="help-heading" className="w-full bg-white text-black">
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
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-base">
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
            {helpSteps.map((step, index) => {
              const isFeatureCard = index === 1;
              return (
                <article
                  key={step.title}
                  className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-shadow ${
                    isFeatureCard
                      ? "border-gray-900 bg-gray-900 text-white shadow-xl"
                      : "border-gray-200 bg-white text-gray-900 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="space-y-4">
                    <span
                      className={`text-xs font-medium uppercase tracking-wide ${
                        isFeatureCard ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      Step {index + 1}
                    </span>
                    <h3 className="text-2xl font-semibold leading-tight">{step.title}</h3>
                    <p
                      className={`text-sm ${
                        isFeatureCard ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className={`mt-10 inline-flex h-10 w-10 items-center justify-center rounded-full border text-base transition-transform group-hover:translate-x-1 ${
                      isFeatureCard
                        ? "border-white/40 bg-white/10 text-white"
                        : "border-gray-300 text-gray-900"
                    }`}
                  >
                    →
                  </span>
                  {isFeatureCard && (
                    <span className="pointer-events-none absolute -bottom-16 -right-14 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="w-full bg-white text-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24 md:py-28 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-xl space-y-6">
            <span className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-black">
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
              className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900"
            >
              Contact us
            </Link>
          </div>

          <div className="w-full max-w-2xl space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl bg-black/5 p-4 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                  <span>{item.question}</span>
                  <span className="ml-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition-transform group-open:rotate-180">
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
    title: "Stand out to your market",
    description: "Position your brand with compelling messaging, identity, and customer experiences that convert.",
    icon: "1",
  },
  {
    title: "Simplify your operations",
    description: "Streamline tools, workflows, and automations so teams can move faster without extra headcount.",
    icon: "2",
  },
  {
    title: "Unlock new revenue",
    description: "Identify growth bets, validate them quickly, and launch offerings that meet demand.",
    icon: "3",
  },
  {
    title: "Stay future-ready",
    description: "Measure performance, iterate in short cycles, and keep momentum with ongoing guidance.",
    icon: "4",
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
