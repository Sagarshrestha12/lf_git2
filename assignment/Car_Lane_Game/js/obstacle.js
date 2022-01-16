class Obstacle extends MyCar {
  constructor() {
    super();
    this.x = position[generateRandomNumber(1, 3) - 1];
    this.y = 0;
    this.speed = 2;
    this.IsOverFlow = this.y < canvas.height;
  }

  drawAndUpdate = () => {
    this.y += this.speed;
    this.IsOverFlow = this.y < canvas.height;
    ctx.drawImage(Images.obstacle, this.x, this.y);
  };

  setSpeed = (speed) => {
    this.speed = speed;
  };
}
