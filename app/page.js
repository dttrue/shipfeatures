export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      {/*
        This page exists to get leads.
        Do not redesign.
        Do not expand.
        Ship features, not ideas.
      */}

      <header className="mb-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/shipfeatures-wordmark.svg"
          alt="ShipFeatures"
          className="h-6 w-auto"
          loading="eager"
          decoding="async"
        />
      </header>

      <h1 className="text-3xl font-semibold leading-tight text-[color:var(--foreground-strong)]">
        I build small, paid web tools for founders and service businesses.
      </h1>

      <p className="mt-4 text-[color:var(--foreground-muted)]">
        Next.js • Stripe • Modern backend
        <br />
        Simple scope. Fast delivery.
      </p>

      <a
        href="mailto:info@shipfeatures.dev?subject=Project%20Inquiry"
        onClick={() => {
          if (window.gtag) {
            window.gtag("event", "contact_click", {
              method: "email",
              location: "homepage",
            });
          }
        }}
        className="inline-block mt-8 rounded px-6 py-3 font-medium
             bg-[color:var(--button-bg)] text-[color:var(--button-fg)]
             hover:opacity-90"
      >
        Email me about a project
      </a>

      <p className="mt-2 text-sm text-[color:var(--foreground-muted)]">
        Please include what you want built, your timeline, and your budget
        range.
      </p>

      <section className="mt-16 space-y-6">
        <div>
          <h2 className="font-medium text-[color:var(--foreground-strong)]">
            Who this is for
          </h2>
          <ul className="mt-2 list-disc pl-5 text-[color:var(--foreground-muted)]">
            <li>You need a small web app, dashboard, or paid feature</li>
            <li>You want something new built cleanly</li>
            <li>You care more about shipping than polishing forever</li>
          </ul>
        </div>

        <div>
          <h2 className="font-medium text-[color:var(--foreground-strong)]">
            What I build
          </h2>
          <ul className="mt-2 list-disc pl-5 text-[color:var(--foreground-muted)]">
            <li>Booking &amp; payment tools</li>
            <li>Small dashboards and internal tools</li>
            <li>Focused SaaS features or MVPs</li>
          </ul>
        </div>

        <div>
          <h2 className="font-medium text-[color:var(--foreground-strong)]">
            How it works
          </h2>
          <ol className="mt-2 list-decimal pl-5 text-[color:var(--foreground-muted)]">
            <li>You explain the problem</li>
            <li>I propose a small, fixed scope</li>
            <li>I build and ship</li>
            <li>You decide if we continue</li>
          </ol>
        </div>

        <div>
          <h2 className="font-medium text-[color:var(--foreground-strong)]">
            Pricing
          </h2>
          <p className="mt-2 text-[color:var(--foreground-muted)]">
            Most projects fall between{" "}
            <strong className="text-[color:var(--foreground-strong)]">
              $150–$600
            </strong>
            , depending on scope. If it can’t be scoped clearly, I won’t take it
            on.
          </p>
        </div>

        <div
          className="mt-8 rounded-lg border px-4 py-3 text-sm"
          style={{
            borderColor: "var(--foreground-muted)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <span className="block font-medium text-[color:var(--foreground-strong)]">
            Launch Assist
          </span>
          <p className="mt-1 text-[color:var(--foreground-muted)]">
            Need an existing project deployed? Deployment and go-live support is
            scoped and billed separately.
          </p>
        </div>
      </section>
    </main>
  );
}
