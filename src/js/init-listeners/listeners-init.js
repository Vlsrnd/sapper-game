import { pausePlay } from '../game/pause-play';
import { checkIsDoubleButtonClickCreator } from '../init-listeners/check-is-double-button-click-creator';
import { openMenu } from '../interface/open-menu';
import { checkAmIWin } from '../game/win/check-am-i-win';
import { gameStart } from '../game/game-start';

export const listenersInit = (config) => {
  const checkIsDoubleButtonClick = checkIsDoubleButtonClickCreator(config);
  config.gameArea.addEventListener('mousedown', (event) => checkIsDoubleButtonClick(event));
  config.gameArea.addEventListener('mouseup', (event) => checkIsDoubleButtonClick(event));

  const onMouseupCreator = (config) => (event) => {
    if (config.currentGame.isEnd) return;
    if (!event.target.classList.contains('cell-element')) return;
    const cell = config.cells.get(event.target);
    if (event.button === 0) !cell.isFlagged && cell.open();
    else if (event.button === 1) cell.open('force');
    else if (event.button === 2) cell.toggleFlag();
    checkAmIWin(config);
  };
  const onMouseup = onMouseupCreator(config);

  config.gameArea.addEventListener('mouseup', onMouseup);

  config.gameArea.addEventListener('click', (event) => {
    const {pause, menu, restart} = config.gameAreaHeaderElements; 
    if (event.target === pause) pausePlay(config, event.target);
    else if (event.target === menu) openMenu(config);
    else if (event.target === restart) {
      gameStart(config.size.row, config.size.column, config.minesCount, config);
    }
  });
};