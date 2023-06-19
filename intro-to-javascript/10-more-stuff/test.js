let c = [1, 2];

let d = c;

c = [3, 4];

console.log(c);
console.log(d);

// for/in & for/of

let obj = { foo: 1, bar: 2, qux: "c" };

for (let key in obj) {
	console.log(key);
}

let arr = [10, 20, 30];

for (let value in arr) {
	console.log(value);
}

// Regex

console.log("bobcat".match(/x/));

console.log("bobcat".match(/[bct]/g))

;
