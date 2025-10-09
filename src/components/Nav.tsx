// src/components/Nav.tsx
import Link from "next/link";
import Image from "next/image";
import StarBorder from "@/components/StarBorder";

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
          <StarBorder
            as={Link}
            href="/pricing"
            innerClassName="btn-outline nav-pill"
            color="rgba(var(--mint-glow-rgb), 0.9)"
            speed="5s"
            thickness={2}
          >
            Pricing
          </StarBorder>
          <StarBorder
            as={Link}
            href="/services"
            innerClassName="btn-outline nav-pill"
            color="rgba(var(--mint-glow-rgb), 0.9)"
            speed="5s"
            thickness={2}
          >
            Services
          </StarBorder>
          <StarBorder
            as={Link}
            href="/about"
            innerClassName="btn-outline nav-pill"
            color="rgba(var(--mint-glow-rgb), 0.9)"
            speed="5s"
            thickness={2}
          >
            About
          </StarBorder>
          <StarBorder
            as={Link}
            href="/contact"
            innerClassName="btn-filled nav-pill"
            color="rgba(var(--mint-glow-rgb), 0.9)"
            speed="5s"
            thickness={2}
          >
            Get Started
          </StarBorder>
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
          <StarBorder
            as={Link}
            href="/pricing"
            innerClassName="pill"
            color="rgba(var(--mint-glow-rgb), 0.9)"
            speed="5s"
            thickness={3}
            fullWidth
          >
            Pricing
          </StarBorder>
          <StarBorder
            as={Link}
            href="/services"
            innerClassName="pill"
            color="rgba(var(--mint-glow-rgb), 0.9)"
            speed="5s"
            thickness={3}
            fullWidth
          >
            Services
          </StarBorder>
          <StarBorder
            as={Link}
            href="/about"
            innerClassName="pill"
            color="rgba(var(--mint-glow-rgb), 0.9)"
            speed="5s"
            thickness={3}
            fullWidth
          >
            About
          </StarBorder>
          <StarBorder
            as={Link}
            href="/contact"
            innerClassName="pill pill--accent"
            color="rgba(var(--mint-glow-rgb), 0.9)"
            speed="5s"
            thickness={3}
            fullWidth
          >
            Get Started
          </StarBorder>
        </div>
      </div>
    </>
  );
}
