import React from "react";

import "./inputField.scss";

const InputField = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      className="input-field"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
