class Bird {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.gravity = 9.8;
    this.ctx = ctx;
    this.image = image;
    this.upForce = 3;
  }
  movedown() {
    this.y = this.y - this.gravity;
  }
  moveup() {
    this.y = this.y + this.upForce;
  }
  draw() {
    switch (key) {
      case value:
        this.drawFly(this.image[0]);
        break;
      case value:
        this.drawFly(this.image[1]);
        break;
      case value:
        this.drawFly(this.image[2]);
        break;
      case value:
        this.drawFly(this.image[3]);
        break;
      default:
        this.drawFly(this.image[4]);
        break;
    }
  }
  drawFly(img) {
    this.ctx.drawImage(this.img, this.x, this.y);
  }
}
