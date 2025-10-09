export default function Page() {
  return (
    <main className="min-h-dvh">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-medium">Log in</h1>
        <p className="mt-4 text-gray-600">
          Sign in to access your dashboard. Replace this placeholder form once authentication is wired up.
        </p>

        <form className="mt-8 grid gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                name="remember"
                className="h-4 w-4 rounded border border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              Remember me
            </label>
            <button type="button" className="text-gray-700 transition hover:text-gray-900">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="inline-flex justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}
