import React, { useEffect } from "react";
import TechBg from "../assets/images/tech_bg.png";
import "../App.css";
import RotatingSphere from "../components/RotatingSphere";

const TechnologiesPage = () => {
  return (
    <div style={{ marginLeft: 80, display: "flex" }}>
      <div>
        <p style={{ color: "#CCD6F6", fontSize: 35, fontWeight: "bold" }}>
          Technologies Worked With :
        </p>
        <ul style={{ color: "#ffffff" }}>
          <li>React</li>
          <li>React Native</li>
          <li>Flutter</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>jQuery</li>
          <li>Figma</li>
        </ul>

        <p style={{ color: "#CCD6F6", fontSize: 35, fontWeight: "bold" }}>
          Have Knowledge of :
        </p>
        <ul style={{ color: "#ffffff" }}>
          <li>Node js</li>
          <li>Next js</li>
          <li>Django</li>
          <li>MongoDB</li>
          <li>GrapgQL</li>
        </ul>
      </div>
      <div>
        <RotatingSphere />
      </div>
    </div>
  );
};

export default TechnologiesPage;
