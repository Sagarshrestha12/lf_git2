images = [1, 3, 3];
for (let i = 0; i < images.length; i++) {
  let myid = setInterval(() => {
    console.log(i);
  }, 1000);
  setTimeout(() => {
    clearInterval(myid);
  }, 3000);
}
