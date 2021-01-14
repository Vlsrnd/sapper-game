export const countClosedCells = (settings) => {
  settings.currentGame.closedMinesCount = Array
    .from(settings.cells.values())
    .filter(cell => cell.isClosed)
    .length;
  return settings;
};