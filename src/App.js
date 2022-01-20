import './App.css';
import './assets/styles/pokeball.css';
import { useEffect, useState } from 'react';
import { fetchKantoPokemon, fetchPokemonData } from './services/Pokemon';
import Intro from './components/Intro';
import Loading from './components/Loading';
import Level1 from './components/Level1';
import Endgame from './components/Endgame';
import Pokedex from './components/Pokedex';
import Gamesound from './components/Gamesound';
import Status from './components/Status';

const App = () => {

  const [kantoPokemons, setKantoPokemons] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState(null)
  const [myPokemons, setMyPokemons] = useState([]) 
  const [missedPokemons, setMissedPokemons] = useState([])    
  const [gameStarter, setGameStarter] = useState(false)
  const [loading, setLoading] = useState(false)  
  const [gameEnded, setGameEnded] = useState(false)  
  const [openPokedex, setOpenPokedex] = useState(false)
  const [showStatus, setShowStats] = useState(false)
  const [catched, setCatched] = useState(false)
  const [statusPokemon, setStatusPokemon] = useState(null);

  const catchPokemon = (success, pokemon) => {
    setCatched(success)
    if (success) {
      setMyPokemons([...myPokemons, pokemon])     
    } else {
      setMissedPokemons([...missedPokemons, pokemon])
    }
    setStatusPokemon(pokemon)
    setShowStats(true)
    setTimeout(() => {
        let cleanPokemon = kantoPokemons.filter(item => item.id !== pokemon.id)
        setKantoPokemons(cleanPokemon)      
        setShowStats(false)
    }, 1500);

  }

  const startGame = () => {
    setGameStarter(true)
    getAllPokemons()
  }

  const getAllPokemons = async () => {
    setLoading(true)    
    fetchKantoPokemon("151").then(async pokemons => {
      const all = await Promise.all(
        pokemons.results.map(async (pokemon) => {return await fetchPokemonData(pokemon.url)})
      ) 
      return all
    }).then(all => {
      const item = all[Math.floor(Math.random()*all.length)];
      setCurrentPokemon(item)
      setKantoPokemons(all)
      setLoading(false)
    })
  }

  const endGame = async () => {
     if (gameStarter) {
      setGameEnded(true)
     }
  }
  useEffect(() => {
    if (kantoPokemons.length > 0)  {
      const item = kantoPokemons[Math.floor(Math.random()*kantoPokemons.length)];
      setCurrentPokemon(item);
    } else {
      endGame()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kantoPokemons]);

  return (
    <div>
        <div className="App">
            <div className='game-title'>PokeGuest</div>            
            <div className="pokemon-container">            
                {gameStarter && !loading ? <Level1 availablePokemons={kantoPokemons} catchPokemon={catchPokemon} currentPokemon={currentPokemon}  /> : null}
                {gameEnded ? <Endgame missedPokemons={missedPokemons} myPokemons={myPokemons} /> : null }
                {!gameStarter ? <Intro startGame={startGame} /> : null }  
                {loading ? <Loading /> : null }    
                { showStatus ? <Status pokemon={statusPokemon} catched={catched} /> : null }             
            </div>
        </div>       
        <div onClick={ () => { setOpenPokedex(!openPokedex) }} className="pokeball">
          <div className="pokeball__button"></div>
        </div> 
        {openPokedex ? <Pokedex tooglePokedex={setOpenPokedex} myPokemons={myPokemons} /> : null }   
        <Gamesound />
    </div>
  );
}

export default App;
