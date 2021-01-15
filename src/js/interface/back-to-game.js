import { hide } from "../common/hide";
import { unhide } from "../common/unhide";
import { pausePlay } from "../game/pause-play";

export const backToGame = (settings) => {
  if (settings.currentGame.isPaused && !settings.currentGame.isEnd) {
    pausePlay(settings, settings.gameAreaHeaderElements.pause);
  }
  hide(settings.menu.mainElement);
  unhide(settings.gameArea);
};