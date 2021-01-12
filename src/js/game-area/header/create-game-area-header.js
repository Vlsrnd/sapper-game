import {createHeaderButton} from './create-header-button';

export const createGameAreaHeader = (settings) => {
  const header = document.createElement('header');
  header.classList.add('game-area__header');
  const menuElement = createHeaderButton();
  const timerElement = createHeaderButton();
  const pauseElement = createHeaderButton();
  const minesLeftElement = createHeaderButton();
  header.append(menuElement, timerElement, pauseElement, minesLeftElement);
  settings.gameAreaHeaderElements.menu = menuElement;
  settings.gameAreaHeaderElements.timer = timerElement;
  settings.gameAreaHeaderElements.pause = pauseElement;
  settings.gameAreaHeaderElements.minesLeft = minesLeftElement;
  return header;
};