import React from "react";

import "./FloatingDiv.css";

const FloatinDivForNavbarMenu = ({ img, onClick }) => {
  return (
    <div className="floatingDivForMenuAlt" onClick={onClick}>
      <img src={img} alt="" />
    </div>
  );
};

export default FloatinDivForNavbarMenu;
