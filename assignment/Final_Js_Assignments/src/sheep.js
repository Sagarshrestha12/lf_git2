class Sheep {
  constructor() {
    this.sy = 0;
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
    this.sx = this.width;
    this.x = canvas.width + this.width;
    this.frame = 0;
    this.maxFrame = 2;
    this.timeSinceAnimate = 0;
    this.sheepAnimate = 100;
    this.deleteSheep = false;
    this.weight = this.sheepTypeNo + 1;
    this.player = false;
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
      this.sx * this.frame,
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
      score.compSheep += 1;
    } else if (this.x > window.innerWidth + this.width) {
      this.deleteSheep = true;
    }
  };
}

class PlayerSheep extends Sheep {
  constructor(y, sel) {
    super();
    this.dx = 2;
    if (sel) {
      this.sheepTypeNo = sel - 1;
      this.height = sheepSize[this.sheepSz[this.sheepTypeNo]]["height"];
      this.width = sheepSize[this.sheepSz[this.sheepTypeNo]]["width"];
      this.sx = this.width;
      this.x = canvas.width + this.width;
      this.weight = this.sheepTypeNo + 1;
    }
    this.y = (y + 1) * tile.height + tile.height / 4;
    this.sheepType = ["smallBlack", "mediumBlack", "largeBlack", "superBlack"];
    this.player = true;
    this.x = 0 - this.width;
  }
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
    } else if (this.x > window.innerWidth + this.width) {
      this.deleteSheep = true;
      score.playerSheep += 1;
    }
  };
}
