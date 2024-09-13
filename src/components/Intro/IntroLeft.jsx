import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";

import ModelCharMod from "./ModelCharMod";
import { Suspense } from "react";
import "./Intro.css";
import texts from "./texts_intro.json";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {" "}
      <div
        style={{
          fontSize: "12pt",
          color: "black",
        }}
      >
        {Math.round(progress)} {texts.yukleniyor}
      </div>
    </Html>
  );
}

const IntroLeft = (props) => {
  const isMale = props.cinsiyet === "1";

  // -- set -/+ ortanca
  let boyMessage = "";
  let unsignedBoy =
    typeof props?.boyOrtancaDeger === "number"
      ? Math.abs(Number(props?.boyOrtancaDeger) ?? 0)
      : 0;

  if (typeof props?.boyOrtancaDeger === "number") {
    if (props?.boyOrtancaDeger < 0) {
      boyMessage = texts.altMessage;
    } else {
      boyMessage = texts.ustMessage;
    }
  } else {
    boyMessage = texts.tamMessage;
  }

  let kiloMessage = "";
  let unsignedKilo =
    typeof props?.kiloOrtancaDeger === "number"
      ? Math.abs(Number(props?.kiloOrtancaDeger) ?? 0)
      : 0;

  if (typeof props?.kiloOrtancaDeger === "number") {
    if (props?.kiloOrtancaDeger < 0) {
      kiloMessage = texts.altMessage;
    } else {
      kiloMessage = texts.ustMessage;
    }
  } else {
    kiloMessage = texts.tamMessage;
  }

  return (
    <>
      <div
        id="canvas"
        className="i-left-canvas"
        style={{
          zIndex: "1",
          marginLeft: "11.5rem",
          width: "160px",
          height: "355px",
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 10.15], fov: 15 }}
          style={{
            cursor: "pointer",
            marginLeft: "3.5rem",
            // boxShadow:
            //   "0 4px 8px 0 rgba(200, 200, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <ambientLight intensity={1.2} />

          <directionalLight intensity={1.5} />
          <Suspense fallback={<Loader />}>
            {isMale ? (
              <ModelCharMod
                position={[-0.15, -0.9, 1]}
                rotation={[-0.1, -60.5, 0]}
              />
            ) : (
              <ModelCharMod
                position={[-0.15, -0.9, 1]}
                rotation={[-0.1, -60.5, 0]}
              />
            )}
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            maxPolarAngle={1.45}
            minPolarAngle={1.44}
            maxAzimuthAngle={0.15}
            minAzimuthAngle={-0.15}
          />
        </Canvas>
      </div>

      <div
        id="infoText"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          position: "absolute",
          zIndex: "0",
        }}
      >
        <div
          style={{
            width: "%80",
            fontSize: "1rem",
            lineHeight: "1",
            marginTop: "4rem",
            paddingLeft: "2rem",
            paddingRight: "20rem",
            minWidth: "75%",
            textAlign: "left",
          }}
        >
          {" "}
          <span className="introleft-text">
            {texts.introLeftText5_1} {props.ayniIsimdeIlSayi}{" "}
            {texts.introLeftText5_2} {props.il} {texts.introLeftText6}
            <br /> {texts.introLeftText7} {props.ayniIsimdeTurkiyeSayi}{" "}
            {texts.introLeftText8}
            <br /> <br />
            {texts.introLeftText5_1} {props.ayniTarihDoganIlSayi}{" "}
            {texts.introLeftText9} {props.il} <br /> {texts.introLeftText10}{" "}
            {props.ayniTarihDoganTurkiyeSayi} {texts.introLeftText11}
            <br />
            <br />
            {texts.introLeftText12} {unsignedBoy} {texts.introLeftText13}{" "}
            {boyMessage} {texts.introLeftText14}
            <br />
            <br />
            {texts.introLeftText12_1} {unsignedKilo} {texts.introLeftText15}{" "}
            {kiloMessage} {texts.introLeftText14}
          </span>
        </div>
      </div>

      <div
        id="infoProps"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          zIndex: "0",
          top: "90px",
          left: "540px",
        }}
      >
        <div style={{ marginLeft: "-2rem", width: "5rem" }}>
          <span>
            {" "}
            <span
              style={{
                fontSize: "12pt",
              }}
            >
              {" "}
              <b>{props.boy} cm</b>
            </span>
          </span>
        </div>
        <div
          style={{
            marginTop: "12rem",
            marginLeft: "-8rem",
            marginRight: "8rem",
          }}
        >
          <span
            style={{
              color: "green",
            }}
          >
            {" "}
            <span
              style={{
                fontSize: "12pt",
              }}
            >
              {" "}
              <b>{props.kilo} kg</b>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default IntroLeft;
