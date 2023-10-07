let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0); // true

let isMoving = (brakingForce < acceleration && speed > 0) || acceleration > 0; // needs parenthesis

console.log(isMoving);
