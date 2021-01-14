export const lose = (settings) => () => {
  settings.currentGame.isEnd = true;
  settings.currentGame.timer.pause();
  Array.from(settings.cells.values())
    .map(cell => cell.isClosed && cell.value === 'm' ? cell.open(false, true) : null);
};