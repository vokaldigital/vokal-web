import Link from "next/link";
import { AnimatedNeonText } from "@/components/AnimatedNeonText";

const onboardingSteps = [
  {
    label: "Share your details",
    copy: "Tell us who you are, who you’re serving, and what success looks like for your team.",
  },
  {
    label: "Match with your pod",
    copy: "We align the right strategists, creatives, and lifecycle operators to plug into your workflow.",
  },
  {
    label: "Activate momentum",
    copy: "Within the first 30 days you’ll have a launch roadmap, live campaigns, and reporting that proves the impact.",
  },
];

export default function Page() {
  return (
    <main className="min-h-dvh text-white">
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-24 text-center sm:px-8">
        <span className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/60">
          Get started
        </span>
        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">Launch your engagement with Vokal.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          Answer a few questions so we can tailor the strategy pod to match your goals. We’ll follow up within one business day with next steps.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
          <aside className="space-y-6 rounded-[32px] border border-white/10 bg-black/20 p-6 backdrop-blur-[18px] md:sticky md:top-32">
            <h2 className="text-left text-2xl font-semibold text-white sm:text-3xl">How onboarding works</h2>
            <p className="text-sm text-white/70 sm:text-base">
              We keep things simple—one form, one kickoff, and a pod that ships momentum without adding headcount on your side.
            </p>
            <ul className="space-y-4">
              {onboardingSteps.map((step) => (
                <li key={step.label} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <p className="text-sm font-medium text-white">{step.label}</p>
                  <p className="mt-2 text-sm text-white/60">{step.copy}</p>
                </li>
              ))}
            </ul>
          </aside>

          <form className="grid gap-6 rounded-[32px] border border-white/10 bg-black/30 p-6 text-left backdrop-blur-[18px] sm:p-8">
            <div className="grid gap-2">
              <label htmlFor="full-name" className="text-sm font-medium text-white">
                Your name
              </label>
              <input
                id="full-name"
                name="name"
                type="text"
                required
                placeholder="Jane Smith"
                className="h-11 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white placeholder-white/50 transition focus:border-[#B4FF00] focus:outline-none focus:ring-2 focus:ring-[#B4FF00]/20"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="h-11 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white placeholder-white/50 transition focus:border-[#B4FF00] focus:outline-none focus:ring-2 focus:ring-[#B4FF00]/20"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="company" className="text-sm font-medium text-white">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Corp"
                className="h-11 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white placeholder-white/50 transition focus:border-[#B4FF00] focus:outline-none focus:ring-2 focus:ring-[#B4FF00]/20"
              />
            </div>

            <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
              <div className="grid gap-2">
                <label htmlFor="monthly-spend" className="text-sm font-medium text-white">
                  Monthly ad spend
                </label>
                <select
                  id="monthly-spend"
                  name="monthly-spend"
                  className="h-11 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white transition focus:border-[#B4FF00] focus:outline-none focus:ring-2 focus:ring-[#B4FF00]/20"
                >
                  <option value="" className="bg-[#1C1D1B] text-white">
                    Select a range
                  </option>
                  <option value="under-25" className="bg-[#1C1D1B] text-white">
                    Under $25K
                  </option>
                  <option value="25-75" className="bg-[#1C1D1B] text-white">
                    $25K – $75K
                  </option>
                  <option value="75-150" className="bg-[#1C1D1B] text-white">
                    $75K – $150K
                  </option>
                  <option value="150-plus" className="bg-[#1C1D1B] text-white">
                    $150K+ per month
                  </option>
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="team-size" className="text-sm font-medium text-white">
                  Growth team size
                </label>
                <select
                  id="team-size"
                  name="team-size"
                  className="h-11 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white transition focus:border-[#B4FF00] focus:outline-none focus:ring-2 focus:ring-[#B4FF00]/20"
                >
                  <option value="" className="bg-[#1C1D1B] text-white">
                    Select a range
                  </option>
                  <option value="1-3" className="bg-[#1C1D1B] text-white">
                    1 – 3 people
                  </option>
                  <option value="4-7" className="bg-[#1C1D1B] text-white">
                    4 – 7 people
                  </option>
                  <option value="8-15" className="bg-[#1C1D1B] text-white">
                    8 – 15 people
                  </option>
                  <option value="16-plus" className="bg-[#1C1D1B] text-white">
                    16+ people
                  </option>
                </select>
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="goals" className="text-sm font-medium text-white">
                What momentum looks like
              </label>
              <textarea
                id="goals"
                name="goals"
                rows={4}
                required
                placeholder="Outline the milestones you’re chasing over the next 90 days."
                className="rounded-3xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 transition focus:border-[#B4FF00] focus:outline-none focus:ring-2 focus:ring-[#B4FF00]/20"
              />
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/60 sm:text-sm">
                We’ll review your submission and follow up with a kickoff agenda and next available times.
              </p>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-transparent bg-[#B4FF00]/90 px-6 py-2 text-sm font-medium text-[#1C1D1B]/80 backdrop-blur-[5px] transition-all hover:border-[#B4FF00] hover:bg-[#B4FF00]/20 hover:text-[#B4FF00] hover:backdrop-blur-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60 sm:w-auto"
              >
                <AnimatedNeonText text="Submit & schedule" className="gap-[0.06em]" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-xs text-white/60 sm:text-sm">
              <span>Already chatting with us?</span>
              <Link href="/login" className="font-medium text-white transition hover:text-[#B4FF00]">
                Access the portal
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
