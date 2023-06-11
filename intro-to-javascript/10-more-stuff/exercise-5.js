function doSomething(string) {
	return string
		.split(" ") // splits the content of an argument and creates an array with 1 or more items
		.reverse() // reverses the order of items in the array
		.map((value) => value.length); // loops through the values in the array and returns the length of the values
}

console.log(doSomething("hihello"));
