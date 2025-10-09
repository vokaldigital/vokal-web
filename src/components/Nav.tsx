"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Vokal home">
            <Image src="/vokal-logo.svg" alt="Vokal" width={150} height={36} priority />
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 text-sm md:flex md:text-base" aria-label="Primary">
            <Link href="/work" className="text-gray-700 transition-colors hover:text-gray-900">
              Work
            </Link>
            <Link href="/services" className="text-gray-700 transition-colors hover:text-gray-900">
              Services
            </Link>
            <Link href="/approach" className="text-gray-700 transition-colors hover:text-gray-900">
              Approach
            </Link>
            <Link href="/about" className="text-gray-700 transition-colors hover:text-gray-900">
              About
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-700 transition-colors hover:text-gray-900">
                Log in
              </Link>
              <Link
                href="/get-started"
                className="rounded-full bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-black"
              >
                Get started
              </Link>
            </div>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label="navigation-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white text-gray-900 shadow"
          >
            <span className="sr-only">Open navigation</span>
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black my-1.5" />
            <span className="block h-0.5 w-5 bg-black" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden">
            <div className="mt-2 rounded-md bg-white p-2 shadow">
              <div className="flex flex-col gap-1">
                <Link href="/work" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  Work
                </Link>
                <Link href="/services" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  Services
                </Link>
                <Link href="/approach" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  Approach
                </Link>
                <Link href="/about" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  About
                </Link>
                <Link href="/login" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  Log in
                </Link>
                <Link
                  href="/get-started"
                  className="mt-2 rounded-full bg-gray-900 px-3 py-2 text-center text-white transition-colors hover:bg-black"
                  onClick={() => setOpen(false)}
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
