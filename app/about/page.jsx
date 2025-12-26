export const metadata = {
  title: "About | ShipFeatures",
  description:
    "ShipFeatures builds small, paid web tools and internal dashboards for founders and service businesses.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <header className="mb-10">
        <h1
          className="text-3xl font-semibold leading-tight"
          style={{ color: "var(--foreground-strong)" }}
        >
          About
        </h1>

        <p
          className="mt-3 text-sm"
          style={{ color: "var(--foreground-muted)" }}
        >
          Trust page. Short. Direct. No noise.
        </p>
      </header>

      <section
        className="space-y-5 text-[15px] leading-7"
        style={{ color: "var(--foreground)" }}
      >
        <p>
          ShipFeatures is a focused development practice run by Daniel Torres.
        </p>

        <p>
          I build small, paid web tools and internal dashboards for founders and
          service businesses that need reliable software, not experiments. Work
          is scoped tightly, delivered quickly, and designed to support real
          operations — bookings, payments, admin workflows, and customer-facing
          tools.
        </p>

        <p>
          I work directly with clients end-to-end, from planning to deployment,
          using modern web stacks and production-ready infrastructure. The goal
          is simple: ship software that earns its keep and stays out of the way.
        </p>

        <p>
          If you have a clearly defined problem and want it built cleanly, you
          can reach me via email.
        </p>

        
      </section>

      <div
        className="mt-10 rounded-xl border p-4 text-sm"
        style={{
          borderColor: "var(--foreground-muted)",
          color: "var(--foreground)",
        }}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span style={{ color: "var(--foreground-muted)" }}>Contact</span>

          <a
            href="mailto:info@shipfeatures.dev?subject=Project%20Inquiry"
            className="hover:opacity-80"
            style={{ color: "var(--foreground-strong)" }}
          >
            info@shipfeatures.dev
          </a>
        </div>
      </div>

      <div
        className="mt-8 text-xs hover:opacity-80"
        style={{ color: "var(--foreground-muted)" }}
      >
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/">← Back to home</a>
      </div>
    </main>
  );
}
