import { pausePlay } from "./pause-play";

export const openMenu = (settings) => {
  pausePlay(settings, settings.gameAreaHeaderElements.pause);
  settings.menu.switchMenu('main');
  settings.menu.mainElement.classList.remove('hide');
  settings.gameArea.classList.add('hide');
};