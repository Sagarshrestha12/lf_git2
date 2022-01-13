function setsize() {
  canvas.width = window.width;
  canvas.height = window.height;
}
function getRandomNumber(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}