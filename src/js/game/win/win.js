import { winAnimationStart } from './win-animation-start';

export const win = (settings) => () => {
  settings.currentGame.timer.pause();
  settings.currentGame.isEnd = true;
  Array.from(settings.cells.values())
      .map(cell => cell.isClosed && cell.value === 'm' ? cell.open(false, true) : null);
  winAnimationStart(settings.winAnimationSettings, () => alert('it is work)'));
};