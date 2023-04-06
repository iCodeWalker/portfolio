import React, { useState } from "react";

import "./experiencePage.scss";

const ExperiencePage = () => {
  const data = [
    {
      name: "Indexnine",
      description:
        "Indexnine ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum. Indexnine ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "Quazma",
      description:
        "Quazma ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "SD consultancy",
      description:
        "SD consultancy ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Freelance",
      description:
        "Freelance ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const [companyName, setCompanyName] = useState("Indexnine");

  const handleDesc = (e) => {
    const allNames = document.querySelectorAll(
      ".experience-section__company-name"
    );

    allNames.forEach((item) => {
      item.classList.remove("active");
    });

    setCompanyName(e.target.innerHTML);

    e.target.classList.add("active");
  };

  return (
    <div className="experience-section">
      <h2 className="heading-secondary">Experience :</h2>
      <div className="experience-section__container">
        <div style={{ marginRight: 20 }}>
          {data.map((item, index) => {
            return (
              <p
                key={index}
                id={index}
                className={`experience-section__company-name ${
                  index === 0 ? "active" : ""
                }`}
                onClick={handleDesc}
              >
                {item.name}
              </p>
            );
          })}
        </div>

        <div className="experience-section__company-description">
          {data.map((item, index) => {
            return companyName === item.name ? (
              <p key={item.name} className="paragraph">
                {item.description}
              </p>
            ) : (
              <p key={index}></p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
