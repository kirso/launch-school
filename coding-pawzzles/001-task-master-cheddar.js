let cat = {
	name: "Cheddar",
	coat: "orange tabby",
};

let petNames = ["Cheeseball", "Fuzzball", "Boss"];

for (cat.name of petNames) {
	console.log(cat.name);
}

console.log(cat);
