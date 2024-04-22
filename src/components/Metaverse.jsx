import "../App.css";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import useZustandStore from "../zustandStore";
import { Physics } from "@react-three/cannon";

import Game from "../components/metaworld/Game";
import textureUlkeler from "../img/metaverse_images/game_icon_ulkeler_eng.png";
import textureUzayMacerasi from "../img/metaverse_images/game_icon_uzay_macerasi_eng.png";
import textureImage from "../img/metaverse_images/game_icon_hafiza_oyunu_eng.png";
import textureSuperAraba from "../img/metaverse_images/game_icon_super_araba_eng.png";

import * as THREE from "three";

import { Color } from "three";

import {
  Stats,
  Environment,
  useProgress,
  Html,
  // OrbitControls,
} from "@react-three/drei";

import UzayMacerasi from "./metaverse/UzayMacerasi";
import UlkelerBayrak from "./metaverse/UlkelerBayrak";
import ArabaYarisi from "./metaverse/ArabaYarisi";
import SolarSystem from "./metaworld/SolarSystem";
import TuikIcLoby from "./metaworld/TuikIcLoby";
import InformationButton from "./metaworld/InformationButton";
import MemoryGame from "./metaverse/MemoryGame";
import JoystickButtons from "./metaworld/JoystickButtons";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 30,
          color: "white",
        }}
      >
        {Math.round(progress)} % loading
      </div>
    </Html>
  );
}

