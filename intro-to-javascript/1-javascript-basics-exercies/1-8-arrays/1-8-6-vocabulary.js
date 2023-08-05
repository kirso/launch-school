let vocabulary = [
	["happy", "cheerful", "merry", "glad"],
	["tired", "sleepy", "fatigued", "drained"],
	["excited", "eager", "enthused", "animated"],
];

// Expected output:
// happy
// cheerful
// merry
// etc...

for (i = 0; i < vocabulary.length; i++) {
	let currentArr = vocabulary[i];
	for (j = 0; j < currentArr.length; j++) {
		console.log(currentArr[j]);
	}
}
