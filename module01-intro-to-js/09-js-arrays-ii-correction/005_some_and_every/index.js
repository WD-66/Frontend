// Some and Every
// ==============

// **Objective:**

// Learn how to use the `some` and `every` methods to test whether some or all elements in an array pass the provided function's test in JavaScript.

// **Instructions:**

// 1.  **Initialize an Array of Numbers:**

//     *   Create an array called `numbers` containing the following values in order: `4`, `8`, `15`, `16`, `23`, `42`.
const numbers = [4, 8, 15, 16, 23, 42];
// 2.  **Use the `some` Method to Check for Numbers Greater Than 20:**

//     *   Use the `some` method to check if there are any numbers in
// `numbers` that are greater than `20`.
const anyGreaterThan20 = numbers.some(num => num > 20);
//     *   Print the result to the console (should be `true`).
console.log('anyGreaterThan20:', anyGreaterThan20);

// 3.  **Use the `every` Method to Check for Numbers Less Than 50:**
//     *   Use the `every` method to check if all numbers in
//  `numbers` are less than `50`.
const allUnder50 = numbers.every(num => num < 50);
//     *   Print the result to the console (should be `true`).
console.log('allUnder50:', allUnder50);

// 4.  **Initialize an Array of Objects:**

//     *   Create an array called `students` containing the following objects:
//         *   `{ name: "Alice", age: 25, passed: true }`
//         *   `{ name: "Bob", age: 22, passed: false }`
//         *   `{ name: "Charlie", age: 27, passed: true }`
//         *   `{ name: "David", age: 20, passed: true }`
const students = [
  { name: 'Alice', age: 25, passed: true },
  { name: 'Bob', age: 22, passed: false },
  { name: 'Charlie', age: 27, passed: true },
  { name: 'David', age: 20, passed: true }
];
// 5.  **Use the `some` Method to Check if Any Student Failed:**

//     *   Use the `some` method to check if there are any students
// in `students` who have `passed` set to `false`.
// const didAnyFail = students.some(student => !student.passed);
const didAnyFail = students.some(({ passed }) => !passed);

console.log('didAnyFail:', didAnyFail);

// console.log(students[0].passed);

//     *   Print the result to the console (should be `true`).
// 6.  **Use the `every` Method to Check if All Students are
// Older Than 18:**

//     *   Use the `every` method to check if all students in
// const allOver18 = students.every(student => student.age > 18);
const allOver18 = students.every(({ age }) => age > 18);

// `students` are older than `18`.
//     *   Print the result to the console (should be `true`).
console.log('allOver18:', allOver18);
