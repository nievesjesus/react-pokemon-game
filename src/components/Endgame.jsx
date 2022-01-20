const Endgame = ({missedPokemons,  myPokemons}) => {
    return(
        <div class="pre-game">
        <div className="pre-game-title">
          El juego ha terminado
        </div>
        <div className='pre-game-description'>
          <p>Estas son tus estadisticas</p>
          <ul>
            <li><strong><span style={{ color: "#43a047" }}>Atrapaste</span></strong>: {myPokemons.length} pokemones</li>
            <li><strong><span style={{ color: "#e53935" }}>Escaparon</span></strong>: {missedPokemons.length} pokemones</li>
          </ul>
          <p>Gracias por vivir esta aventura, nos vemos en un proximo nivel</p>
        </div>
      </div>        
    )
}

export default Endgame;