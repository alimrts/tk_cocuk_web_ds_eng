import React, { useState, useEffect } from "react";
import ulkelerLogo from "../../img/metaverse_images/ulkeler_header_eng.png";
import "./UlkeBayrak.css";

import useZustandStore from "../../zustandStore";

const UlkelerBayrak = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a delay to mimic loading (you can replace this with actual loading logic)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const [selectedLevel, setSelectedLevel] = useState(null);

  const [backgroundColorForLevels, setBackgroundColorForLevels] =
    useState(null);

  const updateLevel = (event) => {
    setSelectedLevel(event.target.value);

    if (event.target.value === "easy") {
      setBackgroundColorForLevels("lightGreen");
    } else if (event.target.value === "medium") {
      setBackgroundColorForLevels("rgb(168, 242, 240)");
    } else {
      setBackgroundColorForLevels("rgb(255, 66, 52)");
    }
  };

  const getLevelHTML = () => {
    switch (selectedLevel) {
      case "easy":
        return "kolay.html";
      case "medium":
        return "normal.html";
      case "hard":
        return "zor.html";
      default:
        return "";
    }
  };

  const setIsAnyGameOpened = useZustandStore(
    (state) => state.setIsAnyGameOpened
  );

  useEffect(() => {
    setIsAnyGameOpened(true);

    return () => setIsAnyGameOpened(false);
  }, []);

  return (
    <>
      {loading ? (
        // Render a loader while the content is loading
        <div
          className="ulkeBayrak"
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            aliginItems: "center",
            background: "lightGrey",
            width: "480px",
            height: "800px",
            borderRadius: 8,
          }}
        >
          <span
            style={{
              marginTop: "5rem",
            }}
          >
            {" "}
            Loading...
          </span>
        </div>
      ) : (
        // Render the content once loading is complete
        <div
          className="ulkeBayrak"
          style={{
            display: "flex",
            justifyContent: "center",
            aliginItems: "center",
            background: "lightGrey",
            width: "480px",
            height: "820px",
            borderRadius: 8,
          }}
        >
          {!selectedLevel ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                color: "black",
                marginTop: "4rem",
                userSelect: "none",
              }}
            >
              <img
                src={ulkelerLogo}
                alt={""}
                style={{
                  width: "auto",
                  maxWidth: "100%",
                  height: "auto",
                  marginTop: "1rem",
                }}
              />
              <div> Choose difficulty level </div>
              <label className="labelEasy">
                <input
                  type="radio"
                  name="level"
                  value="easy"
                  checked={selectedLevel === "easy"}
                  onChange={updateLevel}
                />
                Easy
              </label>
              {/* <label className="labelMedium">
                <input
                  type="radio"
                  name="level"
                  value="medium"
                  checked={selectedLevel === "medium"}
                  onChange={updateLevel}
                />
                Normal
              </label> */}
              <label className="labelHard">
                <input
                  type="radio"
                  name="level"
                  value="hard"
                  checked={selectedLevel === "hard"}
                  onChange={updateLevel}
                />
                Hard
              </label>
            </div>
          ) : (
            <iframe
              style={{
                border: "none",
                backgroundColor: backgroundColorForLevels,
                width: "480px",
                height: "820px",
              }}
              src={`js-flags-quiz-master/${getLevelHTML()}`}
              onLoad={() => setLoading(false)}
              title={"-"}
            ></iframe>
          )}

          {/* {selectedLevel && (
            <iframe
              style={{ border: "none", width: "100%", height: "100%" }}
              src={`js-flags-quiz-master/${getLevelHTML()}`}
              onLoad={() => setLoading(false)}
            ></iframe>
          )} */}

          {/* <iframe
            style={{ border: "none", width: "100%", height: "100%" }}
            src="js-flags-quiz-master/index.html"
            onLoad={() => setLoading(false)} // In case the iframe has its own loading logic
          ></iframe> */}
        </div>
      )}
    </>
  );
};

export default UlkelerBayrak;
