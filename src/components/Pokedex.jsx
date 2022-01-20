import PokedexItem from "./PokedexItem";

const Pokedex = ({tooglePokedex, myPokemons}) => {
    return(
        <div className='pokedex'>
            <div className='pokedex-title'>Mi Pokedex ({myPokemons.length})</div>
            <div className='pokedex-container'>
                {myPokemons.map(pokemon => {
                    return <PokedexItem pokemon={pokemon} />
                })}                                              
            </div>
            <div onClick={() => {tooglePokedex(false)}} className="close-podedex">x</div>
        </div>         
    )
}

export default Pokedex;