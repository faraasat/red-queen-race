import useWebAnimations from "@wellyshen/use-web-animations";
import React from "react";
import Sun from "../../assets/sun.png";
import Cloud2 from "../../assets/cloud2.png";
import "./BackgroundSun.style.css";
import Grass1 from "../../assets/grass1.png";
import Grass2 from "../../assets/grass2.png";
import Grass3 from "../../assets/grass3.png";
import CoverGrass from "../../assets/cover-grass.png";

export default function BackgroundSun({ children }) {
  const { ref } = useWebAnimations({
    keyframes: [
      { "transform-origin": "center center", transform: "rotate(-150deg)" },
      { "transform-origin": "center center", transform: "rotate(0)" },
    ],
    timing: {
      duration: 8000,
      playbackRate: 1,
      iterations: Infinity,
    },
  });

  return (
    <div>
      <img ref={ref} src={Sun} alt="bg1" id="bg-sun" />
      <img src={Cloud2} alt="bg1" id="bg-cloud__up" />
      <img src={Cloud2} alt="bg2" id="bg-cloud__position1" />
      <img src={Cloud2} alt="bg3" id="bg-cloud__position2" />
      <img src={Cloud2} alt="bg4" id="bg-cloud__position3" />
      <img src={Cloud2} alt="bg5" id="bg-cloud__position4" />
      <img src={Cloud2} alt="bg5" id="bg-cloud__position5" />
      <img src={CoverGrass} alt="cover grass" id="bg-grass__cover1" />
      <img src={CoverGrass} alt="cover grass" id="bg-grass__cover2" />
      <img src={CoverGrass} alt="cover grass" id="bg-grass__cover3" />
      <img src={CoverGrass} alt="cover grass" id="bg-grass__cover4" />
      <img src={Grass1} alt="grass1" id="bg-grass__1" />
      <img src={Grass2} alt="grass2" id="bg-grass__2" />
      <img src={Grass3} alt="grass3" id="bg-grass__3" />
      {children}
    </div>
  );
}