function Metaverse(props) {
  const [cursorStyle, setCursorStyle] = useState("auto");

  const defaultColor = new Color("#CCffff");
  const hoverColor = new Color("#ffffff");

  // console.log("state is:", props.cinsiyet);
  const cinsiyet = props.cinsiyet;
  // console.log("gelen cinsiyet metaverse: ", cinsiyet);
  const [clickedTofirst, setClickedToFirst] = useState(false);
  const [clickedTosecond, setClickedToSecond] = useState(false);
  const [clickedToThird, setClickedToThird] = useState(false);
  const [clickedToFourth, setClickedToFourth] = useState(false);

  const [hoveredFirst, setHoverFirst] = useState(false);
  const [hoveredSecond, setHoverSecond] = useState(false);
  const [hoveredThird, setHoverThird] = useState(false);
  const [hoveredFourth, setHoverFourth] = useState(false);

  const isAnyGameOpened = useZustandStore((state) => state.isAnyGameOpened);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(
      !!userAgent.match(
        /android|webos|iphone|ipad|ipod|blackberry|windows phone/i
      )
    );
  }, []);

  const testing = false;

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textureImage);
  const texture2 = textureLoader.load(textureUzayMacerasi);
  const texture3 = textureLoader.load(textureUlkeler);
  const texture4 = textureLoader.load(textureSuperAraba);

  const textForBilgi =
    "You can choose the game you want to play by clicking on the icons on the screens..";

  const textForBinalar =
    "You can access various information by going to the Solar System or TURKSTAT building.";

  const isBilgiIcTriggered = useZustandStore(
    (state) => state.isBilgiIcTriggered
  );

  const isBilgiGateTriggered = useZustandStore(
    (state) => state.isBilgiGateTriggered
  );

  const isGunesGateTriggered = useZustandStore(
    (state) => state.isGunesGateTriggered
  );

  const isTuikGateTriggered = useZustandStore(
    (state) => state.isTuikGateTriggered
  );

  useEffect(() => {
    // ComponentDidMount - Set up any subscriptions or initializations here
    //useZustandStore.setState({ isGunesGateTriggered: false });
    //useZustandStore.setState({ isTuikGateTriggered: false });
    // ComponentWillUnmount - Cleanup and reset isGunesGateTriggered to false
    return () => {
      useZustandStore.setState({ isGunesGateTriggered: false });
      useZustandStore.setState({ isTuikGateTriggered: false });
      useZustandStore.setState({ isGeriClicked: false });
    };
  }, []);

  function closeYaris() {
    setClickedToFirst(false);
    setClickedToFourth(false);
  }

  return (
    <>
      {clickedTofirst && (
        <div className="popup-containerM">
          <div className="popup-contentM">
            <UzayMacerasi closeTheGame={closeYaris} />
          </div>
        </div>
      )}
      {clickedTosecond && (
        <div className="popup-containerM">
          <div className="popup-contentM">
            <MemoryGame />
            <button
              className="close-buttonM"
              onClick={(event) => setClickedToSecond(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {clickedToThird && (
        <div className="popup-containerM">
          <div className="popup-contentM">
            <UlkelerBayrak />
            <button
              className="close-buttonM"
              onClick={(event) => setClickedToThird(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {clickedToFourth && (
        <div className="popup-containerM">
          <div className="popup-contentM">
            <ArabaYarisi closeTheGame={closeYaris} />
          </div>
        </div>
      )}

      <style>{`
        .canvas-container {
          cursor: ${cursorStyle};
        }
      `}</style>

      {isGunesGateTriggered ? (
        <SolarSystem />
      ) : isTuikGateTriggered ? (
        <TuikIcLoby />
      ) : (
        <div className="canvas-container">
          {isMobile ? (
            !isAnyGameOpened && <JoystickButtons />
          ) : (
            <div
              style={{
                position: "absolute",
                marginTop: "70vh",
                marginLeft: "10vh",
                fontSize: "24px",
                color: "lightblue",
                zIndex: 1,
                textAlign: "center",
                userSelect: "none",
              }}
            >
              W<br />A - S - D
              <br />
              or Arrow keys <br />
              to move.
              <br />
              Turn with mouse.
              <br />
              Exit with ESC key.
            </div>
          )}

          {isBilgiIcTriggered ? (
            <InformationButton text={textForBilgi} left={"20px"} top={"50%"} />
          ) : (
            <></>
          )}

          {isBilgiGateTriggered ? (
            <InformationButton
              text={textForBinalar}
              left={"48%"}
              top={"40px"}
            />
          ) : (
            <></>
          )}

          {
            <Canvas
              // shadows
              // camera={{ fov: 55, near: 0.1, far: 1000, position: [0, 0, 0] }}
              camera={{ fov: isMobile ? 90 : 60 }}
            >
              <Suspense fallback={<Loader />}>
                {testing ? <Stats /> : null}
                {testing ? <axesHelper args={[2]} /> : null}
                {testing ? <gridHelper args={[10, 10]} /> : null}
                <Environment background={true} files={"/env/CasualDay2K.hdr"} />

                {/* for large view */}
                {/* <OrbitControls
                  enableZoom={true}
                  makeDefault
                  rotateSpeed={0.6}
                  maxPolarAngle={1.4}
                  minPolarAngle={0.2}
                  minDistance={80}
                  maxDistance={250}
                  target={[0, 15, 0]}
                /> */}

                {/* <Lights /> */}
                <ambientLight intensity={0.4} />
                <pointLight
                  color="lightyellow"
                  intensity={0.55}
                  position={[150, 5, 50]}
                />
                <spotLight
                  position={[-2.5, 5, 5]}
                  angle={Math.PI / 3}
                  penumbra={0.5}
                  castShadow
                  shadow-mapSize-height={2048}
                  shadow-mapSize-width={2048}
                />

                <Physics>
                  <Game cinsiyet={cinsiyet} />
                </Physics>

                <mesh
                  position={[-7.1, 2.4, -7.8]}
                  rotation={[0, 0.55, 0]}
                  {...props}
                  visible={true}
                  scale={hoveredFirst ? 2.1 : 2}
                  onClick={(event) => setClickedToFirst(!clickedTofirst)}
                  onPointerOver={(event) => {
                    setHoverFirst(true);
                    setCursorStyle("pointer");
                  }}
                  onPointerOut={(event) => {
                    setHoverFirst(false);
                    setCursorStyle("auto");
                  }}
                >
                  <planeGeometry args={[1, 1]} />

                  <meshBasicMaterial
                    color={hoveredFirst ? hoverColor : defaultColor}
                    map={texture2}
                    transparent
                    alphaTest={0.5}
                    side={THREE.DoubleSide}
                  />
                </mesh>
                {/* /// */}
                <mesh
                  position={[1.75, 2.8, -7]}
                  {...props}
                  visible={true}
                  // scale={clickedTosecond ? 1.5 : 1}
                  scale={hoveredSecond ? 2.1 : 2}
                  onClick={(event) => setClickedToSecond(!clickedTosecond)}
                  onPointerOver={(event) => {
                    setHoverSecond(true);
                    setCursorStyle("pointer");
                  }}
                  onPointerOut={(event) => {
                    setHoverSecond(false);
                    setCursorStyle("auto");
                  }}
                >
                  <planeGeometry args={[1, 1]} />

                  <meshBasicMaterial
                    map={texture}
                    color={hoveredSecond ? hoverColor : defaultColor}
                    transparent
                    alphaTest={0.5}
                    side={THREE.DoubleSide}
                  />
                </mesh>

                <mesh
                  position={[-0.7, 2.8, -7]}
                  {...props}
                  visible={true}
                  scale={hoveredThird ? 2.1 : 2}
                  onClick={(event) => setClickedToThird(!clickedToThird)}
                  onPointerOver={(event) => {
                    setHoverThird(true);
                    setCursorStyle("pointer");
                  }}
                  onPointerOut={(event) => {
                    setHoverThird(false);
                    setCursorStyle("auto");
                  }}
                >
                  <planeGeometry args={[1, 1]} />

                  <meshBasicMaterial
                    map={texture3}
                    color={hoveredThird ? hoverColor : defaultColor}
                    transparent
                    alphaTest={0.5}
                    side={THREE.DoubleSide}
                  />
                </mesh>

                <mesh
                  position={[8.1, 2.4, -7.3]}
                  rotation={[0, -0.55, 0]}
                  {...props}
                  visible={true}
                  scale={hoveredFourth ? 2.1 : 2}
                  onClick={(event) => setClickedToFourth(!clickedToFourth)}
                  onPointerOver={(event) => {
                    setHoverFourth(true);
                    setCursorStyle("pointer");
                  }}
                  onPointerOut={(event) => {
                    setHoverFourth(false);
                    setCursorStyle("auto");
                  }}
                >
                  <planeGeometry args={[1, 1]} />

                  <meshBasicMaterial
                    map={texture4}
                    color={hoveredFourth ? hoverColor : defaultColor}
                    transparent
                    alphaTest={0.5}
                    side={THREE.DoubleSide}
                  />
                </mesh>
              </Suspense>
            </Canvas>
          }
        </div>
      )}
    </>
  );
}

export default Metaverse;
