export const countClosedCells = (config) => {
  config.currentGame.closedMinesCount = Array
    .from(config.cells.values())
    .filter(cell => cell.isClosed)
    .length;
  return config;
};