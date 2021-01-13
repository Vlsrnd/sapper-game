export const saveScore = (settings) => {
  localStorage.set('score', JSON.stringify(settings.score));
  return settings;
};