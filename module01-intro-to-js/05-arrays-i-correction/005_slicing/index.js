// Slicing
// =======

// #### Objective:

// Learn how to use the `slice` method in JavaScript to extract portions of an array without modifying the original array.

// #### Instructions:

// 1.  You will be given an array.
// 2.  Use the `slice` method to extract
// different portions of the array.
// 3.  Print the original array and the sliced portions
//  to the console.

// Is the original array affected?
const array = [2, 4, 6, 8, 10, 12, 14, 16];
// Extract different portions of the array and print the results

// items from index 2-4 (including 4)
const array1 = array.slice(2, 5);
// console.log('array1:', array1);

// items from index 0-5 (including 5)
const array2 = array.slice(0, 6);
// console.log('array2:', array2);

// last 2 items
const array3 = array.slice(-2);
console.log('array3:', array3);

// console.log(array);
