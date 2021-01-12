export const createGameArea = (settings) => {
  const gameArea = document.createElement('div');
  gameArea.classList.add('game-area', 'hide');
  return gameArea;
};