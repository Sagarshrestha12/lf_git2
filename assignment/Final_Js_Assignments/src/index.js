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
let sheepSize = {
  smlSheepSize: {
    width: 50,
    height: 50,
  },
  medSheepSize: {
    width: 80,
    height: 60,
  },
  lrgSheepSize: {
    width: 90,
    height: 70,
  },
  supSheepSize: {
    width: 100,
    height: 80,
  },
};
let score = {
  playerSheep: 0,
  compSheep: 0,
  opponentSheep: 0,
};

let currentSheep = {
  current: 0,
  small: 0,
  med: 1,
  lrg: 2,
  sup: 3,
};
