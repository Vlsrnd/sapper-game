import { addCellsToGameArea } from '../game-area/add-cells-to-game-area';
import { createElements } from '../game-area/create-elements';
import { generateMinefield } from '../game-area/generate-mine-field';
import { resetConfig } from '../config/reset-config';
import { setConfig } from '../config/set-config';
import { minesCounterInit } from '../game-area/mines-counter-init';
import { timerInit } from '../game-area/timer-init';
import { winAnimationInit } from './win/win-animation-init';
import { hide } from '../common/hide';
import { unhide } from '../common/unhide';

export const gameStart = (row, column, minesCount, config) => {
  if (config.currentGame.isRun) resetConfig(config);
  config.isWideResolution ?
    setConfig(row, column, minesCount, config)
    : setConfig(column, row, minesCount, config);
  generateMinefield(config);
  createElements(config);
  addCellsToGameArea(config);
  config.currentGame.isRun = true;
  hide(config.menu.mainElement);
  unhide(config.gameArea);
  timerInit(config);
  minesCounterInit(config);
  config.winAnimationSettings = winAnimationInit(config.rootElement);
};

