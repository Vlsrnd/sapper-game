import { unhide } from "../../common/unhide";

export const animationCreator = (coord, speed, settings) => {
  unhide(settings.canvas);
  const ctx = settings.canvas.getContext('2d');
  return function animation() {
    ctx.clearRect(0, 0, settings.canvas.width, settings.canvas.height);
    settings.particles.forEach((particle, i) => {
      particle.print(ctx);
      particle.x = particle.x < coord[i].x ? particle.x + speed : particle.x - speed;
      particle.y = particle.y < coord[i].y ? particle.y + speed : particle.y - speed;
    })
    settings.currentAnimation = requestAnimationFrame(animation);
  }
};