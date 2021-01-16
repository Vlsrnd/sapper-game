import { hide } from '../common/hide';
import { unhide } from '../common/unhide';
import { pausePlay } from '../game/pause-play';

export const openMenu = (settings) => {
  if (!settings.currentGame.isPaused) pausePlay(settings, settings.gameAreaHeaderElements.pause);
  settings.menu.switchMenu('main');
  unhide(settings.menu.mainElement);
  hide(settings.gameArea);
};