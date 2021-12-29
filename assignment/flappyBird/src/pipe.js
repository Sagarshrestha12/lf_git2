class Pipe {
  constructor(x, y) {
    this.speed = 5;
  }
  move() {
    this.x = this.x - this.speed;
  }

}
