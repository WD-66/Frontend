// What is this?
/*This is a 
multi-line comment */

// 20 + 5;
// VARIABLES ////////////////
// let
let result = 20 + 5;
// console.log('result:', result);
// result = 'This is a string';
// console.log('result:', result);

const constant = "Don't reassign me!";

// var dontUseMe = "Please don't use me!";

// ARITHMETIC ///////////////
// result = result + 10;
result += 10;
result++;
result--;
// console.log('result:', result);

const division = 15 / 4;
const remainder = 15 % 4;
// console.log('division: ', division);
// console.log('remainder: ', remainder);

// const isEven = 17 % 2 == 0;

// console.log('remainder: ', remainder);
// console.log('isEven: ', isEven);

// COMPARISONS ///////////////////
// console.log(17 !== '17');
// console.log(true !== true);
//logical AND
// console.log(17 === 17 && 18 === 19);
// logical OR
// console.log(17 === 17 || 18 === 19);
let weatherToday;
let temp = 4;

if (temp >= 20) {
  //   let weatherToday;
  weatherToday = 'warm';
  //   const imLocal = 'I live inside the if';
  //   console.log('local const:', imLocal);
  //   console.log('The condition was true or truthy');

  //   console.log('Inside the if The weather today is ', weatherToday);
} else if (temp >= 10) {
  weatherToday = 'cool';
} else {
  weatherToday = 'cold';
}
// string concatenation
// console.log('The weather today is ' + weatherToday + '.');

//template literal
// console.log(`The weather today is ${weatherToday}.`);

//ternary operator
let isPlayTime = true;

// if (isPlayTime) {
//   console.log('Yay! Time to play!');
// } else {
//   console.log('Oh no, I have to work :(');
// }

// isPlayTime ? console.log('Yay! Time to play!') : console.log('Oh no, I have to work :(');

//switch statement
let characterClass = 'paladin';

// switch (characterClass) {
//   case 'fighter':
//     console.log("I'm very strategic!");
//     break;
//   case 'monk':
//     console.log('Who needs weapons, when I have my fists!');
//     break;
//   case 'wizard':
//     console.log('I get my magic from books.');

//   case 'sorcerer':
//   case 'warlock':
//     console.log('I can do powerful magic!');
//     break;
//   default:
//     console.log('I love DnD!');
// }

// FUNCTIONS /////
// declaration
function sayHelloWorld() {
  console.log('Hello, world!');
}

// sayHelloWorld();

// expressions
const goodByeWorld = function () {
  console.log('Goodbye, cruel world!');
};
// goodByeWorld();

// arrow functions
const makeASandwich = () => {
  console.log('Here is your sandwich!');
};

// const sandwich = makeASandwich();
// console.log(sandwich);

const square = num => {
  let result = num * num;
  //   console.log(result);
  return result;
};

const squaredNum = square(7);
// const squaredNum2 = square(8);
console.log(squaredNum);
// console.log(squaredNum2);

const multiply = (num1, num2 = 7) => {
  return num1 * num2;
};

console.log(multiply(3, 2));
console.log(multiply(3));
