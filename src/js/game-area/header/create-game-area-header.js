import {createHeaderButton} from './create-header-button';

export const createGameAreaHeader = (settings) => {
  const header = document.createElement('header');
  header.classList.add('game-area__header');
  const menuElement = createHeaderButton();
  menuElement.classList.add('menu-icon');
  const timerElement = createHeaderButton();
  timerElement.classList.add('timer-icon');
  timerElement.textContent = '000';
  const pauseElement = createHeaderButton();
  pauseElement.classList.add('pause-icon');
  const minesLeftElement = createHeaderButton();
  minesLeftElement.classList.add('mines-left-icon');
  header.append(menuElement, timerElement, pauseElement, minesLeftElement);
  settings.gameAreaHeaderElements.menu = menuElement;
  settings.gameAreaHeaderElements.timer = timerElement;
  settings.gameAreaHeaderElements.pause = pauseElement;
  settings.gameAreaHeaderElements.minesLeft = minesLeftElement;
  return header;
};