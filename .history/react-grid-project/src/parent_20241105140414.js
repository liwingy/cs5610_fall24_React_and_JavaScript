import React from 'react';
import Cell from './Child';
import { CellProvider, useCellContext } from './CellContext';

const GridDisplay = () => {
  const { activeCount } = useCellContext();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Active Cells: {activeCount}</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 100px)',
        gap: '5px',
        justifyContent: 'center',
      }}>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

const Grid = () => (
  <CellProvider>
    <GridDisplay />
  </CellProvider>
);

export default Grid;
