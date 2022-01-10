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
    this.collidedSheeps = [
      [], //first array is for player sheep collision and other for comp. sheep collision
      [],
      [],
      [],
      [],
    ];
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
    this.gameTime = 60;
    this.gameTimeInMs = 0;
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
    this.renderTime();
    let deltatime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    this.timeToNextSheep += deltatime;
    this.nextPlayerTime += deltatime;
    this.genCompSheep(deltatime);
    this.updateSheep(deltatime);
    this.checkCollision();
    this.calculateWeight();
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

  renderTime = (deltatime) => {
    ctx.font = "Bold 45px serif";
    ctx.fillStyle = "#ff855b";
    ctx.textAlign = "center";
    ctx.fillText(this.gameTime, window.innerWidth / 2, tile.height / 2.5);
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
    ctx.font = "Bold 45px serif";
    ctx.fillStyle = "#ff6600";
    ctx.textAlign = "center";
    ctx.fillText(
      score.playerSheep,
      window.innerWidth / 2 - tile.width,
      tile.height / 2.5
    );
    ctx.fillStyle = "#fff";
    ctx.fillText(
      score.compSheep,
      window.innerWidth / 2 + tile.width,
      tile.height / 2.5
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
          this.nextPlayerTime = 0;
        }
      }
    }
  };

  updateSheep = (deltatime) => {
    for (let i = 0; i < this.groundheight; i++) {
      [...this.playerSheeps[i], ...this.compSheeps[i]].forEach((object) => {
        object.draw();
        object.update(deltatime);
      });
      this.playerSheeps[i] = this.playerSheeps[i].filter(
        (object) => !object.deleteSheep
      );
      this.compSheeps[i] = this.compSheeps[i].filter(
        (object) => !object.deleteSheep
      );
      this.collidedSheeps[i] = this.collidedSheeps[i].filter(
        (object) => !object.deleteSheep
      );
    }
  };

  checkCollision = () => {
    for (let i = 0; i < this.groundheight; i++) {
      //player sheep and computer sheep  collision
      for (let j = 0; j < this.playerSheeps[i].length; j++) {
        for (let k = 0; k < this.compSheeps[i].length; k++) {
          if (
            this.playerSheeps[i][j].x + this.playerSheeps[i][j].width >
            this.compSheeps[i][k].x
          ) {
            let isIn = false;
            for (let a = 0; a < this.collidedSheeps[i].length; a++) {
              if (this.collidedSheeps[i][a] == this.playerSheeps[i][j]) {
                isIn = true;
              }
            }
            if (!isIn) {
              this.collidedSheeps[i].push(this.playerSheeps[i][j]);
            }
            isIn = false;
            for (let a = 0; a < this.collidedSheeps[i].length; a++) {
              if (this.collidedSheeps[i][a] == this.compSheeps[i][k]) {
                isIn = true;
              }
            }
            if (!isIn) {
              this.collidedSheeps[i].push(this.compSheeps[i][j]);
            }
          }
        }
      }
      this.collisionOfSame(this.playerSheeps, i);
      this.collisionOfSame(this.compSheeps, i);
    }
  };
  collisionOfSame = (sheep1, i) => {
    for (let j = 0; j < sheep1[i].length; j++) {
      for (let k = 0; k < this.collidedSheeps[i].length; k++) {
        if (
          this.collidedSheeps[i][k].x + this.collidedSheeps[i][k].width >=
            sheep1[i][j].x &&
          this.collidedSheeps[i][k].x < sheep1[i][j].x + sheep1[i][j].width
        ) {
          let isIn = false;
          for (let a = 0; a < this.collidedSheeps[i].length; a++) {
            if (this.collidedSheeps[i][a] == sheep1[i][j]) {
              isIn = true;
            }
          }
          if (!isIn) {
            this.collidedSheeps[i].push(sheep1[i][j]);
          }
        }
      }
    }
  };

  calculateWeight = () => {
    for (let i = 0; i < this.groundheight; i++) {
      let weight = 0;
      for (let j = 0; j < this.collidedSheeps[i].length; j++) {
        if (this.collidedSheeps[i][j].player) {
          weight += this.collidedSheeps[i][j].weight;
        } else {
          weight -= this.collidedSheeps[i][j].weight;
        }
      }
      for (let j = 0; j < this.collidedSheeps[i].length; j++) {
        this.collidedSheeps[i][j].setDx(weight);
      }
    }
  };
}
