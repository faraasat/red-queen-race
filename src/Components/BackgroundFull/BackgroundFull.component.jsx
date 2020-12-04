import React from "react";
import Bg1 from "../../assets/1.png";
import BackgroundSun from "../BackgroundSun/BackgroundSun.component";
// import Bg from "../../assets/1.png";
import "./BackgroundFull.style.css";

export default function BackgroundFull({ children }) {
  return (
    <div className="bg">
      <img src={Bg1} alt="bg1" id="bg-img" />
      <div id='bg-footer' />
      <BackgroundSun />
      {children}
    </div>
  );
  }
