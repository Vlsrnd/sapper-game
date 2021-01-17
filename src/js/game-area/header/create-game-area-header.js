import {createHeaderButton} from './create-header-button';

export const createGameAreaHeader = (config) => {
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
  config.gameAreaHeaderElements.menu = menuElement;
  config.gameAreaHeaderElements.timer = timerElement;
  config.gameAreaHeaderElements.restart = restartElement;
  config.gameAreaHeaderElements.pause = pauseElement;
  config.gameAreaHeaderElements.minesLeft = minesLeftElement;
  return header;
};