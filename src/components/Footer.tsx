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
            className="w-full rounded-2xl border border-[#1C1D1B]/15 bg-transparent p-6"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-[#2A2B28]">Work with us</p>
            <p className="mt-3 text-lg font-semibold text-[#1C1D1B]">
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
                className="h-11 w-full flex-1 rounded-full border border-[#1C1D1B]/15 bg-transparent px-4 text-sm text-[#1C1D1B] placeholder-gray-400 focus:border-[#1C1D1B] focus:outline-none focus:ring-2 focus:ring-[#1C1D1B]/10"
              />
              <button
                type="submit"
                className="group inline-flex h-11 w-full items-center justify-center gap-3 rounded-2xl border border-[#1C1D1B]/20 bg-transparent px-4 text-sm font-medium text-[#1C1D1B] transition-colors hover:border-[#B4FF00] focus-visible:outline-none sm:w-auto"
              >
                <AnimatedNeonText text="Let’s talk" className="gap-[0.06em]" />
                <span aria-hidden className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#1C1D1B] transition-colors group-hover:bg-[#B4FF00] group-hover:text-[#1C1D1B] group-focus-visible:bg-[#B4FF00] group-focus-visible:text-[#1C1D1B]">
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
