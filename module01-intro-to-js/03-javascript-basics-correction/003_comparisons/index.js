// // You can work here or download the template!
// // Strict vs Simple Equality and Inequality

// Comparisons
// ===========

// #### Objective:

// Create a small script to compare different values using both strict and simple comparison operators. This exercise will deepen your understanding of how JavaScript handles type coercion and evaluates expressions involving different data types.

// #### Instructions:

// 1.  **Task Overview**:

//     *   Use the following values for comparisons: `5`, `'5'`, `10`, `'10'`, `true`, `false`.
//     *   Perform comparisons using both simple and strict equality and inequality operators.
//     *   Compare values to determine if they are greater than, less than, greater than or equal to, or less than or equal to each other.
// 2.  **Specific Tasks**:

//     *   Compare `5` and `'5'` using simple and strict equality.
console.log('5 == "5": ', 5 == '5'); // Simple Equality, should be true
console.log('5 === "5": ', 5 === '5'); // Strict Equality, should be false
//     *   Compare `10` and `'10'` using simple and strict inequality.
console.log('10 == "10": ', 10 == '10'); // Simple Equality, should be true
console.log('10 === "10": ', 10 === '10'); // Strict Equality, should be false
//     *   Check if `5` is greater than `3` and if `'5'` is greater than `'3'`.
console.log(' 5 > 3', 5 > 3);
console.log(' 5 > "3"', 5 > '3');

//     *   Evaluate whether `10` is less than `20` and if `'10'` is less than `'20'`.
console.log('10 < 20', 10 < 20);
console.log('"10" < "20"', '10' < '20');

//     *   Determine if `5` is greater than or equal to `5` and if `'5'` is greater than or equal to `5`.
console.log('5 >= 5', 5 >= 5);
console.log('5 >= "5"', 5 >= '5');

//     *   Assess whether `10` is less than or equal to `20` and if `'10'` is less than or equal to `'20'`.
console.log('10 <= 20', 10 <= 20);
console.log('"10" <= "20"', '10' <= '20');

// 3.  **Output**:

//     *   Print each result to the console with a descriptive message, so you know which comparison is being displayed.
