import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Intro.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import IntroLeft from "./IntroLeft";

import leftFrameBg from "../../img/left_frame_bg.png";
import AnimatedModal from "./AnimatedModal";

import axios from "axios";

import tkc_basla from "../../img/tkc_basla.png";
import tkc_oyun_oynayalim from "../../img/tkc_oyun_oynayalim.png";
import tkc_istatistik_ogrenelim from "../../img/tkc_istatistik_ogrenelim.png";
import tkc_cocuk_haklari from "../../img/tkc_cocuk_haklari.png";
import tkc_tuiki_taniyalim from "../../img/tkc_tuiki_taniyalim.png";
import tkc_sdg_amaclari from "../../img/tkc_sdg_amaclari.png";
import tkc_video_izleyelim from "../../img/tkc_video_izleyelim.png";
import tkc_geleneksel_oyunlar from "../../img/tkc_geleneksel_oyunlar.png";

import kus1 from "../../img/kus1.png";
import kus2 from "../../img/kus2.png";
import kus3 from "../../img/kus3.png";
import kus4 from "../../img/kus4.png";
import kus5 from "../../img/kus5.png";

import FloatinDivForNavbarMenu from "../FloatingDiv/FloatinDivForNavbarMenu";
import FloatinDivForIntroRight from "../FloatingDiv/FloatinDivForIntroRight";

import LoadingIntro from "./LoadingIntro";

import useZustandStore from "../../zustandStore";
import LoadingIntroApiError from "./LoadingIntroApiError";

function capitalizeFirstLetter(str) {
  if (str && typeof str === "string") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
}

