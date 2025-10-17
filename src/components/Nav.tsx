"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  const openMenu = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setMenuClosing(false);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuClosing(true);
    closeTimeout.current = setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
      closeTimeout.current = null;
    }, 200);
  };

  const toggleMenu = () => {
    if (menuOpen && !menuClosing) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <nav className="fixed inset-x-0 top-6 z-[70] px-5 sm:px-6 md:top-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative">
          <div className="relative z-[80] flex items-center justify-between rounded-2xl bg-black/30 px-5 py-2.5 backdrop-blur-[9px] sm:px-6">
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
                  className="inline-flex justify-center rounded-2xl border border-white/80 px-5 py-2 text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Log in
                </Link>
                <Link
                  href="/get-started"
                  className="inline-flex min-w-[140px] justify-center rounded-2xl border border-transparent bg-[#B4FF00]/90 px-6 py-2 text-[#1C1D1B]/80 backdrop-blur-[5px] transition-all hover:border-[#B4FF00] hover:bg-[#B4FF00]/20 hover:text-[#B4FF00] hover:backdrop-blur-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60"
                >
                  Get started
                </Link>
              </div>
            </nav>

            {/* Mobile burger */}
            <button
              type="button"
              aria-label={menuOpen && !menuClosing ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen && !menuClosing}
              onClick={toggleMenu}
              className="md:hidden relative inline-flex h-10 w-10 items-center justify-center"
            >
              <span className="sr-only">{menuOpen && !menuClosing ? "Close navigation" : "Open navigation"}</span>
              <span
                className={`absolute h-0.5 w-6 rounded bg-white transition-transform duration-200 ${
                  menuOpen && !menuClosing ? "rotate-45" : "-translate-y-[6px]"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 rounded bg-white transition-transform duration-200 ${
                  menuOpen && !menuClosing ? "-rotate-45" : "translate-y-[6px]"
                }`}
              />
            </button>
          </div>

          {/* Mobile menu */}
          {(menuOpen || menuClosing) && (
            <div
              className={`fixed inset-0 z-[40] flex flex-col px-4 pb-6 pt-[1.2rem] transition-opacity duration-200 ease-out sm:px-5 ${
                menuClosing ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
              }`}
            >
              <div className={`flex flex-1 rounded-2xl bg-black/30 backdrop-blur-[44px] ${menuClosing ? "" : "motion-safe:animate-[menuFade_200ms_ease-out_forwards]"}`}>
                <div className="flex w-full flex-col items-center justify-center gap-9 px-6 text-center text-2xl font-medium text-white">
                  <Link
                    href="/services"
                    onClick={closeMenu}
                    className="transition hover:text-[#B4FF00] focus-visible:text-[#B4FF00]"
                  >
                    Services
                  </Link>
                  <Link
                    href="/approach"
                    onClick={closeMenu}
                    className="transition hover:text-[#B4FF00] focus-visible:text-[#B4FF00]"
                  >
                    Approach
                  </Link>
                  <Link
                    href="/about"
                    onClick={closeMenu}
                    className="transition hover:text-[#B4FF00] focus-visible:text-[#B4FF00]"
                  >
                    About
                  </Link>
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="inline-flex min-w-[160px] justify-center rounded-2xl border border-white/80 px-6 py-2 text-white transition-colors hover:border-white hover:bg-white/10"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/get-started"
                    onClick={closeMenu}
                    className="inline-flex min-w-[160px] justify-center rounded-2xl border border-transparent bg-[#B4FF00]/90 px-6 py-2 text-lg text-[#1C1D1B]/80 backdrop-blur-[5px] transition-all hover:border-[#B4FF00] hover:bg-[#B4FF00]/20 hover:text-[#B4FF00] hover:backdrop-blur-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B4FF00]/60"
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
