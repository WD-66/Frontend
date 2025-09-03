const stringArray: Array<string> = ['1', '2', '3', '4'];

fetch('https://duckpond-89zn.onrender.com/wild-ducks');

type Duck = {
	_id: string;
	name: string;
	imgUrl: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

const fetchData = async <T>(url: string, options?: RequestInit): Promise<T> => {
	const res = await fetch(url, options && options);

	if (!res.ok) throw new Error('Fetch failed');

	return res.json();
};

const ducks = await fetchData<Duck[]>(
	'https://duckpond-89zn.onrender.com/wild-ducks'
);

// ducks.forEach(duck => console.log(duck.name, duck.imgUrl));

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWI1OTkzY2VjYTIwOTkwOWI5NWI0ODJmODVjNDlmMCIsIm5iZiI6MTcyNzcwNTE3Mi42NDA2NDMsInN1YiI6IjY2ZmFhZjAyM2EwZjVhMDhjOGYxOGYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JILLUNBjQwItAiLtLcP4FdjW4st_bKAdMsGxw253X-0'
	}
};

type Movie = {
	original_title: string;
	poster_path: string;
	id: number;
};
type ApiResponse<T> = {
	page: number;
	results: T[];
	total_pages: number;
	total_results: number;
};

const tmdbResponse = await fetchData<ApiResponse<Movie>>(
	'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
	options
);

// console.log(tmdbResponse);

type LengthWise = {
	length: number;
};

const logLength = <T extends LengthWise>(value: T) => {
	console.log(value.length);
};

logLength('45');
logLength([1, 2, 3, 4]);
logLength({ name: 'Sally', length: 4 });
// logLength(3)

const makeTuple = <T, U>(item1: T, item2: U): [T, U] => [item1, item2];

const myTuple = makeTuple(3, 'Jimmy');

const makeTupleArray = <T extends object>(obj: T) => Object.entries(obj);

const myObj = {
	a: 'some string',
	b: 42
};

// unknown - accepts anything, but requires to type check

// {} - same as unknown, but doesn't undefined or null

console.log(makeTupleArray(myObj));
// console.log(makeTupleArray(42));
// console.log(makeTupleArray('string'));

// console.log(makeTupleArray(undefined));
// console.log(makeTupleArray(null));

type SomeObject = {
	a: string;
	b: number;
};

// type SomeObjectKeys = 'a' | 'b';
type SomeObjectKeys = keyof SomeObject;

const someKey: SomeObjectKeys = 'a';

type User = {
	name: string;
	email: string;
	password: string;
};

const validateUserForm = ({ name, email, password }: User) => {
	const newErrors: Partial<User> = {};
	if (!name.trim()) {
		newErrors.name = 'Name is required';
	}
	if (!email.trim()) {
		newErrors.email = 'Name is required';
	}
	if (!password.trim()) {
		newErrors.password = 'Name is required';
	}

	return newErrors;
};
