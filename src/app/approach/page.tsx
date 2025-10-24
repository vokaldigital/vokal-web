import Link from "next/link";

const principles = [
  {
    title: "Strategy tied to metrics",
    copy: "Every initiative ladders back to the KPIs that move your business. We obsess over measurement so decisions stay grounded in results.",
  },
  {
    title: "Creative built from insights",
    copy: "We combine qualitative research with channel data to uncover the stories that resonate—and we ship iterations until they do.",
  },
  {
    title: "Velocity with accountability",
    copy: "Weekly operating rhythms keep the pod and your team aligned. You see what shipped, what moved, and what’s next.",
  },
];

const process = [
  {
    step: "Week 0",
    name: "Kickoff & install",
    detail: "We align on goals, stakeholders, and operating cadence. Data and ad accounts are connected so we can audit quickly.",
  },
  {
    step: "Weeks 1–2",
    name: "Roadmap & launch",
    detail: "We deliver a channel strategy, test matrix, and production plan. The first batch of campaigns goes live within the first 14 days.",
  },
  {
    step: "Weeks 3–6",
    name: "Scale signals",
    detail: "Insights reports and creative refreshes roll out weekly. We double down on high-performing angles and cut the rest.",
  },
  {
    step: "Ongoing",
    name: "Compound momentum",
    detail: "Monthly strategy resets, evergreen optimization, and cross-channel experiments keep momentum building without adding headcount.",
  },
];

const collaboration = [
  {
    title: "Pod structure",
    items: ["Growth lead", "Lifecycle strategist", "Performance creative duo"],
  },
  {
    title: "Cadence",
    items: ["Weekly working sessions", "Daily async updates", "Monthly performance review"],
  },
  {
    title: "Tooling",
    items: ["Shared dashboards", "Notion HQ for docs", "Slack/Teams embedded communication"],
  },
];

export default function Page() {
  return (
    <main className="min-h-dvh text-white">
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center sm:px-8">
        <span className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
          Our approach
        </span>
        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">Systems that turn creative energy into revenue.</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70 sm:text-xl">
          Vokal Digital embeds a cross-functional pod inside your organization. We bring the strategy, creative, and lifecycle muscle
          to build momentum quickly—and keep it compounding.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 md:pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.title} className="rounded-[28px] border border-white/10 bg-black/30 p-6 backdrop-blur-[18px]">
              <h2 className="text-xl font-semibold text-white">{principle.title}</h2>
              <p className="mt-3 text-sm text-white/70">{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 md:pb-24">
        <div className="rounded-[32px] border border-white/10 bg-black/20 p-6 backdrop-blur-[18px] sm:p-8">
          <div className="text-left sm:text-center">
            <span className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              Our operating system
            </span>
            <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">A repeatable process tuned for speed.</h2>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              We keep momentum high with tight loops between strategy, production, and optimization. Expect fast wins and a clear plan for every sprint.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            {process.map((phase) => (
              <article
                key={phase.step}
                className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-black/15 p-5 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="inline-flex h-12 w-20 items-center justify-center rounded-2xl border border-white/20 text-sm font-semibold text-white/80 sm:h-14 sm:w-24">
                  {phase.step}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-white">{phase.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{phase.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 md:pb-24">
        <div className="grid gap-8 rounded-[32px] border border-white/10 bg-black/30 p-6 backdrop-blur-[18px] md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:p-8">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-2xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              Collaboration
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">An embedded team without the overhead.</h2>
            <p className="text-base text-white/70 sm:text-lg">
              You get the benefits of an in-house squad—deep context, shared goals, always-on communication—without hiring an entire department.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {collaboration.map((category) => (
              <div key={category.title} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">{category.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#B4FF00]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28 text-center sm:px-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to install a pod that ships momentum?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Share your goals and we’ll outline the sprint plan, operators, and creative resources to hit them.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-[#B4FF00]/90 px-5 py-2 text-sm font-medium text-[#1C1D1B]/80 backdrop-blur-[5px] transition-all hover:border-[#B4FF00] hover:bg-[#B4FF00]/20 hover:text-[#B4FF00] hover:backdrop-blur-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60"
          >
            Start onboarding
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-5 py-2 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
          >
            Explore services
          </Link>
        </div>
      </section>
    </main>
  );
}
