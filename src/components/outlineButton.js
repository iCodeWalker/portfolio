import React from "react";
import "./outlineButton.scss";

const OutlineButton = ({ title, clickHandler }) => {
  return (
    <button className="outline-btn__container" onClick={clickHandler}>
      {title}
    </button>
  );
};

export default OutlineButton;
