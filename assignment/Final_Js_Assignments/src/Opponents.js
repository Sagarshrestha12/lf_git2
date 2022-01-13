class OpponentSheep extends Sheep {
  /**
   *
   * @param {number} y represents a lane number
   */
  constructor(y) {
    super();
    this.dx = -2;
    this.y = (y + 1) * tile.height + tile.height / 4;
    this.sheepType = ["smallWhite", "mediumWhite", "largeWhite", "superWhite"];
    this.x = canvas.width + this.width;
  }

  /**
   *
   * @param {number} deltatime represents the time between animation
   */
  update = (deltatime) => {
    this.x += this.dx;
    this.timeSinceAnimate += deltatime;
    if (this.timeSinceAnimate > this.sheepAnimate) {
      if (this.frame > this.maxFrame) {
        this.frame = 0;
      }
      this.timeSinceAnimate = 0;
      this.frame++;
    }
    if (this.x < -this.width) {
      this.deleteSheep = true;
      score.opponentSheep += 1;
    } else if (this.x > window.innerWidth + this.width) {
      this.deleteSheep = true;
    }
  };
}
