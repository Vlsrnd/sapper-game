const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

export class Particle {
  constructor(w, h) {
    this.x = random(-100, w + 100);
    this.y = random(-100, h + 100);
  }
  print(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'hsla(' + random(0, 360) + ', 100%, 80%, 1';
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
};