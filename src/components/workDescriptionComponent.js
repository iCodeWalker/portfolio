import React from "react";
import AmazonClone from "../assets/images/amazon-clone.png";
import gitLogo from "../assets/images/Git.png";
import externalLink from "../assets/images/external-link-alt.png";

const WorkDescriptionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        marginBottom: 20,
        paddingBottom: 20,
        marginRight: 200,
        marginLeft: 80,
        marginBottom: 100,
        borderBottom: "3px solid #5BE9B9",
        dropShadow: "0px 0px 0px #5BE9B9",
      }}
    >
      <div
        style={{
          border: "1px solid #ffffff ",
          width: "60%",
          height: "30%",
          boxShadow: "2px 2px 4px 8px #5BE9B950",
          borderRadius: 10,
        }}
      >
        <img
          src={AmazonClone}
          alt="Amazon-clone-img"
          style={{
            borderRadius: 10,
            maxWidth: "100%",
            maxHeight: "100%",
            opacity: 0.5,
          }}
        />
      </div>
      <div>
        <p
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: 20,
            alignSelf: "end",
            position: "absolute",
            top: 0,
            right: 10,
          }}
        >
          Project Name
        </p>
        <div
          style={{
            border: "1px solid #ffffff",
            height: 100,
            width: "40%",
            backgroundColor: "#1d1d1d",
            zIndex: 20,
            position: "absolute",
            top: 70,
            right: 10,
            opacity: 0.9,
            padding: 10,
          }}
        >
          <p style={{ color: "#ffffff" }}>
            A nicer look at your GitHub profile and repo stats. Includes data
            visualizations of your top languages, starred repositories, and sort
            through your top repos by number of stars, forks, and size.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "absolute",
            bottom: 20,
            right: 10,
            color: "#ffffff",
            width: "30%",
            fontSize: 12,
          }}
        >
          <p>React</p>
          <p>Axios</p>
          <p>Netlify</p>
          <p>API's</p>
          <div>
            <img src={gitLogo} width={15} height={15} style={{ margin: 10 }} />

            <img
              src={externalLink}
              width={15}
              height={15}
              style={{ margin: 10 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDescriptionComponent;
