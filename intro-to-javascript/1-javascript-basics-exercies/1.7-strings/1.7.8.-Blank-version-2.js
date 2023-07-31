function isBlank(string) {
	return string.length === 0 || string.includes(" ");

	// return string.trim().length === 0; using `trim()` method
}

isBlank("mars"); // false
isBlank("  "); // true
isBlank(""); // true
