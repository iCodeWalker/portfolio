import React from "react";

import "./inputArea.scss";

const InputArea = () => {
  return (
    <textarea
      rows={10}
      placeholder="TELL ME SOMETHING"
      className="input-area"
    />
  );
};

export default InputArea;
