import React, { useState } from 'react';
import Cell from './Child';

const Grid = () => {
  const [activeCount, setActiveCount] = useState(0);

  const updateCounter = (isActivated) => {
    setActiveCount(prevCount => isActivated ? prevCount + 1 : prevCount - 1);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // full height to center vertically
        textAlign: 'center',
      }}
    >
      <h2>Count: {activeCount}</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 100px)',
        gap: '5px',
        justifyContent: 'center', // horizontally centers the grid within the parent div
      }}>
        <Cell toggleCounter={updateCounter} />
        <Cell toggleCounter={updateCounter} />
        <Cell toggleCounter={updateCounter} />
        <Cell toggleCounter={updateCounter} />
      </div>
    </div>
  );
};

export default Grid;
