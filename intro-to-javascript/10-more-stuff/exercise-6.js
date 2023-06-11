let words = [
	"laboratory",
	"experiment",
	"flab",
	"Pans Labyrinth",
	"elaborate",
	"polar bear",
];

// function allMatches(words, pattern) {
// 	let matches = []
// 	let match = words.map((word) => {
// 		if (pattern.test(word) {
// 			matches.push(match)
// 		})
// 	})

function allMatches(words, pattern) {
	return words.filter((word) => {
		pattern.test(word);
	});
}
console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
