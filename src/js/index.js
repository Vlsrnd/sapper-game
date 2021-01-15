'use strict';
import '../css/style.css';
import '../index.html';
import { createGameArea } from "./game-area/create-game-area";
import { mainSettings } from './settings/main-settings';
import { Menu } from './interface/menu';
import { countClosedCells } from './game/count-closed-cells';
import { loadScore } from './init/load-score';
import { onclickInit } from './init/onclick-init';
import { listenersInit } from './init/listeners-init';
import { win } from './game/win/win';
import { lose } from './game/lose';
import { gameStart } from './init/game-start';

window.mainSettings = mainSettings;
const root = document.getElementById('root');
document.addEventListener('mousedown', (event) => event.preventDefault());
document.addEventListener('contextmenu', (event) => event.preventDefault());
document.addEventListener('mouseup', (event) => event.preventDefault());

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