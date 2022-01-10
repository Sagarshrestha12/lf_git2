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
    console.log(e.code);
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
      this.nextPlayerTime = 0;
    }
  };

  pushPlayerSheep = (i) => {
    let newSheep = new PlayerSheep(i);
    this.playerSheeps[i].push(newSheep);
  };

  pushOpponentSheep = (i) => {
    let newSheep = new OpponentSheep(i);
    this.oppSheeps[i].push(newSheep);
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
  
}
