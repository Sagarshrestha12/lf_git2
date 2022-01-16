function endImage(score, func) {
  // ctx.drawImage(img, 0, 0);
  ctx.font = "48px serif";
  ctx.fillStyle = "white";
  ctx.fillText(`Score:${score}`, 130, 100);
  ctx.font = "48px serif";
  ctx.fillStyle = "white";
  ctx.fillText("Game Over", 130, 300);
  ctx.font = "24px serif";
  ctx.fillStyle = "red";
  ctx.fillText("Press 'space' key to play Again", 80, 620);
  // window.removeEventListener("keydown", startHandler);
  window.addEventListener("keydown", (event) => {
    console.log(event.code);
    if (event.code === "Space") {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      currentPosition.current = 0;
      window.removeEventListener("keydown", func);
      gameStart();
    }
  });
}
