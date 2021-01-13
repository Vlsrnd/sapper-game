import { pausePlay } from "./pause-play";

export const openMenu = (settings) => {
  if (!settings.currentGame.isPaused) pausePlay(settings, settings.gameAreaHeaderElements.pause);
  settings.menu.switchMenu('main');
  settings.menu.mainElement.classList.remove('hide');
  settings.gameArea.classList.add('hide');
};