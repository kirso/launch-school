let person = {
	name: "Bob",
	age: 30,
	height: "6 ft",
};

for (let property in person) {
	console.log(person[property]);
}

function convertString(input) {
	const lowerInput = input.toLowerCase();
	const result = "";

	lowerInput.forEach((char) => {
		const count = lowerInput.split(char).length - 1;
		console.log(count);
	});

	if (count > 1) {
		result += ")";
	} else result += "(";
}

convertString("Success");
