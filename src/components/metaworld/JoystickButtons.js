import React from "react";
import "./JoystickButtons.css";

import leftButtonImage from "./joystick_ui/left_arrow.png";
import rightButtonImage from "./joystick_ui/right_arrow.png";
import upButtonImage from "./joystick_ui/up_arrow.png";
import downButtonImage from "./joystick_ui/down_arrow.png";

const JoystickButtons = () => {
  return (
    <div className="joystick-buttons">
      <button
        id="leftButtonNav"
        className="leftButtonNav"
        style={{
          backgroundImage: `url(${leftButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>
      <button
        id="rightButtonNav"
        className="rightButtonNav"
        style={{
          backgroundImage: `url(${rightButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>

      <button
        id="upButtonNav"
        className="upButtonNav"
        style={{
          backgroundImage: `url(${upButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>

      <button
        id="downButtonNav"
        className="downButtonNav"
        style={{
          backgroundImage: `url(${downButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>
    </div>
  );
};

export default JoystickButtons;
