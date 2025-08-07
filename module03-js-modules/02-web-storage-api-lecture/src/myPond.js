// setItem() - CREATE
// localStorage.setItem('newThing', 'Look ma, I set something to local storage!');

// localStorage.setItem('newThing', 'What about now?');

// getItem() - READ
// const myNewThing = localStorage.getItem('newThing');
// console.log(myNewThing);

// removeItem() - DELETE
// setTimeout(() => {
//   localStorage.removeItem('newThing');
//   console.log('after removing:', localStorage.getItem('newThing'));
//   console.log('variable after removing:', myNewThing);
// }, 3000);

// clear() - DELETE ALL
// localStorage.setItem('newThing2', 'What about now?');
// localStorage.setItem('newThing3', 'What about now?');
// localStorage.setItem('newThing4', 'What about now?');
// localStorage.setItem('newThing5', 'What about now?');
// localStorage.clear();

const myPond = document.querySelector('#my-pond');
const myPondAddForm = document.querySelector('#my-pond-add-form');
const myDucks = JSON.parse(localStorage.getItem('myDucks')) || [];

const renderSingleDuck = (duckObj, container) => {
  const { imgUrl, name, quote } = duckObj;
  const card = document.createElement('div');
  card.className = 'shadow-xl hover:shadow-2xl hover:cursor-pointer w-96 rounded-md m-auto flex-flex-col';

  const figure = document.createElement('figure');
  figure.className = 'rounded-t-md overflow-hidden w-full h-96';
  const img = document.createElement('img');
  img.src = imgUrl;
  img.alt = name;
  figure.appendChild(img);

  const body = document.createElement('div');
  body.className = 'flex flex-col p-6 pt-2 rounded-b-md bg-slate-800 h-40';
  const title = document.createElement('h2');
  title.className = 'text-3xl border-b-2 mb-4 border-b-gray-400';
  title.textContent = name;
  const text = document.createElement('p');
  text.textContent = quote;
  body.appendChild(title);
  body.appendChild(text);

  card.appendChild(figure);
  card.appendChild(body);
  container.appendChild(card);
};

const errorHandler = (error, container) => {
  console.error(error);
  const h2 = document.createElement('h2');
  h2.className = 'inline-block m-auto text-6xl mb-6 text-red-600';
  h2.textContent = error.message;
  container.appendChild(h2);
};

myPondAddForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = myPondAddForm.querySelector('#name');
  const imgUrl = myPondAddForm.querySelector('#img-url');
  const quote = myPondAddForm.querySelector('#quote');

  try {
    if (!name.value.trim()) {
      throw new Error('Name is required!');
    }
    if (!imgUrl.value.trim()) {
      throw new Error('Image is required!');
    }
    if (!quote.value.trim()) {
      throw new Error('Quote is required!');
    }

    const newDuck = {
      name: name.value,
      imgUrl: imgUrl.value,
      quote: quote.value
    };
    const myDucks = JSON.parse(localStorage.getItem('myDucks')) || [];
    // const parsedDucks = myDucks ? JSON.parse(myDucks) : [];
    console.log(myDucks);
    // console.log(parsedDucks);

    // myDucks.push(newDuck);
    const updatedDucks = [...myDucks, newDuck];
    localStorage.setItem('myDucks', JSON.stringify(updatedDucks));
    renderSingleDuck(newDuck, myPond);
    e.target.reset();
  } catch (error) {
    alert(error.message);
  }
});

myDucks.forEach(duck => renderSingleDuck(duck, myPond));
// const myNewDuck = JSON.parse(localStorage.getItem('newDuck'));

// console.log(myNewDuck);
// console.log(typeof myNewDuck);
