import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import tkc_logo from "../../img/tkc_logo.png";
import tkc_anasayfa from "../../img/tkc_anasayfa.png";
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

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
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
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

        <NavLink to={{ pathname: "/main" }} target="_self">
          <FloatinDivForNavbarLogo img={tkc_logo} />
        </NavLink>

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
              <li className="n-list">
                <NavLink to={{ pathname: "/main" }} target="_self">
                  <FloatinDivForNavbarMenu img={tkc_anasayfa} />
                </NavLink>
              </li>
              {/* <li className="n-list">
                <Link
                  to="istatistik"
                  spy={true}
                  smooth={true}
                  offset={-180}
                  onClick={() => {
                    setTimeout(() => setIsNavExpanded(false), 300);
                  }}
                >
                  <FloatinDivForNavbarMenu img={tkc_istatistik} />
                </Link>
              </li> */}
              {/* <li className="n-list">
                <Link
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={-280}
                  onClick={() => {
                    setTimeout(() => setIsNavExpanded(false), 300);
                  }}
                >
                  <FloatinDivForNavbarMenu img={tkc_video} />
                </Link>
              </li> */}
              {/* <li className="n-list">
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
        <div style={{ padding: "1rem" }}>
          <NavLink to={{ pathname: "/" }} target="_self">
            Exit
          </NavLink>
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
