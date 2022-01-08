let gameImages = {
  tiles: "images/tiles.png",
  buttonImg: "images/button.png",
  bushRight: "images/bushRight.png",
  bushLeft: "images/bushLeft.png",
  plant: "images/plant2.png",
  replay: "images/replay.png",
  menu: "images/menu.png",
  smallWhite: "images/small-white.png",
  mediumWhite: "images/medium-white.png",
  largeWhite: "images/large-white.png",
  superWhite: "images/super-large-white.png",
  smallBlack: "images/small-black.png",
  mediumBlack: "images/medium-black.png",
  largeBlack: "images/large-black.png",
  superBlack: "images/super-large-black.png",
};

for (const key in gameImages) {
  let x = new Image();
  x.src = gameImages[key];
  gameImages[key] = x;
}
