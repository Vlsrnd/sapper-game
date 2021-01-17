import { saveScore } from './save-score';
import { openMenu } from '../../interface/open-menu';
import { hide } from '../../common/hide';

export const addScoreToTopCreator = (config) => (event) => {
  event.preventDefault();
  const name = event.target.querySelector('input').value || 'Unknown hero';
  const {row, column} = config.size;
  const top = config.isWideResolution ?
    config.score[`top${row}x${column}`]
    : config.score[`top${column}x${row}`];
  top.pop();
  top.push([name, config.currentGame.timer.time]);
  const sorted = top
    .filter(gamer => gamer[0])
    .sort((a, b) => a[1] - b[1]);;
  top.length = 0;
  sorted.forEach(gamer => top.push(gamer));
  while (top.length < 10) top.push([]);
  saveScore(config);
  config.menu.top10Structure = config.menu.createTop10Element();
  config.menu.structure.top10[0] = config.menu.top10Structure;
  hide(event.target);
  hide(config.winAnimationSettings.canvas);
  openMenu(config);
  config.menu.switchMenu('top10');
};