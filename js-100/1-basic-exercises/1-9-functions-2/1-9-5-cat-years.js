function catAge(age) {
	let first = 15;
	let second = 9;
	let subsequent = 4;
	switch (age) {
		case 0:
			return 0;
		case 1:
			return first;
		case 2:
			return first + second;
		default:
			return first + second + (age - 2) * subsequent;
	}
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
