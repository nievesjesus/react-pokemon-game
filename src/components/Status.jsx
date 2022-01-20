import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/sparks.json';


const Status = ({ pokemon, catched }) => {
    const { name, sprites } = pokemon

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className={`status-container ${catched ? "success" : "fail"}`}>
            {catched ?
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
                <Lottie options={defaultOptions}
                        height={450}
                        width={250}
                        isStopped={false}
                        isPaused={false}/>
            </div> 
            : 
            null            
            }           
            <div className="pokemon-preview">
                <img src={sprites.other["home"]["front_default"]} alt="pokemon-preview" className="status-preview-img"/>
            </div>
            <div className="message">
               <span className="title-status">{catched ? "Atrapaste a" : "Dejaste escapar a"}</span> <br /> {name}
            </div>
        </div>
    )
}

export default Status;