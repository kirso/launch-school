// Refactor this statement to use an if statement instead.

return foo() ? "bar" : qux()

if (foo() === true) {
	return "bar"
} else {
	return qux()
}
