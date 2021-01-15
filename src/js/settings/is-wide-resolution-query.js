export const isWideResolutionQuery = (callback) => {
  const media = window.matchMedia('(min-width: 599px');
  media.addListener(callback);
  return media.matches;
};