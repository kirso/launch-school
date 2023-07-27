function multiply(left, right) {
  // Variables -> multiply, left, right
  let product = left * right // product, left, right
  return product // product
}

function getNumber(prompt) {
  // getNumber, prompt
  return parseFloat(question(prompt)) // parseFloat, question, prompt
}

let left = getNumber("Enter the first number: ") // left, getNumber
let right = getNumber("Enter the second number: ") // right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`) // console, left, right, multiply

function foo(bar, qux) {
  console.log(bar)
  console.log(qux)
}

foo(42, 3.1415, 2.718)
