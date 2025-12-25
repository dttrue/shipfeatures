// components/ThemeToggle.jsx

"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Run only on client
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
    setMounted(true);
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md border px-3 py-1 text-sm hover:opacity-80"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

