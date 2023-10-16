const RLS = require("readline-sync");

// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// convert string to a number
// display the result of the operation

console.log("Welcome to the Calculator!");

let number1 = RLS.question("What is the first number?");

let number2 = RLS.question("What is the second number?");

let operation = RLS.question(
	"What is the operation you would like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide "
);

let output;

if (operation === "1") {
	output = Number(number1) + Number(number2);
} else if (operation === "2") {
	output = Number(number1) - Number(number2);
} else if (operation === "3") {
	output = Number(number1) * Number(number2);
} else if (operation === "4") {
	output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);
