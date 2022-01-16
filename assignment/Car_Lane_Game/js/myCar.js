class MyCar {
  constructor() {
    this.x = canvas.width / 2.4;
    this.y = canvas.height / 1.3;
    this.shift = canvas.width / 4;
  }

  draw() {
    ctx.drawImage(Images.mycar, this.x, this.y);
  }

  bottom = () => {
    return this.y + car.height;
  };

  arrowBtnHandler = () => {
    window.addEventListener("keydown", (e) => {
      console.log(e.code);
      if (
        e.code === "KeyA" &&
        currentPosition.current !== currentPosition.left
      ) {
        this.x = this.x - this.shift;
        currentPosition.current -= 1;
      } else if (
        e.code === "KeyD" &&
        currentPosition.current !== currentPosition.right
      ) {
        this.x = this.x + this.shift;
        currentPosition.current += 1;
      }
    });
  };

  left = () => {
    return this.x;
  };

  right = () => {
    return this.x + car.widht;
  };

  top = () => {
    return this.y;
  };

  checkCollision = (obstacle) => {
    if (
      this.x < obstacle.x + car.widht &&
      this.x + car.widht > obstacle.x &&
      this.y < obstacle.y + car.height &&
      car.height + this.y > obstacle.y
    ) {
      return 1;
    } else {
      // console.log(1);
      return 0;
    }
  };
}
