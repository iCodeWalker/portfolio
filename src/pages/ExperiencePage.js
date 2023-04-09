import React, { useState } from "react";

import { companyData } from "../data/companyData";

import "./experiencePage.scss";

const ExperiencePage = () => {
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
          {companyData.map((item, index) => {
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
          {companyData.map((item, index) => {
            return companyName === item.name ? (
              <div>
                <div style={{ display: "flex" }}>
                  <p key={item.name} className="paragraph">
                    {item.description}{" "}
                    <span className="paragraph-5">{item.duration}</span>
                  </p>
                </div>
                <div>
                  {item.project.map((el, i) => {
                    return (
                      <div>
                        <p className="paragraph" key={i}>
                          {el.title}
                        </p>
                        <ul className="project-points">
                          {el.points.map((point, ind) => {
                            return (
                              <li key={ind} className="paragraph-5">
                                {point}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
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
