let cities = [
	"Istanbul",
	"Los Angeles",
	"Tokyo",
	null,
	"Vienna",
	null,
	"London",
	"Beijing",
	null,
];

for (let i = 0; i < cities.length; i++) {
	let city = cities[i];
	if (city === null) {
		continue;
	}
	console.log(city.length);
}
