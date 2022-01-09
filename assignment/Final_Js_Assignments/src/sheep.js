class Sheep {
  constructor() {
    this.sx = 0;
    this.sy = 0;
    this.x = window.innerWidth - 500;
    this.tileNo = getRandomNumber(1, 5);
    this.y = this.tileNo * tile.height + tile.height / 4;
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
      return 0; //0 represents small sheep
    } else if (rand > 6 && rand < 10) {
      return 1; // 1 represents medium sheep
    } else if (rand > 10 && rand < 17) {
      return 2; // 2 represents large sheep
    } else {
      return 3; // 3 represents super large sheep
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

  setDx = (dx) => {
    this.dx = dx;
  };

  update = () => {
    this.x -= this.dx;
  };
}

class PlayerSheep extends Sheep {
  constructor(y) {
    super();
    this.x = 500;
    this.dx = 2;
    this.y = (y + 1) * tile.height + tile.height / 4;
    this.sheepType = ["smallBlack", "mediumBlack", "largeBlack", "superBlack"];
  }
  update = () => {
    this.x += this.dx;
  };
}
