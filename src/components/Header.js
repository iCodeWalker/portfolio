import React from "react";
import { FaBars } from "react-icons/fa";
import { handleSectionScroll } from "../utilities/functions/handleScroll";

import CompanyLogo from "../assets/images/logo-transparent.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo__box">
        <img src={CompanyLogo} alt="logo" class="logo" />
      </div>

      <div className="header__container">
        <p
          className="header__item"
          onClick={() => handleSectionScroll("about-section")}
        >
          About
        </p>
        <p
          className="header__item"
          onClick={() => handleSectionScroll("experience-section")}
        >
          Experience
        </p>
        <p
          className="header__item"
          onClick={() => handleSectionScroll("work-section")}
        >
          Projects
        </p>
        <p
          className="header__item"
          onClick={() => handleSectionScroll("contact-section")}
        >
          Contact
        </p>
      </div>
      <div className="menubar__container">
        <FaBars className="menubar__icon" />
      </div>
    </div>
  );
};

export default Header;
