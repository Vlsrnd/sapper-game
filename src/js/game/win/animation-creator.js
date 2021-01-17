import { unhide } from '../../common/unhide';

export const animationCreator = (coord, speed, config) => {
  unhide(config.canvas);
  const ctx = config.canvas.getContext('2d');
  return function animation() {
    ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    config.particles.forEach((particle, i) => {
      particle.print(ctx);
      particle.x = particle.x < coord[i].x ? particle.x + speed : particle.x - speed;
      particle.y = particle.y < coord[i].y ? particle.y + speed : particle.y - speed;
    })
    config.currentAnimation = requestAnimationFrame(animation);
  }
};