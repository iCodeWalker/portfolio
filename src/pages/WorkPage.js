import React from "react";
import WorkCard from "../components/workCard";
import WorkDescriptionComponent from "../components/workDescriptionComponent";

import AmazonClone from "../assets/images/amazon-clone.png";

const WorkPage = () => {
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

      <p
        style={{
          color: "#CCD6F6",
          fontSize: 25,
          fontWeight: "bold",
          marginLeft: 80,
        }}
      >
        More About Work :
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginRight: 80,
        }}
      >
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginRight: 80,
          marginTop: 30,
        }}
      >
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#ffffff",

            padding: 15,
            border: "3px solid #5BE9B9",
            borderRadius: 15,
            cursor: "pointer",
            marginTop: 30,
            zIndex: 10,
            marginRight: 80,
            boxShadow: "2px 2px 30px  #5BE9B9",
          }}
        >
          Show More
        </span>
      </div>
    </div>
  );
};

export default WorkPage;
