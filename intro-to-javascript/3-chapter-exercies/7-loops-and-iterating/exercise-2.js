function factorial(num) {
	// initialise a variable
	let result = 1;
	// 5 let i = 5; 5 > 0 -> true; i -= 1 -> 4 => result 1 *= 4 = 4
	// 5 let i = 5; 4 > 0 -> true; i -= 1 -> 3 => result *= 3
	//
	for (let i = num; i > 0; i -= 1) {
		result *= i;
	}
	return result;
}

console.log(factorial(1)); // => 1
console.log(factorial(2)); // => 2
console.log(factorial(3)); // => 6
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(6)); // => 720
console.log(factorial(7)); // => 5040
console.log(factorial(8)); // => 40320
