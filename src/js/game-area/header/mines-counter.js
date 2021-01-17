export class MinesCounter {
  constructor(config, element) {
    this.win = config.winFunction;
    this.count = config.minesCount;
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