//Objects ///////

const dndChar = {
  name: 'Kaladan',
  dndClass: 'paladin',
  level: 12,
  spellList: [' divine smite', 'bless', "crusader's mantle"],
  //   'spell-list': [' divine smite', 'bless', "crusader's mantle"]
  yellCatchPhrase() {
    return 'To smite is right!';
  },
  introduce() {
    return `My name is ${this.name} the ${this.dndClass}!`;
  }
};

console.log(dndChar);

//dot notation - most common use
// console.log(dndChar.name);

//bracket notation
// console.log(dndChar['spell-list']);
const newObj = {
  name: 'Jeff'
};

const propIWant = 'name';
// console.log(dndChar[propIWant]);
// console.log(newObj.dndClass);

// update properties
dndChar.level = 13;
// console.log(dndChar);

//create new properties
dndChar.isSpellCaster = true;
// console.log(dndChar);

// access methods

// console.log(dndChar.yellCatchPhrase());
// console.log(dndChar.introduce());

// Destructuring
const myName = dndChar.name;
const { name, dndClass, myDndClass } = dndChar;

// console.log('myName:', myName);
// console.log('name:', name);
// console.log('dndClass:', dndClass);
// console.log('myDndClass:', myDndClass);
