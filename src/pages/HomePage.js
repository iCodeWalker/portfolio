import React from "react";
import Header from "../components/Header";
import devicesImage from "../assets/images/hero-devices.svg";

import "./homePage.scss";
import FilledButton from "../components/button";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="home-section">
        <div className="home-section__text">
          <div>
            <p className="paragraph">Hello,</p>
            <h1 className="heading-primary">
              I'm <span className="special-char">V</span>
              aibhav Kadwey
            </h1>
            <div className="developer__text ">
              <div className="developer__text-visible">
                <h2 className="heading-secondary">
                  <span className="special-char">W</span>eb Developer
                </h2>
                <p className="paragraph u-margin-top-medium">
                  Web Developer / JS Developer
                </p>
              </div>

              <div className="developer__text-hidden">
                <h2 className="heading-secondary">
                  <span className="special-char">A</span>pp Developer
                </h2>
                <p className="paragraph u-margin-top-medium">
                  React Native Developer / Flutter Developer
                </p>
              </div>
            </div>
          </div>

          <p className="quote-text u-margin-top-medium">
            "I Build Things that make web more beautiful"
          </p>

          <div className="u-margin-top-medium">
            <FilledButton
              title="Contact Now"
              clickHandler={() => console.log("Clicked contact")}
            />
          </div>
        </div>
        <div className="center">
          <img
            src={devicesImage}
            alt="Home page"
            className="home-section__image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
