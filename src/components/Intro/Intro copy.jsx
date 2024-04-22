import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import istatistik from "../../img/g_istatistik.png";
import cocukhaklari from "../../img/g1.png";
import oyun from "../../img/g2.png";
import tuiktani from "../../img/g3.png";
import uniceftani from "../../img/g4.png";
import sdg from "../../img/g5.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {" "}
      <div
        style={{
          fontSize: 24,
          color: "black",
        }}
      >
        {progress} % yükleniyor
      </div>
    </Html>
  );
}

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>TÜİK Çocuk Platformu'na</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            Hoşgeldin Ayşe!
          </span>
          <span>
            Bugün itibarıyla 10 yıl 8 ay 13 günlüksün. <br />
            Senin isminde Antalya ilinde 40386, Türkiye’de 963.436 kişi var.{" "}
            <br />
            Antalya ilinde seninle aynı tarihte doğan 458, Türkiye’de 6510 kişi
            var. <br />
            Senin yaş ve cinsiyetine göre boyun, ortanca değerin 3 cm. üstünde.{" "}
            <br />
            Senin yaş ve cinsiyetine göre kilon, ortanca değerin 1 kg. altında.
          </span>
          <span>
            Birlikte eğlenceli vakit geçirmeye hazır mısın? <br /> Tüik Çocuk
            Metaverse Dünyası seni bekliyor. <br />
            Hemen başlayalım hadi!
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}> */}
        {/* <Link
          to={{ pathname: "https://tuikcocuk-webdemo.vercel.app/" }}
          target="_blank"
        >
          <button className="button i-button">Başla</button>
        </Link> */}
        <NavLink
          to={{ pathname: "https://tuikcocuk-webdemo.vercel.app/" }}
          target="_blank"
        >
          <button className="button i-button">Başla</button>
        </NavLink>
        {/* social icons */}
        {/* <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div> */}
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" /> */}
        <Canvas
          camera={{ position: [0, 0, 8.25], fov: 15 }}
          style={{
            minWidth: "40%",
            minHeight: "40%",
            cursor: "pointer",
            // boxShadow:
            //   "0 4px 8px 0 rgba(200, 200, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          {/* <color attach="background" args={["#F3E1E1"]} /> */}
          <ambientLight intensity={1.25} />

          <directionalLight intensity={0.4} />
          <Suspense fallback={<Loader />}>
            <Model position={[0.0, -0.8, 1]} rotation={[0, -60, 0]} />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            maxPolarAngle={1.5}
            minPolarAngle={1.4}
            maxAzimuthAngle={0.5}
            minAzimuthAngle={-0.5}
          />
        </Canvas>
        {/* animation */}
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}

        {/* animation */}
        <motion.div
          initial={{ left: "-38%", top: "2rem" }}
          whileInView={{ left: "-30%" }}
          transition={transition}
          className="floating-div"
        >
          <Link to="istatistik" smooth={true} spy={true}>
            <FloatinDiv img={istatistik} text1="İstatistik" text2="Öğrenelim" />
          </Link>
          {/* floatinDiv mein change hy dark mode ka */}
        </motion.div>

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <Link to="tuik" smooth={true} spy={true}>
            <FloatinDiv img={tuiktani} text1="Tüik'i " text2="Tanıyalım" />
          </Link>
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "12rem", top: "20rem" }}
          whileInView={{ left: "8rem" }}
          transition={transition}
          className="floating-div"
        >
          <Link to="cocukhaklari" smooth={true} spy={true}>
            <FloatinDiv img={cocukhaklari} text1="Çocuk" text2="Hakları" />
          </Link>
          {/* floatinDiv mein change hy dark mode ka */}
        </motion.div>

        <motion.div
          initial={{ left: "22rem", top: "14rem" }}
          whileInView={{ left: "-10rem" }}
          transition={transition}
          className="floating-div"
        >
          {" "}
          <NavLink
            to={{ pathname: "https://tuikcocuk-webdemo.vercel.app/" }}
            target="_blank"
          >
            <FloatinDiv img={oyun} text1="Oyun" text2="Oynayalım" />
          </NavLink>
          {/* floatinDiv mein change hy dark mode ka */}
        </motion.div>

        <motion.div
          initial={{ top: "-12%", left: "74%" }}
          whileInView={{ left: "18%" }}
          transition={transition}
          className="floating-div"
        >
          <Link to="unicef" smooth={true} spy={true}>
            <FloatinDiv img={uniceftani} text1="Unicef'i " text2="Tanıyalım" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ left: "38rem", top: "12rem" }}
          whileInView={{ left: "22rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <Link to="sdg" smooth={true} spy={true}>
            <FloatinDiv img={sdg} text1="Sürdürülebilir" text2="Kalkınma" />
          </Link>
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#F6FFBF",
            top: "-6rem",
            width: "21rem",
            height: "11rem",
            left: "4rem",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#FFAAFB",
            top: "0rem",
            width: "21rem",
            height: "11rem",
            left: "-18rem",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#AAFFCD",
            top: "10rem",
            width: "21rem",
            height: "11rem",
            left: "-14rem",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "2rem",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#ffccdd",
            top: "8rem",
            width: "21rem",
            height: "11rem",
            left: "16rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
