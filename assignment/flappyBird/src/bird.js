class Bird {
  constructor(x, y, image, ctx) {
    this.x = x;
    this.y = y;
    this.gravity = 1;
    this.ctx = ctx;
    this.image = image;
    this.upForce = 1;
  }
  movedown() {
    this.y = this.y + this.gravity;
  }
  moveup() {
    this.y = this.y - this.upForce;
  }
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y);
  }
  wallCollision() {
    if (this.y > 500 || this.y < 0) {
      return true;
    }
  }
}
