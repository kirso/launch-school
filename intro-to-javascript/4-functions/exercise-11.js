function multiply(left, right) {
  let product = left * right
  return product
}

function getNumber(prompt) {
  return parseFloat(question(prompt))
}
let left = getNumber("Enter the first number: ")
let right = getNumber("Enter the second number: ")
console.log(`${left} * ${right} = ${multiply(left, right)}`)


//  are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your reasoning.

// They are not. left/right on the top are local variables as they are part of the multiply function body.

// On the other hand, left/right on line 9 & 10 are variables in the global scope and can be accessed via console.log.