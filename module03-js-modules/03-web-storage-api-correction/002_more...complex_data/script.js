const form = document.querySelector('form');
const userInput = document.querySelector('#userInput');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('#reload');

const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];

// *   Chances are your code for creating the list items on load and new creation is VERY similar, if not the same, try to abstract it into a reusable function called `createListItem`.
// This approach is called [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
const createLi = newTask => {
  const newLi = document.createElement('li');
  const newP = document.createElement('p');
  const deleteBtn = document.createElement('button');

  newLi.setAttribute('id', newTask.id);
  newLi.className = 'flex gap-4 items-baseline px-4 justify-between';

  newP.textContent = newTask.content;
  // *   Make sure that clicking on a given 'Delete' button,
  // deletes the item from the DOM but also from the array in localStorage. Tip: use the `.filter` method
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded';
  deleteBtn.addEventListener('click', e => {
    // console.log(e.target.parentElement);
    // console.log(newTask.id);
    const currentTasks = getTasks();
    const updatedTasks = currentTasks.filter(t => t.id !== newTask.id);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    e.target.parentElement.remove();
  });

  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);

  return newLi;
};

const renderStorage = () => {
  const tasks = getTasks();
  tasks.forEach(task => {
    const taskLi = createLi(task);
    ul.appendChild(taskLi);
  });
};
// *   Make sure that when the document loads, you populate the contents of your storage item into the list. You can try to add an event listener of type `load` to the window itself!

renderStorage();

form.addEventListener('submit', e => {
  e.preventDefault();
  // *   From the boilerplate, get the contents of the input once the
  // form is submitted.
  const inputValue = userInput.value.trim();
  // *   Make sure the input is not empty before saving!
  if (!inputValue) {
    alert('Cannot submit an empty task');
    return;
  }
  // *   For every user input, create an object with the
  // following properties:
  //     *   id: [check this out,](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
  // since an UUID may not a valid CSS selector,
  // we will remove the hyphens and prepend the prefix `task-`
  //     *   content: the user input
  const newTask = {
    id: 'task-' + crypto.randomUUID().replaceAll('-', ''),
    content: inputValue
  };
  console.log(newTask);

  // *   Store this value in `localStorage` as part of an array.
  const tasks = getTasks();
  //  Store the new value at the beginning of the array!
  const updatedTasks = [newTask, ...tasks];
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  // *   Every time you hit the "Submit" button, add a new list item to the empty `ul`. Make sure the new item is at the top!
  const taskLi = createLi(newTask);
  ul.insertBefore(taskLi, ul.firstElementChild);
  // *   Reset the form
  e.target.reset();
});

// **Reload:**

// *   Just because we can. Add an event to the `reload` button so it [reloads the preview](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload). Your store data should reload too!
reloadBtn.addEventListener('click', () => {
  window.location.reload();
});

// **Tip:** Verify the Storage section in the browser's developer tools to make sure the data is there!
