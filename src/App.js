import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RegisterPage from "./components/Register/RegisterPage";
import MainPage from "./components/MainPage";
import Metaverse from "./components/Metaverse";
import Sdg from "./components/Sdg/Sdg";
import Geleneksel from "./components/Geleneksel/Geleneksel";
import Cocukhaklari from "./components/cocukhaklari/Cocukhaklari";

import useZustandStore from "./zustandStore";

let calcScrollValue = () => {
  if (
    document.getElementById("progress") &&
    document.getElementById("progress-value")
  ) {
    let scrollProgress = document.getElementById("progress");
    // let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#FF4500 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  }
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { language, setLanguage, languageData } = useZustandStore();
  const strings = languageData[language];

  const [userInfo, setUserInfo] = useState(null);

  const handleUserRegister = (formData) => {
    setUserInfo(formData);
  };
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={RegisterPage} />
          <Route path="/main" exact component={MainPage} />
          <Route path="/sdg" exact component={Sdg} />
          <Route path="/geleneksel-oyunlar" exact component={Geleneksel} />
          <Route path="/cocukhaklari" exact component={Cocukhaklari} />
          <Route path="/metaverse" exact component={Metaverse} />
        </Switch>
      </BrowserRouter>
      <div id="progress" style={{ transform: "rotate(-90deg)", zIndex: "999" }}>
        <svg
          id="progress-value"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 18L18 12L6 6V18Z" fill="orange" />
        </svg>
      </div>
    </div>
  );
}

export default App;
