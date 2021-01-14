export const lose = (settings) => () => {
  settings.currentGame.isEnd = true;
  settings.currentGame.timer.pause();
};