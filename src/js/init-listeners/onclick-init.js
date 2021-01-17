import { backToGame } from '../interface/back-to-game';

export const onclickInit = (config, gameStart) => {
  config.menu.btn.newGame9x9.onclick = () => gameStart(9, 9, 10, config);
  config.menu.btn.newGame16x16.onclick = () => gameStart(16, 16, 40, config);
  config.menu.btn.newGame16x30.onclick = () => gameStart(16, 30, 99, config);
  config.menu.btn.backToGame.onclick = () => backToGame(config);
};