console.log(true);
console.log(false);

function makeLonger(string, longer) {
	if (longer) {
		return string + string;
	} else {
		return string;
	}
}

makeLonger("abc", true); // 'abcabc
makeLonger("xyz", false); // 'xyz'

function isDigit(char) {
	if (char >= "0" && char <= "9") {
		return true;
	} else {
		return false;
	}
}

isDigit("5"); // true
isDigit("a"); // false

if (value === true) {
	console.log("It's true");
} else if (value === false) {
	console.log("It's false!");
} else {
	console.log("It's not true or");
}

// Shortcircuiting
let hello = "asdf";

if (hello && hello.length > 0) {
	console.log(`Hi, ${hello}.`);
} else {
	console.log("Hello, whoever you are.");
}
