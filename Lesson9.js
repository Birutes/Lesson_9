function sumNumber(a, b) {
	return a + b;
}

function sumArray(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total;
}

function findSmallest(a, b, c) {
	return Math.min(a, b, c);
}

function farenheitToCelsius(farenheit){
	return Math.round((farenheit - 32) * 5 / 9);;
}

function reverse(a) {
  var b = '';
  for (var i = a.length - 1; i >= 0; i--)
    b += a[i];
  return b;
}