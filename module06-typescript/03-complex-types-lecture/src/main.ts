console.log('Sanity Check');

const strings: string[] = ['hi', 'bye', 'what?'];
const nums: number[] = [1, 2, 3, 4, 5, 6, 7];

// nums.push('4');

// const bools: Array<boolean> = [true, false, false, true];

// Tuples
const graphCoordinates: [number, number, number?] = [23, -3];

// graphCoordinates[0] = 'string'

type StringOrNumber = string | number;

type Person = {
	id: StringOrNumber;
	readonly name: string;
	age: number;
	city?: string;
};
// Object Types
const person: Person = {
	id: '3423sdafhasf7',
	name: 'Steve',
	age: 72
	// city: 'New York'
};

const person2: Person = {
	id: 4,
	name: 'Reed',
	age: 43
};

// person.name = 'Captain America';

if (person.city) {
	console.log(person.city.toUpperCase());
}
console.log(person.city?.toUpperCase());

console.log(person.city || 'Unknown');
console.log(person.city ?? 'Unknown');

// console.log(0 || 'Default');
// console.log(0 ?? 'Default');
// console.log('' || 'Default');
// console.log('' ?? 'Default');
// console.log(null || 'Default');
// console.log(null ?? 'Default');

interface User {
	name: string;
	age: number;
}

const users: User[] = [
	{ name: 'Ada', age: 36 },
	{ name: 'Grace', age: 30 }
];

console.log(users);

users.forEach(user => console.log(`${user.name} is ${user.age} years old.`));

const people: Person[] = [];

people.push(person);
people.push(person2);

// people.push({name: 'Susan'});

type DBEntry = {
	_id: string;
	createdAt: string;
};

type Role = 'admin' | 'user' | 'staff';
type DBUser = DBEntry & {
	name: string;
	email: string;
	password: string;
	role: Role;
};

const newUser: DBUser = {
	_id: '12sdfsdf',
	name: 'Steve Rogers',
	email: 'captain@america.com',
	password: 'stevepass',
	createdAt: '2025-9-1',
	role: 'user'
};

interface DBEntryInterface {
	_id: string;
	createdAt: string;
}

interface DBUserInterface extends DBEntryInterface {
	name: string;
	email: string;
	password: string;
}

const user2: DBUserInterface = {
	_id: '12sdfsdf',
	name: 'Steve Rogers',
	email: 'captain@america.com',
	password: 'stevepass',
	createdAt: '2025-9-1'
};

type Direction = 'left' | 'right' | 'up' | 'down';

// Example 1: Using in a variable
let move: Direction = 'up';

// Example 2: Function accepting a Direction
function movePlayer(direction: Direction) {
	console.log(`Player moves ${direction}`);
}

movePlayer('left'); // <img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/16.0.1/svg/2705.svg">
movePlayer('down'); // <img draggable="false" role="img" class="emoji" alt="✅" src="https://s.w.org/images/core/emoji/16.0.1/svg/2705.svg">
// movePlayer('forward'); // <img draggable="false" role="img" class="emoji" alt="❌" src="https://s.w.org/images/core/emoji/16.0.1/svg/274c.svg"> Error: Argument of type '"forward"' is not assignable to type 'Direction'

// Example 3: Switch statement with exhaustive checking
function handleDirection(dir: Direction) {
	switch (dir) {
		case 'left':
			console.log('Moving left');
			break;
		case 'right':
			console.log('Moving right');
			break;
		case 'up':
			console.log('Moving up');
			break;
		case 'down':
			console.log('Moving down');
			break;
		default:
			// TypeScript will warn if we forget a case
			const _exhaustiveCheck: never = dir;
			return _exhaustiveCheck;
	}
}

handleDirection('left');
// handleDirection('forward');

type Calculation = (num1: number, num2: number) => number;

const add: Calculation = (a, b) => a + b;

const subtract: Calculation = (a, b) => a - b;

add(4, 3);
