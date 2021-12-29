let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
canvas.width = 540;
canvas.height = 772;
canvas.style.border = "3px solid black";
//diffrence between one lane to another is 135
let position = [80, 215, 350];
let positionindex = 0;
let currentPosition = {
  left: -1,
  mid: 0,
  right: 1,
};
let no_of_obstacle = 2;
let userHeight = 660;
imagesUrl = [
  "../images/road.png",
  "../images/mycar.png",
  "../images/obstacle.png",
  "../images/fire.png",
];
let carWidht = 100;
let carHeight = 100;
const loadImage = (link) => {
  return new Promise((resolve, reject) => {
    let img1 = new Image();
    img1.src = link;
    img1.addEventListener("load", () => {
      resolve(img1);
    });
    img1.addEventListener("error", () => {
      reject("Failed to load the images");
    });
  });
};

let images = [];
Promise.all(imagesUrl.map(loadImage))
  .then((img) => {
    images = img;
    startOrEnd(images[0], ctx);
    let start_id = setInterval(() => {
      document.onkeydown = (event) => {
        console.log(event.code);
        if (event.code === "Space") {
          clearInterval(start_id);
          ctx.clearRect(0, 0, 540, 772);
          ctx.drawImage(images[0], 0, 0);
          let user = new MyCar(position[1], userHeight, ctx, images[1]);
          user.draw();
          let obstacles = [];
          for (let i = 0; i < no_of_obstacle; i++) {
            let xposition = position[generateRandomNumber(0, 3)];
            let yposition = -carHeight + generateRandomNumber(20, 50);
            let obs = new Obstacle(xposition, yposition, ctx, images[2]);
            obstacles.push(obs);
          }
          function reques() {
            ctx.clearRect(0, 0, 540, 772);
            ctx.drawImage(images[0], 0, 0);
            let user = new MyCar(position[1], userHeight, ctx, images[1]);
            user.draw();
            for (let i = 0; i < obstacles.length; i++) {
              obstacles[i].draw();
              obstacles[i].move();
            }
            requestAnimationFrame(reques);
          }
          reques();
        }
      };
    }, 30);
    // ctx.drawImage;
  })

  .catch(() => {
    console.log("Error in loading images");
  });
