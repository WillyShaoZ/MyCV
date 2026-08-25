export default function Introduction() {
  return (
    <div className="intro">
      <p>
        Hi, I’m <strong>Zhen (Willy) Shao</strong> — a full-stack engineer and
        Computer Science graduate from <strong>Monash University</strong>. I’ve
        built and shipped production systems end-to-end, from database schema
        and API design through to the interfaces people actually use:{' '}
        <strong>Vue 3</strong> and <strong>React/TypeScript</strong> on the
        front end, <strong>Python/FastAPI</strong> and{' '}
        <strong>Node.js</strong> behind it, on <strong>PostgreSQL</strong>.
      </p>

      <p>
        AI-assisted development is how I work rather than a line on a résumé — I
        build with Claude and Cursor daily, and I’ve shipped LLM pipelines into
        production, which mostly taught me to validate what a model gives back
        before it reaches data that matters. I like owning a problem all the way
        to something running, and I’m comfortable being the person who talks to
        the business and then goes and builds it.
      </p>

      <ul className="intro__highlights">
        <li>Vue 3 • React/TypeScript • Python/FastAPI • Node.js • PostgreSQL</li>
        <li>AI-assisted development • LLM integrations • CI/CD & cloud deployment</li>
        <li>Monash University — B.CompSci (2024 — 2026, completed)</li>
        <li>Bilingual: English & Mandarin</li>
      </ul>
    </div>
  );
}
