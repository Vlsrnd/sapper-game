export const loadScore = async (settings) => {
  if (!localStorage.get('score')) return;
  settings.score = await localStorage.get('score');
  return settings;
};