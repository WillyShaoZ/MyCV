import "../styles.css";
import { useState } from "react";
import Card from "../util/Card";
import { CardDetails } from "../data/awards";

export default function Award() {
  const [selectedId, setSelectedId] = useState(null);

  const handleToggle = (id) => {
    setSelectedId((prev) => (prev === id ? null : id)); 
  };

  return (
    <div id="awards" className="cards">
      <p>
        This section lists all the awards I’ve received. Click any card to view
        the Chinese version.
      </p>

      {CardDetails.map((item) => (
        <Card
          key={item.id}
          item={item}
          selected={item.id === selectedId}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}
