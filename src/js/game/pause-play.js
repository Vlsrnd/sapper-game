export const pausePlay = (settings, button) => {
  if (settings.currentGame.isEnd) return;
  if (settings.currentGame.isPaused) {
    settings.gameArea.querySelector('.area__war-shadow').classList.add('hide');
    settings.currentGame.timer.start();
    button.classList.add('pause-icon');
    button.classList.remove('start-icon');
  } else {
    settings.gameArea.querySelector('.area__war-shadow').classList.remove('hide');
    settings.currentGame.timer.pause();
    button.classList.add('start-icon');
    button.classList.remove('pause-icon');
  }
};