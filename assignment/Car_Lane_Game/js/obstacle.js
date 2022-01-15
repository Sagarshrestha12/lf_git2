class Obstacle extends MyCar {
  constructor() {
    super();
    this.x = position[generateRandomNumber(1, 3) - 1];
    this.y = 0;
    this.speed = 2;
  }

  drawAndUpdate = () => {
    this.y += this.speed;
    ctx.drawImage(Images.obstacle, this.x, this.y);
  };

  setSpeed = (speed) => {
    this.speed = speed;
  };
}
