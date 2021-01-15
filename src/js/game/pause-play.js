export const pausePlay = (settings, button) => {
  if (settings.currentGame.isEnd) return;
  if (settings.currentGame.isPaused) {
    settings.currentGame.timer.start();
    button.classList.add('pause-icon');
    button.classList.remove('start-icon');
  } else {
    settings.currentGame.timer.pause();
    button.classList.add('start-icon');
    button.classList.remove('pause-icon');
  }
};