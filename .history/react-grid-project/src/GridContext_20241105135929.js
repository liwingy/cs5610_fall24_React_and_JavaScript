import React, { createContext, useContext, useState } from 'react';

const CellContext = createContext();

export const CellProvider = ({ children }) => {
  const [activeCount, setActiveCount] = useState(0);

  const toggleCell = (isActivated) => {
    setActiveCount(prevCount => isActivated ? prevCount + 1 : prevCount - 1);
  };

  return (
    <CellContext.Provider value={{ activeCount, toggleCell }}>
      {children}
    </CellContext.Provider>
  );
};

export const useCellContext = () => useContext(CellContext);
