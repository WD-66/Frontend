// Loops ///////////////

// for loop
// for (let i = 0; i < 5; i++) {
//   console.log(`The current value of i is: ${i}`);

//   console.log("It's party time!");
// }

// while loop
// while (true) {
//   console.log('Infinite money glitch!');
//   break;
// }

// let stillLoading = true;

// while (stillLoading) {
//   console.log('Loading...');

//   stillLoading = false;
// }

// let percentLoaded = 0;
// while (percentLoaded < 100) {
//   console.log(`You have loaded ${percentLoaded}%`);

//   percentLoaded += 10;
// }

// do... while loop
// while (false) {
//   console.log('Will I print?');
// }

// do {
//   console.log('How about me?');
// } while (false);

// Arrays //////////////////////////
// const wizard = 'wizard';
// const roque = 'rogue';
// const bard = 'bard';
// const paladin = 'paladin';
// const cleric = 'cleric';

const dndClasses = ['wizard', 'rogue', 'bard', 'paladin', 'cleric'];
// console.log('dndClasses:', dndClasses);
// console.log('dndClasses length:', dndClasses.length);

// console.log(dndClasses[0]);
// console.log(dndClasses[1]);
// console.log(dndClasses[2]);
// console.log(dndClasses[3]);
// console.log(dndClasses[4]);
// console.log(dndClasses[5]); // undefined

// dndClasses[3] = 'monk';
// console.log(dndClasses[3]);
// console.log(dndClasses);

// looping over an array
// for (let i = 0; i < dndClasses.length; i++) {
//   console.log(dndClasses[i]);
// }

// for.. of
// for (const dndClass of dndClasses) {
//   console.log(dndClass);
// }

// Array methods

// console.log('I am a method of the console object');
console.log('before manipulation: ', dndClasses);

// push and pop
// dndClasses.push('fighter');
// console.log(dndClasses);

// const removedItem = dndClasses.pop();
// console.log(dndClasses);
// console.log(removedItem);

// unshift shift
// const firstItem = dndClasses.shift();
// console.log(firstItem);

// dndClasses.unshift('warlock');

// reverse toReversed
// dndClasses.reverse();

// const reversedClasses = dndClasses.toReversed();
// console.log(dndClasses);

// console.log('reversed classes:', reversedClasses);

// splice toSpliced
// dndClasses.splice(1, 3); // ['wizard', 'cleric']
const removed = dndClasses.splice(2, 2, 'sorcerer');
const newArray = dndClasses.toSpliced(2, 2, 'sorcerer');
// console.log('removed items:', removed);
// console.log('toSpliced array:', newArray);

// slice
const arraySlice = dndClasses.slice(-2);
// console.log('arraySlice:', arraySlice);
// console.log('after manipulation:', dndClasses);

// join
console.log(dndClasses.join(' and '));
