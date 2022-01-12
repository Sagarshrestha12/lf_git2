let main = document.getElementById("main_container");
let canvasEle = document.getElementById("canvas");
canvasEle.style.display = "none";

let startScreen = document.createElement("div");
startScreen.style.height = window.innerHeight + "px";
startScreen.className = "start_screen";
main.appendChild(startScreen);

let startBtn = document.createElement("button");
startBtn.className = "start_btn";
startScreen.appendChild(startBtn);

let modeScreen = document.createElement("div");
modeScreen.className = "mode_screen";
modeScreen.style.height = window.innerHeight + "px";
main.appendChild(modeScreen);

let backBotton = document.createElement("button");
backBotton.className = "back_btn";
modeScreen.appendChild(backBotton);

let compModeBtn = document.createElement("button");
compModeBtn.className = "comp_mode_btn";
modeScreen.appendChild(compModeBtn);

let dualModeBtn = document.createElement("button");
dualModeBtn.className = "dual_mode_btn";
modeScreen.appendChild(dualModeBtn);

startBtn.onclick = () => {
  showModeScreen();
  backgroundAudio.autoplay = "true";
  backgroundAudio.loop = "true";
  backgroundAudio.volume = 0.4;
  backgroundAudio.play();
};

backBotton.onclick = () => {
  if (gameState.current == gameState.game) {
    showModeScreen();
  } else if (gameState.current == gameState.option) {
    showStartScreen();
  }
};

function showModeScreen() {
  popSound.play();
  gameState.current = gameState.option;
  startScreen.style.display = "none";
  modeScreen.style.display = "block";
  canvasEle.style.display = "none";
  score.playerSheep = 0;
  score.compSheep = 0;
  score.opponentSheep = 0;
}

function showStartScreen() {
  popSound.play();
  gameState.current = gameState.start;
  startScreen.style.display = "block";
  modeScreen.style.display = "none";
  canvasEle.style.display = "none";
}
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

function computerModeScreen() {
  popSound.play();
  gameState.current = gameState.game;
  gameMode.current = gameMode.computer;
  startScreen.style.display = "none";
  modeScreen.style.display = "none";
  canvasEle.style.display = "block";
  game = null;
  game = new SingleGame();
  game.gameloop();
  score.playerSheep = 0;
  score.compSheep = 0;
}

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

function multiplayerModeScreen() {
  popSound.play();
  gameState.current = gameState.game;
  gameMode.current = gameMode.computer;
  startScreen.style.display = "none";
  modeScreen.style.display = "none";
  canvasEle.style.display = "block";
  game = null;
  game = new MultiPlayer();
  game.gameloop();
  score.playerSheep = 0;
  score.opponentSheep = 0;
}
