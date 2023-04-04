import React from "react";
import gitLogo from "../assets/images/Git.png";
import externalLinkLogo from "../assets/images/external-link-alt.png";

import NetflixClone from "../assets/images/netflix-clone.png";

import "./workCard.scss";

const WorkCard = ({
  title,
  description,
  technologiesList,
  gitLink,
  externalLink,
  projectImage,
}) => {
  return (
    <div className="work-card">
      <div
        className="work-card__header"
        style={{
          backgroundImage: `url(${projectImage})`,

          backgroundSize: "cover",
        }}
      >
        <div className="header__container">
          <p className="work-card__heading">{title}</p>
          <div>
            <a href={gitLink} target="_blank" rel="noreferrer">
              <img
                src={gitLogo}
                alt="Git logo"
                width={18}
                height={18}
                className="image__git"
              />
            </a>

            <a href={externalLink} target="_blank" rel="noreferrer">
              <img
                src={externalLinkLogo}
                alt="external link logo"
                className="image__ext-link"
                width={18}
                height={18}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="work-card__text">
        <p className="work-card__text-description u-margin-bottom-medium">
          {description}
        </p>
        <div className="work-card__text-technologies">
          {technologiesList?.map((item, index) => {
            return (
              <p className="work-card__text-technologies--item" key={index}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
