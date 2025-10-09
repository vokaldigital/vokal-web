import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <section className="min-h-[80svh] grid place-items-center p-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-medium">Hello, world</h1>
          <p className="text-gray-600">You’re looking at a fresh start.</p>
          <form className="mx-auto flex max-w-md items-center gap-2" action="/contact">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              aria-label="Your email"
              required
              autoComplete="email"
              className="h-11 w-full flex-1 rounded-md border border-gray-300 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
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

      {/* Services segment (single container with header + 4 items) */}
      <section aria-labelledby="services-heading" className="w-full border-t bg-white/80">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 id="services-heading" className="text-center text-2xl font-medium">
            Our Services
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-md border p-5">
              <h3 className="font-medium">Service One</h3>
            </div>
            <div className="rounded-md border p-5">
              <h3 className="font-medium">Service Two</h3>
            </div>
            <div className="rounded-md border p-5">
              <h3 className="font-medium">Service Three</h3>
            </div>
            <div className="rounded-md border p-5">
              <h3 className="font-medium">Service Four</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div aria-hidden className="h-24 md:h-32" />

      {/* How we help — four full-screen boxes stacked */}
      <section aria-labelledby="help-heading" className="w-full">
        <div className="mx-auto max-w-5xl px-4">
          <h2 id="help-heading" className="text-center text-2xl font-medium">
            How We Help Improve Your Business
          </h2>
        </div>
        <div className="mt-6 space-y-6">
          <div className="min-h-[calc(100svh/1.75)] w-full border bg-white flex items-center justify-center">
            <h3 className="text-xl font-medium text-gray-900">Impact Area One</h3>
          </div>
          <div className="min-h-[calc(100svh/1.75)] w-full border bg-white flex items-center justify-center">
            <h3 className="text-xl font-medium text-gray-900">Impact Area Two</h3>
          </div>
          <div className="min-h-[calc(100svh/1.75)] w-full border bg-white flex items-center justify-center">
            <h3 className="text-xl font-medium text-gray-900">Impact Area Three</h3>
          </div>
          <div className="min-h-[calc(100svh/1.75)] w-full border bg-white flex items-center justify-center">
            <h3 className="text-xl font-medium text-gray-900">Impact Area Four</h3>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="w-full border-t bg-white text-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center lg:justify-between">
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
                className="group rounded-2xl border border-black/10 bg-black/5 p-4"
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
