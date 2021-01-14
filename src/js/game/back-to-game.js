import { pausePlay } from "./pause-play";

export const backToGame = (settings) => {
  if (settings.currentGame.isPaused && !settings.currentGame.isEnd) {
    pausePlay(settings, settings.gameAreaHeaderElements.pause);
  }
  settings.menu.mainElement.classList.add('hide');
  settings.gameArea.classList.remove('hide');
};