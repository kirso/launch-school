let nestedArray = [
	["title", "Duke"],
	["name", "Nukem"],
	["age", 33],
];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

console.log(Object.assign({}, nestedArray));

let obj = {};

for (let i = 0; i < nestedArray.length; i++) {
	let item = nestedArray[i];
	obj[item[0]] = item[1];
}

console.log(obj);
