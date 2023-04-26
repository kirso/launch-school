let readlineSync = require("readline-sync");
let age = readlineSync.question("How old are you? ");
age = parseInt(age);

console.log(`You are ${age} years old.`);
// initialise a start variable years (starts with 10), condition with 50, iterate by adding 10 each time.
for (let years = 10; years <= 50; years += 10) {
	console.log(`In ${years} years, you will be ${years + age} years old.`);
}
