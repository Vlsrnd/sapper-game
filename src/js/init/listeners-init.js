import { pausePlay } from '../game/pause-play';
import { checkIsDoubleButtonClickCreator } from './check-is-double-button-click-creator';
import { openMenu } from '../game/open-menu';
import { checkAmIWin } from '../game/check-am-i-win';
import { mainSettings } from '../settings/main-settings';

export const listenersInit = (settings) => {
  const checkIsDoubleButtonClick = checkIsDoubleButtonClickCreator(settings);
  settings.gameArea.addEventListener('mousedown', (event) => checkIsDoubleButtonClick(event));
  settings.gameArea.addEventListener('mouseup', (event) => checkIsDoubleButtonClick(event));
  settings.gameArea.addEventListener('mouseup', (event) => {
    if (mainSettings.currentGame.isEnd) return;
    if (!event.target.classList.contains('cell-element')) return;
    const cell = settings.cells.get(event.target);
    if (event.button === 0) {
      cell.open();
    } else if (event.button === 1) {
      cell.open(true);
    } else if (event.button === 2) {
      cell.toggleFlag();
    }
    checkAmIWin(mainSettings);
  });
  settings.gameArea.addEventListener('click', (event) => {
    const {pause, menu} = settings.gameAreaHeaderElements; 
    if (event.target === pause) pausePlay(settings, event.target);
    else if (event.target === menu) openMenu(settings);
  });
};
