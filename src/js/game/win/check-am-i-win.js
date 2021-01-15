import { countClosedCells } from "../../common/count-closed-cells";

export const checkAmIWin = (settings) => {
  countClosedCells(settings);
  return (settings.currentGame.closedMinesCount === settings.minesCount);
};