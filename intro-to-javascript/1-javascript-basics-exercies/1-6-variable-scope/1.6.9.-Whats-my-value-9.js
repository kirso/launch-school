const a = 1;

function myFunction() {
	a = 2; // TypeError: can't be re-assigned due to `const`
} // no return statement

myFunction(a);
