// src/app/page.tsx
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
          <button className="btn-filled" type="submit">Get Started</button>
        </form>
      </div>
    </main>
  );
}