// Child.js
import React, { useState } from 'react';

const Cell = ({ toggleCounter }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleCell = () => {
    setIsActive(prevState => !prevState);
    toggleCounter(!isActive);
  };

  return (
    <div
      onClick={toggleCell}
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
