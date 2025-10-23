import Link from "next/link";

const serviceHighlights = [
  {
    title: "Growth Systems",
    summary: "Always-on media buying, creative testing, and channel strategy calibrated to your revenue goals.",
    bullets: ["AI-fueled media testing", "Always-on optimization", "Insights reporting"],
  },
  {
    title: "Content & Story",
    summary: "Narrative-led creative and campaign production that keeps your brand consistent from scroll to checkout.",
    bullets: ["Narrative-led creative", "Full-funnel messaging", "Asset production pods"],
  },
  {
    title: "Lifecycle & CRM",
    summary: "Lifecycle programs that keep customers engaged, informed, and coming back.",
    bullets: ["Lifecycle automation", "Weekly campaign cadence", "Retention experiments"],
  },
];

const engagementPhases = [
  {
    step: "01",
    title: "Strategize",
    copy: "We audit the current state, isolate the levers with the biggest upside, and align on the KPIs that signal momentum.",
  },
  {
    step: "02",
    title: "Build & Launch",
    copy: "Within the first month we deploy testing plans, launch creative, and set up reporting to keep every stakeholder in the loop.",
  },
  {
    step: "03",
    title: "Scale & Optimize",
    copy: "Weekly rhythms keep the pod accountable as we double down on winners, iterate on messaging, and expand into new opportunities.",
  },
];

export default function Page() {
  return (
    <main className="min-h-dvh text-white">
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/60">Services</p>
        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">All the operators you need, in one pod.</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70 sm:text-xl">
          Vokal Digital combines performance, creative, and lifecycle experts into a single team. We partner with you to design the roadmap, launch the work, and measure the impact every step of the way.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-8 md:pb-20">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
            What we deliver
          </span>
          <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Three pillars that compound growth.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((service) => (
            <article key={service.title} className="flex h-full flex-col rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur-[18px]">
              <div>
                <h3 className="text-xl font-medium text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-white/70">{service.summary}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#B4FF00]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 md:pb-24">
        <div className="grid gap-10 rounded-[32px] border border-white/10 bg-black/20 p-8 backdrop-blur-[18px] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:p-12">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-2xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              How it works
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">Built around your team, optimized for outcomes.</h2>
            <p className="text-base text-white/70 sm:text-lg">
              You get a battle-tested growth pod plugged into your workflows. We move fast, share progress transparently, and own the path from idea to revenue.
            </p>
          </div>

          <div className="space-y-4">
            {engagementPhases.map((phase) => (
              <article key={phase.step} className="flex flex-col rounded-3xl border border-white/10 bg-black/10 p-6 sm:flex-row sm:items-start sm:gap-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 text-base font-semibold text-white/80">
                  {phase.step}
                </span>
                <div className="mt-4 sm:mt-0">
                  <h3 className="text-lg font-medium text-white">{phase.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{phase.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 text-center sm:px-8 md:pb-28">
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready for a partner that ships momentum?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Tell us what you’re working toward and we’ll show you the testing plan, creative lift, and lifecycle programs to get there.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-[#B4FF00]/90 px-5 py-2 text-sm font-medium text-[#1C1D1B]/80 backdrop-blur-[5px] transition-all hover:border-[#B4FF00] hover:bg-[#B4FF00]/20 hover:text-[#B4FF00] hover:backdrop-blur-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60"
          >
            Schedule a growth call
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-5 py-2 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            Learn more about us
          </Link>
        </div>
      </section>
    </main>
  );
}
