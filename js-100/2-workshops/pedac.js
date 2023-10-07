function multisum(num) {
	let sum = 0
	for (let count = 1; count <= num; count += 1) {
		if (count % 3 === 0 || count % 5 === 0) {
			sum += count
		}
	}
	console.log(sum)
	return sum
}

// function multisum(num) {
// 	let multiples = []

// 	for (let count = 1; count <= num; count += 1) {
// 		multiples.push(count)
// 	}

// 	multiples = multiples.filter((elem) => elem % 3 === 0 || elem % 5 === 0)

// 	let sum = multiples.reduce((acc, val) => acc + val, 0)
// 	console.log(sum)
// 	return sum
// }

multisum(3) // 3
multisum(5) // 8
multisum(10) // 33
multisum(1000) // 234168
