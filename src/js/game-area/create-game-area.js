import { createGameAreaHeader } from './header/create-game-area-header';

export const createGameArea = (config) => {
  const gameArea = document.createElement('div');
  gameArea.append(createGameAreaHeader(config));
  const area = document.createElement('div');
  gameArea.classList.add('game-area', 'hide');
  return gameArea;
};