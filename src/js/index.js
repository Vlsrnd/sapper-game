'use strict';
import '../css/style.css';
import '../index.html';
import { createElements } from './create-elements';
import { createGameArea } from "./create-game-area";
import { generateMinefield } from "./generate-mine-field";
import { setSettings } from "./set-settings";
import { mainSettings } from './main-settings';
import { Menu } from './interface/menu';
import { addCellsToGameArea } from './add-cells-to-game-area';

const root = document.getElementById('root');

document.addEventListener('mousedown', (event) => event.preventDefault());
document.addEventListener('contextmenu', (event) => event.preventDefault());
document.addEventListener('mouseup', (event) => event.preventDefault());

const listenersInit = () => {
  mainSettings.gameArea.addEventListener('mouseup', (event) => {
    if (!event.target.classList.contains('cell-element')) return;
    if (event.button === 0) {
      mainSettings.cells.get(event.target).open();
    } else if (event.button === 2) {
      return  
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
};

//Only for dev
window.mainSettings = mainSettings;
//