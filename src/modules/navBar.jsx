import { useEffect, useRef, useState } from "react";
import "./nav.css";

const defaultItems = [
  { label: "Intro",    href: "#Introduction" },
  { label: "Exp",   href: "#Experience" },
  { label: "Edu",    href: "#Education" },
  { label: "Projects",href: "#Projects" },
  { label: "Awards",href: "#Awards" },
];

export default function Navbar({ items = defaultItems, initial = 0 }) {
  const [active, setActive] = useState(initial);
  const [pos, setPos] = useState({ left: 0, width: 0 });
  const refs = useRef([]);

  useEffect(() => {
    const el = refs.current[active];
    if (!el) return;
    const pill = el.closest(".nav__pill");
    const { left: pillLeft } = pill.getBoundingClientRect();
    const { left, width } = el.getBoundingClientRect();
    setPos({ left: left - pillLeft - 6, width }); 
  }, [active, items]);

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav__pill">
        <span
          className="nav__indicator"
          style={{ transform: `translateX(${pos.left}px)`, width: pos.width || 0 }}
        />
        <ul className="nav__list">
          {items.map((it, i) => (
            <li key={it.href}>
              <a
                ref={(el) => (refs.current[i] = el)}
                href={it.href}
                className={`nav__link ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
