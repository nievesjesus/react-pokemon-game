const Intro = ({startGame}) => {
    return(
        <div class="pre-game">
        <div className="pre-game-title">
          ¿Estas listos para demostrar cuanto sabes de pokemones?
        </div>
        <div className='pre-game-description'>
          <p>El juego consiste en adivinar que <strong>tipo</strong> de pokemon es el que se muestra en pantalla.</p>
          <ul>
            <li><strong>Si adivinas</strong>: Podras capturar el pokemon y lo almacenaras en tu pokedex</li>
            <li><strong>Si no adivinas</strong>: perderas la oportunidad de tener el pokemon y nunca mas podras atraparlo.</li>
          </ul>
          <p>Asi que piensalo bien antes de elegir el tipo de pokemon</p>
        </div>
        <div onClick={startGame} className='start-game'>
            Empezar a jugar
        </div>
      </div>        
    )
}

export default Intro;