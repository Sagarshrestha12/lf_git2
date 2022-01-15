class StartGame {
  constructor() {
    this.score = 0;
    this.car = new MyCar();
    this.opponents = [];
    this.lastTime = 0;
    this.timeBtnCar = 0;
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
    this.start(0);
  };

  start = (timestamp) => {
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
    let deltaTime = timestamp - this.lastTime;
    this.lastTime += deltaTime;
    this.timeBtnCar += deltaTime;
    console.log();
    this.genOpponenetCar();
    this.updateOpponentsCar();
    requestAnimationFrame(this.start);
    // updateOpponentsCar();
  };

  genOpponenetCar = () => {
    if (this.timeBtnCar > 5000) {
      console.log(this.lastTime);
      let newcar = new Obstacle();
      this.opponents.push(newcar);
      this.timeBtnCar = 0;
    }
  };

  updateOpponentsCar = () => {
    for (let i = 0; i < this.opponents.length; i++) {
      this.opponents[i].drawAndUpdate();
    }
  };

}
