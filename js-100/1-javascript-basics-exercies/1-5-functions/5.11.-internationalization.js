function localGreet(locale) {
	let language = locale.split("_")[0];
	let region = locale.split("_")[1].split(".")[0];

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

	switch (region) {
		case "FR":
			return "Salut!";
		case "MA":
			return "Salut!";
		case "CA":
			return "Salut!";
		default:
			return greet(language);
	}
}

localGreet("fr_FR.UTF-8"); // 'Salut!'
localGreet("fr_CA.UTF-8"); // 'Salut!'
localGreet("fr_MA.UTF-8"); // 'Salut!'
localGreet("en_GB.UTF-8"); // "Hi"
