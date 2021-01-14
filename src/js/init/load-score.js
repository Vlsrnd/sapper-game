export const loadScore = async (settings) => {
  if (!localStorage.getItem('score')) return settings.score;
  const score = await JSON.parse(localStorage.getItem('score'));
  return score;
};