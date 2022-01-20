const Status = ({ pokemon, catched }) => {
    const { name, sprites } = pokemon
    console.log(pokemon);
    return (
        <div className={`status-container ${catched ? "success" : "fail"}`}>
            <div className="pokemon-preview">
                <img src={sprites["front_default"]} alt="pokemon-preview" className="status-preview-img"/>
            </div>
            <div className="message">
               {catched ? "Atrapaste a" : "Dejaste escapar a"} {name}
            </div>
        </div>
    )
}

export default Status;