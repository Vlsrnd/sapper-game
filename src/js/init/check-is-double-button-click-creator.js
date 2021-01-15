import { checkAmIWin } from "../game/check-am-i-win";

export const checkIsDoubleButtonClickCreator = (settings) => {
  return (event) => {
    const mouseButtonDown = settings.mouseButtonDown;
    if (!event.target.classList.contains('cell-element')) return;
    if (settings.currentGame.isEnd) return;
    if (event.button === 0) mouseButtonDown.left = event.type === 'mousedown' ? true : false;
    if (event.button === 2) mouseButtonDown.right = event.type === 'mousedown' ? true : false;
    if (mouseButtonDown.left && mouseButtonDown.right) settings.cells.get(event.target).open(true);
    checkAmIWin(settings);
  };
};