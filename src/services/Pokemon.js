
export const fetchKantoPokemon = (limit) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    .then(response => response.json())
}

export const fetchPokemonData = (url) => {
    return fetch(url)
    .then(response => response.json())
}