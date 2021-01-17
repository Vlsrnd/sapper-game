export const toggleIsWideResolutionConfigCreator = (config) => (event) => {
  config.isWideResolution = event.matches;
};