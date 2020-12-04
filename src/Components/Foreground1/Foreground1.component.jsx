import React from "react";
import "./Foreground1.style.css";
import Palm1 from "../../assets/palm1.png";
import Palm2 from "../../assets/palm2.png";

export default function Foreground1() {
  return (
    <div className="foreground">
      <img src={Palm1} alt="palm 1" id="fg-palm__1" />
      <img src={Palm2} alt="palm 2" id="fg-palm__2" />
    </div>
  );
}
