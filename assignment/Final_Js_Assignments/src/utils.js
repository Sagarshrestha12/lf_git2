/**
 *
 * @param {number} min minimum number of generated random number
 * @param {number} max maximum number of generated random number
 * @returns{number} random number between min and max
 */
function getRandomNumber(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
