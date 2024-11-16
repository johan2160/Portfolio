import React from 'react';

const TechnologyBadge = ({ technology }) => {
  return (
    <button
      key={technology.name}
      style={{ backgroundColor: technology.background }}
      className="flex items-center gap-1 px-2 py-1 rounded-md cursor-auto"
    >
      <img src={technology.icon} alt={technology.name} className='w-5'/>
      <span className="text-sm" style={{ color: technology.color }}>
        {technology.name}
      </span>
    </button>
  );
};

export default TechnologyBadge;
