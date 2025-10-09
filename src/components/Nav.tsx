"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-medium text-gray-900">
            Vokal
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 text-sm md:flex md:text-base" aria-label="Primary">
            <Link href="/how-it-works" className="text-gray-700 transition-colors hover:text-gray-900">
              How it works
            </Link>
            <Link href="/pricing" className="text-gray-700 transition-colors hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 transition-colors hover:text-gray-900">
              Contact us
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-700 transition-colors hover:text-gray-900">
                Log in
              </Link>
              <Link
                href="/get-started"
                className="rounded-full border border-gray-900 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
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
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-900"
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
            <div className="mt-2 rounded-md border bg-white p-2">
              <div className="flex flex-col gap-1">
                <Link href="/how-it-works" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  How it works
                </Link>
                <Link href="/pricing" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  Pricing
                </Link>
                <Link href="/contact" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  Contact us
                </Link>
                <Link href="/login" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  Log in
                </Link>
                <Link
                  href="/get-started"
                  className="mt-2 rounded-full border border-gray-900 px-3 py-2 text-center text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
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
