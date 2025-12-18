function pokemonCardHtml(pokemon) {
  return `
    <div class="pokemon-card ${pokemon.types[0]}" data-id="${pokemon.id}">
      <img src="${pokemon.image}" class="pokemon-card__img" alt="Pokemon ${pokemon.name}"> 
      <div class="pokemon-card__types">
        ${pokemon.types.map(type => `<span>${capitalize(type)}</span>`)
      .join('')}
      </div>
      <h5 class="pokemon-card__name">
        ${capitalize(pokemon.name)}
        <span class="pokemon-card__id">#${pokemon.id}</span>
      </h5>
    </div>
  `;
}


function showNotFoundMessageHtml() {
  return `<p class="text-white">No Pokémon found.</p>`
}

function pokemonModalHtml(data) {
  return `
    <div class="modal__content">
      <button onclick="pokemonModal.close()" class="modal__close">&times;</button>
      
      <div class="modal__header">
        <h2 class="modal__number">#${data.id}</h2>
        <h1 class="modal__name">${capitalize(data.name)}</h1>
      </div>

      <div class="modal__body">
        <div class="modal__image-container">
          <img src="${data.image}" class="modal__image" alt="${data.name}" />
          <div class="modal__name-row">
            <button id="prevPokemonBtn" class="modal__nav-btn" onclick="openPokemonModal(${data.id - 1})"> 
                <i class="fa-solid fa-angle-left fa-xl"></i>
            </button>
            <button class="modal__nav-btn" onclick="openPokemonModal(${data.id + 1})">
                <i class="fa-solid fa-angle-right fa-xl"></i>
            </button>
          </div>
        </div>
       
        <div class="modal__panel">
          <div class="modal__tabs">
            <button class="modal__tab modal__tab--active" onclick="switchTab('overview', this)">Overview</button>
            <button class="modal__tab" onclick="switchTab('stats', this)">Stats</button>
          </div>   

          <div id="tabOverview" class="modal__tab-content modal__tab-content--active">
              <h3 class="modal__subtitle">Types</h3>
              <div class="modal__types">${renderTypesForTemplate(data.types)}</div>
              
              <h3 class="modal__subtitle modal__subtitle--spaced">Size & Weight</h3>
              <ul class="modal__size-weight">
                  <li><span class="modal__label">Height:</span> ${(data.height / 10).toFixed(1)} m</li>
                  <li><span class="modal__label">Weight:</span> ${(data.weight / 10).toFixed(1)} kg</li>
              </ul>

              <h3 class="modal__subtitle modal__subtitle--spaced">Abilities</h3>
              <ul class="modal__abilities">${renderAbilitiesForTemplate(data.abilities)}</ul>
          </div>

          <div id="tabStats" class="modal__tab-content">
            <h3 class="modal__subtitle">Stats</h3>
            <ul id="modalPokemonStats" class="modal__stats">
              ${renderStatsForTemplate(data.stats)}
            </ul>
          </div>
        </div>
      </div>
    </div>`;
}


