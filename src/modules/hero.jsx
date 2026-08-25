import { useContent } from "../lib/content";

function Sep() {
  return <span className="hero__dot" aria-hidden>·</span>;
}

export default function Hero() {
  const { content } = useContent();
  const p = content.profile || {};

  return (
    <header className="hero">
      <h1 className="hero__name">{p.name}</h1>
      {p.tagline ? <p className="hero__tagline">{p.tagline}</p> : null}

      <div className="hero__meta">
        {p.location ? <span>{p.location}</span> : null}
        {p.location && p.email ? <Sep /> : null}
        {p.email ? <a href={`mailto:${p.email}`}>{p.email}</a> : null}
        {p.email && p.phone ? <Sep /> : null}
        {p.phone ? <a href={`tel:${p.phone.replace(/\s/g, "")}`}>{p.phone}</a> : null}
        {p.github ? <Sep /> : null}
        {p.github ? (
          <a href={p.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        ) : null}
        {p.linkedin ? <Sep /> : null}
        {p.linkedin ? (
          <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        ) : null}
      </div>

      {p.status ? <p className="hero__status">{p.status}</p> : null}
    </header>
  );
}
