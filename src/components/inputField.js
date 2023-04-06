import React from "react";

import "./inputField.scss";

const InputField = ({ value, onChange, placeholder, type, name }) => {
  return (
    <input
      className="input-field"
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
