// In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4];
console.log(array1.length); // 4 [1, 2, undefined, 4]

let array2 = [1];
array2.length = 5;
console.log(array2); // 5 [1, , , , ]

let array3 = [];
array3[-1] = [1];
console.log(array3.length); // 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
console.log(array4.length); // 3 [1,2,3]

let array5 = [];
array5[100] = 3;
console.log(array5.length); // 3 is in the 100th index position, but array length is its index count + 1 therefore resulting in 101
