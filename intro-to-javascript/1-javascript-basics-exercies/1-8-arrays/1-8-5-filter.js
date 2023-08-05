let scores = [96, 47, 113, 89, 100, 102];

function count() {
	let aggregate = 0;
	scores.filter((e) => {
		e > 100 ? (aggregate += 1) : false;
	});
	return aggregate;
}

count();

let aggregate = 0;
for (let i = 0; i < scores.length; i++) {
	if (scores[i] >= 100) {
		aggregate += 1;
	}
}

return aggregate;
