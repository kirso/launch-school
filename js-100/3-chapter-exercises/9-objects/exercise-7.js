// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:
let myProtoObj = {
	foo: 1,
	bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
	console.log(key);
});

for (let key in myObj) {
	if (myObj.hasOwnProperty(key)) {
		console.log(key);
	}
}
