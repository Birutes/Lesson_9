function sumNumber(a, b) {
	var sum = a + b;
	return sum;
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

function farenheitToCelsius(a){
	var total = Math.round((a - 32) * 5 / 9);
	return total;
}

function reverse(a) {
  var b = '';
  for (var i = a.length - 1; i >= 0; i--)
    b += a[i];
  return b;
}