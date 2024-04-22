import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Istatistik from "./components/Istatistik/Istatistik";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Unicef from "./components/Unicef/Unicef";

import Tuik from "./components/Tuik/Tuik";
import Sdg from "./components/Sdg/Sdg";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import { Route, Switch, BrowserRouter  } from 'react-router-dom'
import Cocukhaklari from "./components/cocukhaklari/Cocukhaklari";
import Testimonial from "./components/Testimonials/Testimonial";
import RegisterPage from "./components/RegisterPage";
import MainPage from "./components/MainPage";


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
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <BrowserRouter>
   
      <Route exact path="/" component={RegisterPage} />
      <Route exact path="/main" component={MainPage} />
      {/* <Navbar />
      <Intro />
      <Istatistik />
      <Experience />
      <Works />
      <Unicef />
      <Sdg/>
      <Cocukhaklari />
      <Tuik />
      <Contact />
      
      <Footer /> */}
     
      </BrowserRouter>
      <div id="progress">
        <span id="progress-value">&#129049;</span>
      </div>
     
    </div>
    
  );
}

export default App;
