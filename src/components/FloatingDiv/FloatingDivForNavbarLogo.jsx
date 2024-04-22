import React from "react";

import "./FloatingDiv.css";

const FloatinDivForNavbarLogo = ({ img }) => {
  return (
    // darkMode
    <div className="floatingDivForLogo">
      <img src={img} alt="" />
    </div>
  );
};

export default FloatinDivForNavbarLogo;
