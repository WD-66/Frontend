// Higher-order functions ////////////////////////

const print = content => {
  console.log(content);
};

// print('This will get logged!');

const printArray = array => {
  for (let i = 0; i < array.length; i++) {
    print(array[i]);
  }
};

const avatarChars = [
  { name: 'Aang', nation: 'Air Nation', isBender: true },
  { name: 'Katara', nation: 'Water Tribe', isBender: true },
  { name: 'Sokka', nation: 'Water Tribe', isBender: false }
];

// printArray(avatarChars);

const sayHello = char => {
  console.log(`Hi, I'm ${char.name}, and I'm from the ${char.nation}`);
};

const sayHelloLoop = array => {
  for (let i = 0; i < array.length; i++) {
    sayHello(array[i]);
  }
};

// sayHelloLoop(avatarChars);

const higherOrderArrayFunc = (array, callbackFunc) => {
  for (let i = 0; i < array.length; i++) {
    callbackFunc(array[i]);
  }
};

// higherOrderArrayFunc(avatarChars, print);
// higherOrderArrayFunc(avatarChars, sayHello);

// higherOrderArrayFunc(avatarChars, obj => {
//   return obj.isBender
//     ? console.log("I'm a bender!")
//     : console.log("I can't bend an element, but I've still got my wits!");
// });

avatarChars.forEach(obj => {
  return obj.isBender
    ? console.log("I'm a bender!")
    : console.log("I can't bend an element, but I've still got my wits!");
});

// avatarChars.forEach(char => print(char));

// avatarChars.forEach(char => sayHello(char));

avatarChars.forEach(content => console.log(content));
avatarChars.forEach(char => console.log(`Hi, I'm ${char.name}, and I'm from the ${char.nation}`));
