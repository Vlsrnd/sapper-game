export class Cell {
  constructor(position, value, settings) {
    this.x = position.x;
    this.y = position.y;
    this.value = value;
    this.cellsCollection = settings.cells;
    this.neighbors = [];
    this.element = this.create();
    this.isClosed = true;
    this.isFlagged = false;
    this.mainSettings = settings;
  }
  create = () => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell-element');
    return cellElement;
  }
  addToCollection = () => {
    this.cellsCollection.set(this.element, this);
  }
  append = (destination) => {
    destination.append(this.element);
  }
  findNeighbors = () => {
    this.neighbors = Array.from(this.cellsCollection.values())
      .filter(cell => {
        return (
          cell.y === this.y - 1 && cell.x === this.x - 1 
          || cell.y === this.y - 1 && cell.x === this.x 
          || cell.y === this.y - 1 && cell.x === this.x + 1
          || cell.y === this.y && cell.x === this.x - 1
          || cell.y === this.y && cell.x === this.x + 1
          || cell.y === this.y + 1 && cell.x === this.x - 1
          || cell.y === this.y + 1 && cell.x === this.x
          || cell.y === this.y + 1 && cell.x === this.x + 1
        )
      })
  }
  open = (force, end) => {
    if (!this.isClosed && force) {
      this.neighbors
        .filter(cell => cell.isClosed)
        .filter(cell => !cell.isFlagged)
        .forEach(cell => cell.open());
    }
    if (!this.isClosed) return;
    if (this.isFlagged) this.toggleFlag();
    this.isClosed = false;
    if (this.value === 'm') {
      if (end) {
        this.element.classList.add('cell-mine');
        return;
      }
      this.element.classList.add('cell-boom');
      this.mainSettings.loseFunction();
    } else if (this.value === 0) {
      this.element.classList.add('cell-empty');
      this.neighbors.forEach(cell => {
        const neighbor = this.cellsCollection.get(cell.element);
        if (neighbor.isClosed) neighbor.open();
      })
    }
    else {
      this.element.textContent = this.value;
      this.element.classList.add('cell-num');
      this.element.style.color = this.mainSettings.colors[this.value];
    }
  }
  toggleFlag = () => {
    if (!this.isClosed) return;
    if (this.isFlagged) {
      this.isFlagged = false;
      this.mainSettings.currentGame.minesCounter.increase();
    } else {
      this.isFlagged = true;
      this.mainSettings.currentGame.minesCounter.decrease();
    }
    this.element.classList.toggle('cell-flag');
  }
};
