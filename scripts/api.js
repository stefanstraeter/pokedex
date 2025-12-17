let allPokemonList = [];


async function fetchPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch Pokemon #${id}. Status ${response.status}.`);
        }

        const data = await response.json();

        return {
            id: data.id,
            name: data.name,
            image: data.sprites.other?.["official-artwork"]?.front_default || data.sprites.front_default,
            types: data.types.map(pokemonType => pokemonType.type.name),
        }

    } catch (error) {
        console.error(error);
        return null;
    }
}


async function fetchPokemonFullDetails(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch details of Pokemon #${id}. Status ${response.status}.`);
        }

        const data = await response.json();

        return {
            id: data.id,
            name: data.name,
            image: data.sprites.other?.["official-artwork"]?.front_default || data.sprites.front_default,
            height: data.height,
            weight: data.weight,
            types: data.types.map(type => type.type.name),
            abilities: data.abilities.map(abilities => abilities.ability.name),
            stats: data.stats.map(stats => ({
                name: stats.stat.name.replace(/-/g, ' '),
                value: stats.base_stat
            }))
        }

    } catch (error) {
        console.error(error);
        return null;
    }
}


async function fetchAllPokemonNames() {
    if (allPokemonList.length)
        return allPokemonList;

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1010");
    const data = await response.json();

    allPokemonList = data.results.map((pokemon, index) => ({
        id: index + 1,
        name: pokemon.name
    }));

    return allPokemonList;
}
