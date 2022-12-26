import React, { useEffect } from "react";
import TagCloud from "TagCloud";

import "./RotatingSphere.css";

const RotatingSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "React",
        "React Native",
        "Flutter",
        "HTML5",
        "CSS3",
        "Javascript",
        "TypeScript",
        "jQuery",
        "Figma",
        "Saas",
        "Node",
        "Mongo DB",
        "Express",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return <span className="tagcloud"></span>;
};

export default RotatingSphere;
