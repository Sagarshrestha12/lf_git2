class Pipe {
  constructor(image) {
    this.speed = 5;
    this.height = 300;
    this.gap = 150;
    this.image = image;
    this.shift = 2;
  }
  draw = function (pipes) {
    for (let i = 0; i < pipes.length; i++) {
      let topPipe = pipes[i].y;
      let buttomPipe = pipes[i].y + this.height + this.gap;
      ctx.drawImage(this.image[1], pipes[i].x, topPipe); //top pipe
      ctx.drawImage(this.image[0], pipes[i].x, buttomPipe); //bottom pipe
      pipes[i].x -= this.shift;
      if (pipes[i].x === 300) {
        pipes.push({
          x: 500,
          y: getRandomNumber(-this.height + 200, 0),
        });
      }
    }
  };
}
