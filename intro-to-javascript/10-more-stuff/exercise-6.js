let words = [
	"laboratory",
	"experiment",
	"flab",
	"Pans Labyrinth",
	"elaborate",
	"polar bear",
];

function allMatches(words, pattern) {
	let matches = [];
	words.forEach((word) => {
		if (pattern.test(word)) matches.push(word);
	});
	return matches;
}
console.log(allMatches(words, /lab/)); // =>
