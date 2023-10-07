function extractLanguage(language) {
	return language.split("_")[0];
}

extractLanguage("en_US.UTF-8"); // 'en'
extractLanguage("en_GB.UTF-8"); // 'en'
extractLanguage("ko_KR.UTF-16"); // 'ko'
