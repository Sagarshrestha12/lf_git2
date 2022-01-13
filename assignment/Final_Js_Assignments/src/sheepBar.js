class SheepBar {
  constructor() {
    window.addEventListener("click", (e) => {
      this.selectSheep(e);
    });
    this.NoOfSheep = 4;
    this.x = tile.width * 1.1;
    this.y = tile.height / 10;
    this.barWidth = tile.width * 1.9;
    this.barHeight = tile.height / 1.7;
  }

  selectSheep = (e) => {
    let clickX = e.clientX;
    let clickY = e.clientY;
    popSound.play();
    if (
      clickX >= this.x &&
      clickX <= this.x + this.barWidth / 4 &&
      clickY >= this.y &&
      clickY <= this.y + this.barHeight
    ) {
      currentSheep.current = currentSheep.small;
    } else if (
      clickX >= this.x + this.barWidth / 4 &&
      clickX <= this.x + (this.barWidth * (currentSheep.med + 1)) / 4 &&
      clickY >= this.y &&
      clickY <= this.y + this.barHeight
    ) {
      currentSheep.current = currentSheep.med;
    } else if (
      clickX >= this.x + (this.barWidth * (currentSheep.med + 1)) / 4 &&
      clickX <= this.x + (this.barWidth * (currentSheep.lrg + 1)) / 4 &&
      clickY >= this.y &&
      clickY <= this.y + this.barHeight
    ) {
      currentSheep.current = currentSheep.lrg;
    } else if (
      clickX >= this.x + (this.barWidth * (currentSheep.lrg + 1)) / 4 &&
      clickX <= this.x + (this.barWidth * (currentSheep.sup + 1)) / 4 &&
      clickY >= this.y &&
      clickY <= this.y + this.barHeight
    ) {
      currentSheep.current = currentSheep.sup;
    }
  };
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "#808080";
    ctx.fillRect(tile.width * 1.1, this.y, tile.width * 1.9, this.barHeight);

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
      tile.width * 2.55,
      tile.height / 4,
      tile.width / 2.5,
      tile.height / 2.5
    );
  }

  highlightSheep = () => {
    ctx.fillStyle = "#fff";
    // console.log(currentSheep.current);
    ctx.fillRect(
      this.x + (currentSheep.current * this.barWidth) / this.NoOfSheep,
      this.y,
      this.barWidth / this.NoOfSheep,
      this.barHeight
    );
  };
}
