const RLS = require("readline-sync");

let bill = RLS.question("What is the total bill? ");
bill = Number(bill);

let tip = parseFloat(RLS.question("What is the tip %? "));
tip = Number(tip) / 100;

let tipAmount = bill * tip;
let total = bill + tipAmount;

console.log(`The tip is ${tipAmount}`);
console.log(`The total is: ${total}`);
