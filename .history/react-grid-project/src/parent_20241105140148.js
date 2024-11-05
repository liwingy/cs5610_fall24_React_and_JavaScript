// Grid.js
import React from 'react';
import Cell from './Child';
import { GridProvider, useGridContext } from './GridContext';

const GridLayout = () => {
  const { activeCells } = useGridContext();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Active Cells: {activeCells}</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 100px)',
          gap: '10px',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    </div>
  );
};

const Grid = () => (
  <GridProvider>
    <GridLayout />
  </GridProvider>
);

export default Grid;
