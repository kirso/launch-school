// What does this code output to the console?

function isArrayEmpty(arr) {
	if (arr) {
		console.log("Not Empty")
	} else {
		console.log("Empty")
	}
}

isArrayEmpty([])

// [] is a truthy value despite being empty. Only " " is falsy.
