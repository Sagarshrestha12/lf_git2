var fruits = [
  { id: 1, names: "Banana", color: "Yellow" },
  { id: 2, name: "Apple", color: "Red" },
];
function searchByName(arr, value) {
  for (let obj of arr) {
    for (let ke in obj) {
      if (String(obj[ke]).toLowerCase() === value.toLowerCase()) {
        return obj;
      }
    }
  }
}
var y = searchByName(fruits, "apple");
console.log(y);
// console.log(typeof fruits[0]["name"]);
function searchByKey(arr, key) {
  for (let obj of arr) {
    for (let k of Object.keys(obj)) {
      if (String(k) === key) {
        return obj;
      }
    }
  }
}
console.log(searchByKey(fruits, "names"));
