function greet(code) {
	switch (code) {
		case "en":
			return "Hi!";
		case "fr":
			return "Salut!";
		case "pt":
			return "Olá!";
		case "de":
			return "Hallo!";
		case "sv":
			return "Hej!";
		case "af":
			"Haai!";
	}
}

greet("en"); // 'Hi!'
greet("fr"); // 'Salut!'
greet("pt"); // 'Olá!'
greet("de"); // 'Hallo!'
greet("sv"); // 'Hej!'
greet("af"); // 'Haai!'
