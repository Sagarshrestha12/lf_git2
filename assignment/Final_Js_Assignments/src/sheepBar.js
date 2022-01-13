class SheepBar {
  constructor() {
    window.addEventListener("mouseover", () => {
      this.hoverEffect();
    });
  }
  hoverEffect = (e) => {};
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "#808080";
    ctx.rect(
      tile.width * 1.1,
      tile.height / 10,
      tile.width * 1.9,
      tile.height / 1.7
    );
    ctx.fill();
    ctx.drawImage(
      gameImages.smallBlack,
      0,
      0,
      sheepSize.smlSheepSize.width,
      sheepSize.smlSheepSize.height,
      tile.width * 1.15,
      tile.height / 3,
      tile.width / 4,
      tile.height / 4
    );
    ctx.drawImage(
      gameImages.mediumBlack,
      0,
      0,
      sheepSize.medSheepSize.width,
      sheepSize.medSheepSize.height,
      tile.width * 1.5,
      tile.height / 3.5,
      tile.width / 3,
      tile.height / 3
    );
    ctx.drawImage(
      gameImages.mediumBlack,
      0,
      0,
      sheepSize.medSheepSize.width,
      sheepSize.medSheepSize.height,
      tile.width * 1.5,
      tile.height / 3.5,
      tile.width / 3,
      tile.height / 3
    );

    ctx.drawImage(
      gameImages.largeBlack,
      0,
      0,
      sheepSize.lrgSheepSize.width,
      sheepSize.lrgSheepSize.height,
      tile.width * 2,
      tile.height / 4,
      tile.width / 2.5,
      tile.height / 2.5
    );

    ctx.drawImage(
      gameImages.superBlack,
      0,
      0,
      sheepSize.supSheepSize.width,
      sheepSize.supSheepSize.height,
      tile.width * 2.5,
      tile.height / 4,
      tile.width / 2.5,
      tile.height / 2.5
    );
  }
}
