// var newString = oldString.replaceAll("character/string goes here", "");
// var oldString = "../images/file.png";
// var newString = oldString.replaceAll("../images/", "").replaceAll(".png", "");
// console.log(newString);
// const promisesArr = [];
// const images = {};
// imageUrl.forEach((element) => {
//   const loadImage = new Promise((resolve, reject) => {
//     let img = new Image();
//     img.src = element;
//     img.addEventListener("load", () => {
//       resolve(img);
//     });
//     img.addEventListener("error", () => {
//       reject();
//     });
//   });
//   loadImage
//     .then((img) => {
//       let oldString = element;
//       let newString = oldString
//         .replaceAll("../images/", "")
//         .replaceAll(".png", "");
//       images[newString] = img;
//     })
//     .catch(() => {
//       console.log("Error in loading message");
//     });
//   promisesArr.push(loadImage);
// });

// let k = (e) => {
//   // console.log(e);
//   return e ** 2;
// };
// arr = [1, 2, 3];
// console.log(arr.map(k));
// allImages = {};
// console.log(images);
// for (let i = 0; i < images.length; i++) {
//   let newString = oldString.replaceAll("../images/", "").replaceAll(".png", "");
//   allImages[newString] = images[i];
// }

// let images = [];
// let loadimage = (link) =>
//   new Promise((resolve, reject) => {
//     //
//     resolve(2);
//     // img.addEventListener("error", () => {
//     if (false) {
//       reject(3);
//     }
//     // });
//   });
// imagesUrl = [1, 2, 3];
// Promise.all(imagesUrl.map(loadimage))
//   .then((img) => {
//     images = img;
//     console.log(img);
//   })
//   .catch(() => {
//     console.log("Error in loading images");
//   });
// console.log(images);
// let y = 10;
// class ab {
//   constructor(x) {
//     this.x = x;
//     console.log(y);
//   }
// }
console.log(position);


// document.addEventListener("keydown", handleStart);
// ctx.drawImage(img, 0, 0);
// const handleStart = (event) => {
//   console.log(event.code);
//   if (event.code === "Space") {
//     ctx.clearRect(0, 0, 540, 772);
//   }
// };
