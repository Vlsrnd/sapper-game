export const createGameArea = (settings) => {
  const gameArea = document.createElement('div');
  gameArea.classList.add('game-area');
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
    gameArea.append(line);
    linesCount++;
  }
  return gameArea;
};