// *   Create a variable `counter` and set it to 1.
let counter = 1;

const getPokemon = async id => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) throw new Error(`Something went wrong! Error ${res.status}`);

  const data = await res.json();

  return data;
};
// *   Use `setInterval` to schedule a fetch request to the Pokémon API
//  every second.
const intervalId = setInterval(async () => {
  try {
    // *   The fetch request URL should be `https://pokeapi.co/api/v2/pokemon/`
    // followed by the current value of `counter`.
    // *   Fetch the data and extract the Pokémon's name and ID.
    const { name, id } = await getPokemon(counter);

    const pokemon = { name, id };
    // *   Output an object with the Pokémon's name and ID to the console.
    console.log(pokemon);

    // *   Increment the counter after each fetch request.
    counter++;
    // *   Stop the interval after 150 requests. We only want the OG Pokémon! :D
    if (counter > 150) clearInterval(intervalId);
  } catch (error) {
    console.error(error);
  }
}, 1000);
