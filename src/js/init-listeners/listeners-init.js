import { pausePlay } from '../game/pause-play';
import { checkIsDoubleButtonClickCreator } from '../init-listeners/check-is-double-button-click-creator';
import { openMenu } from '../interface/open-menu';
import { amIWin } from '../game/win/check-am-i-win';
import { gameStart } from '../game/game-start';

export const listenersInit = (settings) => {
  const checkIsDoubleButtonClick = checkIsDoubleButtonClickCreator(settings);
  settings.gameArea.addEventListener('mousedown', (event) => checkIsDoubleButtonClick(event));
  settings.gameArea.addEventListener('mouseup', (event) => checkIsDoubleButtonClick(event));

  const onMouseupCreator = (settings) => (event) => {
    if (settings.currentGame.isEnd) return;
    if (!event.target.classList.contains('cell-element')) return;
    const cell = settings.cells.get(event.target);
    if (event.button === 0) cell.open();
    else if (event.button === 1) cell.open(true);
    else if (event.button === 2) cell.toggleFlag();
    if (amIWin(settings)) settings.winFunctions();
  };
  const onMouseup = onMouseupCreator(settings);

  settings.gameArea.addEventListener('mouseup', onMouseup);

  settings.gameArea.addEventListener('click', (event) => {
    const {pause, menu, restart} = settings.gameAreaHeaderElements; 
    if (event.target === pause) pausePlay(settings, event.target);
    else if (event.target === menu) openMenu(settings);
    else if (event.target === restart) {
      gameStart(settings.size.row, settings.size.column, settings.minesCount, settings);
    }
  });
};