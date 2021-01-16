'use strict';
import '../css/style.css';
import '../index.html';
import { mainSettings } from './settings/main-settings';
import { createGameArea } from './game-area/create-game-area';
import { Menu } from './interface/menu';
import { loadScore } from './settings/score/load-score';
import { listenersInit } from './init-listeners/listeners-init';
import { onclickInit } from './init-listeners/onclick-init';
import { win } from './game/win/win';
import { lose } from './game/lose';
import { gameStart } from './game/game-start';
import { isWideResolutionQuery } from './settings/is-wide-resolution-query';
import { toggleIsWideResolutionSettingCreator } from './settings/toggle-is-wide-resolution-setting-creator';

const gameInit = async (settings) => {
  isWideResolutionQuery(toggleIsWideResolutionSettingCreator(settings))
  settings.rootElement = document.getElementById('root');
  settings.score = await loadScore(settings);
  settings.winFunction = win(settings);
  settings.loseFunction = lose(settings);
  settings.menu = new Menu(settings);
  settings.rootElement.append(settings.menu.mainElement);
  settings.gameArea = createGameArea(settings);
  settings.rootElement.append(settings.gameArea);
  listenersInit(settings);
  onclickInit(settings, gameStart);
};

document.addEventListener('mousedown', (event) => event.preventDefault());
document.addEventListener('contextmenu', (event) => event.preventDefault());
document.addEventListener('mouseup', (event) => event.preventDefault());

window.addEventListener('load', () => gameInit(mainSettings));

window.mainSettings = mainSettings;