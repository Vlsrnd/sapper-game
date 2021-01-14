import { countClosedCells } from "./count-closed-cells";

export const checkAmIWin = (settings) => {
  countClosedCells(settings);
  if (settings.currentGame.closedMinesCount === settings.minesCount) {
    settings.winFunction();
  }
};