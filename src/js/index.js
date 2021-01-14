'use strict';
import '../css/style.css';
import '../index.html';
import { createElements } from './game-area/create-elements';
import { createGameArea } from "./game-area/create-game-area";
import { generateMinefield } from "./game-area/generate-mine-field";
import { setSettings } from "./settings/set-settings";
import { mainSettings } from './settings/main-settings';
import { Menu } from './interface/menu';
import { addCellsToGameArea } from './game-area/add-cells-to-game-area';
import { resetSettings } from './settings/reset-settings';
import { timerInit } from './init/timer-init';
import { minesCounterInit } from './init/mines-counter-init';
import { countClosedCells } from './game/count-closed-cells';
import { loadScore } from './init/load-score';
import { onclickInit } from './init/onclick-init';
import { listenersInit } from './init/listeners-init';
import { win } from './game/win/win';
import { lose } from './game/lose';
import { winAnimationInit } from './game/win/win-animation-init';

window.mainSettings = mainSettings;
const root = document.getElementById('root');
document.addEventListener('mousedown', (event) => event.preventDefault());
document.addEventListener('contextmenu', (event) => event.preventDefault());
document.addEventListener('mouseup', (event) => event.preventDefault());

const gameStart = (row, column, minesCount, settings) => {
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

const gameInit = async (settings) => {
  settings.score = await loadScore(settings);
  settings.winFunction = win(settings);
  settings.loseFunction = lose(settings);
  settings.menu = new Menu(settings);
  root.append(settings.menu.mainElement);
  settings.gameArea = createGameArea(settings);
  root.append(settings.gameArea);
  listenersInit(settings);
  onclickInit(settings, gameStart);
};

window.addEventListener('load', () => {
  gameInit(mainSettings);
});

//Only for dev
window.count = countClosedCells;
//