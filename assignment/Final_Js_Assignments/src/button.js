class SheepButton {
  constructor(i) {
    this.width = tile.width / 2;
    this.height = tile.height / 2;
    this.x = tile.width / 4;
    this.i = i;
    this.y = this.i * tile.height + tile.height / 4;
  }
  drawLeft = () => {
    ctx.drawImage(
      gameImages.buttonImg,
      0,
      0,
      76,
      76,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  drawRight = () => {
    ctx.drawImage(
      gameImages.buttonImg,
      0,
      0,
      76,
      this.height,
      (this.x = window.innerWidth - tile.width),
      this.y,
      tile.width / 2,
      tile.height / 2
    );
  };
}

class MultiplayerButton extends SheepButton {
  constructor(i) {
    super();
    this.i = i;
    this.y = this.i * tile.height + tile.height / 4;
    this.leftButton = [
      gameImages.qbutton,
      gameImages.wbutton,
      gameImages.ebutton,
      gameImages.rbutton,
      gameImages.tbutton,
    ];
    this.rightButtons = [
      gameImages.ybutton,
      gameImages.ubutton,
      gameImages.ibutton,
      gameImages.obutton,
      gameImages.pbutton,
    ];
  }

  drawLeft = () => {
    this.x = tile.width / 4;
    ctx.drawImage(
      this.leftButton[this.i - 1],
      0,
      0,
      76,
      76,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  drawRight = () => {
    this.x = window.innerWidth - tile.width;
    ctx.drawImage(
      this.rightButtons[this.i - 1],
      0,
      0,
      76,
      76,
      this.x,
      this.y,
      tile.width / 2,
      tile.height / 2
    );
  };
}
