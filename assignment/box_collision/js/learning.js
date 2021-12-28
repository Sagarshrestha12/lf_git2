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

