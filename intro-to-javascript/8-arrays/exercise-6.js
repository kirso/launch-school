// Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let array = ["a", "abcd", "abcde", "abc", "ab"];

function oddLengths(strings) {
	let newArr = strings.map((string) => string.length);
	return newArr.filter((odd) => odd % 2 != 0);
}
console.log(oddLengths(array));
