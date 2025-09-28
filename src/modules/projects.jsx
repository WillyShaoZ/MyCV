import '../styles.css';
import GameCard from '../util/GameCard.jsx';
import { useState } from 'react';
import { ProjectDetails } from '../data/games';

export default function Project() {
  const [selectedId, setSelectedId] = useState(null);
  const handleToggle = (id) => setSelectedId(prev => (prev === id ? null : id));

  return (
    <div id="project" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ProjectDetails.map((item) => {
        const open = selectedId === item.id;
        return (
          <GameCard
            key={item.id}
            cover={item.cover}
            title={item.name}
            description={item.description}
            href={item.href}
            download={item.download}        
            openInNewTab={item.openInNewTab} 
            open={open}
            onToggle={() => handleToggle(item.id)}
            ariaLabel={item.name}
          />
        );
      })}
    </div>
  );
}
