const pokemonBadgeLimit = 16;
const pokemonGrid = document.getElementById("pokemonGrid");
const searchInput = document.querySelector("form input");
let loadedPokemon = [];
let pokemonId = 1;


async function loadPokemonBatch() {
  for (let batchIndex = 0; batchIndex < pokemonBadgeLimit; batchIndex++) {
    const currentId = pokemonId + batchIndex;

    try {
      const pokemon = await fetchPokemon(currentId);

      if (pokemon) {
        loadedPokemon.push(pokemon);
        pokemonGrid.innerHTML += pokemonCardHtml(pokemon);
      }

    } catch (error) {
      console.error(error);
    }
  }
  pokemonId += pokemonBadgeLimit;
}


async function filterAllPokemon(userInput) {
  pokemonGrid.innerHTML = "";

  if (!userInput) {
    loadedPokemon.forEach(pokemon => pokemonGrid.innerHTML += pokemonCardHtml(pokemon));
    return;
  }

  const allPokemon = await fetchAllPokemonNames();

  const filtered = allPokemon
    .filter(pokemon => pokemon.name.startsWith(userInput))
    .slice(0, 10);

  if (!filtered.length)
    return showNotFoundMessage();

  for (const pokemon of filtered) {
    const allPokemonData = await fetchPokemon(pokemon.id);

    if (!allPokemonData) continue;
    pokemonGrid.innerHTML += pokemonCardHtml(allPokemonData);
  }
}


function renderPokemonCard(pokemon) {
  pokemonGrid.innerHTML += pokemonCardHtml(pokemon);
}


function showNotFoundMessage() {
  pokemonGrid.innerHTML = showNotFoundMessageHtml();
}


document.getElementById("resetBtn").addEventListener("click", () => {
  console.clear();

  if (pokemonGrid) {
    pokemonGrid.innerHTML = "";
  }

  pokemonId = 1;

  const userInput = document.querySelector("form input");
  if (userInput) userInput.value = "";

  loadPokemonBatch();
});


searchInput.addEventListener("input", (event) => {
  const userInput = event.target.value.trim().toLowerCase();
  filterAllPokemon(userInput);
});


document.addEventListener("click", (event) => {
  const card = event.target.closest(".pokemon-card");
  if (!card) return;
  openPokemonModal(card.dataset.id);
});


document.getElementById("loadMoreBtn").addEventListener("click", () => {
  loadPokemonBatch();
});


loadPokemonBatch();
