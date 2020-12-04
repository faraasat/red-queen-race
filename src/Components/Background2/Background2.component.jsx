import React from "react";
import Rook from "../../assets/rook.png";
import House2 from "../../assets/house2.png";
import Fountain from "../../assets/fountain.gif";
import Cow1 from "../../assets/cow1.png";
import "./Background2.style.css";

export default function Background2({ children }) {
  return (
    <div className="background-1">
      <img src={Rook} alt="rook" id="bg-rook" />
      <img src={House2} alt="house 2" id="bg-house__2" />
      <img src={Fountain} alt="fountain" id="bg-fountain" />
      <img src={Cow1} alt="cow 1" id="bg-cow__1" />
      {children}
    </div>
  );
}
