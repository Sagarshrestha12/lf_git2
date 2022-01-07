class GroundBase {
  constructor(x) {
    this.x = x;
  }
  draw = () => {
    ctx.drawImage(gamesImages[tiles]);
  };
}

class SingleGame {
  constructor() {
    this.sheeps = [];
  }
}
