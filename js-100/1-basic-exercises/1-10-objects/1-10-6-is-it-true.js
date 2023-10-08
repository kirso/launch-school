let obj = {
	num: 42,
	"property name": "string value",
	true: false,
	fun: function () {
		console.log("Harr Harr!");
	},
};

for (let prop in obj) {
	if (prop === "true") {
		// true is a string value and therefore when used with "" it logs true
		console.log("It's true!");
	}
}
