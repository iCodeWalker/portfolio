import React from "react";
import ExperienceBg from "../assets/images/ExperienceBackground.png";

const ExperiencePage = () => {
  return (
    <div style={{ marginLeft: 80, marginBottom: 100 }}>
      <p style={{ color: "#CCD6F6", fontSize: 35, fontWeight: "bold" }}>
        Experience :
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: 20 }}>
          <p
            style={{
              borderBottom: "2px solid #5BE9B9 ",
              borderRadius: 2,
              paddingBottom: 5,

              color: "#ffffff",
              fontWeight: "600",
              paddingLeft: 20,
              cursor: "pointer",
            }}
          >
            Indexnine
          </p>
          <p
            style={{
              borderBottom: "2px solid #5BE9B9 ",
              borderRadius: 2,
              paddingBottom: 5,

              color: "#ffffff",
              fontWeight: "600",
              paddingLeft: 20,
              cursor: "pointer",
            }}
          >
            Quazma
          </p>
          <p
            style={{
              borderBottom: "2px solid #5BE9B9 ",
              borderRadius: 2,
              paddingBottom: 5,

              color: "#ffffff",
              fontWeight: "600",
              paddingLeft: 20,
              cursor: "pointer",
            }}
          >
            SD Consultancy
          </p>
          <p
            style={{
              borderBottom: "2px solid #5BE9B9 ",
              borderRadius: 2,
              paddingBottom: 5,

              color: "#ffffff",
              fontWeight: "600",
              paddingLeft: 20,
              cursor: "pointer",
            }}
          >
            Freelance
          </p>
        </div>

        <div
          style={{
            width: "40%",
            padding: 20,
            paddingTop: 0,
            borderLeft: "2px solid #5BE9B9",
            borderRadius: 10,
            color: "#ffffff",
            backgroundImage: `url(${ExperienceBg})`,
            opacity: 0.7,
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
