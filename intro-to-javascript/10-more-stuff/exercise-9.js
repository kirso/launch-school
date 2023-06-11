function isMinusZero(value) {
	return value === 0 && 1 / value === -Infinity;
}

console.log(isMinusZero(0));
