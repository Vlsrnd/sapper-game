import { Timer } from './header/timer';

export const timerInit = (config) => {
  config.currentGame.timer = new Timer(config, 
    config.gameAreaHeaderElements.timer);
  config.currentGame.timer.start();
  return config;
};