const pokemonModal = document.getElementById("pokemonModal");


async function openPokemonModal(id) {
    const data = await fetchPokemonFullDetails(id);

    pokemonModal.innerHTML = pokemonModalHtml(data);

    if (data.id <= 1) {
        const prevBtn = document.getElementById("prevPokemonBtn");
        if (prevBtn) prevBtn.disabled = true;
    }

    if (!pokemonModal.open) {
        pokemonModal.showModal();
    }
}


function switchTab(tabName, clickedElement) {
    document.querySelectorAll(".modal__tab-content").forEach(content => {
        content.classList.remove("modal__tab-content--active");
    });

    document.querySelectorAll(".modal__tab").forEach(tab => {
        tab.classList.remove("modal__tab--active");
    });

    const targetId = "tab" + capitalize(tabName);
    const targetContent = document.getElementById(targetId);

    if (targetContent) {
        targetContent.classList.add("modal__tab-content--active");
    }

    clickedElement.classList.add("modal__tab--active");
}


pokemonModal.addEventListener("click", (event) => {
    if (event.target === pokemonModal) {
        pokemonModal.close();
    }
});


function renderTypesForTemplate(types) {
    return types.map(type =>
        `<div class="pokemon-type type-${type}">${capitalize(type)}</div>`
    ).join("");
}

function renderAbilitiesForTemplate(abilities) {
    return abilities.map(ability =>
        `<li>${capitalize(ability)}</li>`
    ).join("");
}

function renderStatsForTemplate(stats) {
    return stats.map(stat => {
        const cleanName = stat.name.replace("-", " ");
        return `<li><span class="modal__label">${capitalize(cleanName)}:</span> ${stat.value}</li>`;
    }).join("");
}

function capitalize(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}