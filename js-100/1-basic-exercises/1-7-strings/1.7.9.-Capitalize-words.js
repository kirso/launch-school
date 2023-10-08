function capitalize(string) {
	let words = string.split(" ");
	let capitalized = [];

	for (i = 0; i < words.length; i++) {
		word = words[i];
		capitalized.push(word[0].toUpperCase() + word.slice(1));
	}
	return capitalized.join(" ");
}

capitalize("launch school tech & talk");
