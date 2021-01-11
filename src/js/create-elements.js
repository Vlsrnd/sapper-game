import { Cell } from './cell';

export const createElements = (settings) => {
  const {minefield} = settings;
  for (let y = 0; y < minefield.length; y++) {
    for (let x = 0; x < minefield[y].length; x++) {
      const newCell = new Cell({y: y, x: x}, minefield[y][x], settings);
      newCell.addToCollection();
    }
  }
  Array.from(settings.cells.values()).map(cell => cell.findNeighbors());
};