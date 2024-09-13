import React from "react";

import "./FloatingDiv.css";

const FloatinDivForAltMenu = ({ img, onClick }) => {
  return (
    <div
      className="floatingDivForAltMenu"
      onClick={onClick}
      style={{ marginLeft: "-2rem" }}
    >
      <img src={img} alt="" />
    </div>
  );
};

export default FloatinDivForAltMenu;
