// Functions
// =========

// #### Part 1: Function Declarations

// 1.  **Declare a function with no parameters that outputs something to the console.**
//     *   Declare a function named `greet` that logs "Hello, World!" to the console.
// const greet = () => {
//   console.log('Hello, world!');
// };
greet();

function greet() {
  console.log('Hello, world!');
}

//     *   Call the function.
// 2.  **Declare a function with one parameter that returns something.**

//     *   Declare a function named `square` that takes a number as a parameter and returns its square.
function square(number) {
  return number * number;
}
//     *   Call the function with the argument `5`, store the result in a variable, and output it to the console.
const result = square(5);
console.log('result:', result);
// 3.  **Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly.**

//     *   Declare a function named `getDayName` that takes a number (0-6) as a parameter and returns the name of the day.
//     *   Use a switch statement to determine the day name.
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Invalid number! Please choose 0-6';
  }
}
//     *   Call the function with the argument `3`, store the result in a variable, and output it to the console.
const day3 = getDayName(3);
console.log('day3:', day3);
const day4 = getDayName(4);
console.log('day4:', day4);
const day8 = getDayName('safsafkdh');
console.log('day8:', day8);

// #### Part 2: Function Expressions

// 1.  **Repeat the above steps using function expressions assigned to variables.**
//     *   Rewrite the `greet` function as a function expression assigned to a variable named `greetExpression`.
const greetExp = function () {
  console.log('Hello, world!');
};
greetExp();
const greetArrow = () => {
  console.log('Hello, world!');
};
greetArrow();

//     *   Rewrite the `square` function as a function expression assigned to a variable named `squareExpression`.
const squareExp = function (number) {
  return number * number;
};
const squareArrow = number => {
  return number * number;
};
//     *   Rewrite the `getDayName` function as a function expression assigned to a variable named `getDayNameExpression`.
const getDayNameExp = function (dayNumber) {
  switch (dayNumber) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Invalid number! Please choose 0-6';
  }
};
const getDayNameArrow = dayNumber => {
  switch (dayNumber) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Invalid number! Please choose 0-6';
  }
};
// #### Discussion:

// *   Discuss the difference between function declarations and function expressions.
