import React from "react";
import { FaBars } from "react-icons/fa";

import CompanyLogo from "../assets/images/logo-transparent.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo__box">
        <img src={CompanyLogo} alt="logo" class="logo" />
      </div>

      <div className="header__container">
        <p className="header__item">About</p>
        <p className="header__item">Experience</p>
        <p className="header__item">Projects</p>
        <p className="header__item">Contact</p>
      </div>
      <div className="menubar__container">
        <FaBars className="menubar__icon" />
      </div>
    </div>
  );
};

export default Header;
