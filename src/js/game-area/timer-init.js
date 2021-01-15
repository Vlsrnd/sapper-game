import { Timer } from "./header/timer";

export const timerInit = (settings) => {
  settings.currentGame.timer = new Timer(settings, 
    settings.gameAreaHeaderElements.timer);
  settings.currentGame.timer.start();
  return settings;
};