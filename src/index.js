module.exports = function getZerosCount(number) {
  var zero = 0;
  var a = 5;
  while (number / a >= 1) {
    zero += Math.floor(number / a);
    a *= 5;
  }
  return zero;
}
