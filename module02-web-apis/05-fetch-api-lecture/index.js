const header = document.querySelector('header');
const pond = document.querySelector('#pond');
const summonBtn = document.querySelector('#summon-btn');
const addForm = document.querySelector('#add-form');

const renderDucks = (ducksArray, container) => {
  container.innerHTML = '';
  ducksArray.forEach(({ name, imgUrl, quote }) => {
    container.innerHTML += `
     <div class='shadow-xl hover:shadow-2xl hover:cursor-pointer w-96 rounded-md m-auto flex-flex-col'>
             <figure class='rounded-t-md overflow-hidden w-full h-96'>
                <img
                    class='w-full h-full'
                    src=${imgUrl}
                    alt=${name}
                />
            </figure>
            <div class='flex flex-col p-6 pt-2 rounded-b-md bg-slate-800 h-40'>
                <h2 class='text-3xl border-b-2 mb-4 border-b-gray-400'>
                    ${name}
                </h2>
                <p>${quote}</p>
            </div>
        </div>
    `;
  });
};

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

summonBtn.addEventListener('click', () => {
  // renderDucks(ducksInThePond, pond);
});

addForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = addForm.querySelector('#name');
  const imgUrl = addForm.querySelector('#img-url');
  const quote = addForm.querySelector('#quote');

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
      _id: crypto.randomUUID(),
      name: name.value,
      imgUrl: imgUrl.value,
      quote: quote.value
    };
    renderSingleDuck(newDuck, pond);
    e.target.reset();
  } catch (error) {
    alert(error.message);
  }
});
