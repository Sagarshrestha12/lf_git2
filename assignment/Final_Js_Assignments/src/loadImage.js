let gameImages = {
  tiles: "images/tiles.png",
  buttonImg: "images/button.png",
  bushRight: "images/bushRight.png",
  bushLeft: "images/bushLeft.png",
  plant: "images/plant2.png",
  replay: "images/replay.png",
  menu: "images/menu.png",
  score: "images/score.png",
  smallWhite: "images/small-white.png",
  mediumWhite: "images/medium-white.png",
  largeWhite: "images/large-white.png",
  superWhite: "images/super-large-white.png",
  smallBlack: "images/small-black.png",
  mediumBlack: "images/medium-black.png",
  largeBlack: "images/large-black.png",
  superBlack: "images/super-large-black.png",
  qbutton: "images/qbutton.png",
  wbutton: "images/wbutton.png",
  ebutton: "images/ebutton.png",
  rbutton: "images/rbutton.png",
  ybutton: "images/ybutton.png",
  tbutton: "images/tbutton.png",
  ubutton: "images/ubutton.png",
  ibutton: "images/ibutton.png",
  obutton: "images/obutton.png",
  pbutton: "images/pbutton.png",
};

for (const key in gameImages) {
  let x = new Image();
  x.src = gameImages[key];
  gameImages[key] = x;
}
