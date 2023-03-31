function multiply(first, second) {
  return first * second
}

function getNumber(prompt) {
  let readlineSync = require("readline-sync")
  return parseInt(readlineSync.question(prompt), 10)
}

let first = getNumber("Enter the first number: ")
let second = getNumber("Enter the second number: ")
console.log(`${first} * ${second} = ${multiply(first, second)}`)