const Intro = (props) => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  const transitionOfKus1 = {
    duration: 3.5,
    ease: "easeInOut",
    loop: Infinity,
  };
  const transitionOfKus2 = {
    duration: 4,
    ease: "easeInOut",
    loop: Infinity,
  };
  const transitionOfKus3 = {
    duration: 3.8,
    ease: "easeInOut",
    loop: Infinity,
  };
  const transitionOfKus4 = {
    duration: 3.2,
    ease: "easeInOut",
    loop: Infinity,
  };
  const transitionOfKus5 = {
    duration: 4.1,
    ease: "easeInOut",
    loop: Infinity,
  };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const setPlayerPosition = useZustandStore((state) => state.setPlayerPosition);

  const isApiLoaded = useZustandStore((state) => state.isApiLoaded);

  const setIsApiLoaded = useZustandStore((state) => state.setIsApiLoaded);

  const setDashboardData = useZustandStore((state) => state.setDashboardData);

  const {
    setShowMetaverse,
    ad,
    dogumGunu,
    dogumAyi,
    dogumYili,
    boy,
    kilo,
    sehir,
    cinsiyet,
    onButtonClick,
  } = props;

  const handleButtonClick = () => {
    setPlayerPosition([0, 0, 0]);
    setShowMetaverse(true);

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

  const handleButtonClickForDunya = () => {
    onButtonClick();
    // setShowMetaverse(true);
  };

  // console.log("gelen cinsiyet intro: ", cinsiyet);

  const [state, setState] = useState({
    loading: false,
    // adi: "",
    // yilYas: 0,
    // ayYas: 0,
    // gunYas: 0,
    // il: "",
    // ayniIsimdeIlSayi: 10000,
    // ayniIsimdeTurkiyeSayi: 10000,
    // ayniTarihDoganIlSayi: 10000,
    // ayniTarihDoganTurkiyeSayi: 10000,
    // boyOrtancaDeger: 0,
    // kiloOrtancaDeger: 0,
    apiError: false,
  });

  const {
    loading,
    // adi,
    // yilYas,
    // ayYas,
    // gunYas,
    // il,
    // ayniIsimdeIlSayi,
    // ayniIsimdeTurkiyeSayi,
    // ayniTarihDoganIlSayi,
    // ayniTarihDoganTurkiyeSayi,
    // boyOrtancaDeger,
    // kiloOrtancaDeger,
    apiError,
  } = state;

  // const getInfo = () => {
  //   axios
  //     .get(process.env.REACT_APP_PROXY_URL + "/dashboard", {
  //       params: {
  //         Ad: ad,
  //         gun: dogumGunu,
  //         ay: dogumAyi,
  //         dogumyil: dogumYili,
  //         boy: boy,
  //         kilo: kilo,
  //         ilKodu: sehir,
  //         cinsiyet: cinsiyet,
  //       },
  //     })
  //     .then((dashboardResponse) => {
  //       console.log("Dashboard data:", dashboardResponse.data);
  //       console.log(
  //         "Dashboard data test AyniIsimdeIlSayi:",
  //         dashboardResponse.data.AyniIsimdeIlSayi
  //       );

  //       if (dashboardResponse.data.Ad === undefined) {
  //         setState({
  //           ...state,

  //           loading: true,
  //           adi: "---",
  //           yilYas: 0,
  //           ayYas: 0,
  //           gunYas: 0,
  //           il: "---",
  //           ayniIsimdeIlSayi: 0,
  //           ayniIsimdeTurkiyeSayi: 0,
  //           ayniTarihDoganIlSayi: 0,
  //           ayniTarihDoganTurkiyeSayi: 0,
  //           boyOrtancaDeger: 0,
  //           kiloOrtancaDeger: 0,
  //         });
  //       } else {
  //         setState({
  //           ...state,
  //           adi: dashboardResponse.data.Ad,
  //           yilYas: dashboardResponse.data.Yil,
  //           ayYas: dashboardResponse.data.Ay,
  //           gunYas: dashboardResponse.data.Gun,
  //           il: dashboardResponse.data.Il,
  //           ayniIsimdeIlSayi: dashboardResponse.data.AyniIsimdeIlSayi,
  //           ayniIsimdeTurkiyeSayi: dashboardResponse.data.AyniIsimdeTurkiyeSayi,
  //           ayniTarihDoganIlSayi: dashboardResponse.data.AyniTarihDoganIlSayi,
  //           ayniTarihDoganTurkiyeSayi:
  //             dashboardResponse.data.AyniTarihDoganTurkiyeSayi,
  //           boyOrtancaDeger: dashboardResponse.data.BoyOrtancaDeger,
  //           kiloOrtancaDeger: dashboardResponse.data.KiloOrtancaDeger,
  //           loading: true,
  //         });
  //         setIsApiLoaded(true);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error getting dashboard data:", error);
  //       setState({
  //         ...state,
  //         apiError: true,
  //         loading: true,
  //       });
  //     });
  // };
  const {
    dashboardData: {
      adi,
      yilYas,
      ayYas,
      gunYas,
      il,
      ayniIsimdeIlSayi,
      ayniIsimdeTurkiyeSayi,
      ayniTarihDoganIlSayi,
      ayniTarihDoganTurkiyeSayi,
      boyOrtancaDeger,
      kiloOrtancaDeger,
    },
  } = useZustandStore();

  const getInfo = () => {
    // console.log("get info calisti.. yilYas: ", yilYas);
    if (
      adi === null ||
      yilYas === null ||
      ayYas === null ||
      gunYas === null ||
      il === null ||
      ayniIsimdeIlSayi === null ||
      ayniIsimdeTurkiyeSayi === null ||
      ayniTarihDoganIlSayi === null ||
      ayniTarihDoganTurkiyeSayi === null ||
      boyOrtancaDeger === null ||
      kiloOrtancaDeger === null
    ) {
      // Proceed with Axios request to fetch data from the API
      axios
        .get(process.env.REACT_APP_PROXY_URL + "/dashboard", {
          // .get("http://localhost:3001" + "/dashboard", {
          params: {
            Ad: ad,
            gun: dogumGunu,
            ay: dogumAyi,
            dogumyil: dogumYili,
            boy: boy,
            kilo: kilo,
            ilKodu: sehir,
            cinsiyet: cinsiyet,
          },
        })
        .then((dashboardResponse) => {
          console.log("Dashboard data:", dashboardResponse.data);

          if (dashboardResponse.data.Ad === undefined) {
            setDashboardData((state) => ({
              ...state,
              adi: "---",
              yilYas: 0,
              ayYas: 0,
              gunYas: 0,
              il: "---",
              ayniIsimdeIlSayi: 0,
              ayniIsimdeTurkiyeSayi: 0,
              ayniTarihDoganIlSayi: 0,
              ayniTarihDoganTurkiyeSayi: 0,
              boyOrtancaDeger: 0,
              kiloOrtancaDeger: 0,
            }));

            setState({
              ...state,
              loading: true,
            });
          } else {
            setDashboardData({
              adi: dashboardResponse.data.Ad,
              yilYas: dashboardResponse.data.Yil,
              ayYas: dashboardResponse.data.Ay,
              gunYas: dashboardResponse.data.Gun,
              il: dashboardResponse.data.Il,
              ayniIsimdeIlSayi: dashboardResponse.data.AyniIsimdeIlSayi,
              ayniIsimdeTurkiyeSayi:
                dashboardResponse.data.AyniIsimdeTurkiyeSayi,
              ayniTarihDoganIlSayi: dashboardResponse.data.AyniTarihDoganIlSayi,
              ayniTarihDoganTurkiyeSayi:
                dashboardResponse.data.AyniTarihDoganTurkiyeSayi,
              boyOrtancaDeger: dashboardResponse.data.BoyOrtancaDeger,
              kiloOrtancaDeger: dashboardResponse.data.KiloOrtancaDeger,
            });

            setState({
              ...state,
              loading: true,
            });

            setIsApiLoaded(true);
          }
        })
        .catch((error) => {
          console.error("Error getting dashboard data:", error);
          setState({
            ...state,
            apiError: true,
            loading: true,
          });
        });
    } else {
      setIsApiLoaded(true);
      setState({
        ...state,
        loading: true,
      });
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  let str = props.ad || "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  let capitalizedStr = words.join(" ");
  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* change darkmode */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              width: "30rem",
              left: "5rem",
            }}
          >
            <span
              style={{
                color: darkMode ? "white" : "orange",
                textAlign: "center",
                marginLeft: "-9rem",
                fontSize: "1.4rem",
              }}
            >
              Welcome to TÜİK Çocuk Portal
            </span>
            <span
              style={{
                color: darkMode ? "white" : "blue",
                textAlign: "center",
                marginLeft: "-9rem",
                fontSize: "1.4rem",
              }}
            >
              {capitalizedStr} !
            </span>
          </div>

          <div
            style={{
              backgroundImage: `url(${leftFrameBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "769px",
              height: "524px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "0rem",
              marginTop: "5rem",
              color: "gray",
            }}
          >
            {apiError ? (
              <LoadingIntroApiError />
            ) : !loading ? (
              <LoadingIntro />
            ) : (
              <IntroLeft
                sehir={sehir}
                kilo={kilo}
                boy={boy}
                ad={capitalizeFirstLetter(ad)}
                il={il}
                cinsiyet={cinsiyet}
                yilYas={yilYas}
                ayYas={ayYas}
                gunYas={gunYas}
                ayniIsimdeIlSayi={
                  ayniIsimdeIlSayi
                    ? ayniIsimdeIlSayi.toLocaleString().replace(/,/g, " ")
                    : ""
                }
                ayniIsimdeTurkiyeSayi={
                  ayniIsimdeTurkiyeSayi
                    ? ayniIsimdeTurkiyeSayi.toLocaleString().replace(/,/g, " ")
                    : ""
                }
                ayniTarihDoganIlSayi={
                  ayniTarihDoganIlSayi
                    ? ayniTarihDoganIlSayi.toLocaleString().replace(/,/g, " ")
                    : ""
                }
                ayniTarihDoganTurkiyeSayi={
                  ayniTarihDoganTurkiyeSayi
                    ? ayniTarihDoganTurkiyeSayi
                        .toLocaleString()
                        .replace(/,/g, " ")
                    : ""
                }
                boyOrtancaDeger={boyOrtancaDeger}
                kiloOrtancaDeger={kiloOrtancaDeger}
              />
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "-2.5rem",
          }}
        >
          <Link
            to="/metaverse"
            state={{ cinsiyetGonder: cinsiyet }}
            onClick={handleButtonClickForDunya}
          >
            <FloatinDivForNavbarMenu img={tkc_basla} />
          </Link>

          <AnimatedModal
            ad={capitalizeFirstLetter(ad)}
            il={il}
            cinsiyet={cinsiyet}
            yilYas={yilYas}
            ayYas={ayYas}
            gunYas={gunYas}
            ayniIsimdeIlSayi={
              ayniIsimdeIlSayi
                ? ayniIsimdeIlSayi.toLocaleString().replace(/,/g, " ")
                : ""
            }
            ayniIsimdeTurkiyeSayi={
              ayniIsimdeTurkiyeSayi
                ? ayniIsimdeTurkiyeSayi.toLocaleString().replace(/,/g, " ")
                : ""
            }
            ayniTarihDoganIlSayi={
              ayniTarihDoganIlSayi
                ? ayniTarihDoganIlSayi.toLocaleString().replace(/,/g, " ")
                : ""
            }
            ayniTarihDoganTurkiyeSayi={
              ayniTarihDoganTurkiyeSayi
                ? ayniTarihDoganTurkiyeSayi.toLocaleString().replace(/,/g, " ")
                : ""
            }
            boyOrtancaDeger={boyOrtancaDeger}
            kiloOrtancaDeger={kiloOrtancaDeger}
          />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* animation */}
        <motion.div
          // initial={{ left: "-34%", top: "-25%" }}
          // whileInView={{ left: "-6%", top: "-30%" }}
          initial={{
            left: "var(--istatistik-initial-left-mobile)",
            top: "var(--istatistik-initial-top-mobile)",
          }}
          whileInView={{
            left: "var(--istatistik-whileInView-left-mobile)",
            top: "var(--istatistik-whileInView-top-mobile)",
          }}
          style={{ left: "calc(100vw * -0.32)", top: "2%" }}
          transition={transition}
          className="floating-div"
        >
          <Link to="istatistik" smooth={true} spy={true} offset={-180}>
            <FloatinDivForIntroRight img={tkc_istatistik_ogrenelim} />
          </Link>
        </motion.div>

        <motion.div
          initial={{
            left: "var(--tuik-initial-left-mobile)",
            top: "var(--tuik-initial-top-mobile)",
          }}
          whileInView={{
            left: "var(--tuik-whileInView-left-mobile)",
            top: "var(--tuik-whileInView-top-mobile)",
          }}
          style={{ left: "calc(100vw * -0.06)", top: "30%" }}
          transition={transition}
          className="floating-div"
        >
          <Link to="tuik" smooth={true} spy={true} offset={-220}>
            <FloatinDivForIntroRight img={tkc_tuiki_taniyalim} />
          </Link>
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{
            left: "var(--cocukhaklari-initial-left-mobile)",
            top: "var(--cocukhaklari-initial-top-mobile)",
          }}
          whileInView={{
            left: "var(--cocukhaklari-whileInView-left-mobile)",
            top: "var(--cocukhaklari-whileInView-top-mobile)",
          }}
          style={{ left: "calc(100vw * -0.01)", top: "38%" }}
          transition={transition}
          className="floating-div"
        >
          <NavLink to={{ pathname: "/cocukhaklari" }} target="_self">
            <FloatinDivForIntroRight img={tkc_cocuk_haklari} />
          </NavLink>
        </motion.div>

        <motion.div
          initial={{
            left: "var(--oyunoynayalim-initial-left-mobile)",
            top: "var(--oyunoynayalim-initial-top-mobile)",
          }}
          whileInView={{
            left: "var(--oyunoynayalim-whileInView-left-mobile)",
            top: "var(--oyunoynayalim-whileInView-top-mobile)",
          }}
          style={{ left: "calc(100vw * -0.18)", top: "38%" }}
          transition={transition}
          className="floating-div"
        >
          {" "}
          <Link
            to="/metaverse"
            state={{ cinsiyetGonder: cinsiyet }}
            onClick={handleButtonClick}
          >
            <FloatinDivForIntroRight img={tkc_oyun_oynayalim} />
          </Link>
        </motion.div>

        <motion.div
          initial={{
            left: "var(--sdg-initial-left-mobile)",
            top: "var(--sdg-initial-top-mobile)",
          }}
          whileInView={{
            left: "var(--sdg-whileInView-left-mobile)",
            top: "var(--sdg-whileInView-top-mobile)",
          }}
          style={{ left: "calc(100vw * 0.04)", top: "2%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <NavLink to={{ pathname: "/sdg" }} target="_self">
            <FloatinDivForIntroRight img={tkc_sdg_amaclari} />
          </NavLink>
        </motion.div>

        <motion.div
          initial={{
            left: "var(--video-initial-left-mobile)",
            top: "var(--video-initial-top-mobile)",
          }}
          whileInView={{
            left: "var(--video-whileInView-left-mobile)",
            top: "var(--video-whileInView-top-mobile)",
          }}
          style={{ left: "calc(100vw * -0.32)", top: "4%" }}
          transition={transition}
          className="floating-div"
        >
          <Link to="video" smooth={true} spy={true} offset={-360}>
            <FloatinDivForIntroRight img={tkc_video_izleyelim} />
          </Link>
        </motion.div>

        <motion.div
          initial={{
            left: "var(--geleneksel-initial-left-mobile)",
            top: "var(--geleneksel-initial-top-mobile)",
          }}
          whileInView={{
            left: "var(--geleneksel-whileInView-left-mobile)",
            top: "var(--geleneksel-whileInView-top-mobile)",
          }}
          style={{ left: "calc(100vw * 0.04)", top: "2%" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <NavLink to={{ pathname: "/geleneksel-oyunlar" }} target="_self">
            <FloatinDivForIntroRight img={tkc_geleneksel_oyunlar} />
          </NavLink>
        </motion.div>

        <motion.img
          style={{
            marginLeft: "-8rem",
            marginTop: "8rem",
            width: "70px",
            height: "50px",
          }}
          animate={{ top: ["-2%", "2%", "-2%"], left: ["-1%", "1%", "-1%"] }}
          transition={transitionOfKus1}
          src={kus1}
          alt=""
        />
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "14rem",
            width: "91rem",
            height: "31rem",
            left: "-48rem",
            zIndex: "-999",
          }}
        ></div>
        <motion.img
          style={{
            marginLeft: "-1rem",
            marginTop: "-1rem",
            width: "40px",
            height: "20px",
          }}
          animate={{
            top: ["-2%", "2%", "-2%"],
            left: ["-2%", "2%", "-2%"],
            rotate: [0, 0, 8, 8, 0],
          }}
          transition={transitionOfKus2}
          src={kus2}
          alt=""
        />
        <motion.img
          style={{
            marginLeft: "31rem",
            marginTop: "4rem",
            width: "40px",
            height: "20px",
          }}
          animate={{
            top: ["-2%", "2%", "-2%"],
            left: ["-2%", "2%", "-2%"],
            rotate: [0, 0, 8, 8, 0],
          }}
          transition={transitionOfKus3}
          src={kus3}
          alt=""
        />
        <motion.img
          style={{
            marginLeft: "40rem",
            marginTop: "6rem",
            width: "50px",
            height: "25px",
          }}
          animate={{
            top: ["-2%", "2%", "-2%"],
            left: ["-2%", "2%", "-2%"],
            rotate: [0, 0, 8, 8, 0],
          }}
          transition={transitionOfKus4}
          src={kus4}
          alt=""
        />
        <motion.img
          style={{
            marginLeft: "36rem",
            marginTop: "1rem",
            width: "50px",
            height: "25px",
          }}
          animate={{
            top: ["-2%", "2%", "-2%"],
            left: ["-2%", "2%", "-2%"],
            rotate: [0, 0, 8, 8, 0],
          }}
          transition={transitionOfKus5}
          src={kus5}
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
