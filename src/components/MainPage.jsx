import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Istatistik from "../components/Istatistik/Istatistik";
import VideoIzle from "./VideoIzle/VideoIzle";
import Tuik from "../components/Tuik/Tuik";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Metaverse from "./Metaverse";
import useZustandStore from "../zustandStore";

const MainPage = () => {
  const history = useHistory();
  const [showMetaverse, setShowMetaverse] = useState(false);

  const setPlayerPosition = useZustandStore((state) => state.setPlayerPosition);

  const setIsBilgiGateTriggered = useZustandStore(
    (state) => state.setIsBilgiGateTriggered
  );

  const setIsBilgiIcTriggered = useZustandStore(
    (state) => state.setIsBilgiIcTriggered
  );

  const handleBilgiGateTrigger = () => {
    setIsBilgiGateTriggered(true);
    setIsBilgiIcTriggered(false);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      // ESC key
      setShowMetaverse(false);
      // exitFullScreen();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMetaverseButtonClick = () => {
    setPlayerPosition([-23, 0.0, 96]);
    setShowMetaverse(true);
    handleBilgiGateTrigger();

    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE/Edge */
      element.msRequestFullscreen();
    }
  };

  const { userInfo } = useZustandStore();

  useEffect(() => {
    if (userInfo === null) {
      // Redirect to RegisterPage if user information is not available
      history.push("/");
      // exitFullScreen();
    }
  }, [userInfo, history]);

  useEffect(() => {
    // Reset scroll position when component unmounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  // console.log("gelen userinfo: ", userInfo);
  // Destructure user information
  const {
    firstName: ad,
    lastName: soyad,
    birthDay: dogumGunu,
    birthMonth: dogumAyi,
    birthYear: dogumYili,
    height: boy,
    weight: kilo,
    city: sehir,
    gender: cinsiyet,
  } = userInfo || {};

  useEffect(() => {
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // Reset to default
    };
  }, []);

  return (
    <div>
      {showMetaverse ? (
        <>
          <div className="metaverse" style={{ background: "rgb(32, 32, 32)" }}>
            <button
              className="button i-button"
              onClick={() => {
                setShowMetaverse(false);
                // exitFullScreen();
              }}
              style={{
                position: "absolute",
                zIndex: 2,
                transform: "scale(0.6)",
                lineHeight: 1.4,
                fontSize: 34,
                overflow: "hidden",
              }}
            >
              X
            </button>
            <Metaverse cinsiyet={cinsiyet} />

            {/* <SolarSystem /> */}
            {/* <TuikIc /> */}
          </div>
        </>
      ) : (
        <div>
          <Navbar />
          <Intro
            setShowMetaverse={setShowMetaverse}
            ad={ad}
            // soyad={soyad}
            dogumGunu={dogumGunu}
            dogumAyi={dogumAyi}
            dogumYili={dogumYili}
            boy={boy}
            kilo={kilo}
            sehir={sehir}
            cinsiyet={cinsiyet}
            onButtonClick={handleMetaverseButtonClick}
          />

          <BrowserRouter>
            <Istatistik />
            <VideoIzle />
            <Tuik />
            <Contact />
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
};

export default MainPage;
