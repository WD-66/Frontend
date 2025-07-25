// Splicing
// ========

// #### Objective:

// Learn how to use the `splice` and `toSpliced` methods in JavaScript to manipulate arrays.

// #### Instructions:

// 1.  **Remove the element at index 2 and add 35 and 36:**

//     *   The `splice` method can be used to remove elements, add elements,
//  or both.
//     *   Syntax: `array.splice(start, deleteCount, item1, item2, ...)`

// 2.  **Remove the element at index 1 and add b and c with toSpliced**

//     *   The `toSpliced` method creates a new array with elements added, removed, or both, without modifying the original array.
//     *   Syntax: `array.toSpliced(start, deleteCount, item1, item2, ...)`
// 3.  **Print the Results:**

//     *   Use `console.log` to print both the original and modified arrays to verify the results.
// Array 1: Use splice() method
const array1 = [10, 20, 30, 40, 50];
array1.splice(2, 1, 35, 36);
console.log('array1 after splice:', array1);

// Modify array1 in place by removing and adding elements, then print the result

// Array 2: Use toSpliced() method
// **Remove the element at index 1 and add b and c with toSpliced**
const array2 = ['x', 'y', 'z'];
// Create a modified copy of array2 and print both arrays
const newArray2 = array2.toSpliced(1, 1, 'b', 'c');
console.log('array2 after toSpliced:', array2);
console.log('new array 2:', newArray2);
