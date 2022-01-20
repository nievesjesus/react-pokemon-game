import Lottie from 'react-lottie';
import * as animationData from '../assets/animations/pokeball.json';

const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.85)" }}>
            <Lottie options={defaultOptions}
                    height={150}
                    width={150}
                    isStopped={false}
                    isPaused={false}/>
        </div>
    )
}

export default Loading
