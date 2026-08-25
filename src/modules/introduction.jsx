import { useContent } from "../lib/content";

export default function Introduction() {
  const { content } = useContent();
  const p = content.profile || {};
  const paragraphs = (p.intro || "").split(/\n\s*\n/).filter(Boolean);
  const highlights = p.highlights || [];

  return (
    <div className="intro">
      {paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}

      {highlights.length > 0 ? (
        <ul className="intro__highlights">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
