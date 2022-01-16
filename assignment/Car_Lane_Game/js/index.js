let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight;
canvas.style.border = "3px solid black";

let preloader = document.getElementById("preloader");

let position = [
  canvas.width / 2.4 - canvas.width / 4,
  canvas.width / 2.4,
  canvas.width / 2.4 + canvas.width / 4,
];

let score = 0;

let currentPosition = {
  current: 0,
  left: -1,
  mid: 0,
  right: 1,
};

let Images = {};
imagesUrl = [
  "images/road.png",
  "images/mycar.png",
  "images/obstacle.png",
  "images/fire.png",
];
let car = {
  widht: canvas.width / 7,
  height: canvas.height / 7,
};

// let
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

Promise.all(imagesUrl.map(loadImage))
  .then((images) => {
    Images.road = images[0];
    Images.mycar = images[1];
    Images.obstacle = images[2];
    Images.fire = images[3];
    gameStart();
  })

  .catch(() => {
    console.log("Error in loading images");
  });
let game;
function gameStart() {
  game = null;
  currentPosition = {
    current: 0,
    left: -1,
    mid: 0,
    right: 1,
  };
  game = new StartGame();
  game.gameloop(ctx);
}
