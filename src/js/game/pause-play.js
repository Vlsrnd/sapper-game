export const pausePlay = (settings, button) => {
  if (settings.currentGame.isPaused) {
    settings.currentGame.timer.start();
    button.classList.remove('start-icon');
    button.classList.add('pause-icon');
  } else {
    settings.currentGame.timer.pause();
    button.classList.remove('pause-icon');
    button.classList.add('start-icon');
  }
};