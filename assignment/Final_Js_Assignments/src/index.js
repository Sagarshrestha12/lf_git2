let canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

let gameState = {
  current: -1,
  start: 0,
  option: 1,
  game: 2,
  gameover: 3,
};

let gameMode = {
  computer: 0,
  player: 1,
};
