'use strict';
import '../css/style.css';
import '../index.html';
import { createElements } from './create-elements';
import { createGameArea } from "./create-game-area";
import { generateMinefield } from "./generate-mine-field";
import { setSettings } from "./set-settings";
import { mainSettings } from './main-settings';
import { Menu } from './interface/menu';

const root = document.getElementById('root');

const menu = new Menu(mainSettings);
root.append(menu.mainElement);

const gameInit = (row, column, minesCount, settings) => {
  setSettings(row, column, minesCount, settings);
  generateMinefield(settings);
  createElements(settings);
  root.innerHTML = '';
  root.append(createGameArea(settings));
};

menu.btn.newGame9x9.onclick = () => gameInit(9, 9, 10, mainSettings);
menu.btn.newGame16x16.onclick = () => gameInit(16, 16, 40, mainSettings);
menu.btn.newGame16x30.onclick = () => gameInit(16, 30, 99, mainSettings);

document.addEventListener('mousedown', (event) => event.preventDefault());
document.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('cell-element')) {
    mainSettings.cells.get(event.target).open();
  }
});

//Only for dev
window.menu = menu;
window.mainSettings = mainSettings;
//