import { animationCreator } from './animation-creator';

export const winAnimationStart = (settings, callback) => {
  const firstPart = animationCreator(settings.firstPartCoord, 10, settings);
  const secondPart = animationCreator(settings.secondPartCoord, 50, settings);
  firstPart();
  setTimeout(() => {
    cancelAnimationFrame(settings.currentAnimation);
    secondPart();
    setTimeout(() => {
      callback();
      cancelAnimationFrame(settings.currentAnimation);
    }, 500);
  }, 2000)
};