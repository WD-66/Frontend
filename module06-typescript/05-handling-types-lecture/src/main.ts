enum Direction {
	Up,
	Down,
	Left,
	Right
}

let move: Direction = Direction.Up;

type DirectionUnion = 'left' | 'right' | 'up' | 'down';

function turnWithLiteralUnion(dir: DirectionUnion) {
	if (dir === 'left') {
		console.log('Turning left');
	}
}

// turnWithLiteralUnion('left');

function turnWithEnum(dir: Direction) {
	if (dir === Direction.Left) {
		console.log('Turning left');
	}
}

// turnWithEnum(Direction.Left);

const myStr = 'String';

// truthiness narrowing

const alertMe = (msg: string): void => {
	if (msg) {
		alert(msg);
	} else {
		alert('Did you forget why you wanted to be alerted?');
	}
};

// alertMe('');

// equality narrowing

const compare = (x: string | number, y: string | boolean) => {
	if (x === y) {
		console.log(x.toUpperCase());
	}
};

// compare(4, '4');
// compare(4, true);
// compare('3', '3');

// type guards
// console.log(typeof false);
// console.log(typeof 'I am a string!');
// console.log(typeof 35);

const printValue = (value: string | number): void => {
	if (typeof value === 'string') {
		console.log(value.toUpperCase());
	} else {
		console.log(value.toFixed(2));
	}
};

// printValue(4);
// printValue('test');

// type guarding objects

// console.log(typeof { firstName: 'Bob' });
// console.log(typeof [1, 2, 3]);

// console.log(Array.isArray({ firstName: 'Bob' }));
// console.log(Array.isArray([1, 2, 3]));

// Check class with instanceof

const logDateOrString = (val: Date | string) => {
	if (val instanceof Date) {
		console.log(
			val.toLocaleDateString('de-DE', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
		);
	} else {
		console.log(val.trim());
	}
};

// logDateOrString('1989-12-24');
// logDateOrString(new Date('1989-12-24'));

const throwSomething = (throwError: boolean) => {
	try {
		if (throwError) {
			throw new Error('This will be the message property');
		} else {
			throw "This wouldn't have a message property, and would cause a runtime error if we try to access it";
		}
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error.message);
		} else {
			console.error('Default error message');
		}
	}
};

// throwSomething(true);
// throwSomething(false);

// Check for a property with in keyword
// type Dog = { bark: () => void };
// type Cat = { meow: () => void };

// type Pet = Dog | Cat;

// const isDog = (pet: Pet) => {
// 	return 'bark' in pet;
// };

// function speak(pet: Pet) {
// 	if (isDog(pet)) {
// 		pet.bark();
// 	} else {
// 		pet.meow();
// 	}
// }

// const dog: Dog = {
// 	bark: () => console.log('Woof!')
// };

// const cat: Cat = {
// 	meow: () => console.log('Meow!')
// };

// speak(dog);
// speak(cat);

// Discriminated Union
type Dog = { kind: 'dog'; bark: () => void };
type Cat = { kind: 'cat'; meow: () => void };
type Bird = { kind: 'bird'; tweet: () => void };

type Pet = Dog | Cat | Bird;

function speak(pet: Pet) {
	if (pet.kind === 'dog') {
		pet.bark();
	} else if (pet.kind === 'cat') {
		pet.meow();
	} else {
		pet.tweet();
	}
}

const dog: Dog = {
	kind: 'dog',
	bark: () => console.log('Woof!')
};

const cat: Cat = {
	kind: 'cat',
	meow: () => console.log('Meow!')
};

speak(dog);
speak(cat);

// type assertion
const btn = document.querySelector('#btn')!;
const input = document.querySelector('#text-input') as HTMLInputElement;

btn.textContent = 'CLICK!!!!';
btn.classList.add('px-4');

console.log(input.value);
