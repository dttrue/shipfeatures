// components/Footer.jsx
export default function Footer() {
  return (
    <footer
      className="mt-16 border-t pt-6 text-xs"
      style={{
        borderColor: "var(--foreground-muted)",
        color: "var(--foreground-muted)",
      }}
    >
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} ShipFeatures</span>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a
            href="/about"
            style={{ color: "var(--foreground-muted)" }}
            className="hover:opacity-80"
          >
            About
          </a>

          <a
            href="https://github.com/dttrue"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--foreground-muted)" }}
            className="hover:opacity-80"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-torres-9889501aa/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--foreground-muted)" }}
            className="hover:opacity-80"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
