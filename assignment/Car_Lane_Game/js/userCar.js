class myCar {
  constructor(x, y, ctx, image) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.image = image;
    this.currentPosition = 0;
  }
  //130
  draw() {
    this.ctx.drawImage(this.image, this.x, this.y);
  }

  move = (direction) => {
    if (direction === "left" && this.currentPosition > -1) {
      this.currentPosition -= 1;
    } else if (direction === "right" && this.currentPosition < 1) {
      this.currentPosition += 1;
    }
  };
}
