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
};

backBotton.onclick = () => {
  if (gameState.current == gameState.game) {
    showModeScreen();
  } else if (gameState.current == gameState.option) {
    showStartScreen();
  }
};

function showModeScreen() {
  gameState.current = gameState.option;
  startScreen.style.display = "none";
  modeScreen.style.display = "block";
}

function showStartScreen() {
  gameState.current = gameState.start;
  startScreen.style.display = "block";
  modeScreen.style.display = "none";
}

compModeBtn.onclick = () => {
  gameState.current = gameState.game;
  gameMode.current = gameMode.computer;
  modeScreen.style.display = "none";
  canvasEle.style.display = "block";
  let game = new SingleGame();
  game.gameloop();
};
