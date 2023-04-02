import React from "react";

import "../App.css";

import RotatingSphere from "../components/RotatingSphere";

import "./technologiesPage.scss";

const TechnologiesPage = () => {
  return (
    <div className="technologies-section">
      <div className="technologies-section__text-container">
        <div>
          <p className="heading-secondary technologies-section__heading">
            Technologies Worked:
          </p>
          <div className="technologies-section__text">
            <p className="technologies-section__text-item">React</p>
            <p className="technologies-section__text-item">React Native</p>
            <p className="technologies-section__text-item">Flutter</p>
            <p className="technologies-section__text-item">HTML5</p>
            <p className="technologies-section__text-item">CSS3</p>
            <p className="technologies-section__text-item">JavaScript</p>
            <p className="technologies-section__text-item">TypeScript</p>
            <p className="technologies-section__text-item">jQuery</p>
            <p className="technologies-section__text-item">Figma</p>
            <p className="technologies-section__text-item">NodeJS</p>
            <p className="technologies-section__text-item">ExpressJS</p>
          </div>
        </div>
        <div>
          <p className="heading-secondary technologies-section__heading">
            Have Knowledge of:
          </p>
          <div className="technologies-section__text">
            <p className="technologies-section__text-item">NodeJS</p>
            <p className="technologies-section__text-item">Next JS</p>
            <p className="technologies-section__text-item">Django</p>
            <p className="technologies-section__text-item">MongoDB</p>
            <p className="technologies-section__text-item">GraphQL</p>
          </div>
        </div>
      </div>
      <div className="technologies-section__image-container">
        <RotatingSphere />
      </div>
    </div>
  );
};

export default TechnologiesPage;
