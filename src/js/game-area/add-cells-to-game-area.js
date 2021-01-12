export const addCellsToGameArea = (settings) => {
  let linesCount = 0;
  const newArea = document.createElement('div');
  newArea.classList.add('area');
  while (linesCount < settings.size.row) {
    const line = document.createElement('div');
    line.classList.add('line-element');

    Array.from(settings.cells.values())
      .filter(cell => cell.y === linesCount)
      .map(cell => {
        cell.element.classList.add('cell-element');
        line.append(cell.element)
      });
      newArea.append(line);
      linesCount++;
    }
  settings.gameArea.querySelector('.area').remove();
  settings.gameArea.append(newArea);
};