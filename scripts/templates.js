function pokemonCardHtml(pokemon) {
  return `
    <div class="pokemon-card ${pokemon.types[0]}" data-id="${pokemon.id}">
      <img src="${pokemon.image}" class="pokemon-card__img" alt="Pokemon ${pokemon.name}"> 
      <div class="pokemon-card__types">
        ${pokemon.types.map(type => `<span>${type}</span>`).join('')}
      </div>
      <h5 class="pokemon-card__name">
        ${pokemon.name}
        <span class="pokemon-card__id">#${pokemon.id}</span>
      </h5>
    </div>
  `;
}


function showNotFoundMessageHtml() {
  return `<p class="text-white">No Pokémon found.</p>`
}



