export class MinesCounter {
  constructor(settings, element) {
    this.win = settings.winFunction;
    this.count = settings.minesCount;
    this.element = element;
    this.updateElement();
  }
  decrease = () => {
    this.count--;
    this.updateElement();
  }
  increase = () => {
    this.count++;
    this.updateElement();
  }
  updateElement = () => {
    this.element.textContent = this.count;
  }
}