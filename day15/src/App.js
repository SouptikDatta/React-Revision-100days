import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import space1 from "../src/images/night.jpg";
import space from "../src/images/solar.jpg";
import moon from "../src/images/moon.jpg";
import round from "../src/images/round.jpg";
import man from "../src/images/spaceman.gif";
import logo from "../src/images/react.svg"
import BackgroundVideo from '../src/images/BackgroundVideo.mp4'

function App() {
  const ref = useRef();
  return (
    <div>  
      <Parallax pages={4} ref={ref}>
        <div className='hero-container'>
          <video src={BackgroundVideo} autoPlay loop muted />
          <h3> Welcome </h3>
        </div>
        <ParallaxLayer style={{
            zIndex:0,  
          }}
          sticky={{ start: 0.1, end: 3.7}}>
          <img src={man} alt="" />
        </ParallaxLayer>

        <ParallaxLayer sticky={{start: 0.9, end: 2.2}}
          speed={0.5}
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "5%",
            backgroundPosition: "right",
            mixBlendMode: "difference",
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          style={{
            backgroundImage: `url(${round})`,
            backgroundSize: "contain",
            mixBlendMode: "difference"
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            backgroundImage: `url(${space})`,
            backgroundSize: "100%",
            mixBlendMode: "difference"
          }}
        ></ParallaxLayer>

        <ParallaxLayer   
          offset={2}
          speed={1}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "50%",
            backgroundPosition: "center",
            mixBlendMode: "difference",
          }}
        >
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}      
          style={{
            backgroundImage: `url(${space1})`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            mixBlendMode: "difference",
          }}   
        >
         <p>Congratulations! You Made It</p>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
