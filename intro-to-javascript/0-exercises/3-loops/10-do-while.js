let counter = 0;

while (counter > 0) {
	console.log("Woot!"); // this actually never executes because the condition above is false.
	counter -= 1;
}

do {
	console.log("Wooot!"); // this executes once because the condition is only settled later.
	counter -= 1;
} while (counter > 0);
