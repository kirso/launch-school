function calculateBMI(height, weight) {
	let heightInMeters = height / 100;
	let bmi = weight / heightInMeters ** 2;
	return bmi.toFixed(2);
}

calculateBMI(180, 80);

// Test
