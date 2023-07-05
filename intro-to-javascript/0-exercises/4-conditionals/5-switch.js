let animal = "horse";

switch (animal) {
	case "duck":
		console.log("quack");
	case "squirrel":
		console.log("nook nook");
	case "horse":
		console.log("neigh");
	case "bird":
		console.log("tweet tweet");
		break;
	default:
		console.log("*cricket*");
}

// Switch statement executes all others after the the match in switch argument.If we don't want that behavior we can place a break statement.
