import React from "react";
import "./App.css";
import Red_Queen from "./assets/sprite_running-alice-queen_small.png";
import BackgroundFull from "./Components/BackgroundFull/BackgroundFull.component";
import useWebAnimations from "@wellyshen/use-web-animations";
import Sceneries from "./Components/Sceneries/Sceneries.component";

function App() {
  // In normal conditions react talk to virtual dom but useRef is a hook which by-passes virtual dom and give us access of actual dom and link with it

  const Queen = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" },
    ],
    timing: {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    },
  });

  return (
    <div className="wrapper">
      <BackgroundFull>
        <Sceneries Queen={Queen} />
        <div id="red-queen">
          <img
            ref={Queen.ref}
            src={Red_Queen}
            alt="Red Queen"
            id="red-queen__img"
          />
        </div>
      </BackgroundFull>
    </div>
  );
}

export default App;
