function myFunction() {
	let a = 1;

	if (true) {
		console.log(a); // Error: can't access 'a' before initializing
		let a = 2;
		console.log(a);
	}
}

myFunction();
