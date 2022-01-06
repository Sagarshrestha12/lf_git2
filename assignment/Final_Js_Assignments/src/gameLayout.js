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

startBtn.onclick = () => {
  gameState.current = 0;
  startScreen.style.display = "none";
};
