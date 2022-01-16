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
    // console.log();
    this.genOpponenetCar();
    this.updateOpponentsCar();
    if (!this.Collision()) {
      requestAnimationFrame(this.start);
    } else {
      endImage(this.score,this.car.gamekey);
    }
  };

  genOpponenetCar = () => {
    if (this.timeBtnCar > 3000) {
      // console.log(this.lastTime);
      let newcar = new Obstacle();
      this.opponents.push(newcar);
      this.timeBtnCar = 0;
    }
  };

  updateOpponentsCar = () => {
    for (let i = 0; i < this.opponents.length; i++) {
      this.opponents[i].drawAndUpdate();
    }
    let initial = this.opponents.length;
    this.opponents = [...this.opponents].filter((object) => object.IsOverFlow);
    // console.log(this.opponents.length);
    let final = this.opponents.length;
    this.score += final - initial;
  };

  Collision = () => {
    let check = 0;
    for (let i = 0; i < this.opponents.length; i++) {
      check += this.car.checkCollision(this.opponents[i]);
    }
    if (check === 0) {
      return false;
    } else {
      return true;
    }
  };
}
