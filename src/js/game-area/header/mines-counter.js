export class MinesCounter {
  constructor(settings, element) {
    this.win = settings.winFunction;
    this.count = settings.minesCount;
    this.element = element;
    this.updateElement();
  }
  decrease = () => {
    this.count--;
    if (this.count <= 0) this.win();
    this.updateElement();
  }
  increas = () => {
    this.count++;
    this.updateElement();
  }
  updateElement = () => {
    this.element.textContent = this.count;
  }
}