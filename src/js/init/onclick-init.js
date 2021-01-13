import { backToGame } from "../game/back-to-game";

export const onclickInit = (settings, gameStart) => {
  settings.menu.btn.newGame9x9.onclick = () => gameStart(9, 9, 10, settings);
  settings.menu.btn.newGame16x16.onclick = () => gameStart(16, 16, 40, settings);
  settings.menu.btn.newGame16x30.onclick = () => gameStart(16, 30, 99, settings);
  settings.menu.btn.backToGame.onclick = () => backToGame(settings);
};