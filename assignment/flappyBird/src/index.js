const canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 730;
canvas.style.border = "3px solid black";
let ctx = canvas.getContext("2d");
const imagesLocation = [
  "../images/bottom-background.png",
  "../images/fb-game-background.png",
  "../images/flappy-bird.png",
  "../images/downflappybird-pipe.png",
  "../images/upflappybird-pipe2.png",
];
ctx.arc(20, 20, 0, 2 * Math.PI, true);
pipes = [];
pipes[0] = {
  x: 500,
  y: 730,
};
let images = []; // consist of images that is loaded
const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", (err) => reject(err));
    img.src = url;
  });

let promis = Promise.all(imagesLocation.map(loadImage))
  .then((img) => {
    images = img;
  })
  .catch((err) => console.log("Error in loading images"));
let x = 2;
promis.then(() => {
  let player = new Bird(10, 290, images[2], ctx);
  // start(images);
  function drawAndUpdate() {
    ctx.clearRect(0, 0, 500, 730);
    ctx.drawImage(images[1], 0, 0);
    ctx.drawImage(images[0], 0, 580);
    player.movedown();
    player.draw();
    canvas.addEventListener("click", () => {
      player.moveup();
    });
    let p = new Pipe(images.slice(images.length - 2, images.length));
    p.draw(pipes);
    if (player.wallCollision()) {
      gamefinish();
    }
  }
  setInterval(() => {
    drawAndUpdate();
  }, 1000 / 60);
});
function gamefinish() {}
