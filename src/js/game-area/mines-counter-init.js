import { MinesCounter } from './header/mines-counter';

export const minesCounterInit = (config) => {
  config.currentGame.minesCounter = new MinesCounter(config, 
    config.gameAreaHeaderElements.minesLeft);
  return config;
};
