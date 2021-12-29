function getRandomNumber(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

a=[1,2,3]
b=a
console.log(b)