import "../App.css";

import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
// import { useFrame } from '@react-three/fiber'
import { Suspense } from "react";
import { useRef, useState } from "react";
import textureImage3 from "../img/g1.png";
import textureImage2 from "../img/g3.png";
import textureImage from "../img/g5m.png";

import { useLocation } from "react-router-dom";

import * as THREE from "three";

import {
  Sky,
  Stats,
  useGLTF,
  useAnimations,
  useProgress,
  Html,
  Text,
} from "@react-three/drei";

// import CameraOrbitControls from './components/CameraOrbitControls'
import Lights from "./metaverse/Lights";

import { DemoScene } from "./metaverse/DemoScene";
import { CityScene1 } from "./metaverse/CityScene1";
import Interacty from "./metaverse/Interacty";
import Player from "./metaverse/Player";
import Yaris1 from "./metaverse/Yaris1";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {" "}
      <div style={{ fontSize: 30, color: "white" }}>
        {progress} % yükleniyor
      </div>
    </Html>
  );
}

function Metaverse(props) {
  console.log("state is:", props.cinsiyet);
  const cinsiyet = props.cinsiyet;
  // console.log("gelen cinsiyet metaverse: ", cinsiyet);

  const [clickedTosecond, setClickedToSecond] = useState(false);
  const [clickedTofirst, setClickedToFirst] = useState(false);
  const meshRef = useRef();

  const [hoveredFirst, setHoverFirst] = useState(false);
  const [hoveredSecond, setHoverSecond] = useState(false);

  const testing = false;

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textureImage);
  const texture2 = textureLoader.load(textureImage2);
  const texture3 = textureLoader.load(textureImage3);

  return (
    <>
      <div
        style={{
          position: "absolute",
          marginTop: "70vh",
          marginLeft: "10vh",
          fontSize: "24px",
          color: "lightblue",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        W<br />A - S - D
        <br />
        veya Ok tuşları <br />
        ile hareket ettirebilirsiniz.
        <br />
        ESC ile çıkış yapabilirsiniz.
      </div>

      <div className="canvas-container">
        {
          <Canvas
            // shadows
            camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 4, 4.5] }}
          >
            <Suspense fallback={<Loader />}>
              {testing ? <Stats /> : null}
              {testing ? <axesHelper args={[2]} /> : null}
              {testing ? <gridHelper args={[10, 10]} /> : null}

              <Lights />
              <Text
                scale={[0.25, 0.25, 0.25]}
                position={[0.5, 3.5, -7]}
                color="black" // default
                anchorX="center" // default
                anchorY="middle" // default
              >
                Tüik Çocuk der ki;
              </Text>
              <Text
                scale={[0.25, 0.25, 0.25]}
                position={[0.5, 3, -7]}
                color="black" // default
                anchorX="center" // default
                anchorY="middle" // default
              >
                çok yakında oyunlar burada olacak.
              </Text>

              <DemoScene
                position={[0.5, 0.15, 3]}
                rotation={[0, 3.1, 0]}
                scale={[1.2, 1.2, 1.2]}
              />
              <CityScene1
                position={[0.5, -0.1, 3]}
                // rotation={[0, 3.1, 0]}
                scale={[1.2, 1.2, 1.2]}
              />

              <mesh
                position={[0.6, 2.1, -7]}
                {...props}
                visible={true}
                // scale={clickedTosecond ? 1.5 : 1}
                scale={hoveredSecond ? 1.2 : 1}
                onClick={(event) => setClickedToSecond(!clickedTosecond)}
                onPointerOver={(event) => setHoverSecond(true)}
                onPointerOut={(event) => setHoverSecond(false)}
              >
                <boxGeometry args={[1, 1, 0.01]}>
                  <bufferAttribute
                    attachObject={["attributes", "uv"]}
                    array={[0, 0, 1, 0, 1, 1, 0, 1]}
                    count={4}
                    itemSize={2}
                  />
                </boxGeometry>

                <meshStandardMaterial
                  map={texture}
                  color={hoveredSecond ? "#B4DAD9" : "#CCEBEA"}
                />
              </mesh>

              <Player cinsiyet={cinsiyet} />
            </Suspense>
          </Canvas>
        }
      </div>
      {/* {clickedTofirst && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            color: "lightblue",
            zIndex: 2,
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <>
            <InteractyKolay />
            <button
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "red",
                zIndex: "1",
                cursor: "pointer",
              }}
              onClick={(event) => setClickedToFirst(false)}
            >
              X
            </button>
            <button
              style={{
                position: "absolute",
                bottom: "2vh",
                right: "2vh",
                color: "red",
                zIndex: "1",
                width: "100%",
                height: "270px",
                marginRight: "-2vh",
                cursor: "pointer",
                backgroundColor: "#ffd9b3",
              }}
            >
              Kartları çevirerek aynı olan kartları bul.
            </button>
          </>
        </div>
      )} */}
      {clickedTosecond && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            color: "lightblue",
            zIndex: 2,
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <>
            <Interacty />
            {/* <Yaris1 /> */}
            <button
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                color: "red",
                zIndex: "1",
                cursor: "pointer",
              }}
              onClick={(event) => setClickedToSecond(false)}
            >
              X
            </button>
            <button
              style={{
                position: "absolute",
                bottom: "2vh",
                marginLeft: "-2vh",
                width: "100%",
                height: "50px",
                cursor: "pointer",
                backgroundColor: "#ffd9b3",
              }}
            >
              Kartları çevirerek aynı olan kartları bul.
            </button>
          </>
        </div>
      )}
    </>
  );
}

export default Metaverse;
