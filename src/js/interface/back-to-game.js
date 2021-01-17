import { hide } from '../common/hide';
import { unhide } from '../common/unhide';
import { pausePlay } from '../game/pause-play';

export const backToGame = (config) => {
  let {isPaused, isEnd} = config.currentGame;
  if (isPaused && !isEnd) pausePlay(config, config.gameAreaHeaderElements.pause);
  hide(config.menu.mainElement);
  unhide(config.gameArea);
};