import "./scatter";
let myInput = document.getElementById("inp");
myInput.addEventListener("change", (event) => {
  console.log(event.target.value);
});
myInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});

document.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
});
