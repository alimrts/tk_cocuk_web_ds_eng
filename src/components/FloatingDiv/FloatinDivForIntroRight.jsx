import React from "react";

import "./FloatingDiv.css";

const FloatinDivForIntroRight = ({ img, onClick }) => {
  return (
    // darkMode
    <div className="floatingDivForIntroRight" onClick={onClick}>
      <img src={img} alt="" />
    </div>
  );
};

export default FloatinDivForIntroRight;
