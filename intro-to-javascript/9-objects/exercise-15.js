function bar(arg1, arg2) {
	let foo = "Hello";
	const qux = {
		abc: [1, 2, 3, [4, 5, 6]],
		def: null,
		ghi: NaN,
		jkl: foo,
		mno: arg1,
		pqr: arg2,
	};

	return qux;
}

let result = bar("Victor", "Antonina");

// variables: bar, foo, qux, arg1, arg2, result
// property names: abc, def, ghi, jkl, mno, pqr, array of indexes (0,1,2,3)
// Primitives: "Hello", 1,2,3, 4,5,6 (and array of indexes), abc,def,ghi,jkl,mno,pqr, null, NaN, "Victor", "Antonina
// Objects: bar {
// 	abc: [1, 2, 3, [4, 5, 6]],
// 	def: null,
// 	ghi: NaN,
// 	jkl: foo,
// 	mno: arg1,
// 	pqr: arg2,
// };

// [1, 2, 3, [4, 5, 6]]
// [4, 5, 6]
