// For loop

function repeatFor(times, string) {
	let repeatString = "";
	for (let i = 0; i < times; i++) {
		repeatString += string;
	}
	return repeatString;
}

repeatFor(3, "ha");

// While loop (not working)

function repeatWhile(times, string) {
	let repetitions = "";
	while (times > 0) {
		repetitions += string;
		times--;
	}
	return repetitions;
}

repeatWhile(3, "ha"); // 'hahaha'

// Recursion (not working )

function repeatRecursion(times, string) {
	if (times < 0) {
		return "";
	}
	if (times === 1) {
		return string;
	} else return string + repeatRecursion(string, times - 1);
}

repeatRecursion(3, "ha");
