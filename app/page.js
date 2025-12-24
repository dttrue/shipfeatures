export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24 text-neutral-900">
      {/* 
        This page exists to get leads.
        Do not redesign.
        Do not expand.
        Ship features, not ideas.
      */}

      <h1 className="text-3xl font-semibold leading-tight">
        I build small, paid web tools for founders and service businesses.
      </h1>

      <p className="mt-4 text-neutral-600">
        Next.js • Stripe • Modern backend
        <br />
        Simple scope. Fast delivery.
      </p>

      <a
        href="mailto:daniel@shipfeatures.dev?subject=Project%20Inquiry"
        className="inline-block mt-8 rounded bg-black px-6 py-3 text-white"
      >
        Email me about a project
      </a>

      <p className="mt-2 text-sm text-neutral-500">
        Please include what you want built, your timeline, and your budget
        range.
      </p>

      <section className="mt-16 space-y-6">
        <div>
          <h2 className="font-medium">Who this is for</h2>
          <ul className="mt-2 list-disc pl-5 text-neutral-600">
            <li>You need a small web app, dashboard, or paid feature</li>
            <li>You want something new built cleanly</li>
            <li>You care more about shipping than polishing forever</li>
          </ul>
        </div>

        <div>
          <h2 className="font-medium">What I build</h2>
          <ul className="mt-2 list-disc pl-5 text-neutral-600">
            <li>Booking & payment tools</li>
            <li>Small dashboards and internal tools</li>
            <li>Focused SaaS features or MVPs</li>
          </ul>
        </div>

        <div>
          <h2 className="font-medium">How it works</h2>
          <ol className="mt-2 list-decimal pl-5 text-neutral-600">
            <li>You explain the problem</li>
            <li>I propose a small, fixed scope</li>
            <li>I build and ship</li>
            <li>You decide if we continue</li>
          </ol>
        </div>

        <div>
          <h2 className="font-medium">Pricing</h2>
          <p className="mt-2 text-neutral-600">
            Most projects fall between <strong>$150–$600</strong>, depending on
            scope. If it can’t be scoped clearly, I won’t take it on.
          </p>
        </div>
      </section>
    </main>
  );
}
