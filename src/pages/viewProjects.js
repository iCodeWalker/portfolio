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
      <h1 className="view-projects__heading center">All Projects Details</h1>
      <div className="view-projects__container">
        {data.map((item, index) => {
          return (
            <WorkCard
              key={index}
              title={item.title}
              description=" A nicer look at your GitHub profile and repo stats. Includes data
          visualizations of your top languages, starred repositories, and sort
          through your top repos by number of stars, forks, and size. A nicer
          look at your GitHub profile and repo stats. Includes data
          visualizations of your top languages, starred repositories, and sort
          through your top repos by number of stars, forks, and size."
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
