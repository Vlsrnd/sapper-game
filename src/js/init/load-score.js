export const loadScore = (settings) => {
  if (!localStorage.getItem('score')) return;
  settings.score = localStorage.getItem('score');
  return settings;
};