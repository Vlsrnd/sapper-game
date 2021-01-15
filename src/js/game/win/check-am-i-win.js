import { countClosedCells } from "../../common/count-closed-cells";

export const amIWin = (settings) => {
  countClosedCells(settings);
  return (settings.currentGame.closedMinesCount === settings.minesCount);
};