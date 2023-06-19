// there is no method to capitalise the first letter of a string but there is a way how to do it.

function capitaliseFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(capitaliseFirst("mountain"));
