const array1 = [1, 2, 3, 4];
function reducer(array, func, intial_value) {
  // let intial_value=intial_value;
  let accumulator;
  if (intial_value == undefined) {
    accumulator = array[0];
    for (let i = 1; i < array.length; i++) {
      accumulator = func(accumulator, array[i]);
    }
  } else {
    accumulator = intial_value;
    for (let i = 0; i < array.length; i++) {
      accumulator = func(accumulator, array[i]);
    }
  }

  return accumulator;
}
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(
  reducer(array1, (intial_value, data) => {
    return intial_value + data;
  })
);
