function startOrEnd(img, ctx) {
  ctx.drawImage(img, 0, 0);
  ctx.font = "48px serif";
  ctx.fillStyle = "white";
  ctx.fillText("Start Game", 130, 300);
  ctx.font = "24px serif";
  ctx.fillStyle = "red";
  ctx.fillText("Press 'space' key to start game", 80, 620);
  document.addEventListener("keydown", (event) => {
    console.log(event.code);
    if (event.code === "Space") {
      ctx.clearRect(0, 0, 540, 772);
      ctx.drawImage(img, 0, 0);
    }
  });
}
