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
    this.sheepInterval = 4000;
    this.gameTime = 60; //in seconds
    this.gameTimeInMs = 0;
    this.replayWh = {
      x: canvas.width / 2 - tile.width,
      y: canvas.height - tile.height * 1.2,
      width: tile.width / 1.4,
      height: tile.width / 1.4,
    };
    this.menuWh = {
      x: canvas.width / 2,
      y: canvas.height - tile.height * 1.2,
      width: tile.width / 1.4,
      height: tile.width / 1.4,
    };
    this.extraTimeToComp = 3000;

    this.selectSheepOption = false;
    this.barSheepSelectTime = 15000;
    this.nextbarSheepSelectTime = 0;
  }

  gameloop = () => {
    canvas.addEventListener("click", this.playerSheepBtn);
    this.start(0);
  };

  start = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.renderScore();
    this.leftLoadCircle();
    this.rightLoadCircle();
    this.renderGround();
    this.renderTime();
    let deltatime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    this.timeToNextSheep += deltatime;
    this.nextPlayerTime += deltatime;
    this.gameTimeInMs += deltatime;
    this.nextbarSheepSelectTime += deltatime;
    if (this.nextbarSheepSelectTime > this.barSheepSelectTime) {
      this.selectSheepOption = true;
    }
    this.showSheepBar();
    this.renderLineBar();
    this.genCompSheep(deltatime);
    this.updateSheep(deltatime);
    this.checkCollision();
    this.calculateWeight();
    this.renderButton();
    if (!(gameState.current === gameState.gameover)) {
      window.requestAnimationFrame(this.start);
    } else {
      this.gameover();
    }
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
    ctx.font = "Bold 50px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(this.gameTime, window.innerWidth / 2 - 5, tile.height / 2);
    if (this.gameTimeInMs >= 1000) {
      this.gameTimeInMs = 0;
      this.gameTime -= 1;
      if (this.gameTime === -1) {
        this.gameTime = 60;
        gameState.current = gameState.gameover;
      }
    }
  };

  leftLoadCircle = () => {
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#e0fe53";
    ctx.beginPath();
    let angle =
      this.nextPlayerTime > this.sheepInterval
        ? 1
        : this.nextPlayerTime / this.sheepInterval;
    ctx.arc(
      tile.width / 2,
      tile.height / 2.3,
      tile.width / 4,
      0,
      2 * Math.PI * angle
    );
    ctx.stroke();
  };

  rightLoadCircle = () => {
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#e0fe53";
    ctx.beginPath();
    let angle =
      this.timeToNextSheep > this.sheepInterval + this.extraTimeToComp
        ? 1
        : this.timeToNextSheep / (this.sheepInterval + this.extraTimeToComp);
    ctx.arc(
      canvas.width - tile.width / 2,
      tile.height / 2.3,
      tile.width / 4,
      0,
      2 * Math.PI * angle
    );
    ctx.stroke();
  };

  renderLineBar = () => {
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#e0fe53";
    ctx.beginPath();
    let line =
      this.nextbarSheepSelectTime > this.barSheepSelectTime
        ? 1
        : this.nextbarSheepSelectTime / this.barSheepSelectTime;
    ctx.moveTo(tile.width * 1.1, tile.height / 1.5);
    ctx.lineTo(tile.width * 1.1 + tile.width * 1.9 * line, tile.height / 1.5);
    ctx.stroke();
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
    ctx.font = "Bold 40px Arial";
    ctx.fillStyle = "#ff6600";
    ctx.textAlign = "center";
    ctx.fillText(
      score.playerSheep,
      window.innerWidth / 2 - tile.width,
      tile.height / 2.1
    );
    ctx.fillStyle = "#fff";
    ctx.fillText(
      score.compSheep,
      window.innerWidth / 2 + tile.width,
      tile.height / 2.1
    );
  };

  showSheepBar = () => {
    let sheepbar = new SheepBar();
    sheepbar.draw();
  };

  genCompSheep = (deltatime) => {
    if (this.timeToNextSheep > this.sheepInterval + this.extraTimeToComp) {
      let newCompSheep = new Sheep();
      this.compSheeps[newCompSheep.tileNo - 1].push(newCompSheep);
      audioOfSheep.play();
      setTimeout(() => {
        audioOfSheep.pause();
      }, 2000);
      this.timeToNextSheep = 0;
    }
  };

  playerSheepBtn = (e) => {
    let clickX = e.clientX;
    let clickY = e.clientY;
    popSound.play();
    for (let i = 0; i < this.groundheight; i++) {
      if (
        clickX >= this.buttons[i].x &&
        clickX <= this.buttons[i].x + this.buttons[i].width &&
        clickY >= this.buttons[i].y &&
        clickY <= this.buttons[i].y + this.buttons[i].height
      ) {
        if (this.nextPlayerTime > this.sheepInterval) {
          let newSheep;
          if (this.selectSheepOption) {
            newSheep = new PlayerSheep(i, currentSheep.current + 1);
            this.playerSheeps[i].push(newSheep);
            this.nextbarSheepSelectTime = 0;
            this.selectSheepOption = false;
          } else {
            newSheep = new PlayerSheep(i);
            this.playerSheeps[i].push(newSheep);
          }
          audioOfSheep2.play();
          setTimeout(() => {
            audioOfSheep2.pause();
          }, 2000);
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

  gameover = () => {
    let textsize = "Bold " + tile.height / 2 + "px serif";
    this.gameoverText(
      "GAME OVER",
      canvas.width / 2,
      canvas.height / 2,
      textsize
    );
    textsize = "Bold " + tile.height / 2.5 + "px serif";
    if (score.playerSheep > score.compSheep) {
      this.gameoverText(
        "YOU WON",
        canvas.width / 2,
        canvas.height / 2 + 100,
        textsize
      );
    }
    if (score.playerSheep === score.compSheep) {
      this.gameoverText(
        "MATCH DRAW",
        canvas.width / 2,
        canvas.height / 2 + 100,
        textsize
      );
    }
    if (score.playerSheep < score.compSheep) {
      this.gameoverText(
        "YOU LOSE",
        canvas.width / 2,
        canvas.height / 2 + 100,
        "Bold 70px serif"
      );
    }
    ctx.drawImage(
      gameImages.replay,
      0,
      0,
      131,
      110,
      this.replayWh.x,
      this.replayWh.y,
      this.replayWh.width,
      this.replayWh.height
    );
    ctx.drawImage(
      gameImages.menu,
      0,
      0,
      131,
      110,
      this.menuWh.x,
      this.menuWh.y,
      this.menuWh.width,
      this.menuWh.height
    );
    canvas.addEventListener("click", this.menubutton);
    canvas.addEventListener("click", this.replaybutton);
  };

  gameoverText = (str, width, height, font) => {
    ctx.font = font;
    ctx.textAlign = "center";
    ctx.fillStyle = "#000";
    ctx.fillText(str, width + 7, height + 7);
    ctx.fillStyle = "#fff";
    ctx.fillText(str, width, height);
  };

  menubutton = (e) => {
    let clientX = e.clientX;
    let clientY = e.clientY;
    if (
      clientX >= this.menuWh.x &&
      clientX <= this.menuWh.x + this.menuWh.width &&
      clientY >= this.menuWh.y &&
      clientY <= this.menuWh.y + this.menuWh.height
    ) {
      showModeScreen();
    }
  };

  replaybutton = (e) => {
    let clientX = e.clientX;
    let clientY = e.clientY;
    if (
      clientX >= this.replayWh.x &&
      clientX <= this.replayWh.x + this.replayWh.width &&
      clientY >= this.replayWh.y &&
      clientY <= this.replayWh.y + this.replayWh.height
    ) {
      computerModeScreen();
    }
  };
}
