const mainContainer = document.querySelector("div.container");
const wrapper = document.querySelector("div.image-wrapper");
const images = document.getElementsByTagName("img");

const width = "600px";
const height = "400px";
let currentImage = 0;
let defaultDirection = "right";
let direction = "right";
let arrowbuttonClick = false;

mainContainer.style.width = width;
mainContainer.style.height = height;
mainContainer.style.margin = " 0 auto";
mainContainer.style.border = "1px solid black";
mainContainer.style.overflow = "hidden";
mainContainer.style.position = "relative";

wrapper.style.width = parseInt(width) * images.length + "px";
wrapper.style.height = height;
wrapper.style.position = "absolute";

function styleImage(images) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "inline-block";
    images[i].style.position = "absolute";
    images[i].style.left = i * parseInt(width) + "px";
    images[i].top = "0px";
  }
}
styleImage(images);

const leftArrow = document.createElement("button");
leftArrow.innerHTML = "&larr;";
leftArrow.style.fontSize = "30px";
leftArrow.style.position = "absolute";
leftArrow.style.background = "none";
leftArrow.style.left = "0px";
leftArrow.style.top = "40%";
leftArrow.style.border = "0px transparent";
leftArrow.style.color = "white";
leftArrow.addEventListener("click", () => {
  direction = "left";
  arrowbuttonClick = true;
  handleArrow(direction);
  arrowbuttonClick = false;
});
mainContainer.appendChild(leftArrow);

const rightArrow = document.createElement("button");
rightArrow.innerHTML = "&rarr;";
rightArrow.style.fontSize = "30px";
rightArrow.style.position = "absolute";
rightArrow.style.background = "none";
rightArrow.style.right = "0px";
rightArrow.style.top = "40%";
rightArrow.style.border = "0px transparent";
rightArrow.style.color = "white";
rightArrow.addEventListener("click", () => {
  // direction = "right";
  arrowbuttonClick = true;
  handleArrow("right");
  arrowbuttonClick = false;
});
mainContainer.appendChild(rightArrow);

function handleArrow(direct) {
  if (direct === "left" && currentImage === 0) {
    showImage(images.length - 1);
    currentImage = images.length - 1;
  } else if (direct === "right" && currentImage === images.length - 1) {
    showImage(0);
    currentImage = 0;
  } else {
    showSlide(direct);
  }
}

function showSlide(movingDirection) {
  if (movingDirection === "right") {
    for (let k = 0; k < images.length; k++) {
      let intervalId = setInterval(() => {
        images[k].style.left = parseInt(images[k].style.left) - 60 + "px";
        console.log(images[k].style.left);
      }, 100);
      setTimeout(() => {
        clearInterval(intervalId);
      }, 1100);
    }
    currentImage = currentImage + 1;
  } else {
    for (let k = 0; k < images.length; k++) {
      let intervalId = setInterval(() => {
        images[k].style.left = parseInt(images[k].style.left) + 60 + "px";
        console.log(images[k].style.left);
      }, 100);
      setTimeout(() => {
        clearInterval(intervalId);
      }, 1100);
    }
    currentImage--;
  }
}
const dotIndicator = [];

for (let i = 0; i < images.length; i++) {
  const dot = document.createElement("button");
  dot.innerHTML = "&squ;";
  dot.style.fontSize = "3px";
  dot.style.padding = "5px";
  dot.style.borderRadius = "50%";
  dot.style.left = 250 + i * 30 + "px";
  dot.style.bottom = "5px";
  dot.style.position = "absolute";
  dot.style.backgroundColor = "#bbb";
  // dots[i] = dot;
  dot.addEventListener("click", () => {
    currentImage = i;
    showImage(currentImage);
  });
  mainContainer.appendChild(dot);
}

function showImage(current) {
  for (let j = 0; j < images.length; j++) {
    if (current > j) {
      images[j].style.left = `-${Math.abs(current - j) * parseInt(width)}px`;
    } else {
      images[j].style.left = `${Math.abs(current - j) * parseInt(width)}px`;
    }
  }
}
