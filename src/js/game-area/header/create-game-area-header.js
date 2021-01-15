import {createHeaderButton} from './create-header-button';

export const createGameAreaHeader = (settings) => {
  const header = document.createElement(['header']);
  header.classList.add('game-area__header');
  
  const menuElement = createHeaderButton(['menu-icon']);
  const timerElement = createHeaderButton(['timer-icon']);
    timerElement.textContent = '000';
    timerElement.setAttribute('disabled', true);
  const restartElement = createHeaderButton(['restart-element', 'smile-good']);
  const minesLeftElement = createHeaderButton(['mines-left-icon']);
    minesLeftElement.setAttribute('disabled', true);
  const pauseElement = createHeaderButton(['pause-icon']);

  header.append(menuElement, timerElement, restartElement,
    minesLeftElement, pauseElement);
  settings.gameAreaHeaderElements.menu = menuElement;
  settings.gameAreaHeaderElements.timer = timerElement;
  settings.gameAreaHeaderElements.restart = restartElement;
  settings.gameAreaHeaderElements.pause = pauseElement;
  settings.gameAreaHeaderElements.minesLeft = minesLeftElement;
  return header;
};