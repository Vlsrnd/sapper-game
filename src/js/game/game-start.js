import { addCellsToGameArea } from "../game-area/add-cells-to-game-area";
import { createElements } from "../game-area/create-elements";
import { generateMinefield } from "../game-area/generate-mine-field";
import { resetSettings } from "../settings/reset-settings";
import { setSettings } from "../settings/set-settings";
import { minesCounterInit } from "../game-area/mines-counter-init";
import { timerInit } from "../game-area/timer-init";
import { winAnimationInit } from './win/win-animation-init';

export const gameStart = (row, column, minesCount, settings) => {
  if (settings.currentGame.isRun) resetSettings(settings);
  setSettings(row, column, minesCount, settings);
  generateMinefield(settings);
  createElements(settings);
  addCellsToGameArea(settings);
  settings.currentGame.isRun = true;
  settings.menu.mainElement.classList.add('hide');
  settings.gameArea.classList.remove('hide');
  timerInit(settings);
  minesCounterInit(settings);
  settings.winAnimationSettings = winAnimationInit(root);
};

