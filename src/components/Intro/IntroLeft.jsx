import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";

import ModelCharMod from "./ModelCharMod";
import { Suspense } from "react";
import "./Intro.css";

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
        {Math.round(progress)} % loading
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
      boyMessage = "below";
    } else {
      boyMessage = "above";
    }
  }

  let kiloMessage = "";
  let unsignedKilo =
    typeof props?.kiloOrtancaDeger === "number"
      ? Math.abs(Number(props?.kiloOrtancaDeger) ?? 0)
      : 0;

  if (typeof props?.kiloOrtancaDeger === "number") {
    if (props?.kiloOrtancaDeger < 0) {
      kiloMessage = "below";
    } else {
      kiloMessage = "above";
    }
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
          <ambientLight intensity={1.25} />

          <directionalLight intensity={0.8} />
          <Suspense fallback={<Loader />}>
            {isMale ? (
              <ModelCharMod position={[-0.1, -0.9, 1]} rotation={[0, -60, 0]} />
            ) : (
              <ModelCharMod position={[-0.1, -0.9, 1]} rotation={[0, -60, 0]} />
            )}
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            maxPolarAngle={1.45}
            minPolarAngle={1.44}
            maxAzimuthAngle={0.05}
            minAzimuthAngle={-0.05}
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
            As of today, you are {props.yilYas} years, {props.ayYas} months,{" "}
            {props.gunYas} days old.
            <br />
            <br />
            There are {props.ayniIsimdeIlSayi} people with your name in{" "}
            {props.il} province and <br /> there are{" "}
            {props.ayniIsimdeTurkiyeSayi} in Türkiye.
            <br /> <br />
            There are {props.ayniTarihDoganIlSayi} people born on the same date
            as you in {props.il} <br /> and there are{" "}
            {props.ayniTarihDoganTurkiyeSayi} people in Türkiye.
            <br />
            <br />
            For your age and gender, your height is {unsignedBoy} cm{" "}
            {boyMessage} the median value.
            <br />
            <br />
            For your age and gender, your weight is {unsignedKilo} kg{" "}
            {kiloMessage} the median value.
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
