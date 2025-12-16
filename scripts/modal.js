const pokemonModal = document.getElementById("pokemonModal");


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function createListHtml(items, callback) {
    return items.map(callback).join("");
}


async function openPokemonModal(id) {
    await updatePokemonContent(id);

    pokemonModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
}


async function updatePokemonContent(id) {
    const data = await fetchPokemonFullDetails(id);

    const abilitiesHtml = createListHtml(data.abilities, abilitie =>
        `<li>${capitalize(abilitie)}</li>`);

    const statsHtml = createListHtml(data.stats, stat =>
        `<li>${capitalize(stat.name)}: ${stat.value}</li>`);

    const typesHtml = createListHtml(data.types, type =>
        `<div class="pokemon-type type-${type}">${capitalize(type)}</div>`);

    pokemonModal.innerHTML = pokemonModalHtml(data, typesHtml, abilitiesHtml, statsHtml, data.id, data.id === 1);
}


pokemonModal.addEventListener("click", (event) => {
    if (event.target.id === "closeModalBtn")
        return closeModal();

    const navBtn = event.target.closest(".modal__nav-btn");
    if (navBtn && !navBtn.disabled) {
        const targetId = parseInt(navBtn.dataset.id);
        if (!isNaN(targetId) && targetId >= 1) updatePokemonContent(targetId);
    }

    const tab = event.target.closest(".modal__tab");
    if (tab) switchTab(tab.dataset.tab, tab);

    if (event.target === pokemonModal) closeModal();
});


function switchTab(tabName, clickedTab) {
    document.querySelectorAll(".modal__tab").forEach(tab => tab.classList.remove("modal__tab--active"));
    document.querySelectorAll(".modal__tab-content").forEach(content => content.classList.remove("modal__tab-content--active"));

    clickedTab.classList.add("modal__tab--active");
    document.getElementById(`tab${capitalize(tabName)}`).classList.add("modal__tab-content--active");
}


function closeModal() {
    pokemonModal.classList.add("hidden");
    pokemonModal.innerHTML = "";
    document.body.classList.remove("modal-open");
}
