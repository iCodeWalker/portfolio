import React, { useState } from "react";
import Header from "../components/Header";
import devicesImage from "../assets/images/hero-devices.svg";

const HomePage = () => {
  const [developerText, setDeveloperText] = useState("Web");
  const [devloperDesc, setDeveloperDesc] = useState(
    "React Developer/JavaScript Developer"
  );
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          paddingBottom: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginLeft: 80,
            marginTop: 80,
            width: "50%",
            flex: 2,
          }}
        >
          <div style={{ color: "#ffffff", marginBottom: 60 }}>
            <h1>Hi,</h1>
            <h1>
              I'm <span style={{ color: "#5BE9B9", fontSize: 45 }}>V</span>
              aibhav Kadwey
            </h1>
            <h1
              onMouseEnter={() => {
                setDeveloperText("Mobile App");
                setDeveloperDesc("React Native / Flutter / iOS Developer");
              }}
              onMouseLeave={() => {
                setDeveloperText("Web");
                setDeveloperDesc("Web Developer / JavaScript Developer");
              }}
            >
              {developerText} Developer
            </h1>
          </div>
          <p style={{ color: "#736E6E", marginBottom: 60 }}>{devloperDesc}</p>
          <p style={{ color: "#ffffff", marginBottom: 60 }}>
            I Build Things that make web more beautiful
          </p>

          <span
            style={{
              color: "#ffffff",
              backgroundColor: "#5BE9B9",
              padding: 20,
              borderRadius: 15,
              cursor: "pointer",
            }}
          >
            Contact Now
          </span>
        </div>
        <div style={{ flex: 2, marginRight: 80 }}>
          <img src={devicesImage} alt="Home page" width="100%" height="70%" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
