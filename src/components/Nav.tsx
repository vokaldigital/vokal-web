// src/components/Nav.tsx
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <header className="site-nav">
        {/* Brand */}
        <Link href="/" className="brand" aria-label="Vokal home">
          <Image
            src="/logo.svg"
            alt="Vokal"
            width={100}
            height={32}
            className="brand-logo"
            priority
          />
        </Link>

        {/* Desktop links (hidden on mobile via CSS) */}
        <nav className="nav-links vokal-nav" aria-label="Primary">
          <Link className="btn-outline nav-pill" href="/pricing">Pricing</Link>
          <Link className="btn-outline nav-pill" href="/services">Services</Link>
          <Link className="btn-outline nav-pill" href="/about">About</Link>
          <Link className="btn-filled  nav-pill" href="/contact">Get Started</Link>
        </nav>

        {/* Mobile toggle + burger (shown on mobile via CSS) */}
        <input id="vokal-nav-toggle" type="checkbox" className="vokal-toggle" />
        <label htmlFor="vokal-nav-toggle" className="vokal-burger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </label>
      </header>

      {/* Mobile overlay + panel (pure CSS: opened by the checkbox) */}
      <div className="vokal-menu">
        {/* click backdrop to close */}
        <label htmlFor="vokal-nav-toggle" className="vokal-backdrop" aria-hidden="true"></label>

        <div className="vokal-menu__inner" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          {/* close button */}
          <label htmlFor="vokal-nav-toggle" className="vokal-close" aria-label="Close menu"></label>

          {/* Stacked links for overlay */}
          <Link href="/pricing"  className="pill">Pricing</Link>
          <Link href="/services" className="pill">Services</Link>
          <Link href="/about"    className="pill">About</Link>
          <Link href="/contact"  className="pill pill--accent">Get Started</Link>
        </div>
      </div>
    </>
  );
}