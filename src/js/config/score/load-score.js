export const loadScore = async (config) => {
  if (!localStorage.getItem('score')) return config.score;
  const score = await JSON.parse(localStorage.getItem('score'));
  return score;
};