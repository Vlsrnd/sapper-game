export class MinesCounter {
  constructor(settings, element) {
    this.win = settings.winFunction;
    this.count = settings.minesCount;
    this.element = element;
  }
  decrease = () => {
    this.count--;
    if (this.count <= 0) this.win();
  }
  increas = () => {
    this.count++;
  }
  updateElement = () => {
    this.element.textContent = this.count;
  }
}