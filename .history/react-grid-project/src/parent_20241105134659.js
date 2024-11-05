// Parent.js
import React, { useState } from 'react';
import Cell from './Child';

const Grid = () => {
  const [activeCount, setActiveCount] = useState(0);

  const updateCounter = (isActivated) => {
    setActiveCount(prevCount => isActivated ? prevCount + 1 : prevCount - 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {activeCount}</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 100px)', 
        gap: '5px',
        justifyContent: 'center'
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
