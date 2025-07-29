// ForEach
// =======

// **Objective:**

// Learn how to use the `forEach` method to iterate over an array in JavaScript. This exercise will involve creating a simple array and performing operations on each element.

// **Instructions:**

// 1.  **Initialize an Array of Numbers:**

//     *   Create an array called `numbers` containing the following
// values in order: `1`, `2`, `3`, `4`, `5`.
const numbers = [1, 2, 3, 4, 5];

// 2.  **Use the `forEach` Method to Print Each Number:**
//     *   Use the `forEach` method to iterate over `numbers`
// and print each number to the console.
numbers.forEach(num => {
  console.log(num);
});
// 3.  **Use the `forEach` Method to Calculate the Sum of the Numbers:**
//     *   Initialize a variable `sum` to `0`.
let sum = 0;
//     *   Use the `forEach` method to iterate over `numbers`,
//  adding each number to `sum`.
numbers.forEach(value => {
  sum += value;
});
//     *   Print the final value of `sum` to the console.
console.log('sum: ', sum);

// 4.  **Use the `forEach` Method to Create a New Array with Squared Values:**
//     *   Create an empty array called `squaredNumbers`.
const squaredNumbers = [];
//     *   Use the `forEach` method to iterate over `numbers`,
//  squaring each number and adding the squared value to `squaredNumbers`.
numbers.forEach(num => {
  squaredNumbers.push(num * num);
});

//     *   Print the `squaredNumbers` array to the console.
console.log('squaredNumbers:', squaredNumbers);
