var a = -5,
	b = -100,
	value = (a * a) + (2 * a * b) - (b * b);
console.log(value)
if (value < 0) {
	console.log('wynik ujemny');
} else if (value > 0) {
	console.log('wynik dodatni');
} else {
	console.log('wynik równy zero');
}