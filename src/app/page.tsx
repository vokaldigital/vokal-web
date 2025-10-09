// src/app/page.tsx
import StarBorder from "@/components/StarBorder";

export default function Home() {
  return (
    <main className="hero">
      <div className="hero-inner">
        <h1 className="headline">
          Your Brand.<span className="block highlight">Louder.</span>
        </h1>

        <p className="sub">
          AI-Driven Strategy for Business Growth and Recognition.
        </p>

        <form className="lead" action="/contact">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            aria-label="Your email"
          />
          <StarBorder
            as="button"
            type="submit"
            innerClassName="btn-filled"
            color="rgba(var(--mint-glow-rgb), 0.6)"
            speed="7s"
            thickness={0}
          >
            Get Started
          </StarBorder>
        </form>
      </div>
    </main>
  );
}
