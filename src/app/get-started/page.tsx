import { AnimatedNeonText } from "@/components/AnimatedNeonText";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-medium">Create your account</h1>
        <p className="mt-4 text-[#2A2B28]">
          Fill out this quick registration form to start your onboarding. Replace the placeholder handler with your preferred auth flow.
        </p>

        <form className="mt-8 grid gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-2">
            <label htmlFor="full-name" className="text-sm font-medium text-gray-900">
              Full name
            </label>
            <input
              id="full-name"
              name="name"
              type="text"
              required
              placeholder="Jane Smith"
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div className="grid gap-2 md:grid-cols-2 md:gap-4">
            <div className="grid gap-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="confirm-password" className="text-sm font-medium text-gray-900">
                Confirm password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                placeholder="••••••••"
                className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group inline-flex items-center justify-center rounded-2xl bg-black/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-black/20 focus-visible:bg-black/20 focus-visible:outline-none"
          >
            <AnimatedNeonText text="Create account" className="gap-[0.06em]" />
          </button>
        </form>
      </section>
    </main>
  );
}
