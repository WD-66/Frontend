const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design'
];

// 1.  **HTML Structure**:
//     *   Use the provided HTML structure which includes three buttons and an empty `ul` element.
const addBtn = document.querySelector('#add-item-btn');
const alertBtn = document.querySelector('#alert-btn');
const logBtn = document.querySelector('#console-btn');
const itemList = document.querySelector('#item-list');
// 2.  **JavaScript Tasks**:
//     *   Attach an event to the first button to create a new
// `li` in the `ul` with a random task from the provided array.
//         *   Make sure you scroll to the last task so
// the last one is always visible!

addBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * tasks.length);
  const randomTask = tasks[randomNumber];
  const li = document.createElement('li');
  li.textContent = randomTask;
  itemList.appendChild(li);
  li.scrollIntoView();
});

// alertBtn.onclick = () => {
//   console.log('This message has been logged.');
// };

// alertBtn.onclick = () => {
//   alert('Do you feel alerted?');
// };
//     *   Attach an event to the second button to
// display an alert with a custom message.
alertBtn.addEventListener('click', () => {
  alert('Do you feel alerted?');
});
//     *   Attach an event to the third button to output a
// custom message to the console.
logBtn.addEventListener('click', () => {
  console.log('This message has been logged.');
});

// What would happen if instead of `element.addEventListener('click', listener)`
//  you would  do `element.onclick = listener`? What are the differences?

// Array of 10 random tasks as strings
