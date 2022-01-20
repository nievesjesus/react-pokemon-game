const Level1 = ({currentPokemon, catchPokemon, availablePokemons}) => {
    const {name, types, id, sprites} = currentPokemon

    const pokemonTypes = ["Normal", "Fire", "Water", "Grass", "Electric", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon"]

    const pokemonTypeClick = (type) => {
        let lowerCaseType = type.toLowerCase();
        let isType = types.find(type => type.type.name === lowerCaseType)
        if (typeof isType !== 'undefined') {
            catchPokemon(true, currentPokemon);
        } else {
            catchPokemon(false, currentPokemon);
        }
    }

    return(
        <>
            <div className='available-pokemons'>Pokemones por atrapar: ({availablePokemons.length})</div>
            <div className='pokemon-image'><img alt="pokemon" src={sprites.other["home"]["front_default"]} /></div>
            <div className='pokemon-description'>
            <div className='pokedex-number'>Pokedex #{id}</div>
            <div className='pokemon-name'>{name}</div>
            </div>
            <div className='pokemon-type-container'>
                <div className='pokemon-type-title'>¿Que tipo de pokemon es?</div>
                <div className='pokemon-type-item-container'>
                    {pokemonTypes.map(pokemon => { return (<div onClick={() => {pokemonTypeClick(pokemon)}}>{pokemon}</div>) })}
                </div>
            </div>         
        </>       
    )
}

export default Level1;