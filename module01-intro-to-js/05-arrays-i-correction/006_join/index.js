// Join
// ====

// #### Objective:

// Learn how to use the `join` method in JavaScript to create a string from the elements of an array.

// #### Instructions:

// 1.  You will be given an array of strings.
// 2.  Use the `join` method to create different strings by joining the array elements with various delimiters.
// 3.  Print the original array and the resulting strings to the console.
const array = ['apple', 'banana', 'cherry', 'date'];

// Create different strings by joining the array elements with various delimiters
// Default delimiter (comma)
const comma = array.join();
console.log('comma: ', comma);

// Using dash as delimiter
const dash = array.join('-');
console.log('dash:', dash);

// Using space as delimiter;
const space = array.join(' ');
console.log('space: ', space);

// Using ' and ' as delimiter
const and = array.join(' and ');
console.log('and', and);

// Without any delimiter
const none = array.join('');
console.log('none:', none);
