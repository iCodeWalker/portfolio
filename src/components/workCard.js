import React from "react";
import gitLogo from "../assets/images/Git.png";
import externalLink from "../assets/images/external-link-alt.png";

const WorkCard = () => {
  return (
    <div
      style={{
        border: "1px solid #5BE9B9",
        width: "20%",
        boxShadow: "2px 2px 30px  #5BE9B9",
        padding: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 10,
          marginRight: 10,
        }}
      >
        <img
          src={gitLogo}
          alt="Git logo"
          width={20}
          height={20}
          style={{ margin: 10 }}
        />

        <img
          src={externalLink}
          alt="external link logo"
          width={20}
          height={20}
          style={{ margin: 10 }}
        />
      </div>
      <p
        style={{
          fontSize: 18,
          fontWeight: "500",
          color: "#ffffff",
          marginTop: 20,
        }}
      >
        Project Name
      </p>
      <div>
        <p style={{ fontSize: 14, fontWeight: "200", color: "#ffffff" }}>
          A nicer look at your GitHub profile and repo stats. Includes data
          visualizations of your top languages, starred repositories, and sort
          through your top repos by number of stars, forks, and size.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            color: "#838181",
          }}
        >
          <p>React</p>
          <p>React Native</p>
          <p>Axios</p>
          <p>Netlify</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
