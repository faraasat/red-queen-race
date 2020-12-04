import React from "react";
import Tree from "../../assets/tree-house.png";
import Barrel from "../../assets/barrel.png";
import Well1 from "../../assets/well1.png";
import Tree1 from "../../assets/tree1.png";
import Bench1 from "../../assets/bench1.png";
import Fence1 from "../../assets/fence1.png";
import "./Background1.style.css";

export default function Background1({ children }) {
  return (
    <div className="background-1">
      <img src={Tree} alt="tree" id="bg-tree" />
      <img src={Barrel} alt="barrel" id="bg-barrel" />
      <img src={Well1} alt="well1" id="bg-well1" />
      <img src={Tree1} alt="tree 1" id="bg-tree__1" />
      <img src={Bench1} alt="bench 1" id="bg-bench__1" />
      <img src={Fence1} alt="fence 1" id="bg-fence__1" />
      <img src={Fence1} alt="fence 2" id="bg-fence__2" />
      {children}
    </div>
  );
}
