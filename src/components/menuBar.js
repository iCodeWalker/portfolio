import React from "react";

const MenuBar = () => {
  return (
    <div
      style={{
        backgroundColor: "#1d1d1d",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        zIndex: 10,
        paddingLeft: 550,
        borderBottom: "3px solid #5BE9B9",
        boxShadow: "1px 2px 9px #5BE9B9",
        height: 85,
      }}
    >
      <p style={{ color: "#FFFFFF", cursor: "pointer" }}>About</p>
      <p style={{ color: "#FFFFFF", cursor: "pointer" }}>Experience</p>
      <p style={{ color: "#FFFFFF", cursor: "pointer" }}>Projects</p>
      <p style={{ color: "#FFFFFF", cursor: "pointer" }}>Contact</p>
    </div>
  );
};

export default MenuBar;
