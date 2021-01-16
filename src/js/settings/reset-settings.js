import { pausePlay } from '../game/pause-play';

export const resetSettings = (settings) => {
  if (!settings.currentGame.isPaused) pausePlay(settings, settings.gameAreaHeaderElements.pause);
  settings.gameAreaHeaderElements.pause.classList.add('pause-icon');
  settings.gameAreaHeaderElements.pause.classList.remove('start-icon');
  settings.minefield = null;
  settings.cells.clear();
  settings.currentGame.isRun = false;
  settings.currentGame.isEnd = false
  settings.currentGame.isPaused = true;
  settings.currentGame.timer = null;
  settings.currentGame.minesCounter = null;
  settings.currentGame.closedMinesCount = null;
  settings.gameAreaHeaderElements.timer.textContent = '000';
  settings.winAnimationStart = null;
  settings.mouseButtonDown.left = false;
  settings.mouseButtonDown.right = false;
  settings.gameAreaHeaderElements.restart.classList.remove('smile-bad');
};