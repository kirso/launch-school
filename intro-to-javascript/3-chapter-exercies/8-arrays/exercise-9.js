// Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function all(arr1, arr2, arr3) {
	if (arr1.includes(3)) {
		return true;
	} else if (arr2.includes(3)) {
		return true;
	} else if (arr3.includes(3)) {
		return true;
	}
}

console.log(all(numbers1, numbers2, numbers3));
