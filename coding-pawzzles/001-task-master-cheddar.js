let cat = {
	name: "Cheddar",
	coat: "orange tabby",
};

let petNames = ["Cheeseball", "Fuzzball", "Boss"];

for (cat.name of petNames) {
	console.log(cat.name);
}

console.log(cat);

// the object property is used as the assignment target during the for loop iteration. This causes the mutation of the cat object.
