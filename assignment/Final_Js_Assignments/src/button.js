class SheepButton {
  /**
   * Creates a Go button
   *
   * @param {number} i mean at which line to place button
   */
  constructor(i) {
    this.width = tile.width / 2;
    this.height = tile.height / 2;
    this.x = tile.width / 4;
    this.i = i;
    this.y = this.i * tile.height + tile.height / 4;
  }

  /**
   *  This function will draw Go button on left side of game
   */
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

  /**
   * This function will draw Go button on right side of game
   */
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
  /**
   * Creates a Keyboard button
   *
   * @param {number} i mean at which line to place player button
   */
  constructor(i) {
    super(i);
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

  /**
   * This function will draw alphabet button on left side of game
   */
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

  /**
   * This function will draw alphabet button on right side of game
   */
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
