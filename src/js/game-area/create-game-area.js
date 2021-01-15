import { createGameAreaHeader } from "./header/create-game-area-header";

export const createGameArea = (settings) => {
  const gameArea = document.createElement('div');
  gameArea.append(createGameAreaHeader(settings));
  const area = document.createElement('div');
  gameArea.classList.add('game-area', 'hide');
  return gameArea;
};