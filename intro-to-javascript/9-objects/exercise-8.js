let objToCopy = {
	foo: 1,
	bar: 2,
	qux: 3,
};

function copyObj(sourceObj, keys) {
	// takes two arguments, object & array
	let destinationObj = {}; // initializes destination as an empty object

	if (keys) {
		// if array is passed check?
		keys.forEach((key) => {
			// for each passed array into the argument, take the element in the array and do the action below ->
			destinationObj[key] = sourceObj[key]; // Use keys and insert them into the new destinationObj.
		});
		return destinationObj;
	}
	return Object.assign(destinationObj, sourceObj);
}

let newObj = copyObj(objToCopy);
console.log(newObj); // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, ["foo", "qux"]);
console.log(newObj2); // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, ["bar"]);
console.log(newObj3); // => { bar: 2 }

console.log(objToCopy);
