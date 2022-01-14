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
    return this.y + this.height;
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
