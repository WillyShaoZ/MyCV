import "../styles.css";

function Avatar({ photoSrc, alt = "certificate" }) {
  return <img className="avatar" src={photoSrc} alt={alt} />;
}

function Intro({ name, content }) {
  return (
    <div className="data">
      <h1>{name}</h1>
      <p>{content}</p>
    </div>
  );
}

export default function Card({ item, selected, onToggle }) {
  const title = selected ? item.name.zh : item.name.en;
  const body = selected ? item.content.zh : item.content.en;

  return (
    <div
      className={selected ? "selected" : ""}
      onClick={() => onToggle?.(item.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onToggle?.(item.id)}
      aria-pressed={selected}
    >
      <Avatar photoSrc={item.photoSrc} alt={item.name.en} />
      <Intro name={title} content={body} />
    </div>
  );
}
