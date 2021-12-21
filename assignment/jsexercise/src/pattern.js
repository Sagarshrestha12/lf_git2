x = "*";
// for (let i = 0; i < 5; i++) {
//   console.log(x);
//   x = x + " *";
// }

for (let i = 5; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    process.stdout.write(`${x} `);
  }
  console.log();
}
