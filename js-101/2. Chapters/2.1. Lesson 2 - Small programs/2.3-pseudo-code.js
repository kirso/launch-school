// Return concatenated strings

let strings = ["hi", "hello", "Hello world!"];

// For loop
function concatString(strings) {
	let newString = "";

	for (let i = 0; i < strings.length; i++) {
		newString += strings[i];
	}
	return newString;
}

console.log(concatString(strings));

// ForEach

let newerString = "";
strings.forEach((string) => {
	return (newerString += string);
});
console.log(newerString);

let newestString = "";

// While loop
function joinString(string) {
	let newestString = "";
	let i = 0;
	while (i < string.length) {
		newestString += string[i];
		i++;
	}
	console.log(newestString);
}

joinString(strings);

let integers = [1, 2, 3, 4, 5, 5, 0];

let newInt = [];

function newIntegers(int) {
	for (let i = 0; i < int.length; i += 2) {
		newInt.push(int[i]);
	}
	return newInt;
}

console.log(newIntegers(integers));

let string = "asdxkalxlakjsdfx";
let count = 0;
function occurrence(string) {
	for (let i = 0; i < string.length; i++) {
		let currentIndex = string[i];
		if (currentIndex === "x") {
			count += 1;
			console.log(count);
			if (count === 3) {
				return i;
			}
		}
	}
}

console.log(occurrence(string));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function merge(arr1, arr2) {
	let newArr = [];
	let evenIndex = 0;
	let oddIndex = 1;
	for (let i = 0; i < arr1.length * 2; i++) {
		if (arr1[i]) {
			let currNum = arr1[i]; // assigns currently looped element to a variable `currNum`
			newArr[evenIndex] = currNum; // assigns the current number to an index of the newArr array which starts at 0
			evenIndex += 2; // on each iteration, skip the next index and move to the next in line (0, 2, 4, 6)
		}
		if (arr2[i]) {
			let currNum = arr2[i];
			newArr[oddIndex] = currNum;
			oddIndex += 2;
		}
	}
	return newArr;
}

console.log(merge(arr1, arr2));

function mergeNew(arr1, arr2) {
	const newArr = [];
	for (let i = 0; i < arr1.length * 2; i++) {
		const iteration = i + 1; // assign
		if (i % 2 === 0) newArr.push(arr1[Math.floor(i / 2)]);
		console.log(Math.floor(i / 2));
		if (i % 2 === 1) newArr.push(arr2[Math.floor(i / 2)]);
		console.log(Math.floor(i / 2));
		console.log(`After iteration ${iteration}: `, { newArr });
	}
	return newArr;
}

console.log(mergeNew([1, 2, 3], [4, 5, 6]));
