import { useState } from "react";
import Card from "../util/Card";
import { useContent } from "../lib/content";

export default function Award() {
  const { content } = useContent();
  const items = content.awards || [];
  const [selectedId, setSelectedId] = useState(null);

  const handleToggle = (id) => setSelectedId((prev) => (prev === id ? null : id));

  return (
    <div>
      <p className="awards__hint">Click any card to read the Chinese version.</p>
      <div id="awards-list" className="cards">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            selected={item.id === selectedId}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
