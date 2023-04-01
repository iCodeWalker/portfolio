import React from "react";
import "./button.scss";

const FilledButton = ({ title, clickHandler }) => {
  return (
    <button className="btn__container" onClick={clickHandler}>
      {title}
    </button>
  );
};

export default FilledButton;
