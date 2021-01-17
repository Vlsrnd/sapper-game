export const isWideResolutionQuery = (callback) => {
  const media = window.matchMedia('(min-width: 928px');
  media.addListener(callback);
  return media.matches;
};