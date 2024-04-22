import React, { useState, useRef, useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import { useContext } from "react";
import { themeContext } from "../../Context";
import "./NavbarRegister.css";
import { Link } from "react-scroll";
import tkc_kuslar1 from "../../img/tkc_kuslar1.png";
import tkc_kuslar2 from "../../img/tkc_kuslar2.png";
import { NavLink } from "react-router-dom";
import tkc_logo from "../../img/tkc_logo.png";
import FloatinDivForNavbarLogo from "../FloatingDiv/FloatingDivForNavbarLogo";
import useZustandStore from "../../zustandStore";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const { language, setLanguage, languageData } = useZustandStore();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const strings = languageData[language];

  useEffect(() => {
    // const storedLanguage = localStorage.getItem("selectedLanguage");
    // if (storedLanguage) {
    setSelectedLanguage("eng");
    // }
  }, []);

  const turkishURL = process.env.REACT_APP_TURKISH_URL;
  const handleLanguageChange = (selectedLanguage) => {
    // setLanguage(selectedLanguage);

    // //to remember which select value
    // setSelectedLanguage(selectedLanguage);
    // localStorage.setItem("selectedLanguage", selectedLanguage);
    if (selectedLanguage === "default") {
      window.location.href = turkishURL;
    } else {
      setLanguage(selectedLanguage);
      setSelectedLanguage(selectedLanguage);
      // localStorage.setItem("selectedLanguage", selectedLanguage);
    }
  };
  return (
    <nav
      className={darkMode ? "navigationBlack-register" : "navigation-register"}
    >
      {/* left */}
      <div className="n-left-register" style={{}}>
        <FloatinDivForNavbarLogo img={tkc_logo} />
        <div
          className="navkuslar2"
          style={{
            backgroundImage: `url(${tkc_kuslar2})`,
            marginLeft: "8rem",
          }}
        >
          {" "}
        </div>
        <div
          className="navkuslar1"
          style={{
            backgroundImage: `url(${tkc_kuslar1})`,
          }}
        ></div>
      </div>
      {/* right */}
      <div
        className="n-right-register"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="n-list-register">
          <div>
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              style={{ color: "grey" }}
            >
              <option value="default">Türkçe</option>
              <option value="eng">English</option>
              {/* <option value="ger">Deutsch</option>
              <option value="french">Français</option>
              <option value="spanish">Española</option> */}
            </select>
          </div>
        </div>
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;
