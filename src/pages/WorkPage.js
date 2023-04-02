import React, { useState } from "react";
import WorkCard from "../components/workCard";
import WorkDescriptionComponent from "../components/workDescriptionComponent";

import AmazonClone from "../assets/images/amazon-clone.png";
import OutlineButton from "../components/outlineButton";

const WorkPage = () => {
  const [newList, setNewList] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div style={{ padding: 50 }}>
      <p className="heading-secondary">Works :</p>
      <WorkDescriptionComponent
        title="Amazon Clone"
        description="  A nicer look at your GitHub profile and repo stats. Includes data of
            your top languages, starred repositories, and sort through your top
            repos by number of stars, forks, and size. A nicer look at your
            GitHub profile and repo stats. Includes data of your top languages,
            starred repositories."
        technologiesUsed={["React", "Axios", "Netlify", "react-icons"]}
        projectImage={AmazonClone}
      />

      <WorkDescriptionComponent
        title="Amazon Clone"
        description="  A nicer look at your GitHub profile and repo stats. Includes data of
            your top languages, starred repositories, and sort through your top
            repos by number of stars, forks, and size. A nicer look at your
            GitHub profile and repo stats. Includes data of your top languages,
            starred repositories."
        technologiesUsed={["React", "Axios", "Netlify", "react-icons"]}
        projectImage={AmazonClone}
      />

      <WorkDescriptionComponent
        title="Amazon Clone"
        description="  A nicer look at your GitHub profile and repo stats. Includes data of
            your top languages, starred repositories, and sort through your top
            repos by number of stars, forks, and size. A nicer look at your
            GitHub profile and repo stats. Includes data of your top languages,
            starred repositories."
        technologiesUsed={["React", "Axios", "Netlify", "react-icons"]}
        projectImage={AmazonClone}
      />

      <h2
        className="heading-secondary u-margin-bottom-big"
        style={{
          marginLeft: 80,
        }}
      >
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
        {newList.map((item) => {
          return (
            <WorkCard
              title="Netflix Clone"
              description=" A nicer look at your GitHub profile and repo stats. Includes data
          visualizations of your top languages, starred repositories, and sort
          through your top repos by number of stars, forks, and size. A nicer
          look at your GitHub profile and repo stats. Includes data
          visualizations of your top languages, starred repositories, and sort
          through your top repos by number of stars, forks, and size."
              technologiesList={["React", "React Native", "Axios", "Netlify"]}
              gitLink="https://github.com/iCodeWalker/portfolio"
              externalLink="https://github.com/iCodeWalker/portfolio"
            />
          );
        })}
      </div>

      <div className="center u-margin-top-big">
        <OutlineButton title="See More" />
      </div>
    </div>
  );
};

export default WorkPage;
