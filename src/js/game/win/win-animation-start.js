import { animationCreator } from './animation-creator';

export const winAnimationStart = (config, callback) => {
  const firstPart = animationCreator(config.firstPartCoord, 10, config);
  const secondPart = animationCreator(config.secondPartCoord, 50, config);
  firstPart();
  setTimeout(() => {
    cancelAnimationFrame(config.currentAnimation);
    secondPart();
    setTimeout(() => {
      callback();
      cancelAnimationFrame(config.currentAnimation);
    }, 500);
  }, 2000)
};