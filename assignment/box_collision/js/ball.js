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
  move = () => {
    this.x += this.xmove;
    this.y += this.ymove;
  };

  checkWallCollision = () => {
    if (this.x - this.radius < 0 || this.x + this.radius > myCanvas.width) {
      this.xmove = -this.xmove;
      if (this.x < this.radius) {
        this.x = this.radius;
      } else {
        this.x = myCanvas.width - this.radius;
      }
    }
    if (this.y - this.radius < 0 || this.y + this.radius > myCanvas.height) {
      this.ymove = -this.ymove;
      if (this.y < this.radius) {
        this.y = this.radius;
      } else {
        this.y = myCanvas.height - this.radius;
      }
    }
  };
  checkBallCollision = (other) => {
    let x = this.x - other.x;
    let y = this.y - other.y;
    let distance = x ** 2 + y ** 2;
    let combinedRadius = (this.radius + other.radius) ** 2;

    return combinedRadius >= distance;
  };
  resolveBallCollision = (otherBall) => {
    let vCollision = { x: otherBall.x - this.x, y: otherBall.y - this.y };
    let distance = Math.sqrt(
      (otherBall.x - this.x) * (otherBall.x - this.x) +
        (otherBall.y - this.y) * (otherBall.y - this.y)
    ); // distance between balls. Need to calculate normal vector
    let vCollisionNorm = {
      x: vCollision.x / distance,
      y: vCollision.y / distance,
    }; // noraml vector. need to calculate relative velocity
    let vRelativeVelocity = {
      x: this.xmove - otherBall.xmove,
      y: this.ymove - otherBall.ymove,
    }; // relative velocity. differece between the velocities
    let speed =
      vRelativeVelocity.x * vCollisionNorm.x +
      vRelativeVelocity.y * vCollisionNorm.y; // calucate speed. vector * normal gives scalar quantity
    if (speed < 0) return; // if speed is less than 0 dont change otherwise it overlaps
    let impulse = (2 * speed) / (this.mass + otherBall.mass); // impulse is the force that produces change in momemtum
    this.xmove -= impulse * otherBall.mass * vCollisionNorm.x; // multpiply collision vector by impulse of the otherball
    this.ymove -= impulse * otherBall.mass * vCollisionNorm.y; // multpiply collision vector by impulse of the otherball
    otherBall.xmove += impulse * this.mass * vCollisionNorm.x; // multpiply collision vector by impulse of the otherball
    otherBall.ymove += impulse * this.mass * vCollisionNorm.y; // multpiply collision vector by impulse of the otherball
  };
}
// const bal1 = new Ball(20, 30, 10, "#abc");
// bal1.draw(ctx);
// let ctx = myCanvas.getContext("2d");
