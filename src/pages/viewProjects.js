import React, { useEffect } from "react";

import WorkCard from "../components/workCard";
import { projectsData } from "../data/projectsData";

import "./viewProjects.scss";

const ViewProjects = () => {
  const data = projectsData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="view-projects">
      <h1 className="view-projects__heading">All Projects Details</h1>
      <div className="view-projects__container">
        {data.map((item, index) => {
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
    </div>
  );
};

export default ViewProjects;
