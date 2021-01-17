import { countClosedCells } from '../../common/count-closed-cells';

export const checkAmIWin = (config) => {
  countClosedCells(config);
  if (config.currentGame.closedMinesCount === config.minesCount) {
    config.winFunction();
  }
};