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
    ctx.drawImage(
      Images.obstacle,
      0,
      0,
      100,
      100,
      this.x,
      this.y,
      car.widht,
      car.height
    );
  };

  setSpeed = (speed) => {
    this.speed = speed;
  };
}
