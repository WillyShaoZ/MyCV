import { useContent } from "../lib/content";

export default function Education() {
  const { content } = useContent();
  const items = content.education || [];

  return (
    <div>
      {items.map((item) => (
        <div className="education-item" key={item.id}>
          <h3>
            {item.degree}
            {item.org ? ` — ${item.org}` : ""}
          </h3>
          {item.date_range ? <p className="date">{item.date_range}</p> : null}
          {item.description ? <p>{item.description}</p> : null}
        </div>
      ))}
    </div>
  );
}
