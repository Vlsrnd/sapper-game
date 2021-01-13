export const saveScore = (settings) => {
  localStorage.setItem('score', JSON.stringify(settings.score));
  return settings;
};