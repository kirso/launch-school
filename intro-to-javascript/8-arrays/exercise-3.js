// Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

let myArray = [
	[1, 3, 6, 11],
	[4, 2, 4],
	[9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i++) {
	for (let j = 0; j < myArray[i].length; j++) {
		let value = myArray[i][j];
		if (value % 2 === 0) {
			console.log(value);
		}
	}
}

// myArray.forEach((arr) => {
// 	arr.forEach((nestedArr) => {
// 		if (nestedArr % 2 === 0) {
// 			console.log(nestedArr);
// 		}
// 	});
// });
