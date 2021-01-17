'use strict';
import '../css/style.css';
import '../index.html';
import { mainConfig } from './config/main-config';
import { createGameArea } from './game-area/create-game-area';
import { Menu } from './interface/menu';
import { loadScore } from './config/score/load-score';
import { listenersInit } from './init-listeners/listeners-init';
import { onclickInit } from './init-listeners/onclick-init';
import { win } from './game/win/win';
import { lose } from './game/lose';
import { gameStart } from './game/game-start';
import { isWideResolutionQuery } from './config/is-wide-resolution-query';
import { toggleIsWideResolutionConfigCreator } from './config/toggle-is-wide-resolution-config-creator';

const gameInit = async (config) => {
  isWideResolutionQuery(toggleIsWideResolutionConfigCreator(config))
  config.rootElement = document.getElementById('root');
  config.score = await loadScore(config);
  config.winFunction = win(config);
  config.loseFunction = lose(config);
  config.menu = new Menu(config);
  config.rootElement.append(config.menu.mainElement);
  config.gameArea = createGameArea(config);
  config.rootElement.append(config.gameArea);
  listenersInit(config);
  onclickInit(config, gameStart);
};

document.addEventListener('mousedown', (event) => event.preventDefault());
document.addEventListener('contextmenu', (event) => event.preventDefault());
document.addEventListener('mouseup', (event) => event.preventDefault());

window.addEventListener('load', () => gameInit(mainConfig));