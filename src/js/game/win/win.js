import { showAddScoreForm } from '../../interface/show-add-score-form';
import { winAnimationStart } from './win-animation-start';

export const win = (config) => () => {
  if (config.currentGame.isEnd) return;
  config.currentGame.timer.pause();
  config.currentGame.isEnd = true;
  Array.from(config.cells.values())
      .map(cell => cell.isClosed && cell.value === 'm' ? cell.open('final') : null);
  winAnimationStart(config.winAnimationSettings, () => showAddScoreForm(config, config.rootElement));
};