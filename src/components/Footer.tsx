import Image from "next/image";
import { AnimatedNeonText } from "@/components/AnimatedNeonText";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 bg-transparent sm:grid-cols-[minmax(0,1fr)_minmax(0,360px)] sm:items-stretch">
          {/* Left: brand and navigation */}
          <div className="flex h-full flex-col gap-6 text-sm text-gray-700">
            <div className="space-y-3">
              <Image src="/vokal-logo.svg" alt="Vokal Digital" width={150} height={36} priority />
              <p className="max-w-xs text-sm text-[#2A2B28]">
                Fractional digital team for growth-focused founders—strategy, design, and go-to-market under one roof.
              </p>
            </div>
            <span className="mt-6 hidden text-xs text-gray-500 sm:mt-auto sm:block">© {year} Vokal Digital</span>
          </div>

          {/* Right: call-to-action panel */}
          <form
            action="/contact"
            className="w-full rounded-[28px] border border-white/10 bg-black/30 p-8 text-white backdrop-blur-[14px] sm:p-10"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-white/70">Work with us</p>
            <p className="mt-3 text-lg font-semibold text-white">
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
                className="h-11 w-full flex-1 rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white placeholder-white/50 transition focus:border-[#B4FF00] focus:outline-none focus:ring-2 focus:ring-[#B4FF00]/20"
              />
              <button
                type="submit"
                className="group inline-flex h-11 w-full items-center justify-center gap-3 rounded-2xl border border-transparent bg-[#B4FF00]/90 px-4 text-sm font-medium text-[#1C1D1B]/80 backdrop-blur-[5px] transition-all hover:border-[#B4FF00] hover:bg-[#B4FF00]/20 hover:text-[#B4FF00] hover:backdrop-blur-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60 sm:w-auto"
              >
                Let’s talk
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center text-inherit transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                >
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
