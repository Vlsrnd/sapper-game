export class Timer {
  constructor(settings, element) {
    this.time = 0;
    this.settings = settings;
    this.element = element;
    this.timerId = null;
  }
  start = () => {
    if (this.settings.currentGame.isPaused) {
      this.settings.currentGame.isPaused = false;
      this.timerId = setTimeout(() => this.start(), 1000);
      return;
    }
    if (this.time >= 5) {
      this.pause();
      return
    }
    this.time++;
    this.updateElement();
    this.timerId = setTimeout(() => this.start(), 1000);
  }
  pause = () => {
    this.settings.currentGame.isPaused = true;
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