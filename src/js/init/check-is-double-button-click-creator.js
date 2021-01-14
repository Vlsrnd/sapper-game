import { checkAmIWin } from "../game/check-am-i-win";

export const checkIsDoubleButtonClickCreator = (settings) => {
  let left = false, right = false;
  return (event) => {
    if (settings.currentGame.isEnd) return;
    if (event.button === 0) left = !left;
    if (event.button === 2) right = !right;
    if (left && right) settings.cells.get(event.target).open(true);
    checkAmIWin(settings);
  };
};