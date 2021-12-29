let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
canvas.width = 540;
canvas.height = 772;
canvas.style.border = "3px solid black";
//diffrence between one lane to another is 135
let position = {
  left: 80,
  mid: 215,
  right: 350,
};
let positionindex = 0;
let currentPosition = {
  left: -1,
  mid: 0,
  right: 1,
};
imagesUrl = [
  "../images/road.png",
  "../images/mycar.png",
  "../images/obstacle.png",
  "../images/fire.png",
];

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
          ctx.clearRect(0, 0, 540, 772);
          clearInterval(start_id);
          ctx.drawImage(images[0], 0, 0);
        }
      };
    }, 30);
    ctx.drawImage;
  })

  .catch(() => {
    console.log("Error in loading images");
  });
