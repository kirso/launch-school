function greet() {
	console.log(greeting() + ", " + recipient() + "!");
}

function greeting() {
	return "Good morning";
}

function recipient() {
	return "Launch School";
}

greet(); // logs: Hello, world!
greet("Salutations"); // logs: Salutations, world!
greet("Good morning", "Launch School"); // logs: Good morning, Launch School!
