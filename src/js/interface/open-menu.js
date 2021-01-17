import { hide } from '../common/hide';
import { unhide } from '../common/unhide';
import { pausePlay } from '../game/pause-play';

export const openMenu = (config) => {
  if (!config.currentGame.isPaused) pausePlay(config, config.gameAreaHeaderElements.pause);
  config.menu.switchMenu('main');
  unhide(config.menu.mainElement);
  hide(config.gameArea);
};