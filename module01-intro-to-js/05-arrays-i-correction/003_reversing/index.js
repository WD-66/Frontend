// Reversing
// =========

// #### Objective:

// Learn how to use the `reverse` and `toReversed` methods in JavaScript to manipulate arrays.

// #### Instructions:

// 1.  **Reverse the First Array in Place:**

//     *   The `reverse` method reverses the array in place,
// which means the original array is modified.
//     *   For example, `array1.reverse()` will change `array1` from `[1, 2, 3, 4, 5]` to `[5, 4, 3, 2, 1]`.
// 2.  **Create a Reversed Copy of the Second Array:**

//     *   The `toReversed` method creates a new array that is the reversed version of the original array.
//     *   This method does not modify the original array.
//     *   For example, `array2.toReversed()` will return `['e', 'd', 'c', 'b', 'a']` while `array2` remains `['a', 'b', 'c', 'd', 'e']`.
// 3.  **Print the Results:**

//     *   Use `console.log` to print both the original and modified arrays to verify the results.
// Array 1: Use reverse() method
const array1 = [1, 2, 3, 4, 5];
// Reverse array1 in place and print the result
array1.reverse();
console.log('array1 after reverse:', array1);

// Array 2: Use toReversed() method
const array2 = ['a', 'b', 'c', 'd', 'e'];
const reverseArray2 = array2.toReversed();
console.log('array2 after toReversed:', array2);
console.log('reverse array2', reverseArray2);
