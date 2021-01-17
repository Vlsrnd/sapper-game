import { createAddScoreForm } from './create-add-score-form';
import { findSlowestInTop } from './find-slowest-in-top';
import { addScoreToTopCreator } from '../config/score/add-score-to-top-creator';
import { hide } from '../common/hide';

export const showAddScoreForm = (config, destination) => {
  const slowestUserInTop = findSlowestInTop(config);
  if (slowestUserInTop.length > 0 && slowestUserInTop[1] < config.currentGame.timer.time) {
    hide(config.winAnimationSettings.canvas);
    openMenu(config);
    config.menu.switchMenu('top10');
    return;
  }

  const form = createAddScoreForm(config);
  destination.append(form);
  form.classList.remove('invisible');
  form.querySelector('input').focus();
  form.onsubmit = addScoreToTopCreator(config);
};