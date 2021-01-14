import { generateCoordAndParticles } from './generate-coord-and-particles';

export const winAnimationInit = (destination) => {
  const w = destination.clientWidth;
  const h = destination.clientHeight;
  const canvas = document.createElement('canvas');
  canvas.setAttribute('height', h);
  canvas.setAttribute('width', w);
  canvas.classList.add('win-animation-canvas');
  destination.append(canvas);
  const animationSettings = generateCoordAndParticles(canvas, 'WIN', 3, w, h);
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
  return animationSettings;
};
