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
import { pausePlay } from './game/pause-play';
import { openMenu } from './game/open-menu';
import { backToGame } from './game/back-to-game';
import { resetSettings } from './settings/reset-settings';
import { timerInit } from './init/timer-init';
import { minesCounterInit } from './init/mines-counter-init';
import { countClosedCells } from './game/count-closed-cells';

const root = document.getElementById('root');

document.addEventListener('mousedown', (event) => event.preventDefault());
document.addEventListener('contextmenu', (event) => event.preventDefault());
document.addEventListener('mouseup', (event) => event.preventDefault());

const listenersInit = () => {
  mainSettings.gameArea.addEventListener('mouseup', (event) => {
    if (!event.target.classList.contains('cell-element')) return;
    const cell = mainSettings.cells.get(event.target);
    if (event.button === 0) {
      cell.open();
    } else if (event.button === 2) {
      cell.toggleFlag();
      if (cell.isFlagged) mainSettings.currentGame.minesCounter.decrease();
      else mainSettings.currentGame.minesCounter.increase();
    }
  });
  mainSettings.gameArea.addEventListener('click', (event) => {
    const {pause, menu} = mainSettings.gameAreaHeaderElements; 
    if (event.target === pause) pausePlay(mainSettings, event.target);
    else if (event.target === menu) openMenu(mainSettings);
  });
};

const gameInit = (settings) => {
  mainSettings.menu = new Menu(mainSettings);
  root.append(mainSettings.menu.mainElement);
  settings.gameArea = createGameArea(settings);
  root.append(settings.gameArea);
  listenersInit();
};

window.addEventListener('load', () => {
  gameInit(mainSettings);
  mainSettings.menu.btn.newGame9x9.onclick = () => gameStart(9, 9, 10, mainSettings);
  mainSettings.menu.btn.newGame16x16.onclick = () => gameStart(16, 16, 40, mainSettings);
  mainSettings.menu.btn.newGame16x30.onclick = () => gameStart(16, 30, 99, mainSettings);
  mainSettings.menu.btn.backToGame.onclick = () => backToGame(mainSettings);
});

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
};

//Only for dev
window.mainSettings = mainSettings;
window.count = countClosedCells;
//