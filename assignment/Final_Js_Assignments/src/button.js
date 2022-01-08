class SheepButton {
  constructor(i) {
    this.width = 76;
    this.height = 76;
    this.x = tile.width / 4;
    this.i = i;
    this.y = this.i * tile.height + tile.height / 4;
  }
  drawLeft = () => {
    ctx.drawImage(
      gameImages.buttonImg,
      0,
      0,
      this.width,
      this.height,
      (this.x = tile.width / 4),
      this.y,
      tile.width / 2,
      tile.height / 2
    );
  };

  drawRight = () => {
    ctx.drawImage(
      gameImages.buttonImg,
      0,
      0,
      this.width,
      this.height,
      (this.x = window.innerWidth - tile.width),
      this.y,
      tile.width / 2,
      tile.height / 2
    );
  };
}
