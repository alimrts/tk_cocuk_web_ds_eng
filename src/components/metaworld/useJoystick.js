import { useState, useEffect } from "react";

export default function useJoystick() {
  const [buttonMap, setButtonMap] = useState({});

  useEffect(() => {
    const onTouchStart = (direction) => {
      //   console.log("Touch start:", direction);
      setButtonMap((prevButtonMap) => ({
        ...prevButtonMap,
        [direction]: true,
      }));
    };

    const onTouchEnd = (direction) => {
      //   console.log("Touch end:", direction);
      setButtonMap((prevButtonMap) => ({
        ...prevButtonMap,
        [direction]: false,
      }));
    };

    const directions = ["left", "right", "up", "down"];

    const addEventListeners = () => {
      directions.forEach((direction) => {
        const onTouchStartHandler = () => onTouchStart(direction);
        const onTouchEndHandler = () => onTouchEnd(direction);
        const button = document.getElementById(`${direction}ButtonNav`);
        if (button) {
          //   console.log("Adding event listener for", direction);
          button.addEventListener("touchstart", onTouchStartHandler);
          button.addEventListener("touchend", onTouchEndHandler);
        }
      });
    };

    const removeEventListeners = () => {
      directions.forEach((direction) => {
        const button = document.getElementById(`${direction}ButtonNav`);
        if (button) {
          //   console.log("Removing event listener for", direction);
          button.removeEventListener("touchstart", onTouchStart);
          button.removeEventListener("touchend", onTouchEnd);
        }
      });
    };

    addEventListeners();

    return () => {
      removeEventListeners();
    };
  }, []);

  return buttonMap;
}
