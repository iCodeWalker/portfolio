import React from "react";

import "./inputArea.scss";

const InputArea = ({ name, value, onChange }) => {
  return (
    <textarea
      rows={10}
      placeholder="Share something you like"
      name={name}
      className="input-area"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputArea;
