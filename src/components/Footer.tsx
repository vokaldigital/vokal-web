import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,360px)] sm:items-stretch">
          {/* Left: brand and navigation */}
          <div className="flex h-full flex-col gap-6 text-sm text-gray-700">
            <div className="space-y-3">
              <Image src="/vokal-logo.svg" alt="Vokal Digital" width={150} height={36} priority />
              <p className="max-w-xs text-sm text-gray-600">
                Fractional digital team for growth-focused founders—strategy, design, and go-to-market under one roof.
              </p>
            </div>
            <span className="mt-6 hidden text-xs text-gray-500 sm:mt-auto sm:block">© {year} Vokal Digital</span>
          </div>

          {/* Right: call-to-action panel */}
          <form action="/contact" className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Work with us</p>
            <p className="mt-3 text-lg font-semibold text-gray-900">
              Start with a free, thirty minute growth mapping call.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <label htmlFor="footer-email" className="sr-only">
                Your email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                aria-label="Your email"
                autoComplete="email"
                required
                className="h-11 w-full flex-1 rounded-full border border-gray-300 bg-white px-4 text-sm text-gray-900 placeholder-gray-400 shadow focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-3 rounded-full border border-gray-900 bg-gray-900 px-4 text-sm font-medium text-white transition-colors hover:bg-black sm:w-auto"
              >
                Let’s talk
                <span aria-hidden className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-900">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
        <span className="mt-6 block text-xs text-gray-500 sm:hidden">© {year} Vokal Digital</span>
      </div>
    </footer>
  );
}
