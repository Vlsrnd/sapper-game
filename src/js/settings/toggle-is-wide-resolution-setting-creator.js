export const toggleIsWideResolutionSettingCreator = (settings) => (event) => {
  settings.isWideResolution = event.matches;
};