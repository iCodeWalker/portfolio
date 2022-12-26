import React from "react";
import WorkCard from "../components/workCard";
import WorkDescriptionComponent from "../components/workDescriptionComponent";

const WorkPage = () => {
  return (
    <div style={{ marginLeft: 80, marginBottom: 30 }}>
      <p style={{ color: "#CCD6F6", fontSize: 35, fontWeight: "bold" }}>
        Works :
      </p>
      <WorkDescriptionComponent />
      <WorkDescriptionComponent />
      <WorkDescriptionComponent />
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
