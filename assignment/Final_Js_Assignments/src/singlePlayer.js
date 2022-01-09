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

class SingleGame {
  constructor() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    this.compSheeps = [[], [], [], [], []];
    this.collidedSheeps = [[], [], [], [], []];
    this.playerSheeps = [[], [], [], [], []];
    this.groundwidth = 10;
    this.groundheight = 5;
    this.buttons = [];
    this.compScore = 0;
    this.playerScore = 0;
    this.compSheepArr = [];
    this.playerSheepArr = [];
    this.lastTime = 0;
    this.timeToNextSheep = 0;
    this.nextPlayerTime = 0;
    this.sheepInterval = 3000;
  }

  gameloop = () => {
    this.renderGround();
    this.renderButton();
    this.renderScore();
    this.genCompSheep();
    canvas.addEventListener("click", this.playerSheepBtn);
    this.start(0);
  };

  start = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.renderScore();
    this.renderGround();
    let deltatime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    this.timeToNextSheep += deltatime;
    this.nextPlayerTime += deltatime;
    this.genCompSheep(deltatime);
    this.updatePlayerSheep(deltatime);
    this.renderButton();
    window.requestAnimationFrame(this.start);
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

  renderButton = () => {
    ctx.drawImage(
      gameImages.bushLeft,
      0,
      0,
      88,
      565,
      0,
      tile.height,
      tile.width / 2,
      window.innerHeight
    );
    ctx.drawImage(
      gameImages.bushRight,
      0,
      0,
      88,
      565,
      window.innerWidth - tile.width / 2,
      tile.height,
      tile.width / 2,
      window.innerHeight
    );

    for (let i = 0; i < this.groundheight; i++) {
      let btn = new SheepButton(i + 1);
      btn.drawLeft();
      this.buttons.push(btn);
    }
  };

  renderScore = () => {
    ctx.drawImage(
      gameImages.score,
      0,
      0,
      897,
      122,
      0,
      0,
      window.innerWidth,
      tile.height
    );
  };

  genCompSheep = (deltatime) => {
    if (this.timeToNextSheep > this.sheepInterval) {
      let newCompSheep = new Sheep();
      this.compSheeps[newCompSheep.tileNo - 1].push(newCompSheep);
      this.timeToNextSheep = 0;
    }
  };

  playerSheepBtn = (e) => {
    let clickX = e.clientX;
    let clickY = e.clientY;
    for (let i = 0; i < this.groundheight; i++) {
      if (
        clickX >= this.buttons[i].x &&
        clickX <= this.buttons[i].x + this.buttons[i].width &&
        clickY >= this.buttons[i].y &&
        clickY <= this.buttons[i].y + this.buttons[i].height
      ) {
        if (this.nextPlayerTime > this.sheepInterval) {
          let newSheep = new PlayerSheep(i);
          this.playerSheeps[i].push(newSheep);
          console.log(this.nextPlayerTime);
          this.nextPlayerTime = 0;
        }
      }
    }
  };

  updatePlayerSheep = (deltatime) => {
    for (let i = 0; i < this.groundheight; i++) {
      [...this.playerSheeps[i]].forEach((object) => {
        object.draw();
        object.update(deltatime);
      });
      [...this.compSheeps[i]].forEach((object) => {
        object.draw();
        object.update(deltatime);
      });
    }
  };
}

// let lastTime = 0;

// function animate(timestamp) {
//   let delta = timestamp - lastTime;
//   lastTime = timestamp;
//   console.log(delta);

//   window.requestAnimationFrame(animate);
// }
// animate();
