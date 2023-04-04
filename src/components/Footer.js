import React from "react";
import { handleSectionScroll } from "../utilities/functions/handleScroll";

import LinkedinLogo from "../assets/images/logos_linkedin.png";
import InstaLogo from "../assets/images/logos_insta.png";
import GmailLogo from "../assets/images/logos_gmail.png";
import GitLogo from "../assets/images/Git.png";
import CompanyLogo from "../assets/images/logo-transparent.png";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-section__container">
        <div className="footer-section__links-container">
          <div>
            <p className="heading-tertiary u-margin-bottom-medium">Contact</p>
            <p className="paragraph-4 u-margin-bottom-big">
              City: Indore <br></br>
              State: M.P. (India)<br></br>
              Zip-Code: 455001 <br></br>
              Contact No. :<br></br> +91-8619943454, +91-9926702406 <br></br>
              Email : vaibhav3kadwey@gmail.com
            </p>
          </div>
          <div>
            <p className="heading-tertiary u-margin-bottom-medium">Menu</p>
            <p
              className="paragraph-4"
              onClick={() => handleSectionScroll("home-section")}
            >
              Home
            </p>
            <p
              className="paragraph-4"
              onClick={() => handleSectionScroll("about-section")}
            >
              About
            </p>
            <p
              className="paragraph-4"
              onClick={() => handleSectionScroll("experience-section")}
            >
              Experience
            </p>
            <p
              className="paragraph-4"
              onClick={() => handleSectionScroll("work-section")}
            >
              Works
            </p>
            <p
              className="paragraph-4"
              onClick={() => handleSectionScroll("tech-section")}
            >
              Technologies
            </p>
          </div>
          <div>
            <p className="heading-tertiary u-margin-bottom-medium">
              Recent Posts
            </p>
            <p className="paragraph-4">About Grids</p>
            <p className="paragraph-4">About Flex</p>
            <p className="paragraph-4">New Projects</p>
          </div>
        </div>

        <div className="social__links">
          <a href="https://github.com/iCodeWalker">
            <img
              src={LinkedinLogo}
              alt="external link logo"
              className="social__links-link"
            />
          </a>

          <a href="https://github.com/iCodeWalker">
            <img
              src={InstaLogo}
              alt="external link logo"
              className="social__links-link"
            />
          </a>

          <a href="https://github.com/iCodeWalker">
            <img
              src={GitLogo}
              alt="external link logo"
              className="social__links-link"
            />
          </a>

          <a href="https://github.com/iCodeWalker">
            <img
              src={GmailLogo}
              alt="external link logo"
              className="social__links-link"
            />
          </a>
        </div>
      </div>

      <div className="footer-section__copyright u-margin-top-big">
        <img src={CompanyLogo} alt="logo" height={100} width={150} />
        <span className="developer__text u-margin-top-small">
          Designed and built by &nbsp;
          <span className="developer__name">
            <span className="special-char">V</span>aibhav Kadwey
          </span>
          <p className="copyright__text u-margin-top-small">
            Copyright &copy; 2023-24 Vaibhav Kadwey
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
