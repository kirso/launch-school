let counter = 0;

while ((counter = 1)) {
	// this is an assignment, not a condition
	console.log(counter);
	counter += 1;

	if (counter > 2) {
		break; // never executes
	}
}
