import GameCard from "../util/GameCard.jsx";
import { useState } from "react";
import { useContent } from "../lib/content";

export default function Project() {
  const { content } = useContent();
  const items = content.projects || [];
  const [selectedId, setSelectedId] = useState(null);
  const handleToggle = (id) => setSelectedId((prev) => (prev === id ? null : id));

  return (
    <div id="project" className="gc-grid">
      {items.map((item) => (
        <GameCard
          key={item.id}
          cover={item.cover_url}
          title={item.name}
          meta={item.meta}
          tags={item.tags}
          description={item.description}
          href={item.href || undefined}
          openInNewTab
          open={selectedId === item.id}
          onToggle={() => handleToggle(item.id)}
          ariaLabel={item.name}
        />
      ))}
    </div>
  );
}
