import React from "react";

import "./inputArea.scss";

const InputArea = () => {
  return (
    <textarea
      rows={10}
      placeholder="Share something you like"
      className="input-area"
    />
  );
};

export default InputArea;
