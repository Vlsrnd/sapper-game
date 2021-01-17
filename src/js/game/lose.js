export const lose = (config) => () => {
  config.currentGame.isEnd = true;
  config.currentGame.timer.pause();
  config.gameAreaHeaderElements.restart.classList.add('smile-bad');
  Array.from(config.cells.values())
    .map(cell => cell.isClosed && cell.value === 'm' ? cell.open('final') : null);
};