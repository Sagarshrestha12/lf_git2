let con = document.getElementById("hello");
// con.innerHTML = "sagar";
con.style.width = "500px";
con.style.height = "500px";
con.style.border = "2px solid blue";
con.style.position = "relative";
points = [
  { x: 20, y: 20 },
  { x: 100, y: 100 },
  { x: 200, y: 200 },
  { x: 300, y: 300 },
  { x: 400, y: 300 },
  { x: 250, y: 250 },
];

for (let p of points) {
  let pl = document.createElement("div");
  pl.style.position = "absolute";
  pl.style.top = p.x + "px";
  pl.style.left = p.y + "px";
  pl.style.width = "15px";
  pl.style.height = "15px";
  pl.style.borderRadius = "15px";
  pl.style.background = "blue";
  con.appendChild(pl);
  pl.addEventListener("click", () => {
    pl.style.backgroundColor = "#453";
  });
}
