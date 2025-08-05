const todoList = document.querySelector('#todo-list');
// **Instructions:**
// *   **Display Data:** Populate the DOM with the fetched todos. Pay
// attention to the completed status of each
//  task in the response and style it accordingly!
const renderTodo = (todo, container) => {
  const newLi = document.createElement('li');
  newLi.setAttribute('id', todo.id);
  newLi.textContent = todo.title;
  todo.completed ? (newLi.className = 'bg-green-500 border-2') : (newLi.className = 'bg-red-500 border-2');
  container.appendChild(newLi);
};

// *   **Fetch Data**: Write JavaScript to fetch todos from the JSON Placeholder API, we want the
//  ToDos endpoint, [you can find more about the API docs in here](https://jsonplaceholder.typicode.com).
const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  if (!res.ok) throw new Error(`Something went wrong! Error ${res.status}`);

  const data = await res.json();

  return data;
};

const fetchAndRenderTodos = async () => {
  try {
    const todos = await fetchTodos();
    console.log(todos);
    if (Array.isArray(todos)) {
      todos.forEach(todo => {
        renderTodo(todo, todoList);
      });
    }
  } catch (error) {
    console.error(error);
  }
};

fetchAndRenderTodos();

// .then() chaining
// fetchTodos()
//   .then(todos => console.log(todos))
//   .catch(error => console.error(error));

// only .then chaining
// fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.error(error));

// **JSON Placeholder API**: A free online REST API that you can use for testing and prototyping.

// This exercise should give you a good understanding of how to work with APIs and dynamically update the DOM with
// JavaScript. Happy coding!
