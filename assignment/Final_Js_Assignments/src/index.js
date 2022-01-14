let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

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

let ImagesArr = [
  "images/tiles.png",
  "images/button.png",
  "images/bushRight.png",
  "images/bushLeft.png",
  "images/plant2.png",
  "images/replay.png",
  "images/menu.png",
  "images/score.png",
  "images/small-white.png",
  "images/medium-white.png",
  "images/large-white.png",
  "images/super-large-white.png",
  "images/small-black.png",
  "images/medium-black.png",
  "images/large-black.png",
  "images/super-large-black.png",
  "images/qbutton.png",
  "images/wbutton.png",
  "images/ebutton.png",
  "images/rbutton.png",
  "images/ybutton.png",
  "images/tbutton.png",
  "images/ubutton.png",
  "images/ibutton.png",
  "images/obutton.png",
  "images/pbutton.png",
  "images/button1.png",
  "images/mode.png",
  "images/back-btn.png",
  "images/strategies_com.png",
  "images/playerVsplayer.png",
];

loadImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", (err) => reject(err));
    img.src = url;
  });

gameImages = {};
let promis = Promise.all(ImagesArr.map(loadImage));

promis.then((images) => {
  gameImages.tiles = images[0];
  gameImages.buttonImg = images[1];
  gameImages.bushRight = images[2];
  gameImages.bushLeft = images[3];
  gameImages.plant = images[4];
  gameImages.replay = images[5];
  gameImages.menu = images[6];
  gameImages.score = images[7];
  gameImages.smallWhite = images[8];
  gameImages.mediumWhite = images[9];
  gameImages.largeWhite = images[10];
  gameImages.superWhite = images[11];
  gameImages.smallBlack = images[12];
  gameImages.mediumBlack = images[13];
  gameImages.largeBlack = images[14];
  gameImages.superBlack = images[15];
  gameImages.qbutton = images[16];
  gameImages.wbutton = images[17];
  gameImages.ebutton = images[18];
  gameImages.rbutton = images[19];
  gameImages.ybutton = images[20];
  gameImages.tbutton = images[21];
  gameImages.ubutton = images[22];
  gameImages.ibutton = images[23];
  gameImages.obutton = images[24];
  gameImages.pbutton = images[25];
  gameImages.button1 = images[26];
  window.addEventListener("load", () => {
    loader.style.display = "none";
  });

  let game;
  compModeBtn.onclick = () => {
    popSound.play();
    gameState.current = gameState.game;
    gameMode.current = gameMode.computer;
    startScreen.style.display = "none";
    modeScreen.style.display = "none";
    canvasEle.style.display = "block";
    game = new SingleGame();
    game.gameloop();
  };

  dualModeBtn.onclick = () => {
    popSound.play();
    gameState.current = gameState.game;
    gameMode.current = gameMode.computer;
    startScreen.style.display = "none";
    modeScreen.style.display = "none";
    canvasEle.style.display = "block";
    game = null;
    game = new MultiPlayer();
    game.gameloop();
  };
});
