import { MinesCounter } from "./header/mines-counter";

export const minesCounterInit = (settings) => {
  settings.currentGame.minesCounter = new MinesCounter(settings, 
    settings.gameAreaHeaderElements.minesLeft);
  return settings;
};
