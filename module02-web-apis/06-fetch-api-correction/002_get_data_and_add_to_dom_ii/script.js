const pokeCont = document.querySelector('#pokemon-container');
// *   **Display Data**: Populate the DOM with the fetched Pokémon data as styled cards. Show us the name, image and type. The grid is already set up in the HTML file.

const renderPokemonCard = (pokemon, container) => {
  const pokemonCard = document.createElement('div');
  pokemonCard.className = 'bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center';

  const pokemonImage = document.createElement('img');
  pokemonImage.src = pokemon.sprites.front_default;
  pokemonImage.alt = pokemon.name;
  pokemonImage.className = 'mb-4';
  pokemonCard.appendChild(pokemonImage);

  const pokemonName = document.createElement('h2');
  pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  pokemonName.className = 'text-xl font-bold mb-2';
  pokemonCard.appendChild(pokemonName);

  const pokemonInfo = document.createElement('p');
  pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
  pokemonInfo.className = 'text-gray-600';
  pokemonCard.appendChild(pokemonInfo);

  container.appendChild(pokemonCard);
};

// *   **Fetch Data:** Write JavaScript to fetch data for the first 150
// Pokémon from the Pokémon API. [More info can be found here](https://pokeapi.co)

const fetchPokemon = async id => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!res.ok) throw new Error(`Something went wrong! Error ${res.status}`);

  const data = await res.json();

  return data;
};

const fetchAndRenderPokemon = async () => {
  for (let i = 1; i <= 150; i++) {
    const pokemon = await fetchPokemon(i);
    if (pokemon) {
      //   console.log(pokemon);
      renderPokemonCard(pokemon, pokeCont);
    }
  }
};
fetchAndRenderPokemon();

// **Pokémon API:** A free API that provides information about Pokémon.
