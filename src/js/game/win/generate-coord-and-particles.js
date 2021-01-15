import { Particle } from "./particle";
import { random } from '../../common/random';

export const generateCoordAndParticles = (canvas, word, density, w, h) => {
  const ctx = canvas.getContext('2d');
  const result = {
    canvas: canvas,
    firstPartCoord: [],
    secondPartCoord: [],
    particles: [],
    leftOrRight: [-100, w + 100],
    currentAnimation: null,
  };
  ctx.fillStyle = 'red';
  ctx.font = '30vh bold monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(word, w / 2, h / 2, w);
  let pixel = ctx.getImageData(0, 0, w, h);
  for (let i = 0; i < h; i += density) {
    for (let j = 0; j < w; j += density) {
      if (
        pixel.data[((j + (i * w)) * 4) + 0] > 0 ||
        pixel.data[((j + (i * w)) * 4) + 1] > 0 ||
        pixel.data[((j + (i * w)) * 4) + 2] > 0 ||
        pixel.data[((j + (i * w)) * 4) + 3] > 0) {
        result.firstPartCoord.push({x: j, y: i});
        result.secondPartCoord.push({x: result.leftOrRight[random(0,2)], y: random(-100, h + 100)});
        result.particles.push(new Particle(w, h));
      }
    }
  }
  return result;
};