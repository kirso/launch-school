let array = ["a", "abcd", "abcde", "abc", "ab"];

function oddLengths(strings) {
	return strings.reduce((filteredArr, string) => {
		if (string.length % 2 !== 0) {
			filteredArr.push(string.length);
		}
		return filteredArr;
	}, []);
}
console.log(oddLengths(array));
