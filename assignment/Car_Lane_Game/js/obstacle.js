class Obstacle extends MyCar {
  constructor(x, y, ctx, image) {
    super(x, y, ctx, image);
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.image = image;
    this.speed = 5;
  }
  static score = 0;
  move = () => {
    this.y += this.speed;
  };
  increaseScore() {
    if (this.y > 772) {
      Obstacle.score += 1;
      this.x = position[generateRandomNumber(0, 3)];
      this.y = -carHeight + generateRandomNumber(20, 50);
    }
  }
}
