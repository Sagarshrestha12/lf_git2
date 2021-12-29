class MyCar {
  constructor(x, y, ctx, image) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.image = image;
    this.currentPosition = 0;
    this.laneDiff = 135;
    this.height = 100;
    this.width = 100;
  }
  //130
  fun() {
    console.log("fdkj");
  }
  draw() {
    // this.image = img;
    this.ctx.drawImage(this.image, this.x, this.y);
  }

  bottom = () => {
    return this.y + this.height;
  };

  left = () => {
    return this.x;
  };

  right = () => {
    return this.x + this.width;
  };

  top = () => {
    return this.y;
  };

  move = (direction) => {
    if (direction === "left" && this.currentPosition > -1) {
      this.currentPosition -= 1;
      this.x = this.x - this.laneDiff;
    } else if (direction === "right" && this.currentPosition < 1) {
      this.currentPosition += 1;
      this.x = this.x + this.laneDiff;
    }
  };

  checkCollision = (obstacle) => {
    if (
      this.top > obstacle.bottom ||
      this.right < obstacle.left ||
      this.bottom < obstacle.top ||
      this.left > obstacle.right
    ) {
      return false;
    }
    return true;
  };
}
function drawcar(x, y, image, ctx) {
  ctx.drawImage(image, x, y);
}
