import { hide } from '../common/hide';
import { unhide } from '../common/unhide';

export const pausePlay = (config, button) => {
  if (config.currentGame.isEnd) return;
  const warShadow = config.gameArea.querySelector('.area__war-shadow');
  if (config.currentGame.isPaused) {
    hide(warShadow);
    config.currentGame.timer.start();
    button.classList.add('pause-icon');
    button.classList.remove('start-icon');
  } else {
    unhide(warShadow);
    config.currentGame.timer.pause();
    button.classList.add('start-icon');
    button.classList.remove('pause-icon');
  }
};