let readlineSync = require("readline-sync");
let age = readlineSync.question("How old are you? ");
age = parseInt(age);

console.log(`You are ${age} years old.`);
for (let i = 10; i <= 50; future += 10) {
	console.log(`In ${future} years, you will be ${age + future} years old.`);
}
