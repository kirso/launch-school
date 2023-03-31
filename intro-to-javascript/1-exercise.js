function changeFirstElement(arr) {
  arr[0] = 5
}

let oneToFive = [1, 2, 3, 4, 5]
changeFirstElement(oneToFive)

console.log(oneToFive)

function addToArray(arr) {
  return arr.concat(10)
}

console.log(addToArray(oneToFive))

console.log(oneToFive)

// let add = (a, b) => a + b
// let getNumber = (text) => {
//   let input = prompt(text)
//   return Number(input)
// }

// let number1 = getNumber("Enter a number: ")
// let number2 = getNumber("Enter another number: ")
// console.log(add(number1, number2))

let bar = 1
function foo() {
  let bar = 2
}

foo()
console.log(bar)


