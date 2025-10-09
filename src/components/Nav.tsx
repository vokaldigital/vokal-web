"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-6 z-[70] px-5 sm:px-6 md:top-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative">
          <div className="relative z-[80] flex items-center justify-between rounded-2xl bg-black/30 px-5 py-3 backdrop-blur sm:px-6">
            <Link href="/" className="flex items-center" aria-label="Vokal home">
              <Image src="/vokal-logo.svg" alt="Vokal" width={120} height={28} priority className="brightness-0 invert" />
            </Link>

            {/* Desktop links */}
            <nav className="hidden items-center gap-8 text-sm md:flex md:text-base" aria-label="Primary">
              <Link href="/services" className="nav-link text-white transition-colors hover:text-[#B4FF00] focus-visible:text-[#B4FF00]">
                Services
              </Link>
              <Link href="/approach" className="nav-link text-white transition-colors hover:text-[#B4FF00] focus-visible:text-[#B4FF00]">
                Approach
              </Link>
              <Link href="/about" className="nav-link text-white transition-colors hover:text-[#B4FF00] focus-visible:text-[#B4FF00]">
                About
              </Link>
              <div className="flex items-center gap-3 pl-6">
                <Link
                  href="/login"
                  className="rounded-2xl border border-white/70 px-4 py-2 text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Log in
                </Link>
                <Link
                  href="/get-started"
                  className="rounded-2xl bg-white px-4 py-2 text-[#1C1D1B]/70 transition-colors hover:bg-white/90 hover:text-[#1C1D1B]"
                >
                  Get started
                </Link>
              </div>
            </nav>

            {/* Mobile burger */}
            <button
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden relative inline-flex h-10 w-10 items-center justify-center"
            >
              <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
              <span
                className={`absolute h-0.5 w-6 rounded bg-white transition-transform duration-200 ${
                  open ? "rotate-45" : "-translate-y-[6px]"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 rounded bg-white transition-transform duration-200 ${
                  open ? "-rotate-45" : "translate-y-[6px]"
                }`}
              />
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="fixed inset-0 z-[40] flex flex-col px-4 pb-6 pt-[1.2rem] sm:px-5">
              <div className="flex flex-1 rounded-2xl bg-black/30 backdrop-blur-2xl motion-safe:animate-[menuFade_200ms_ease-out_forwards]">
                <div className="flex w-full flex-col items-center justify-center gap-9 px-6 text-center text-2xl font-medium text-white">
                  <Link
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="transition hover:text-[#B4FF00] focus-visible:text-[#B4FF00]"
                  >
                    Services
                  </Link>
                  <Link
                    href="/approach"
                    onClick={() => setOpen(false)}
                    className="transition hover:text-[#B4FF00] focus-visible:text-[#B4FF00]"
                  >
                    Approach
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setOpen(false)}
                    className="transition hover:text-[#B4FF00] focus-visible:text-[#B4FF00]"
                  >
                    About
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="transition hover:text-[#B4FF00] focus-visible:text-[#B4FF00]"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/get-started"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl bg-white px-6 py-2 text-lg text-[#1C1D1B]/70 transition hover:bg-white/90 hover:text-[#1C1D1B]"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
