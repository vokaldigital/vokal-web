// src/components/Nav.tsx
import Link from "next/link";

export default function Nav() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      {/* Brand → home */}
      <Link href="/" className="text-xl font-bold text-white">
        vokal
      </Link>

      {/* Links */}
      <nav className="flex gap-4">
        <Link className="btn-outline text-white" href="/pricing">Pricing</Link>
        <Link className="btn-outline text-white" href="/services">Services</Link>
        <Link className="btn-outline text-white" href="/about">About</Link>
        <Link className="btn-filled text-black" href="/contact">Get Started</Link>
      </nav>
    </header>
  );
}