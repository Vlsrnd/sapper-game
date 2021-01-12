export const addCellsToGameArea = (settings) => {
  let linesCount = 0;
  while (linesCount < settings.size.row) {
    const line = document.createElement('div');
    line.classList.add('line-element');

    Array.from(settings.cells.values())
      .filter(cell => cell.y === linesCount)
      .map(cell => {
        cell.element.classList.add('cell-element');
        line.append(cell.element)
      });
    settings.gameArea.append(line);
    linesCount++;
  }
};