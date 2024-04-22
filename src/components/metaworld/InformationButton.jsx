// InformationButton.js

import informationBtn from "../../img/metaverse_images/information_btn.png";
import React, { useState, useEffect, useRef } from "react";
import "./InformationButton.css"; // Import the CSS file

const InformationButton = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const infoRef = useRef(null);

  const handleButtonClick = () => {
    setShowInfo(!showInfo);
  };

  const handleClickOutside = (event) => {
    if (infoRef.current && !infoRef.current.contains(event.target)) {
      // Clicked outside the information button and text
      setShowInfo(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Information Button */}
      <div
        className={`information-button ${showInfo ? "clicked" : ""}`}
        style={{ left: props.left, top: props.top }}
        onClick={handleButtonClick}
        ref={infoRef}
      >
        {/* Replace 'information-icon.png' with your circular information icon */}
        <img src={informationBtn} alt="Information" />
      </div>

      {/* Information Text */}
      {showInfo && <div className="information-text">{props.text}</div>}
    </>
  );
};

export default InformationButton;
