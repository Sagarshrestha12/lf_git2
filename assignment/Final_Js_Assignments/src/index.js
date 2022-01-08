let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let gameState = {
  current: -1,
  start: 0,
  option: 1,
  game: 2,
  gameover: 3,
};
let tile = {
  height: window.innerHeight / 6,
  width: window.innerWidth / 10,
};

let gameMode = {
  current: -1,
  computer: 0,
  player: 1,
};
