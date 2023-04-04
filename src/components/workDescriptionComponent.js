import React from "react";
import externalLink from "../assets/images/external-link-alt.png";
import { FaGithub } from "react-icons/fa";

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
            <a href={gitHubLink} className="icons-group__github">
              <FaGithub size={25} />
            </a>

            <a href={projectLink}>
              <img
                className="icons-group__projectLink"
                src={externalLink}
                alt="external link"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDescriptionComponent;
