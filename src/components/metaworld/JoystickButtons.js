import React from "react";
import "./JoystickButtons.css";

import useZustandStore from "../../zustandStore";

import leftButtonImage from "./joystick_ui/left_arrow.png";
import rightButtonImage from "./joystick_ui/right_arrow.png";
import upButtonImage from "./joystick_ui/up_arrow.png";
import downButtonImage from "./joystick_ui/down_arrow.png";

const JoystickButtons = () => {
  const setIsLeftButtonPressed = useZustandStore(
    (state) => state.setIsLeftButtonPressed
  );

  const setIsRightButtonPressed = useZustandStore(
    (state) => state.setIsRightButtonPressed
  );

  const setIsUpButtonPressed = useZustandStore(
    (state) => state.setIsUpButtonPressed
  );

  const setIsDownButtonPressed = useZustandStore(
    (state) => state.setIsDownButtonPressed
  );

  const handleLeftButtonClick = () => {
    setIsLeftButtonPressed(true);
  };
  const handleLeftButtonRelease = () => {
    setIsLeftButtonPressed(false);
  };

  const handleRightButtonClick = () => {
    setIsRightButtonPressed(true);
  };
  const handleRightButtonRelease = () => {
    setIsRightButtonPressed(false);
  };

  const handleUpButtonClick = () => {
    setIsUpButtonPressed(true);
  };
  const handleUpButtonRelease = () => {
    setIsUpButtonPressed(false);
  };

  const handleDownButtonClick = () => {
    setIsDownButtonPressed(true);
  };
  const handleDownButtonRelease = () => {
    setIsDownButtonPressed(false);
  };

  /////

  return (
    <div className="joystick-buttons">
      <button
        className="leftButtonNav"
        // onMouseDown={handleLeftButtonClick}
        // onMouseUp={handleLeftButtonRelease}
        onTouchStart={handleLeftButtonClick}
        onTouchEnd={handleLeftButtonRelease}
        style={{
          backgroundImage: `url(${leftButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>
      <button
        className="rightButtonNav"
        // onMouseDown={handleRightButtonClick}
        // onMouseUp={handleRightButtonRelease}
        onTouchStart={handleRightButtonClick}
        onTouchEnd={handleRightButtonRelease}
        style={{
          backgroundImage: `url(${rightButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>

      <button
        className="upButtonNav"
        // onMouseDown={handleUpButtonClick}
        // onMouseUp={handleUpButtonRelease}
        onTouchStart={handleUpButtonClick}
        onTouchEnd={handleUpButtonRelease}
        style={{
          backgroundImage: `url(${upButtonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></button>

      <button
        className="downButtonNav"
        // onMouseDown={handleDownButtonClick}
        // onMouseUp={handleDownButtonRelease}
        onTouchStart={handleDownButtonClick}
        onTouchEnd={handleDownButtonRelease}
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
