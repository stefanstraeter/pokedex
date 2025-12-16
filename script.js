const pokemonBadgeLimit = 16;
const pokemonGrid = document.getElementById("pokemonGrid");
let pokemonId = 1;


async function loadPokemonBatch() {
  for (let batchIndex = 0; batchIndex < pokemonBadgeLimit; batchIndex++) {
    const currentId = pokemonId + batchIndex;

    try {
      const pokemon = await fetchPokemon(currentId);

      if (pokemon) {
        pokemonGrid.innerHTML += pokemonCardHtml(pokemon);
      }

    } catch (error) {
      console.error(error);
    }
  }
  pokemonId += pokemonBadgeLimit;
}


async function searchPokemon(userInput) {
  try {
    const pokemon = await fetchPokemon(userInput);

    if (!pokemon) {
      showNotFoundMessage();
      return;
    }

    if (pokemonGrid) {
      pokemonGrid.innerHTML = "";
      renderPokemonCard(pokemon);
    }

  } catch (error) {
    showNotFoundMessage();
    console.error("Sorry, somthiung went wrong:", error);
  }
}


function renderPokemonCard(pokemon) {
  pokemonGrid.innerHTML += pokemonCardHtml(pokemon);
}


function showNotFoundMessage() {
  pokemonGrid.innerHTML = showNotFoundMessageHtml();
}


document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const userInput = this.querySelector("input").value.trim().toLowerCase();

  if (userInput) {
    searchPokemon(userInput);
  }
});


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


document.addEventListener("click", (event) => {
  const card = event.target.closest(".pokemon-card");
  if (!card) return;
  openPokemonModal(card.dataset.id);
});


document.getElementById("loadMoreBtn").addEventListener("click", () => {
  loadPokemonBatch();
});


loadPokemonBatch();
