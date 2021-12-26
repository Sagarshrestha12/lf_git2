const mainContainer = document.querySelector("div.container");
const wrapper = document.querySelector("div.image-wrapper");
const images = document.getElementsByTagName("img");

const width = "600px";
const height = "400px";
let currentImage = 0;

mainContainer.style.width = width;
mainContainer.style.height = height;
mainContainer.style.margin = " 0 auto";
mainContainer.style.border = "1px solid black";
mainContainer.style.overflow = "hidden";
mainContainer.style.position = "relative";

wrapper.style.width = parseInt(width) * images.length + "px";
wrapper.style.height = height;
wrapper.style.position = "absolute";

const leftArrow = document.createElement("button");
leftArrow.innerHTML = "&larr;";
leftArrow.style.fontSize = "30px";
leftArrow.style.position = "absolute";
leftArrow.style.background = "none";
leftArrow.style.left = "0px";
leftArrow.style.top = "40%";
leftArrow.style.border = "0px transparent";
leftArrow.style.color = "white";
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
mainContainer.appendChild(rightArrow);

function styleImage(images) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "inline-block";
    images[i].style.position = "absolute";
    images[i].style.left = i * parseInt(width) + "px";
    images[i].top = "0px";
  }
}
styleImage(images);

const dotIndicator = [];
function showImage(current) {
  for (let j = 0; j < images.length; j++) {
    if (current > j) {
      images[j].style.left = `-${(current - j) * parseInt(width)}px`;
    } else {
      images[j].style.left = `${(current - j) * parseInt(width)}px`;
    }
  }
}

for (let i = 0; i < images.length; i++) {
  const dot = document.createElement("button");
  dot.innerHTML = "&squ;";
  dot.style.fontSize = "2px";
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

// function transitionAndHold(transitionTime, holdTime, widthOfImage) {
//   const smallTransition = transitionTime / widthOfImage;
//   const my = (smallTransition) => {
//     const Id = setInterval(() => {
//       console.log("kgf");
//     }, smallTransition);

//     return Id;
//   };

//   const id = my(smallTransition);
//   setTimeout(() => {
//     console.log("Stop setInterval Function");
//     clearInterval(id);
//   }, holdTime);
// }
// var intervalID = setInterval(myCallback, 500, "1", "2");

// function myCallback(a, b) {
//   // Your code here
//   // Parameters are purely optional.
//   console.log(a);
//   console.log(b);
// }
