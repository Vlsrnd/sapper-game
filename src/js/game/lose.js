export const lose = (settings) => () => {
  settings.currentGame.isEnd = true;
  settings.currentGame.timer.pause();
  settings.gameAreaHeaderElements.restart.classList.add('smile-bad');
  Array.from(settings.cells.values())
    .map(cell => cell.isClosed && cell.value === 'm' ? cell.open('final') : null);
};