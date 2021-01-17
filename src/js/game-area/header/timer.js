export class Timer {
  constructor(config, element) {
    this.time = 0;
    this.config = config;
    this.element = element;
    this.timerId = null;
  }
  start = () => {
    if (this.config.currentGame.isPaused) {
      this.config.currentGame.isPaused = false;
      this.timerId = setTimeout(() => this.start(), 1000);
      return;
    }
    if (this.time >= 999) {
      this.pause();
      return
    }
    this.time++;
    this.updateElement();
    this.timerId = setTimeout(() => this.start(), 1000);
  }
  pause = () => {
    this.config.currentGame.isPaused = true;
    clearTimeout(this.timerId);
  }
  updateElement = () => {
    this.element.textContent = this.time < 10 
      ? '00' + this.time
      : this.time < 100 
      ? '0' + this.time
      : this.time;
  }
};