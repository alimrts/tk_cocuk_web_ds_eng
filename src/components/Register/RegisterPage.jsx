import React, { useState, useRef, useEffect, useContext } from "react";
import "./RegisterPage.css";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import UserRegister from "./UserRegister";
import video from "../../img/bayram_kutlama.mp4";
import { useHistory } from "react-router-dom";
import NavbarRegister from "../../components/Navbar/NavbarRegister";
import FooterBg from "../../img/tkc_footer_bg.png";
import FooterDarkBg from "../../img/tkc_footer_dark_bg.png";
import modChar from "../../img/mod_char.png";
import useZustandStore from "../../zustandStore";
import { themeContext } from "../../Context";

const RegisterPage = () => {
  const history = useHistory();
  const { setUserInfo } = useZustandStore();
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const [isIOS, setIsIOS] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const { language, setLanguage, languageData } = useZustandStore();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const strings = languageData[language];

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const setDashboardData = useZustandStore((state) => state.setDashboardData);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.clear();
    setDashboardData({
      adi: null,
      yilYas: null,
      ayYas: null,
      gunYas: null,
      il: null,
      ayniIsimdeIlSayi: null,
      ayniIsimdeTurkiyeSayi: null,
      ayniTarihDoganIlSayi: null,
      ayniTarihDoganTurkiyeSayi: null,
      boyOrtancaDeger: null,
      kiloOrtancaDeger: null,
    });
  }, []);

  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(!!userAgent.match(/(ipad|iphone|ipod)/i));
    setIsMobile(
      !!userAgent.match(
        /android|webos|iphone|ipad|ipod|blackberry|windows phone/i
      )
    );

    const { current: videoElement } = videoRef;
    const onVideoEnd = () => {
      setShowVideo(false);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", onVideoEnd);
      return () => {
        videoElement.removeEventListener("ended", onVideoEnd);
      };
    }
  }, []);

  const [gender, setGender] = useState("");
  const handleGenderChange = (value) => {
    setGender(value);
    console.log(value);
  };

  const handleUserRegister = (formData) => {
    console.log(formData);

    setUserInfo(formData);
    history.push({
      pathname: "/main",
      state: { userInfo: formData },
    });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const handleUserRegisterWithoutForm = () => {
    setUserInfo("none");
  };

  return (
    <>
      {" "}
      <div
        className="footer-image"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          marginBottom: "-0.5rem",
        }}
      >
        <img
          src={darkMode ? FooterDarkBg : FooterBg}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <NavbarRegister />
      {showVideo && (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            onLoadedData={() => {
              const { current: videoElement } = videoRef;
              if (videoElement) {
                videoElement.play();
              }
            }}
            onEnded={() => setShowVideo(false)}
            onStalled={() => setShowVideo(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
          {(isIOS && !videoRef.current?.duration) ||
          videoRef.current?.paused ? (
            <button
              className="button i-button"
              onClick={() => {
                const { current: videoElement } = videoRef;
                if (videoElement) {
                  videoElement.play();
                }
              }}
              style={{
                position: "absolute",
                top: "95%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            >
              Play
            </button>
          ) : null}
        </>
      )}
      {!showVideo && (
        <>
          <div className="registerPage-root">
            <div
              className="registerPage-left"
              style={{
                backgroundImage: `url(${modChar})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                zIndex: 2,
              }}
            ></div>

            <div className="formWrapper">
              <span className="formTitle">{strings.registerPageGiris}</span>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <span className="formTitle2">
                  {strings.registerPageBilgileriDoldur}
                </span>
                <NavLink
                  to={{ pathname: "/main" }}
                  target="_self"
                  className="formTitle2"
                  onClick={handleUserRegisterWithoutForm}
                >
                  {strings.registerPageBilgileriDoldurma}
                </NavLink>
              </div>

              <UserRegister
                onGenderChange={handleGenderChange}
                onSubmit={handleUserRegister}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RegisterPage;
