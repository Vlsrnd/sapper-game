import { checkAmIWin } from '../game/win/check-am-i-win';

export const checkIsDoubleButtonClickCreator = (config) => {
  return (event) => {
    const mouseButtonDown = config.mouseButtonDown;
    if (!event.target.classList.contains('cell-element')) return;
    if (config.currentGame.isEnd) return;
    if (event.button === 0) mouseButtonDown.left = event.type === 'mousedown' ? true : false;
    if (event.button === 2) mouseButtonDown.right = event.type === 'mousedown' ? true : false;
    if (mouseButtonDown.left && mouseButtonDown.right) config.cells.get(event.target).open('force');
    checkAmIWin(config);
  };
};