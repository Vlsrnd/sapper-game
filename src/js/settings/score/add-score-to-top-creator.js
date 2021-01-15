import { saveScore } from './save-score';
import { openMenu } from '../../interface/open-menu';
import { hide } from '../../common/hide';

export const addScoreToTopCreator = (settings) => (event) => {
  event.preventDefault();
  const name = event.target.querySelector('input').value || 'Unknown hero';
  const {row, column} = settings.size;
  const top = settings.score[`top${row}x${column}`];
  top.pop();
  top.push([name, settings.currentGame.timer.time]);
  const sorted = top
    .filter(gamer => gamer[0])
    .sort((a, b) => a[1] - b[1]);;
  top.length = 0;
  sorted.forEach(gamer => top.push(gamer));
  while (top.length < 10) top.push([]);
  saveScore(settings);
  settings.menu.top10Structure = settings.menu.createTop10Element();
  settings.menu.structure.top10[0] = settings.menu.top10Structure;
  hide(event.target);
  hide(settings.winAnimationSettings.canvas);
  openMenu(settings);
  settings.menu.switchMenu('top10');
};