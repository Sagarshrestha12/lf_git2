const myCanvas = document.getElementById("mycanvas");
myCanvas.width = window.innerWidth - 100;
myCanvas.height = window.innerHeight - 100;
myCanvas.style.border = "3px solid black";
const context = myCanvas.getContext("2d");
let myButton = document.getElementById("mybutton");
myButton.style.display = "block";

myButton.addEventListener("click", startOrStop);
let started = false;

const min_radius = 7;
const max_radius = 10;
const no_of_balls = 500;
const direction = [-1, 1];
let x, y, xdirection, ydirection, velocity, color;
let balls = [];

const min_speed = 1;
const max_speed = 3;

// console.log(getRandomNumber(0,1));
for (let i = 0; i < no_of_balls; i++) {
  let radius = getRandomNumber(min_radius, max_radius);
  let x = getRandomNumber(radius, myCanvas.width - radius);
  let y = getRandomNumber(radius, myCanvas.height - radius);
  let xdirection = direction[getRandomNumber(0, 1)];
  let ydirection = direction[getRandomNumber(0, 1)];
  let velocity = getRandomNumber(min_speed, max_speed);
  let color = randomColor();
  balls.push(
    new Ball(x, y, radius, color, xdirection, ydirection, velocity, context)
  );
}
const drawAndUpadte = () => {
  context.clearRect(0, 0, myCanvas.width, myCanvas.height);
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].draw();
    for (let j = i + 1; j < balls.length; j++) {
      if (balls[i].checkBallCollision(balls[j])) {
        balls[i].resolveBallCollision(balls[j]);
      }
    }
    balls[i].checkWallCollision();
  }
  // requestAnimationFrame(drawAndUpadte);
};

function startOrStop() {
  if (!started) {
    interval_id = setInterval(drawAndUpadte, 1000 / 60);
  } else {
    clearInterval(interval_id);
  }
  started = !started;
}
