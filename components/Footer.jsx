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
      <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} ShipFeatures</span>

        <a
          href="https://www.linkedin.com/in/daniel-torres-9889501aa/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--foreground-muted)" }}
          className="hover:opacity-80"
        >
          Connect with me on LinkedIn
        </a>
      </div>
    </footer>
  );
}



