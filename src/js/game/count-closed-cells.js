export const countClosedCells = (settings) => {
  return Array
    .from(settings.cells.values())
    .filter(cell => cell.isClosed)
    .length;
};