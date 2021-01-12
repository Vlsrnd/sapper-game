import {createHeaderButton} from './create-header-button';

export const createGameAreaHeader = (settings) => {
  const header = document.createElement('header');
  header.classList.add('game-area__header');
  const menuElement = createHeaderButton();
  const timerElement = createHeaderButton();
  const pauseElement = createHeaderButton();
  const minesLeftElement = createHeaderButton();
  header.append(menuElement, timerElement, pauseElement, minesLeftElement);
  settings.gameAreaHeaderElement.menu = menuElement;
  settings.gameAreaHeaderElement.timer = timerElement;
  settings.gameAreaHeaderElement.pause = pauseElement;
  settings.gameAreaHeaderElement.minesLeft = minesLeftElement;
  return header;
};