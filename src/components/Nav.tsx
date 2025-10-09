"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-medium text-gray-900">
            Vokal
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 text-sm md:flex md:text-base">
            <Link href="/services" className="text-gray-700 transition-colors hover:text-gray-900">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 transition-colors hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 transition-colors hover:text-gray-900">
              Contact
            </Link>
            <Link
              href="/portal"
              className="rounded-md border border-gray-900 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
            >
              Client Portal
            </Link>
          </div>

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
              <div className="flex flex-col">
                <Link href="/services" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  Services
                </Link>
                <Link href="/about" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="px-2 py-2 text-gray-800 hover:text-black" onClick={() => setOpen(false)}>
                  Contact
                </Link>
                <Link
                  href="/portal"
                  className="mt-2 rounded-md border border-gray-900 px-3 py-2 text-center text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  Client Portal
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
