Number.isNaN(NaN);

Object.is(NaN, NaN);

function isNotANumber(value) {
	return value !== value;
}

console.log(isNotANumber(NaN));
