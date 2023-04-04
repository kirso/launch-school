// Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

function logThis(int) {
	if (int >= 0 && int <= 50) {
		console.log(`${int} is between 0 and 50`)
	} else if (int >= 51 && int <= 100) {
		console.log(int + " is between 51 and 100")
	} else if (int > 100) {
		console.log(int + " is higher than 100")
	} else if (int < 0) {
		console.log(int + " is less than 0")
	}
}

logThis(-10000000000)
