import React from "react";
import { Link } from "react-router-dom";

import WorkCard from "../components/workCard";
import WorkDescriptionComponent from "../components/workDescriptionComponent";

import { projectsData } from "../data/projectsData";

import OutlineButton from "../components/outlineButton";

import "./workPage.scss";

const WorkPage = () => {
  const workDescritionData = projectsData.slice(0, 4);
  const cardData = projectsData.slice(4, 7);

  const handleBtnClick = () => {};

  return (
    <div className="work-section">
      <p className="heading-secondary">Works :</p>
      {workDescritionData.map((item, index) => {
        return (
          <WorkDescriptionComponent
            key={index}
            title={item.title}
            description={item.description}
            technologiesUsed={item.technologiesUsed}
            projectImage={item.projectImage}
            projectLink={item.projectLink}
            gitHubLink={item.gitHubLink}
          />
        );
      })}

      <h2 className="heading-secondary u-margin-bottom-big">
        More About Work :
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {cardData.map((item, index) => {
          return (
            <WorkCard
              key={index}
              title={item.title}
              description={item.description}
              technologiesList={item.technologiesUsed}
              projectImage={item.projectImage}
              gitLink={item.gitHubLink}
              externalLink={item.projectLink}
            />
          );
        })}
      </div>

      <div className="center u-margin-top-big">
        <Link to="/projects">
          <OutlineButton title="See More" clickHandler={handleBtnClick} />
        </Link>
      </div>
    </div>
  );
};

export default WorkPage;
