export const saveScore = (config) => {
  localStorage.setItem('score', JSON.stringify(config.score));
  return config;
};