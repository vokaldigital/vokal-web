export default function Page() {
  return (
    <main className="min-h-dvh">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-medium">Contact us</h1>
        <p className="mt-4 text-gray-600">
          Reach out with a quick note and we will get back to you within one business day.
        </p>

        <form className="mt-8 grid gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-900">
              Your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Smith"
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@business.com"
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="business" className="text-sm font-medium text-gray-900">
              Business
            </label>
            <input
              id="business"
              name="business"
              type="text"
              placeholder="Acme Corp"
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="reason" className="text-sm font-medium text-gray-900">
              Reason for reaching out
            </label>
            <textarea
              id="reason"
              name="reason"
              rows={4}
              required
              placeholder="Tell us a little about what you need."
              className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
            />
          </div>

          <button
            type="submit"
            className="inline-flex justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black"
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
