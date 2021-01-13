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
import { Timer } from './game-area/header/timer';
import { MinesCounter } from './game-area/header/mines-counter';
import { pausePlay } from './game/pause-play';

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
    if (event.target === mainSettings.gameAreaHeaderElements.pause) {
      pausePlay(mainSettings, event.target);
    } else if (event.target === mainSettings.gameAreaHeaderElements.menu) {
      alert('menu is open');
    }
  });
};

const gameInit = (settings) => {
  mainSettings.menu = new Menu(mainSettings);
  root.append(mainSettings.menu.mainElement);
  settings.gameArea = createGameArea(settings);
  root.append(settings.gameArea);
  listenersInit();
};

const timerInit = (settings) => {
  settings.currentGame.timer = new Timer(settings, 
    settings.gameAreaHeaderElements.timer);
  settings.currentGame.timer.start();
  return settings;
};

const minesCounterInit = (settings) => {
  settings.currentGame.minesCounter = new MinesCounter(settings, 
    settings.gameAreaHeaderElements.minesLeft);
  return settings;
};


window.addEventListener('load', () => {
  gameInit(mainSettings);
  mainSettings.menu.btn.newGame9x9.onclick = () => gameStart(9, 9, 10, mainSettings);
  mainSettings.menu.btn.newGame16x16.onclick = () => gameStart(16, 16, 40, mainSettings);
  mainSettings.menu.btn.newGame16x30.onclick = () => gameStart(16, 30, 99, mainSettings);
});

const gameStart = (row, column, minesCount, settings) => {
  setSettings(row, column, minesCount, settings);
  generateMinefield(settings);
  createElements(settings);
  addCellsToGameArea(settings);
  settings.menu.mainElement.classList.add('hide');
  settings.gameArea.classList.remove('hide');
  timerInit(settings);
  minesCounterInit(settings, );
};

//Only for dev
window.mainSettings = mainSettings;
//