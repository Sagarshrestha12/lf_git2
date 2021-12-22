var number = [1, 2, 3, 4];
function transform(collection, transFunc) {
  // let num1 = [...number];
  let num1 = [];
  for (let x of number) {
    num1.push(transFunc(x));
  }
  return num1;
}
var output = transform(number, (num) => {
  return num * 2;
});
console.log(output);
