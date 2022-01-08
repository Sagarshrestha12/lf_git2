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

let groundBaseMap = [
  [2, 3, 0, 1, 0, 2, 0, 2, 0, 3],
  [3, 2, 1, 0, 3, 2, 0, 2, 0, 3],
  [3, 2, 2, 0, 3, 1, 2, 0, 3, 0],
  [3, 0, 3, 2, 3, 2, 3, 2, 1, 3],
  [3, 0, 2, 2, 1, 0, 3, 0, 3, 0],
];
