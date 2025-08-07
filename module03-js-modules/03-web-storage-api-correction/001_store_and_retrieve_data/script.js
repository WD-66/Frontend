const form = document.querySelector('form');
const ul = document.querySelector('ul');
const reloadBtn = document.querySelector('reload');

const getQuotes = () => {
  return JSON.parse(localStorage.getItem('quotes')) || [];
};

form.addEventListener('submit', e => {
  e.preventDefault();
  // 1.  From the boilerplate, get the contents of the input
  // once the form is submitted.
  const input = document.querySelector('#userInput');
  const inputValue = input.value.trim();
  console.log(inputValue);
  // 2.  Make sure the input is not empty before saving!
  if (!inputValue) {
    alert('Cannot submit an empty quote!');
    return;
  }
  // 3.  Store this value in `localStorage` as part of an array.
  // Store the new value at the beginning of the array!
  //   const quotes = localStorage.getItem('quotes');
  //   const quotesArray = JSON.parse(quotes) || [];

  //const quotes = JSON.parse(localStorage.getItem('quotes')) || [];
  const quotes = getQuotes();
  //   console.log(typeof quotes);

  const updatedQuotes = [inputValue, ...quotes];

  localStorage.setItem('quotes', JSON.stringify(updatedQuotes));

  // 1.  Every time you hit the "Submit" button,
  // add a new list item to the empty `ul`.
  const newLi = document.createElement('li');
  newLi.textContent = inputValue;
  ul.insertBefore(newLi, ul.firstElementChild);
  // 4.  Reset the form
  e.target.reset();
});

// Retrieve data:

// Make sure the new item is at the top!
// 2.  Make sure that when the document loads,
const renderStorage = () => {
  const quotes = getQuotes();
  quotes.forEach(q => {
    const newLi = document.createElement('li');
    newLi.textContent = q;
    ul.appendChild(newLi);
  });
};

renderStorage();
// document.addEventListener('DOMContentLoaded', () => {
//   renderStorage();
// });

// Reload:

// 1.  Just because we can. Add an event to the `reload` button so it
// [reloads the preview](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload). Your store data should reload too!

// **Tip:** Verify the Storage section in the browser's developer tools to make sure the data is there!
reloadBtn.addEventListener('click', () => {
  window.location.reload();
});
