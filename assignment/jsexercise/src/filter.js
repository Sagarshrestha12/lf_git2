function filter(arr, callback) {
  array = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      array.push(arr[i]);
    }
  }
  return array;
}
let arr = [1, 2, 3, 4, 5, 6, 10, 20];
let even = filter(arr, (value) => {
  if (value % 2 === 0) {
    return true;
  }
});
console.log(even);
let odd = filter(arr, (value) => {
  if (value % 2 !== 0) {
    return true;
  }
});
let divisblebyfi = filter(arr, (value) => {
  if (value % 5 === 0) {
    return true;
  }
});
console.log(divisblebyfi);
console.log(odd);
