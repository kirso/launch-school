let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1,4,3] 

// arrays are objects. When we re-assign the array to a different variable, it uses a pointer. When mutating arrays that have the same pointer to the same memory address, we are also mutating the array that has been previously assigned. 
