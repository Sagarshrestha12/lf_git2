let myElement = document.getElementById("ball");
myElement.style.border = "2px solid red";
myElement.style.height = "500px";
myElement.style.width = "500px";
myElement.style.position = "relative";
myElement.style.marginLeft = "auto";
myElement.style.marginRight = "auto";
myElement.style.marginTop = "100px";
function motion() {
  const ball = document.createElement("div");
  ball.style.height = "30px";
  ball.style.width = "30px";
  ball.style.marginLeft = "47%";
  ball.style.position = "absolute";
  ball.style.background = "blue";
  ball.style.borderRadius = "30px";
  ball.style.top = "0px";
  myElement.appendChild(ball);
  let position = 0;
  let gravity = 1;
  setInterval(() => {
    ball.style.top = position + "px";
    if (position >= 470) {
      gravity = -1;
    } else if (position === 0) {
      gravity = 1;
    }
    position = position + gravity;
  }, 5);
}
myElement.innerHTML = "Start";
myElement.addEventListener("click", motion);
