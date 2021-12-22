function partition(array, start_index, end_index, key) {
  let pivot = array[start_index][key];
  let st = start_index;
  let lt = end_index;
  while (st < lt) {
    while (array[st][key] <= pivot) {
      st += 1;
    }
    while (array[lt][key] > pivot) {
      lt -= 1;
    }
    if (st < lt) {
      [array[st][key], array[lt][key]] = [array[lt][key], array[st][key]];
    }
  }
  st -= 1;
  [array[start_index][key], array[st][key]] = [
    array[st][key],
    array[start_index][key],
  ];
  return st;
}
function quicksort_Child(array, start, end, key) {
  if (start < end) {
    index = partition(array, start, end, key);
    quicksort_Child(array, start, index - 1, key);
    quicksort_Child(array, index + 1, end, key);
  } else {
    return 1;
  }
}
function quicksort(array, key) {
  quicksort_Child(array, 0, array.length - 1, key);
}

function sortBy(array, key) {
  // for (let obj in array){
  quicksort(array, key);
  return array;
}
var arr = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Mary",
  },
  {
    id: 3,
    name: "Andrew",
  },
  {
    id: 5,
    name: "Bishal",
  },
];
// console.log(arr[0]["id"]);
// copy(arr, arra2);
arra2 = JSON.parse(JSON.stringify(arr));
console.log("The original array is ", arr);
console.log(sortBy(arra2, "name"));
