import Link from "next/link";

const stats = [
  { value: "$7.5M+", label: "Revenue influenced for clients" },
  { value: "2,000+", label: "Campaigns launched" },
  { value: "100+", label: "Growth partners" },
  { value: "5x+", label: "Average ROAS lift" },
];

const teamPrinciples = [
  {
    heading: "We ship momentum.",
    copy: "We bring the right operators into every engagement so ideas become outcomes quickly—without adding headcount to your side.",
  },
  {
    heading: "We stay close to the data.",
    copy: "Every test, headline, and creative concept ladders back to measurable growth. If it doesn’t move the metric, we iterate until it does.",
  },
  {
    heading: "We partner for the long run.",
    copy: "Our clients see us as an extension of their team. We stake our reputation on keeping promises and communicating with clarity.",
  },
];

export default function Page() {
  return (
    <main className="min-h-dvh text-white">
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/60">
          Learn what makes us different
        </p>
        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
          Vokal Digital
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70 sm:text-xl">
          Our vision at Vokal Digital is to empower brands to thrive in the digital age by delivering innovative and data-driven marketing solutions. We are dedicated to crafting impactful strategies that connect with audiences, drive measurable results, and foster meaningful growth.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
          Through creativity, integrity, and a commitment to excellence, we strive to be a trusted partner in your journey toward success.
        </p>

        <div className="mt-14 grid gap-5 rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-[18px] sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="rounded-2xl border border-white/10 bg-black/10 px-5 py-6 text-left">
              <p className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 md:py-20">
        <span className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
          Our Services
        </span>
        <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">Explore how we deliver momentum.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          We combine media, creative, and lifecycle expertise into one integrated team so every channel compounds your growth.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#B4FF00]/90 px-6 py-2 text-sm font-medium text-[#1C1D1B]/80 backdrop-blur-[5px] transition-all hover:border-[#B4FF00] hover:bg-[#B4FF00]/20 hover:text-[#B4FF00] hover:backdrop-blur-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60"
          >
            See services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 md:pb-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-2xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
              Our Team
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">The operators behind the work.</h2>
            <p className="max-w-xl text-base text-white/70 sm:text-lg">
              Meet the people who build, launch, and iterate alongside you every week. We bring a blend of strategy, performance, and creative craft to every engagement—because growth demands more than a single discipline.
            </p>
          </div>

          <div className="space-y-5 rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-[18px]">
            {teamPrinciples.map((principle) => (
              <article key={principle.heading} className="rounded-2xl border border-white/5 bg-black/10 px-5 py-6">
                <h3 className="text-lg font-medium text-white">{principle.heading}</h3>
                <p className="mt-3 text-sm text-white/70">{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
