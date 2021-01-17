export const addCellsToGameArea = (config) => {
  let linesCount = 0;
  const newArea = document.createElement('div');
  newArea.classList.add('area');
  const warShadow = document.createElement('div');
  warShadow.classList.add('area__war-shadow', 'hide');
  newArea.append(warShadow);
  while (linesCount < config.size.row) {
    const line = document.createElement('div');
    line.classList.add('line-element');

    Array.from(config.cells.values())
      .filter(cell => cell.y === linesCount)
      .map(cell => {
        cell.element.classList.add('cell-element');
        line.append(cell.element)
      });
      newArea.append(line);
      linesCount++;
    }
  config.gameArea.querySelector('.area') && config.gameArea.querySelector('.area').remove();
  config.gameArea.append(newArea);
};