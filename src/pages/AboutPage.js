import React from "react";
import logoFlutter from "../assets/images/logos_flutter.png";
import logoReact from "../assets/images/logos_react.png";
import logoJs from "../assets/images/logos_javascript.png";
import logoTs from "../assets/images/logos_typescript-icon.png";
import logoFigma from "../assets/images/logos_figma.png";

import { FaNode } from "react-icons/fa";

import "./aboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-section">
      <p className="heading-secondary">About Me :</p>
      <div className="about-section__container">
        <div className="about-section__text ">
          <p className="paragraph">
            Hello! My name is Vaibhav I’m a software engineer specializing in
            building exceptional digital experiences. and I enjoy creating
            things that live on the internet. My interest in web development
            started back in 2018 when I was doing my graduation. I started with
            static content website using HTML5, CSS3 and JavaScript. As i
            started doing more study in web development it turns out to be
            challenging and i accepted it.
          </p>
          <p className="paragraph u-margin-top-small">
            Now talking of today, I have worked with some startups, a
            consultancy and as a freelancer in some of the good projects that
            helped me to learn a lot.
          </p>

          <div className="about-section__list">
            <p className="paragraph u-margin-top-big">
              Here are a few technologies I’ve been working with recently:
            </p>

            <div className="technologies u-margin-top-big">
              <ul className="technologies__ul-list">
                <li>JavaScript (ES 6)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Flutter </li>
                <li>Node</li>
                <li>Express</li>
              </ul>

              <div className="technologies__logos">
                <FaNode
                  color="green"
                  className="technologies__logo technologies__logo-1"
                  size={60}
                />

                <img
                  src={logoJs}
                  alt="logo-javascript"
                  className="technologies__logo technologies__logo-2"
                />

                <img
                  src={logoReact}
                  alt="logo-react"
                  className="technologies__logo technologies__logo-3"
                />
                <img
                  src={logoFigma}
                  alt="logo-react"
                  className="technologies__logo technologies__logo-4"
                />
                <img
                  src={logoFlutter}
                  alt="logo-flutter"
                  className="technologies__logo technologies__logo-5"
                />
                <img
                  src={logoTs}
                  alt="logo-typescript"
                  className="technologies__logo technologies__logo-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="about-section__image-container">
          <img
            src={AboutImage}
            alt="about-img"
            className="about-section__developer-image "
          />
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;
