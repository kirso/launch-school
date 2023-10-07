let destinations = [
	"Prague",
	"London",
	"Sydney",
	"Belfast",
	"Rome",
	"Aruba",
	"Paris",
	"Bora Bora",
	"Barcelona",
	"Rio de Janeiro",
	"Marrakesh",
	"New York City",
];

function contains(city, arr) {
	for (let i = 0; i < arr.length; i++) {
		currentCity = arr[i];
		if (currentCity === city) {
			return true;
		} else return false;
	}
}

console.log(contains("Marrak", destinations));
