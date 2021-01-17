import { pausePlay } from '../game/pause-play';

export const resetConfig = (config) => {
  if (!config.currentGame.isPaused) pausePlay(config, config.gameAreaHeaderElements.pause);
  config.gameAreaHeaderElements.pause.classList.add('pause-icon');
  config.gameAreaHeaderElements.pause.classList.remove('start-icon');
  config.minefield = null;
  config.cells.clear();
  config.currentGame.isRun = false;
  config.currentGame.isEnd = false
  config.currentGame.isPaused = true;
  config.currentGame.timer = null;
  config.currentGame.minesCounter = null;
  config.currentGame.closedMinesCount = null;
  config.gameAreaHeaderElements.timer.textContent = '000';
  config.winAnimationStart = null;
  config.mouseButtonDown.left = false;
  config.mouseButtonDown.right = false;
  config.gameAreaHeaderElements.restart.classList.remove('smile-bad');
};