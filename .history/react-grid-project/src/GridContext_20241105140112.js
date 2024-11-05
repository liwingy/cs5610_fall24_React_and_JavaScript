// GridContext.js
import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [activeCells, setActiveCells] = useState(0);

  const updateActiveCells = (isActive) => {
    setActiveCells((count) => (isActive ? count + 1 : count - 1));
  };

  return (
    <GridContext.Provider value={{ activeCells, updateActiveCells }}>
      {children}
    </GridContext.Provider>
  );
};

// Custom hook for accessing the grid context
export const useGridContext = () => useContext(GridContext);
