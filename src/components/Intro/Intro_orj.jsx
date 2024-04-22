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

import useZustandStore from "../../zustandStore";

function capitalizeFirstLetter(str) {
  if (str && typeof str === "string") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
}

const Loading = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    style={{ width: "100%", height: "200px" }}
    viewBox="0 0 100 100"
    enableBackground="new 0 0 100 100"
    xmlSpace="preserve"
  >
    <path
      fill="#fdc50f"
      d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="2s"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </path>
    <path
      fill="#fdc50f"
      d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="1s"
        from="0 50 50"
        to="-360 50 50"
        repeatCount="indefinite"
      />
    </path>
    <path
      fill="#fff"
      d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="2s"
        from="0 50 50"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

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

  console.log("gelen cinsiyet intro: ", cinsiyet);

  const [state, setState] = useState({
    infoText: "",
    loading: false,
    adi: "Adi",
    yilYas: 5,
    ayYas: 11,
    gunYas: 13,
    il: "Bilecik",
    ayniIsimdeIlSayi: 0,
    ayniIsimdeTurkiyeSayi: 140,
    ayniTarihDoganIlSayi: 3,
    ayniTarihDoganTurkiyeSayi: 1214,
    boyOrtancaDeger: 13,
    kiloOrtancaDeger: -3,
  });

  const {
    infoText,
    loading,
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
  } = state;

  const getInfo = async () => {
    try {
      const data = {
        ad: ad,
        gun: dogumGunu,
        ay: dogumAyi,
        dogumyil: dogumYili,
        boy: boy,
        kilo: kilo,
        ilKodu: sehir,
        cinsiyet: cinsiyet,
      };
      setState({
        ...state,
        loading: false,
      });
      const response_data = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}GetDashboard`,
        {
          params: data,
        }
      );

      if (response_data.data) {
        console.log("data: " + response_data.data);
        console.log("data Ad: " + response_data.data.Ad);
        if (response_data.data.Ad === undefined) {
          setState({
            ...state,

            loading: true,

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
          });
        } else {
          setState({
            ...state,
            adi: response_data.data.Ad,
            yilYas: response_data.data.Yil,
            ayYas: response_data.data.Ay,
            gunYas: response_data.data.Gun,
            il: response_data.data.Il,
            ayniIsimdeIlSayi: response_data.data.AyniIsimdeIlSayi,
            ayniIsimdeTurkiyeSayi: response_data.data.AyniIsimdeTurkiyeSayi,
            ayniTarihDoganIlSayi: response_data.data.AyniTarihDoganIlSayi,
            ayniTarihDoganTurkiyeSayi:
              response_data.data.AyniTarihDoganTurkiyeSayi,
            boyOrtancaDeger: response_data.data.BoyOrtancaDeger,
            kiloOrtancaDeger: response_data.data.KiloOrtancaDeger,
            loading: true,
          });
        }
      }
    } catch (error) {
      console.log(error);
      // test if network error
      setState({
        ...state,
        adi: "Adi",
        yilYas: 5,
        ayYas: 11,
        gunYas: 13,
        il: "Bilecik",
        ayniIsimdeIlSayi: 0,
        ayniIsimdeTurkiyeSayi: 140,
        ayniTarihDoganIlSayi: 3,
        ayniTarihDoganTurkiyeSayi: 1214,
        boyOrtancaDeger: 13,
        kiloOrtancaDeger: -3,
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
              TÜİK Çocuk Platformu'na
            </span>
            <span
              style={{
                color: darkMode ? "white" : "blue",
                textAlign: "center",
                marginLeft: "-9rem",
                fontSize: "1.4rem",
              }}
            >
              Hoş geldin {capitalizedStr} !
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
            {!loading ? (
              <Loading />
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
                ayniIsimdeIlSayi={ayniIsimdeIlSayi}
                ayniIsimdeTurkiyeSayi={ayniIsimdeTurkiyeSayi}
                ayniTarihDoganIlSayi={ayniTarihDoganIlSayi}
                ayniTarihDoganTurkiyeSayi={ayniTarihDoganTurkiyeSayi}
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
            ayniIsimdeIlSayi={ayniIsimdeIlSayi}
            ayniIsimdeTurkiyeSayi={ayniIsimdeTurkiyeSayi}
            ayniTarihDoganIlSayi={ayniTarihDoganIlSayi}
            ayniTarihDoganTurkiyeSayi={ayniTarihDoganTurkiyeSayi}
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
          // initial={{ left: "30%", top: "-7rem" }}
          // whileInView={{ left: "36%", top: "-7rem" }}
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
          // initial={{ left: "14%", top: "38%" }}
          // whileInView={{ left: "11%", top: "0rem" }}
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
          // initial={{ left: "-6%", top: "38%" }}
          // whileInView={{ left: "-18%", top: "2.5rem" }}
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
          // initial={{ left: "48%", top: "2%" }}
          // whileInView={{ left: "40%", top: "6rem" }}
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
          // initial={{ left: "38%", top: "6%" }}
          // whileInView={{ left: "22%", top: "14.5rem" }}
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
          // initial={{ left: "-34%", top: "10 rem" }}
          // whileInView={{ left: "-10.5%", top: "12.5rem" }}
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
