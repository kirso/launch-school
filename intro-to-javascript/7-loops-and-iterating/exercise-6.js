// Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

function factorial(num) {
	// Factorial
	// decrement the number & multiply by each decrement (factorial(3) -> 1 	// initialise a variable
	if (num === 0) {
		return 1;
	} else {
		return factorial(num - 1) * num;
	}
}
console.log(factorial(1)); // => 1
console.log(factorial(2)); // => 2
console.log(factorial(3)); // => 6 3 * 2 * 1
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(6)); // => 720
console.log(factorial(7)); // => 5040
console.log(factorial(8)); // => 40320
