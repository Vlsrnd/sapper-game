export const resetSettings = (settings) => {
  settings.minefield = null;
  settings.cells.clear();
  settings.currentGame.isRun = false;
  settings.currentGame.isEnd = false
  settings.currentGame.isPaused = true;
  settings.currentGame.timer = null;
  settings.currentGame.minesCounter = null;
  settings.currentGame.closedMinesCount = null;
};