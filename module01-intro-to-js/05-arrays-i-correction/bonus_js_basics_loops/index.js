// Loops
// =====

// **Objective:**

// Write JavaScript code to count animals in a zoo. You will use different
// types of loops to count the same list of animals, helping you understand
// the nuances and applications of each loop type.

// **Tasks:**

// Yes, yes, we could do this with array methods! But those declarative approaches use these basic loop constructs under the hood! So we better learn them! 😊
// Array of animals in the zoo
const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];
// 1.  Use a `for` loop to count the total number of animals.
// const numOfAnimals = animals.length;
let animalCount = 0;
for (let i = 0; i < animals.length; i++) {
  animalCount++;
  //   console.log(animals.length);
}
console.log('animalCount:', animalCount);

// 2.  Use a `while` loop to count animals whose names
//  have five or more letters.
// You can check the [length of a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
let i = 0;
let animals5OrLonger = 0;

while (i < animals.length) {
  if (animals[i].length >= 5) {
    animals5OrLonger++;
  }
  i++;
}
console.log('5 or longer:', animals5OrLonger);

// 3.  Use a `do...while` loop to count animals until you
//  encounter an animal whose name starts with 'm'
let count = 0;

do {
  if (animals[count].startsWith('m')) {
    console.log('first animal starting with m:', animals[count]);
    break;
  }
  console.log('I ran!');
  count++;
} while (count < animals.length);
