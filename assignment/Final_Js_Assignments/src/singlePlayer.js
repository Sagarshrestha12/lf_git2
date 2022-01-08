class GroundBase {
  constructor(sx) {
    this.sx = sx;
    this.sy = 0;
    this.x;
    this.y;
    this.width = 90;
    this.height = 90;
  }

  draw = () => {
    ctx.drawImage(
      gameImages.tiles,
      this.sx * this.width,
      this.sy,
      this.width,
      this.height,
      this.x,
      this.y,
      tile.width,
      tile.height
    );
  };
}

let groundBaseMap = [
  [2, 3, 0, 1, 0, 2, 0, 2, 0, 3],
  [3, 2, 1, 0, 3, 2, 0, 2, 0, 3],
  [3, 2, 2, 0, 3, 1, 2, 0, 3, 0],
  [3, 0, 3, 2, 3, 2, 3, 2, 1, 3],
  [3, 0, 2, 2, 1, 0, 3, 0, 3, 0],
];

class SingleGame {
  constructor() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    this.sheeps = [];
    this.groundwidth = 10;
    this.groundheight = 5;
  }
  gameloop = () => {
    this.renderGround();
  };
  renderGround = () => {
    let groundBaseArr = [];
    for (let i = 0; i < 4; i++) {
      let groundBaseObj = new GroundBase(i);
      groundBaseArr.push(groundBaseObj);
    }

    for (let i = 0; i < this.groundheight; i++) {
      for (let j = 0; j < this.groundwidth; j++) {
        groundBaseArr[groundBaseMap[i][j]].x = j * tile.width;
        groundBaseArr[groundBaseMap[i][j]].y = (i + 1) * tile.height;
        groundBaseArr[groundBaseMap[i][j]].draw();
      }
    }
  };
}
