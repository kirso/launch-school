let readlineSync = require("readline-sync");
const MTR_TO_FEET = 10.7639;

let userChoice = readlineSync.question(
	"Select and type your unit of measurement (feet or meter)"
);

let length = readlineSync.question("Enter length of a room in meters:");
length = parseInt(length);

let width = readlineSync.question("Enter width of a room in meters:");
width = parseInt(width);

function displayArea(length, width) {
	let meters = length * width;
	let feet = meters * MTR_TO_FEET;

	switch (userChoice) {
		case "meter":
			console.log(`The are i ${meters} in meters`);
			break;
		case "feet":
			console.log(`The area is: ${feet.toFixed(2)} in feet. `);
	}
}

displayArea(length, width);
