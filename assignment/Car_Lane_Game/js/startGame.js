class StartGame {
  constructor() {
    this.score = 0;
    this.car = new MyCar();
  }

  gameloop = (ctx) => {
    ctx.drawImage(
      Images.road,
      0,
      0,
      540,
      772,
      0,
      0,
      canvas.width,
      canvas.height
    );
    this.car.draw();
    this.car.arrowBtnHandler();
    this.start();
  };

  start = (car) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      Images.road,
      0,
      0,
      540,
      772,
      0,
      0,
      canvas.width,
      canvas.height
    );
    this.car.draw();
    requestAnimationFrame(this.start);
  };
}
