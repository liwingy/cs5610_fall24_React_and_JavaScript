import React, { useState } from 'react';
import { useCellContext } from './CellContext';

const Cell = () => {
  const [isActive, setIsActive] = useState(false);
  const { toggleCell } = useCellContext();

  const handleClick = () => {
    setIsActive(!isActive);
    toggleCell(!isActive);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: isActive ? 'black' : 'white',
        border: '1px solid grey',
        cursor: 'pointer',
      }}
    />
  );
};

export default Cell;
