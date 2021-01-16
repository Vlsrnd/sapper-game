import { hide } from '../common/hide';
import { unhide } from '../common/unhide';

export const pausePlay = (settings, button) => {
  if (settings.currentGame.isEnd) return;
  const warShadow = settings.gameArea.querySelector('.area__war-shadow');
  if (settings.currentGame.isPaused) {
    hide(warShadow);
    settings.currentGame.timer.start();
    button.classList.add('pause-icon');
    button.classList.remove('start-icon');
  } else {
    unhide(warShadow);
    settings.currentGame.timer.pause();
    button.classList.add('start-icon');
    button.classList.remove('pause-icon');
  }
};