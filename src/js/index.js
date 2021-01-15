'use strict';
import '../css/style.css';
import '../index.html';
import { mainSettings } from './settings/main-settings';
import { createGameArea } from "./game-area/create-game-area";
import { Menu } from './interface/menu';
import { loadScore } from './settings/score/load-score';
import { listenersInit } from './init-listeners/listeners-init';
import { onclickInit } from './init-listeners/onclick-init';
import { win } from './game/win/win';
import { lose } from './game/lose';
import { gameStart } from './game/game-start';

const root = document.getElementById('root');

window.mainSettings = mainSettings;
window.root = root;

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

window.addEventListener('load', () => gameInit(mainSettings));