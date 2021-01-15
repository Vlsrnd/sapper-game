import { createAddScoreForm } from './create-add-score-form';
import { findSlowestInTop } from './find-slowest-in-top';
import { addScoreToTopCreator } from '../settings/score/add-score-to-top-creator';
import { hide } from '../common/hide';

export const showAddScoreForm = (settings, destination) => {
  const slowestUserInTop = findSlowestInTop(settings);
  if (slowestUserInTop.length > 0 && slowestUserInTop[1] < settings.currentGame.timer.time) {
    hide(settings.winAnimationSettings.canvas);
    openMenu(settings);
    settings.menu.switchMenu('top10');
    return;
  }

  const form = createAddScoreForm(settings);
  destination.append(form);
  form.style.top = destination.clientHeight / 2 - form.clientHeight / 2 + 'px';
  form.style.left = destination.clientWidth / 2 - form.clientWidth / 2 + 'px';
  form.classList.remove('invisible');
  form.querySelector('input').focus();
  form.onsubmit = addScoreToTopCreator(settings);
};