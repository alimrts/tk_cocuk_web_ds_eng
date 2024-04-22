import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { useLocation, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import tkc_logo from "../../img/tkc_logo.png";
import tkc_anasayfa from "../../img/tkc_anasayfa.png";
import tkc_dergi from "../../img/tkc_dergi.png";
import tkc_istatistik from "../../img/tkc_istatistik.png";
import tkc_video from "../../img/tkc_video.png";
import tkc_tuik from "../../img/tkc_tuik.png";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import FloatinDivForNavbarLogo from "../FloatingDiv/FloatingDivForNavbarLogo";
import FloatinDivForNavbarMenu from "../FloatingDiv/FloatinDivForNavbarMenu";

import tkc_kuslar1 from "../../img/tkc_kuslar1.png";
import tkc_kuslar2 from "../../img/tkc_kuslar2.png";
import kus1 from "../../img/kus1.png";

import dergiSrc from "../../img/tkc_dergi_cok_yakinda.jpg";
import useZustandStore from "../../zustandStore";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const history = useHistory();
  const { setUserInfo } = useZustandStore();

  const handleExitButtonClick = () => {
    // Reset user information
    setUserInfo(null);
    setShowDergi(false);
    // Redirect to RegisterPage
    history.push("/");
  };

  ///for language
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
  ///

  const transitionOfKus1 = {
    duration: 3,
    ease: "easeInOut",
    loop: Infinity,
  };
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const ulRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ulRef.current && !ulRef.current.contains(event.target)) {
        setIsNavExpanded(false);
        setShowDergi(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showDergi = useZustandStore((state) => state.showDergi);
  const setShowDergi = useZustandStore((state) => state.setShowDergi);

  const handleDergiOpen = () => {
    setShowDergi(!showDergi);
  };

  return (
    <nav className={darkMode ? "navigationBlack" : "navigation"}>
      <div className="n-left">
        <div
          className="navkuslar2"
          style={{
            backgroundImage: `url(${tkc_kuslar2})`,
          }}
        >
          {" "}
        </div>

        <Link to="Intro" smooth={true} spy={true} offset={-350}>
          <FloatinDivForNavbarLogo img={tkc_logo} />
        </Link>

        <div
          className="navkuslar1"
          style={{
            backgroundImage: `url(${tkc_kuslar1})`,
          }}
        ></div>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
        ref={ulRef}
      >
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }} className="n-list">
              <li className="n-list" onClick={handleDergiOpen}>
                <FloatinDivForNavbarMenu img={tkc_dergi} />
              </li>
              <li className="n-list">
                <Link
                  to="Intro"
                  spy={true}
                  smooth={true}
                  offset={-350}
                  onClick={() => {
                    setTimeout(() => setIsNavExpanded(false), 300);
                  }}
                >
                  <FloatinDivForNavbarMenu img={tkc_anasayfa} />
                </Link>
              </li>

              {/* 
              <li className="n-list">
                <Link
                  to="video"
                  spy={true}
                  smooth={true}
                  offset={-360}
                  onClick={() => {
                    setTimeout(() => setIsNavExpanded(false), 300);
                  }}
                >
                  <FloatinDivForNavbarMenu img={tkc_video} />
                </Link>
              </li>
              <li className="n-list">
                <Link
                  to="tuik"
                  spy={true}
                  smooth={true}
                  offset={-240}
                  onClick={() => {
                    setTimeout(() => setIsNavExpanded(false), 300);
                  }}
                >
                  <FloatinDivForNavbarMenu img={tkc_tuik} />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div style={{ padding: "1rem", width: "3rem" }}>
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
          {/* <NavLink to={{ pathname: "/" }} target="_self">
            Çıkış
          </NavLink> */}
          <button
            onClick={handleExitButtonClick}
            style={{
              background: "none",
              border: "none",
              color: "orange",
              cursor: "pointer",
              marginBottom: "1rem",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "red")}
            onMouseLeave={(e) => (e.target.style.color = "orange")}
          >
            Exit
          </button>
          <Toggle />
        </div>
        {showDergi ? (
          <TextPopup src_image={dergiSrc} onClose={handleDergiOpen} />
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

const TextPopup = ({ src_image, onClose }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
        onClick={onClose} // Close the popup when clicking on the overlay
      ></div>

      <div className="dergi-popup">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-2rem",
          }}
        >
          <button onClick={onClose}>X</button>
        </div>

        <img
          src={src_image}
          alt=""
          style={{
            height: "840px",
            position: "absolute",
            borderRadius: "24px",
            boxShadow: "0 12px 18px rgba(0, 0, 0, 0.6)",
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
