const canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 730;
canvas.style.border = "3px solid black";
let ctx = canvas.getContext("2d");
const imagesLocation = [
  "../images/bottom-background.png",
  "../images/fb-game-background.png",
  "../images/flappy-bird.png",
  "../images/flappybird-pipe.png",
];
ctx.arc(20, 20, 0, 2 * Math.PI, true);

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
  ctx.drawImage(images[1], 0, 0);
  ctx.drawImage(images[0], 0, 580);
  let player = new Bird(10, 290, images[2], ctx);
  player.draw();
  canvas.addEventListener("click", () => {
    player.moveup();
    player.draw();
  });
});
