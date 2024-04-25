import React, { useState, useRef, useEffect, useContext } from "react";
import "./RegisterPage.css";
import UserRegister from "./UserRegister";
import video from "../../img/bayram_kutlama.mp4";

import { useHistory } from "react-router-dom";

import NavbarRegister from "../../components/Navbar/NavbarRegister";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
// import ModelChar from "../../components/Intro/ModelChar";
// import ModelCharEge from "../../components/Intro/ModelCharEge";
import { Suspense } from "react";

import FooterBg from "../../img/tkc_footer_bg.png";
import FooterDarkBg from "../../img/tkc_footer_dark_bg.png";
import modChar from "../../img/mod_char.png";

import useZustandStore from "../../zustandStore";

import * as THREE from "three";

import { Trail, Float } from "@react-three/drei";

import { themeContext } from "../../Context";
// import { isMobile } from "react-device-detect";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {" "}
      <div
        style={{
          fontSize: 20,
          color: "black",
        }}
      >
        {Math.round(progress)} % loading
      </div>
    </Html>
  );
}

function Atom(props) {
  return (
    <group {...props}>
      <Electron position={[0, 0, 0.5]} speed={4} />
    </group>
  );
}

function Electron({ radius = 0.62, speed = 6, ...props }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25 - 1.1,
      -3.2
    );
  });
  return (
    <group {...props}>
      <Trail
        local
        width={5}
        length={12}
        // color={new THREE.Color(2, 1, 10)}
        color={new THREE.Color(0x00ffe4)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          {/* <sphereGeometry args={[0.15]} /> */}
          <meshBasicMaterial color={[10, 8, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}

const RegisterPage = () => {
  const history = useHistory();
  // const [userInfo, setUserInfo] = useState(null);

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
    // Reset scroll position when component unmounts
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);

    //to remember which select value
    setSelectedLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  };

  const transitionOfBulut = {
    duration: 3.2,
    ease: "easeInOut",
    loop: Infinity,
  };

  const handlePlayClick = () => {
    setShowVideo(true);
    const { current: videoElement } = videoRef;
    if (videoElement) {
      videoElement.play();
    }
  };

  // useEffect(() => {
  //   const { current: videoElement } = videoRef;
  //   const onVideoEnd = () => {
  //     setShowVideo(false);
  //   };

  //   if (videoElement) {
  //     videoElement.addEventListener("ended", onVideoEnd);
  //     videoElement.addEventListener("canplaythrough", () => {
  //       setShowVideo(true);
  //       videoElement.play();
  //     });
  //     return () => {
  //       videoElement.removeEventListener("ended", onVideoEnd);
  //       videoElement.removeEventListener("canplaythrough", () => {
  //         setShowVideo(true);
  //         videoElement.play();
  //       });
  //     };
  //   }
  // }, []);
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

  const getBorderStyle = () => {
    if (gender === "erkek") {
      return "1px solid blue";
    } else if (gender === "kiz") {
      return "1px solid pink";
    } else {
      return "none";
    }
  };

  const [gender, setGender] = useState("");
  const handleGenderChange = (value) => {
    setGender(value);
    console.log(value);
  };

  const handleUserRegister = (formData) => {
    console.log(formData);
    // Do something with the form data, like send it to a server to create a new user account
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
                top: "5%",
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
            {/* {!isMobile && (
              <div
                className="registerPage-left"
                style={{
                  backgroundImage: `url(${tkc_kuslar1_edit})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Canvas
                  camera={{ position: [0, 0, 4.25], fov: 15 }}
                  className={"canvas-left"}
                >
                  <ambientLight intensity={1.25} />

                  <directionalLight intensity={0.4} />
                  <Suspense fallback={<Loader />}>
                    {gender === "1" && (
                      <>
                        <Float
                          speed={4}
                          rotationIntensity={1}
                          floatIntensity={2}
                        >
                          <Atom />
                        </Float>
                      </>
                    )}
                    <ModelCharEge
                      position={[0, -1.2, -3]}
                      scale={0.9}
                      rotation={[0, -60, 0]}
                    />
                  </Suspense>
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={0.5}
                    maxPolarAngle={1.45}
                    minPolarAngle={1.44}
                    maxAzimuthAngle={0.1}
                    minAzimuthAngle={-0.1}
                  />
                </Canvas>
              </div>
            )} */}

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
              <span className="formTitle2">
                {strings.registerPageBilgileriDoldur}
              </span>
              <UserRegister
                onGenderChange={handleGenderChange}
                onSubmit={handleUserRegister}
              />
            </div>
            {/* {!isMobile && (
              <div
                className="registerPage-right"
                style={{
                  backgroundImage: `url(${tkc_kuslar2_edit})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Canvas
                  camera={{ position: [0, 0, 4.25], fov: 15 }}
                  className={"canvas-right"}
                >
                  <ambientLight intensity={1.25} />
                  <directionalLight intensity={0.4} />
                  <Suspense fallback={<Loader />}>
                    <ModelChar
                      position={[0, -1.2, -3]}
                      rotation={[0, -60, 0]}
                      scale={0.9}
                    />
                    {gender === "2" && (
                      <>
                        <Float
                          speed={4}
                          rotationIntensity={1}
                          floatIntensity={2}
                        >
                          <Atom position={[0, -1.2, -3]} />
                        </Float>
                      </>
                    )}
                  </Suspense>
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={0.5}
                    maxPolarAngle={1.45}
                    minPolarAngle={1.44}
                    maxAzimuthAngle={0.1}
                    minAzimuthAngle={-0.1}
                  />
                </Canvas>
              </div>
            )} */}
          </div>
        </>
      )}
      {/* <div
        className="footer-image"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          // width: "100%",
          zIndex: darkMode ? 1 : -1,
          marginBottom: "-0.5rem",
        }}
      >
        <img
          src={darkMode ? FooterDarkBg : FooterBg}
          alt=""
          style={{ width: "100%" }}
        />
      </div> */}
      {/* <div
        className="footer-register"
        style={{
          zIndex: darkMode ? 1 : -1,
        }}
      >
        <Footer />
      </div> */}
    </>
  );
};

export default RegisterPage;
