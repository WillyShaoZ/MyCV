export default function Card({ item, selected, onToggle }) {
  const title = selected ? item.name_zh || item.name_en : item.name_en;
  const body = selected ? item.content_zh || item.content_en : item.content_en;

  return (
    <button
      type="button"
      className={`award-card ${selected ? "selected" : ""}`}
      onClick={() => onToggle?.(item.id)}
      aria-pressed={selected}
    >
      {item.photo_url ? (
        <img className="avatar" src={item.photo_url} alt={item.name_en} />
      ) : (
        <span className="avatar" aria-hidden />
      )}
      <span className="data">
        <h3>{title}</h3>
        <p>{body}</p>
      </span>
    </button>
  );
}
