class Sheep {
  constructor() {
    this.sx = 0;
    this.sy = 0;
    this.x = window.innerWidth - 500;
    this.y = getRandomNumber(1, 5) * tile.height + tile.height / 4;
    this.sheepType = ["smallWhite", "mediumWhite", "largeWhite", "superWhite"];
    this.sheepSz = [
      "smlSheepSize",
      "medSheepSize",
      "lrgSheepSize",
      "supSheepSize",
    ];

    this.sheepTypeNo = this.selectSheep();
    this.height = sheepSize[this.sheepSz[this.sheepTypeNo]]["height"];
    this.width = sheepSize[this.sheepSz[this.sheepTypeNo]]["width"];
    this.dx = -2;
  }

  selectSheep = () => {
    let rand = getRandomNumber(1, 20);
    if (rand < 6) {
      return 0;
    } else if (rand > 6 && rand < 10) {
      return 1;
    } else if (rand > 10 && rand < 17) {
      return 2;
    } else {
      return 3;
    }
  };

  draw = () => {
    ctx.drawImage(
      gameImages[this.sheepType[this.sheepTypeNo]],
      this.sx,
      this.sy,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };
}
