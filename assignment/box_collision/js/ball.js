class Ball {
  constructor(x, y, radius, color, xdir, ydir, velocity, context) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.xdir = xdir;
    this.ydir = ydir;
    this.velocity = velocity;
    this.context = context;
    this.xmove = this.xdir * this.velocity;
    this.ymove = this.ydir * this.velocity;
    this.mass = this.radius;
  }
  draw = () => {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.closePath();
  };
  
}
// const bal1 = new Ball(20, 30, 10, "#abc");
// bal1.draw(ctx);
// let ctx = myCanvas.getContext("2d");
