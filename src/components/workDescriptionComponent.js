import React from "react";
import externalLink from "../assets/images/external-link-alt.png";
import gitLogo from "../assets/images/Git.png";

import "./workDescriptionComponent.scss";

const WorkDescriptionComponent = ({
  title,
  description,
  technologiesUsed,
  projectImage,
  gitHubLink,
  projectLink,
}) => {
  return (
    <div className="work-description">
      <div className="work-description__image-section">
        <img
          src={projectImage}
          alt="Amazon-clone-img"
          className="work-description__image"
        />
      </div>
      <div className="work-description__details">
        <p className="work-description__details-title heading-tertiary u-margin-bottom-medium">
          {title}
        </p>
        <div className="work-description__details-text--container">
          <p className="paragraph-3">{description}</p>
        </div>
        <div className="details-tech-used">
          {technologiesUsed?.map((item, index) => {
            return (
              <p className="details-tech-used--item" key={index}>
                {item}
              </p>
            );
          })}

          <div className="icons-group">
            <a href={gitHubLink} target="_blank" rel="noreferrer">
              <img
                src={gitLogo}
                alt="Git logo"
                width={30}
                height={30}
                className="image__git"
              />
            </a>

            <a href={projectLink}>
              <img
                className="icons-group__projectLink"
                src={externalLink}
                alt="external link"
                width={18}
                height={18}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDescriptionComponent;
