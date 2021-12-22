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
];
function partition(array, start_index, end_index) {
  let pivot = array[start_index];
  let st = start_index;
  let lt = end_index;
  while (st < lt) {
    while (array[st] <= pivot) {
      st += 1;
    }
    while (array[lt] > pivot) {
      lt -= 1;
    }
    if (st < lt) {
      [array[st], array[lt]] = [array[lt], array[st]];
    }
  }
  st -= 1;
  [array[start_index], array[st]] = [array[st], array[start_index]];
  return st;
}
function quicksort_Child(array, start, end) {
  if (start < end) {
    index = partition(array, start, end);
    quicksort_Child(array, start, index - 1);
    quicksort_Child(array, index + 1, end);
  } else {
    return 1;
  }
}
function quicksort(array) {
  quicksort_Child(array, 0, array.length - 1);
}

