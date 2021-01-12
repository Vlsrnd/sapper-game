export class Timer {
  constructor(element) {
    this.time = 0;
    this.timerIsRun = false;
    this.element = element;
    this.timerId = null;
  }
  start = () => {
    if (!this.timerIsRun) {
      this.timerIsRun = true;
      this.timerId = setTimeout(() => this.start(), 1000);
      return;
    }
    if (this.time >= 999) this.pause();
    this.time++;
    this.updateElement();
    this.timerId = setTimeout(() => this.start(), 1000);
  }
  pause = () => {
    this.timerIsRun = false;
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