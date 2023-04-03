import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { handleSectionScroll } from "../utilities/functions/handleScroll";

import CompanyLogo from "../assets/images/logo-transparent.png";

import "./Header.scss";

const Header = () => {
  const [isIconClick, setIsIconClick] = useState(false);

  const handleMenuBarClick = (e) => {
    setIsIconClick(!isIconClick);
  };

  const SectionHandler = (sectionName) => {
    handleSectionScroll(sectionName);
    setIsIconClick(false);
  };

  return (
    <div className="header">
      <div className="logo__box">
        <img src={CompanyLogo} alt="logo" class="logo" />
      </div>

      <div
        className={`header__container ${
          isIconClick ? "header__container-active" : ""
        }`}
      >
        <p
          className="header__item"
          onClick={() => SectionHandler("about-section")}
        >
          About
        </p>
        <p
          className="header__item"
          onClick={() => SectionHandler("experience-section")}
        >
          Experience
        </p>
        <p
          className="header__item"
          onClick={() => SectionHandler("work-section")}
        >
          Projects
        </p>
        <p
          className="header__item"
          onClick={() => SectionHandler("contact-section")}
        >
          Contact
        </p>
      </div>

      <div className="menubar" onClick={handleMenuBarClick}>
        {isIconClick ? (
          <FaTimes className="menubar__icon" />
        ) : (
          <FaBars className="menubar__icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
