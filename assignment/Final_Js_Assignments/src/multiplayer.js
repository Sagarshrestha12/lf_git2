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
    popSound.play();
    if (this.nextPlayerTime > this.sheepInterval) {
      switch (e.code) {
        case "KeyQ":
          this.createPlayerSheep(0);
          break;
        case "KeyW":
          this.createPlayerSheep(1);
          break;
        case "KeyE":
          this.createPlayerSheep(2);
          break;
        case "KeyR":
          this.createPlayerSheep(3);
          break;
        case "KeyT":
          this.createPlayerSheep(4);
          break;
        default:
          break;
      }
    }
    if (this.timeToNextSheep > this.sheepInterval) {
      switch (e.code) {
        case "KeyY":
          this.createOpponentSheep(0);
          break;
        case "KeyU":
          this.createOpponentSheep(1);
          break;
        case "KeyI":
          this.createOpponentSheep(2);
          break;
        case "KeyO":
          this.createOpponentSheep(3);
          break;
        case "KeyP":
          this.createOpponentSheep(4);
          break;
        default:
          break;
      }
    }
  };

  createPlayerSheep = (i) => {
    let newSheep = new PlayerSheep(i);
    this.playerSheeps[i].push(newSheep);
    audioOfSheep.play();
    setTimeout(() => {
      audioOfSheep.pause();
    }, 2000);
    this.nextPlayerTime = 0;
  };

  createOpponentSheep = (i) => {
    let newSheep = new OpponentSheep(i);
    this.oppSheeps[i].push(newSheep);
    audioOfSheep2.play();
    setTimeout(() => {
      audioOfSheep2.pause();
    }, 2000);
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
      let btn = new MultiplayerButton(i + 1);
      btn.drawLeft();
      this.buttons.push(btn);
    }
    for (let i = 0; i < this.groundheight; i++) {
      let btn = new MultiplayerButton(i + 1);
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
      score.opponentSheep,
      window.innerWidth / 2 + tile.width,
      tile.height / 2.1
    );
  };

  rightLoadCircle = () => {
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#e0fe53";
    ctx.beginPath();
    let angle =
      this.timeToNextSheep > this.sheepInterval
        ? 1
        : this.timeToNextSheep / this.sheepInterval;
    ctx.arc(
      canvas.width - tile.width / 2,
      tile.height / 2.3,
      tile.width / 4,
      0,
      2 * Math.PI * angle
    );
    ctx.stroke();
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
    if (score.playerSheep > score.opponentSheep) {
      this.gameoverText(
        "Player1 WON",
        canvas.width / 2,
        canvas.height / 2 + 100,
        textsize
      );
    }
    if (score.playerSheep === score.opponentSheep) {
      this.gameoverText(
        "MATCH DRAW",
        canvas.width / 2,
        canvas.height / 2 + 100,
        textsize
      );
    }
    if (score.playerSheep < score.opponentSheep) {
      this.gameoverText(
        "Player2 WON",
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

  replaybutton = (e) => {
    let clientX = e.clientX;
    let clientY = e.clientY;
    if (
      clientX >= this.replayWh.x &&
      clientX <= this.replayWh.x + this.replayWh.width &&
      clientY >= this.replayWh.y &&
      clientY <= this.replayWh.y + this.replayWh.height
    ) {
      multiplayerModeScreen();
    }
  };
}
