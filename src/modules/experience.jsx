import { useContent } from "../lib/content";

export default function Experience() {
  const { content } = useContent();
  const items = content.experiences || [];

  return (
    <div>
      {items.map((item) => (
        <div className="experience-item" key={item.id}>
          <h3>
            {item.role}
            {item.company ? ` — ${item.company}` : ""}
          </h3>
          {item.date_range ? <p className="date">{item.date_range}</p> : null}

          {(item.bullets || []).length > 0 ? (
            <ul>
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}

          {item.note ? (
            <p>
              <em>{item.note}</em>
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
