const pokemonGrid = document.getElementById("pokemonGrid");
const searchPokemonInput = document.querySelector("form input");
const fullDexResetBtn = document.getElementById("fullDexResetBtn");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const pokemonBadgeLimit = 20;
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


function renderPokemonCard(pokemon) {
  pokemonGrid.innerHTML += pokemonCardHtml(pokemon);
}


function showNotFoundMessage() {
  pokemonGrid.innerHTML = showNotFoundMessageHtml();
}


async function searchPokemon(inputValue) {
  pokemonGrid.innerHTML = "";
  loadMoreBtn.style.display = "none";
  const allPokemon = await fetchAllPokemonNames();
  const pokemonMatches = allPokemon.filter(pokemon => pokemon.name.startsWith(inputValue)).slice(0, 10);
  if (pokemonMatches.length === 0) {
    showNotFoundMessage();
    return;
  }

  const pokemonDetails = await Promise.all(
    pokemonMatches.map(match => fetchPokemon(match.id))
  );

  pokemonDetails.forEach(pokemon => {
    if (pokemon) renderPokemonCard(pokemon);
  });

}


async function handlePokemonSearchInput(event) {
  const inputValue = event.target.value.toLowerCase().trim();

  if (inputValue.length < 3) {
    resetToLoadedPokemon();
    return;
  }
  await searchPokemon(inputValue);
}


function resetToLoadedPokemon() {
  pokemonGrid.innerHTML = "";
  loadMoreBtn.style.display = "";
  loadedPokemon.forEach(pokemon => {
    renderPokemonCard(pokemon);
  });
}


searchPokemonInput.addEventListener("input", handlePokemonSearchInput);


fullDexResetBtn.addEventListener("click", () => {
  console.clear();
  searchPokemonInput.value = "";
  loadedPokemon = [];
  resetToLoadedPokemon();
  pokemonId = 1;
  loadPokemonBatch();
});


document.addEventListener("click", (event) => {
  const card = event.target.closest(".pokemon-card");
  if (!card) return;
  openPokemonModal(card.dataset.id);
});


loadMoreBtn.addEventListener("click", () => {
  loadPokemonBatch();
});


loadPokemonBatch();
