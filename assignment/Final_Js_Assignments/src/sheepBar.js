class SheepBar {
  constructor() {
    window.addEventListener("click", (e) => {
      this.selectSheep(e);
    });
    this.barWidth = tile.width * 1.9;
    this.NoOfSheep = 4;
  }
  selectSheep = (e) => {
    let clickX = e.clientX;
    let clickY = e.clientY;
    popSound.play();
    if (
      clickX >= tile.width * 1.1 &&
      clickX <= tile.width * 1.1 + this.barWidth / 4 &&
      clickY >= tile.height / 10 &&
      clickY <= tile.height / 10 + tile.height / 1.7
    ) {
      currentSheep.current = currentSheep.med;
    }
  };
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "#808080";
    ctx.fillRect(
      tile.width * 1.1,
      tile.height / 10,
      tile.width * 1.9,
      tile.height / 1.7
    );

    this.highlightSheep();
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
      tile.width * 1.6,
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
      tile.width * 2.05,
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

  highlightSheep = () => {
    ctx.fillStyle = "#fff";
    console.log(currentSheep.current);
    ctx.fillRect(
      tile.width * 1.1 +
        (currentSheep.current * this.barWidth) / this.NoOfSheep,
      tile.height / 10,
      this.barWidth / this.NoOfSheep,
      tile.height / 1.7
    );
  };
}
