QUnit.test('sum of numbers', function(assert) {
	assert.equal(sumNumber(1, 5), 6, '1 + 5 = 6');
	assert.equal(sumNumber(2, 9), 11, '2 + 9 = 11');
	assert.equal(sumNumber(-5, 75), 70, '(-5) + 75 = 70');
	assert.equal(sumNumber(61, 8), 69, '61 + 8 = 69');
	assert.equal(sumNumber(14, -7), 7, '14 + (-7) = 7');
});

QUnit.test('sum of array', function(assert) {
	assert.equal(sumArray([5, 2, 1, 6, 9, 8]), 31, '5 + 2 + 1 + 6 + 9 + 8 = 31');
	assert.equal(sumArray([3, 16, -2]), 17, '3 + 16 + (-2) = 17');
	assert.equal(sumArray([4, -10 ]), -6, '4 + (-10) = -6');
	assert.equal(sumArray([1, 6, -7, -9, 3]), -6, '1 + 6 + (-7) + (-9) + 3 = -6');
	assert.equal(sumArray([10]), 10, '10 = 10');
});

QUnit.test('smallest of numbers', function(assert) {
	assert.equal(findSmallest(15, 10, 2), 2);
	assert.equal(findSmallest(75, 10001, 23), 23);
	assert.equal(findSmallest(897, 1, -5), -5);
	assert.equal(findSmallest(-15, 100, -2), -15);
	assert.equal(findSmallest(-150, -10, -2), -150);
});

QUnit.test('Farenheit to Celsius', function(assert) {
	assert.equal(farenheitToCelsius(77), 25);
	assert.equal(farenheitToCelsius(89), 32);
	assert.equal(farenheitToCelsius(120), 49);
	assert.equal(farenheitToCelsius(36), 2);
	assert.equal(farenheitToCelsius(52), 11);
});

QUnit.test('reverse the string', function(assert) {
	assert.equal(reverse("My house"), "esuoh yM");
	assert.equal(reverse("Birute"), "eturiB");
	assert.equal(reverse("Aleksandras"), "sardnaskelA");
	assert.equal(reverse("Jolanta"), "atnaloJ");
	assert.equal(reverse("Kauno miestas"), "satseim onuaK");
});
