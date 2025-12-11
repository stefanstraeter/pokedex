let pokemonId = 1;

async function fetchPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
      throw new Error("Sorry! Something went wrong.");
    }

    const data = await response.json();
    const pokemonImg = data.sprites.other?.dream_world?.front_default || data.sprites.other?.["official-artwork"]?.front_default || data.sprites.front_default;

    return {
      id: data.id,
      name: data.name,
      image: pokemonImg,
      types: data.types.map((type) => type.type.name),
    };

  } catch (error) {
    console.error(error);
  }
}


async function loadPokemonBatch() {
  const loadLimitBadge = 16;

  for (let pokemonIndex = 0; pokemonIndex < loadLimitBadge; pokemonIndex++) {
    const pokemon = await fetchPokemon(pokemonId);

    renderPokemonCard(pokemon);
    pokemonId++;
  }
}


function renderPokemonCard(pokemon) {
  const pokemonGrid = document.getElementById("pokemonGrid");
  pokemonGrid.innerHTML += pokemonCardHtml(pokemon);
}


async function searchPokemon(userInput) {
  try {
    const pokemon = await fetchPokemon(userInput);

    if (!pokemon) {
      showNotFoundMessage();
      return;
    }

    document.getElementById("pokemonGrid").innerHTML = "";
    renderPokemonCard(pokemon);

  } catch (error) {
    showNotFoundMessage();
    console.error(error);
  }
}


function showNotFoundMessage() {
  const grid = document.getElementById("pokemonGrid");
  grid.innerHTML = showNotFoundMessageHtml();
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

  const pokemonGrid = document.getElementById("pokemonGrid");
  pokemonGrid.innerHTML = "";

  pokemonId = 1;

  const userInput = document.querySelector("form input");
  if (userInput) userInput.value = "";

  loadPokemonBatch();
});


document.getElementById("loadMoreBtn").addEventListener("click", () => {
  loadPokemonBatch();
});


document.addEventListener("DOMContentLoaded", () => {
  loadPokemonBatch()
});



/*
document.addEventListener("click", (clickEvent) => {
  const pokemonCard = clickEvent.target.closest(".pokemon-card");
  if (!pokemonCard) return;

  const pokemonId = pokemonCard.dataset.id;
  if (!pokemonId) return;

  openPokemonModal(pokemonId);
});

*/