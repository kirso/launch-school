function hello(greeting, name) {
	return greeting + " " + name;
}

function xyzzy() {
	return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello("Hi", "Grace");
let foo = xyzzy();

// Variables = hello, xyzzy, howdy, foo, greeting, name
// Object property names = a, b, c, d (array indexex for 3,4,5 are also properties)
// Primitives = 1,2,3,4,5, "Hi", "Grace", a,b,c,d, 0,1,2 (array indexes of [3,4,5])
// Objects = hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5], {}.
