let number = 1
let limit = 99

// while (number <= limit) {
// 	if (number % 2 === 0) {
// 		console.log(number)
// 	}
// 	number++
// }

for (let number = 1; number < 100; number += 1) {
	if (number % 2 === 1) {
		continue
	}
	console.log(number)
}
