import { Cell } from './cell';

export const createElements = (config) => {
  const {minefield} = config;
  for (let y = 0; y < minefield.length; y++) {
    for (let x = 0; x < minefield[y].length; x++) {
      const newCell = new Cell({y: y, x: x}, minefield[y][x], config);
      newCell.addToCollection();
    }
  }
  Array.from(config.cells.values()).map(cell => cell.findNeighbors());
};