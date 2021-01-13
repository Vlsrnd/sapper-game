export const loadScore = (settings) => {
  return new Promise(resolve => {
  if (!localStorage.getItem('score')) resolve(settings);
  else {
    settings.score = localStorage.getItem('score');
    resolve(settings);
  }
  });
};