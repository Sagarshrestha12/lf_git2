// setInterval(() => {
//   if (Math.floor(Math.random() * 3) === 2) {
// console.log("kjdf");
//   }
// }, 100);

function randomColor() {
  let rbgColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ", " +
    Math.floor(Math.random() * 256) +
    ")";

  return rbgColor;
}
// console.log(randomColor());

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let rand = Math.floor(Math.random() * (max - min + 1)) + min;

  return rand;
};
// console.log(getRandomNumber(0, 1));

// console.log(Math.sqrt(9));
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
  this.xmove -=
    impulse * otherBall.mass * vCollisionNorm.x * this.restitution; // multpiply collision vector by impulse of the otherball
  this.ymove -=
    impulse * otherBall.mass * vCollisionNorm.y * this.restitution; // multpiply collision vector by impulse of the otherball
  otherBall.xmove +=
    impulse * this.mass * vCollisionNorm.x * this.restitution; // multpiply collision vector by impulse of the otherball
  otherBall.ymove +=
    impulse * this.mass * vCollisionNorm.y * this.restitution; // multpiply collision vector by impulse of the otherball
};