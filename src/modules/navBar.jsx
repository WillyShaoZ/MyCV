import { useEffect, useState } from "react";
import "./nav.css";

const defaultItems = [
  { label: "Intro", href: "#Introduction" },
  { label: "Experience", href: "#Experience" },
  { label: "Education", href: "#Education" },
  { label: "Projects", href: "#Projects" },
  { label: "Awards", href: "#Awards" },
];

function readTheme() {
  try {
    return localStorage.getItem("theme") || "system";
  } catch {
    return "system";
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* private mode — the page still renders correctly */
    }
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="nav__theme"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar({ items = defaultItems }) {
  const [active, setActive] = useState(items[0]?.href);

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.href.slice(1)))
      .filter(Boolean);
    if (!sections.length) return;

    // Track every section's visibility, not just the ones that changed in
    // this callback — otherwise scrolling to the top can leave a lower
    // section highlighted.
    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const first = sections.find((s) => visible.has(s.id));
        if (first) setActive(`#${first.id}`);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="nav" aria-label="Primary">
      <ul className="nav__list">
        {items.map((it) => (
          <li key={it.href}>
            <a
              href={it.href}
              className={`nav__link ${it.href === active ? "is-active" : ""}`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
}
