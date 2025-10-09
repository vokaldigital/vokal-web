import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          {/* Left: stacked links above copyright */}
          <div className="flex flex-col items-start gap-2">
            <nav aria-label="Footer navigation" className="flex flex-col items-start gap-1 text-sm">
              <Link href="/how-it-works" className="text-gray-700 transition-colors hover:text-gray-900">
                How it works
              </Link>
              <Link href="/pricing" className="text-gray-700 transition-colors hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-700 transition-colors hover:text-gray-900">
                Contact us
              </Link>
              <Link href="/login" className="text-gray-700 transition-colors hover:text-gray-900">
                Log in
              </Link>
              <Link
                href="/get-started"
                className="mt-1 inline-flex items-center rounded-full bg-gray-900 px-3 py-1 text-white transition-colors hover:bg-black"
              >
                Get started
              </Link>
            </nav>
            <span className="text-xs text-gray-500">© {year} Vokal</span>
          </div>

          {/* Right: compact email field */}
          <form action="/contact" className="flex flex-col items-start gap-2 text-sm">
            <p className="text-gray-700">Want to work? Contact us below.</p>
            <div className="flex w-full items-center gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Your email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Your email"
                autoComplete="email"
                required
                className="h-10 w-48 sm:w-64 rounded-md bg-white px-3 text-sm text-gray-900 placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
              <button
                type="submit"
                className="h-10 rounded-md bg-gray-900 px-3 text-sm text-white transition-colors hover:bg-black"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
