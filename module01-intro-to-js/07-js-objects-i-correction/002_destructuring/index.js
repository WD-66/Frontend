// Destructuring
// =============

// #### Objective

// Learn how to use destructuring to extract values from objects and arrays in JavaScript.

// #### Instructions

// *   **Simple Array Destructuring**
// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];
//     Extract the first two elements from the `fruits` array and store
// them in variables `fruit1` and `fruit2`.
const [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);

// *   **Skipping Elements in Array Destructuring**

//     Extract the first and third elements from the `fruits` array,
// skipping the second element.
const [first, , third] = fruits;
console.log(first, third);

// *   **Simple Object Destructuring**
// Initial object
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    zip: '10001'
  }
};
//     Extract the `name` and `age` properties from the `person` object.
const { name, age } = person;
console.log(name, age);

// *   **Nested Object Destructuring**

//     Extract the `city` from the `address` property of the
// `person` object.
const {
  address: { city, zip }
} = person;

console.log(city, zip);
console.log(person.address.city);

// *   **Destructuring in Function Parameters**

//     `displayPerson` is function that takes a `person` object and logs the `name` and `age` properties using dot notation. Modify the function to destructure the `name` and `age` properties directly in the parameters.

//     Modify the function to use destructuring in the parameters

// Initial function
function displayPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(person);
