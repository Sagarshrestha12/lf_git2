class MultiPlayer extends SingleGame {
  constructor() {
    super();
    this.oppSheeps = [[], [], [], [], []];
    this.buttonsRight = [];
  }
  gameloop = () => {
    window.addEventListener("keydown", this.playerSheepBtn);
    this.start(0);
  };

  playerSheepBtn = (e) => {
    console.log(this.nextPlayerTime);
    console.log(this.timeToNextSheep);
    if (this.nextPlayerTime > this.sheepInterval) {
      switch (e.code) {
        case "KeyQ":
          this.pushPlayerSheep(0);
          break;
        case "KeyW":
          this.pushPlayerSheep(1);
          break;
        case "KeyE":
          this.pushPlayerSheep(2);
          break;
        case "KeyR":
          this.pushPlayerSheep(3);
          break;
        case "KeyT":
          this.pushPlayerSheep(4);
          break;
        default:
          break;
      }
    }
    if (this.timeToNextSheep > this.sheepInterval) {
      switch (e.code) {
        case "KeyY":
          this.pushOpponentSheep(0);
          break;
        case "KeyU":
          this.pushOpponentSheep(1);
          break;
        case "KeyI":
          this.pushOpponentSheep(2);
          break;
        case "KeyO":
          this.pushOpponentSheep(3);
          break;
        case "KeyP":
          this.pushOpponentSheep(4);
          break;
        default:
          break;
      }
    }
  };

  pushPlayerSheep = (i) => {
    let newSheep = new PlayerSheep(i);
    this.playerSheeps[i].push(newSheep);
    this.nextPlayerTime = 0;
  };

  pushOpponentSheep = (i) => {
    let newSheep = new OpponentSheep(i);
    this.oppSheeps[i].push(newSheep);
    this.timeToNextSheep = 0;
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
    for (let i = 0; i < this.groundheight; i++) {
      let btn = new SheepButton(i + 1);
      btn.drawRight();
      this.buttonsRight.push(btn);
    }
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

  updateSheep = (deltatime) => {
    for (let i = 0; i < this.groundheight; i++) {
      [...this.playerSheeps[i], ...this.oppSheeps[i]].forEach((object) => {
        object.draw();
        object.update(deltatime);
      });
      this.playerSheeps[i] = this.playerSheeps[i].filter(
        (object) => !object.deleteSheep
      );
      this.oppSheeps[i] = this.oppSheeps[i].filter(
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
        for (let k = 0; k < this.oppSheeps[i].length; k++) {
          if (
            this.playerSheeps[i][j].x + this.playerSheeps[i][j].width >
            this.oppSheeps[i][k].x
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
              if (this.collidedSheeps[i][a] == this.oppSheeps[i][k]) {
                isIn = true;
              }
            }
            if (!isIn) {
              this.collidedSheeps[i].push(this.oppSheeps[i][j]);
            }
          }
        }
      }
      this.collisionOfSame(this.playerSheeps, i);
      this.collisionOfSame(this.oppSheeps, i);
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
    ctx.font = "Bold 60px Arial";
    ctx.fillStyle = "#ff6600";
    ctx.textAlign = "center";
    ctx.fillText(
      score.playerSheep,
      window.innerWidth / 2 - tile.width,
      tile.height / 2.2
    );
    ctx.fillStyle = "#fff";
    ctx.fillText(
      score.opponentSheep,
      window.innerWidth / 2 + tile.width,
      tile.height / 2.2
    );
  };
}
