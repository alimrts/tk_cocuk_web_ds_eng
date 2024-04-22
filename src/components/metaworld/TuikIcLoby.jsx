import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import "./SoloarSystemStyle.css";
import informationBtn from "../../img/metaverse_images/information_btn.png";
import useZustandStore from "../../zustandStore";
import {
  useGLTF,
  Environment,
  PerspectiveCamera,
  OrbitControls,
  Html,
  useProgress,
  useCursor,
} from "@react-three/drei";

import { EffectComposer, Bloom } from "@react-three/postprocessing";

import dergiSrc from "../../img/daireler/e2.jpg";
import kurulusSrc from "../../img/daireler/e1.jpg";

import TuikIcDaire1 from "./TuikIcDaire1";
import TuikIcDaire2 from "./TuikIcDaire2";
import TuikIcDaire3 from "./TuikIcDaire3";
import TuikIcDaire4 from "./TuikIcDaire4";
import TuikIcDaire5 from "./TuikIcDaire5";

function LoaderBase() {
  const { progress } = useProgress();

  console.log("prog: ", progress);
  return (
    <Html center>
      {" "}
      <div style={{ fontSize: 28, color: "white" }}>
        Loading... {Math.round(progress)} %
      </div>
    </Html>
  );
}

const TuikIcBina = (props) => {
  const { nodes, materials } = useGLTF("./models/tuik_ic_loby3.glb");

  const group = useRef();

  const setIsDaire1Triggered = useZustandStore(
    (state) => state.setIsDaire1Triggered
  );

  const handleGoToDaire1 = () => {
    setIsDaire1Triggered(true);
  };

  const setIsDaire2Triggered = useZustandStore(
    (state) => state.setIsDaire2Triggered
  );

  const handleGoToDaire2 = () => {
    setIsDaire2Triggered(true);
  };

  const setIsDaire3Triggered = useZustandStore(
    (state) => state.setIsDaire3Triggered
  );

  const handleGoToDaire3 = () => {
    setIsDaire3Triggered(true);
  };

  const setIsDaire4Triggered = useZustandStore(
    (state) => state.setIsDaire4Triggered
  );

  const handleGoToDaire4 = () => {
    setIsDaire4Triggered(true);
  };

  const setIsDaire5Triggered = useZustandStore(
    (state) => state.setIsDaire5Triggered
  );

  const handleGoToDaire5 = () => {
    setIsDaire5Triggered(true);
  };

  const setShowInfoAfisDergi = useZustandStore(
    (state) => state.setShowInfoAfisDergi
  );

  const showInfoAfisDergi = useZustandStore((state) => state.showInfoAfisDergi);

  const setShowInfoAfisKurulus = useZustandStore(
    (state) => state.setShowInfoAfisKurulus
  );

  const showInfoAfisKurulus = useZustandStore(
    (state) => state.showInfoAfisKurulus
  );

  const [hovered, set] = useState();
  useCursor(hovered, "pointer", "auto", document.body);

  const handleButtonClickDergi = () => {
    setShowInfoAfisDergi(!showInfoAfisDergi);
  };

  const handleButtonClickKurulus = () => {
    setShowInfoAfisKurulus(!showInfoAfisKurulus);
  };

  const [hoveredDergi, setHoveredDergi] = useState(false);

  const handleMouseEnterDergi = () => {
    setHoveredDergi(true);
  };

  const handleMouseLeaveDergi = () => {
    setHoveredDergi(false);
  };

  const [hoveredKurulus, setHoveredKurulus] = useState(false);

  const handleMouseEnterKurulus = () => {
    setHoveredKurulus(true);
  };

  const handleMouseLeaveKurulus = () => {
    setHoveredKurulus(false);
  };

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[24, 12, 30]}
      scale={4}
    >
      <group position={[-5.411, 8.701, -8.63]} scale={0.01}>
        <group
          position={[-319.824, -548.6, -2030.163]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.449}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh188.geometry}
            material={materials["afis1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh188_1.geometry}
            material={materials["afisk.001"]}
          />
        </group>
        <group
          position={[192.144, -548.6, -2030.163]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.449}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh187.geometry}
            material={materials["afis2.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh187_1.geometry}
            material={materials["afisk.001"]}
          />
        </group>
        <group
          position={[892.673, -234.815, -1622.275]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[2.688, 1, 1.61]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh184.geometry}
            material={materials["24 - Default.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh184_1.geometry}
            material={materials["clear_glass.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh184_2.geometry}
            material={materials["clear_glass.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh184_3.geometry}
            material={materials["24 - Default.003"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camlar002.geometry}
          material={materials["camlar.002"]}
          position={[-33.071, 9853.379, 515.687]}
          rotation={[0, -1.571, 0]}
          scale={100}
        />
        <group
          position={[959.297, -1031.489, 1210.849]}
          rotation={[Math.PI, -1.559, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh104.geometry}
            material={materials["ReceptionDesk_Desk.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh104_1.geometry}
            material={materials["ReceptionDesk_Body.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh104_2.geometry}
            material={materials["ReceptionDesk_Front.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh104_3.geometry}
            material={materials["tklogo.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.floor002.geometry}
          material={materials["floor.002"]}
          position={[-33.071, 9853.379, 515.687]}
          rotation={[0, -1.571, 0]}
          scale={100}
        />
        <group
          position={[-4018.375, -1031.183, 813.789]}
          rotation={[-Math.PI, 1.505, -Math.PI]}
          scale={165.054}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh129.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh129_1.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-4020.05, -1034.798, 1218.672]}
          rotation={[-Math.PI, 0.418, -Math.PI]}
          scale={199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh130.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_1.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh130_2.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[4102.768, -1031.183, 673.241]}
          rotation={[-Math.PI, 1.505, -Math.PI]}
          scale={165.054}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh135.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh135_1.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[4101.092, -1034.798, 1078.125]}
          rotation={[-Math.PI, 0.418, -Math.PI]}
          scale={199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh136.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh136_1.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh136_2.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[1698.825, -1031.183, 545.347]}
          rotation={[0, 0.066, 0]}
          scale={165.054}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh141.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh141_1.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[1293.942, -1034.798, 543.672]}
          rotation={[0, 1.153, 0]}
          scale={199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh142.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh142_1.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh142_2.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-1318.335, -1031.183, 544.148]}
          rotation={[0, 0.066, 0]}
          scale={165.054}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh147.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh147_1.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-1723.219, -1034.798, 542.472]}
          rotation={[0, 1.153, 0]}
          scale={199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh148.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh148_1.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh148_2.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[1342.655, -1031.183, 1631.199]}
          rotation={[0, 0.066, 0]}
          scale={165.054}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh153.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh153_1.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[937.772, -1034.798, 1629.523]}
          rotation={[0, 1.153, 0]}
          scale={199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh154.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh154_1.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh154_2.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[3482.398, -1031.183, 1631.199]}
          rotation={[0, 0.066, 0]}
          scale={165.054}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh159.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh159_1.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[3077.515, -1034.798, 1629.523]}
          rotation={[0, 1.153, 0]}
          scale={199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh160.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh160_1.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh160_2.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-2285.093, -1031.183, 1631.199]}
          rotation={[0, 0.066, 0]}
          scale={165.054}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh165.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh165_1.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-2689.976, -1034.798, 1629.523]}
          rotation={[0, 1.153, 0]}
          scale={199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh166.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh166_1.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh166_2.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-1983.441, -1034.798, 1629.523]}
          rotation={[0, 1.153, 0]}
          scale={199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh170.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh170_1.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh170_2.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-1578.557, -1031.183, 1631.199]}
          rotation={[0, 0.066, 0]}
          scale={165.054}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh173.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh173_1.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-4037.227, -1011.355, 822.088]}
          rotation={[-2.974, -0.42, -3.05]}
          scale={[941.676, 941.675, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh127.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh127_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh127_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh127_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[-4016.533, -1012.116, 801.96]}
          rotation={[2.954, 0.689, 3.077]}
          scale={[941.677, 941.677, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh128.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh128_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh128_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh128_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[4083.915, -1011.355, 681.541]}
          rotation={[-2.974, -0.42, -3.05]}
          scale={[941.676, 941.675, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh133.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh133_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh133_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh133_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[4104.609, -1012.116, 661.412]}
          rotation={[2.954, 0.689, 3.077]}
          scale={[941.677, 941.677, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh134.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh134_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh134_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh134_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[1690.526, -1011.355, 526.495]}
          rotation={[-2.783, 1.12, 2.839]}
          scale={[941.676, 941.675, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh139.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh139_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh139_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh139_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[1710.654, -1012.116, 547.189]}
          rotation={[0.223, 0.861, -0.355]}
          scale={[941.677, 941.676, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh140.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh140_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh140_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh140_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[-1326.634, -1011.355, 525.294]}
          rotation={[-2.783, 1.12, 2.839]}
          scale={[941.676, 941.675, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh145.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh145_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh145_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh145_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[-1306.506, -1012.116, 545.99]}
          rotation={[0.223, 0.861, -0.355]}
          scale={[941.677, 941.676, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh146.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh146_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh146_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh146_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[1334.356, -1011.355, 1612.347]}
          rotation={[-2.783, 1.12, 2.839]}
          scale={[941.676, 941.675, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh151.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh151_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh151_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh151_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[1354.484, -1012.116, 1633.041]}
          rotation={[0.223, 0.861, -0.355]}
          scale={[941.677, 941.676, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh152.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh152_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh152_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh152_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[3474.099, -1011.355, 1612.347]}
          rotation={[-2.783, 1.12, 2.839]}
          scale={[941.676, 941.675, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh157.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh157_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh157_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh157_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[3494.227, -1012.116, 1633.041]}
          rotation={[0.223, 0.861, -0.355]}
          scale={[941.677, 941.676, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh158.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh158_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh158_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh158_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[-2293.392, -1011.355, 1612.347]}
          rotation={[-2.783, 1.12, 2.839]}
          scale={[941.676, 941.675, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh163.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh163_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh163_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh163_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[-2273.264, -1012.116, 1633.041]}
          rotation={[0.223, 0.861, -0.355]}
          scale={[941.677, 941.676, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh164.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh164_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh164_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh164_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[-1566.728, -1012.116, 1633.041]}
          rotation={[0.223, 0.861, -0.355]}
          scale={[941.677, 941.676, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh171.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh171_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh171_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh171_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group
          position={[-1586.856, -1011.355, 1612.347]}
          rotation={[-2.783, 1.12, 2.839]}
          scale={[941.676, 941.675, 941.676]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh172.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh172_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh172_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh172_3.geometry}
            material={materials["Material.017"]}
          />
        </group>
        <group position={[-1345.648, -1007.471, 783.409]} scale={[1, 1, 0.898]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh177.geometry}
            material={materials["koltuk1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh177_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[-1582.043, -1007.471, 1127.055]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh175.geometry}
            material={materials["koltuk3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh175_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[-2374.32, -1007.471, 636.716]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh125.geometry}
            material={materials["koltuk1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh125_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group position={[-2717.965, -1007.471, 400.321]} scale={[1, 1, 0.898]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh124.geometry}
            material={materials["koltuk3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh124_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[-3084.504, -1007.471, 636.716]}
          rotation={[0, 1.571, 0]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh123.geometry}
            material={materials["koltuk1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh123_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[-3077.75, -1007.471, 1193.99]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh121.geometry}
            material={materials["koltuk1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh121_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[-2734.106, -1007.471, 1430.384]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh120.geometry}
            material={materials["koltuk3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh120_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[-2367.566, -1007.471, 1193.99]}
          rotation={[0, -1.571, 0]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh119.geometry}
            material={materials["koltuk1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh119_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[3550.828, -1007.471, 636.717]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh117.geometry}
            material={materials["koltuk1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh117_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group position={[3207.184, -1007.471, 400.321]} scale={[1, 1, 0.898]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh116.geometry}
            material={materials["koltuk3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh116_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[2840.644, -1007.471, 636.717]}
          rotation={[0, 1.571, 0]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh115.geometry}
            material={materials["koltuk1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh115_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[2847.397, -1007.471, 1193.99]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh113.geometry}
            material={materials["koltuk1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh113_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[3191.042, -1007.471, 1430.384]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh112.geometry}
            material={materials["koltuk3.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh112_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[3557.582, -1007.471, 1193.99]}
          rotation={[0, -1.571, 0]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh111.geometry}
            material={materials["koltuk1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh111_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <group
          position={[-1345.648, -1007.471, 1493.595]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[1, 1, 0.898]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh174.geometry}
            material={materials["koltuk1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh174_1.geometry}
            material={materials["koltuk2.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.metals002.geometry}
          material={materials["alm.002"]}
          position={[-33.071, 9853.379, 515.687]}
          rotation={[0, -1.571, 0]}
          scale={100}
        />
        <group
          position={[874.247, -842.166, -85.101]}
          rotation={[Math.PI, -0.004, Math.PI / 2]}
          scale={190}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh098.geometry}
            material={materials.Metalg}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh098_1.geometry}
            material={materials["DarkerMetal.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh098_2.geometry}
            material={materials["Emission.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh098_3.geometry}
            material={materials["Metal.006"]}
          />
          <Html>
            {!showInfoAfisDergi && !showInfoAfisKurulus ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  backgroundColor: "#323632a4",
                  width: "140px",
                  textAlign: "center",
                  top: -220,
                  left: -50,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightblue",
                  padding: "4px",
                }}
                onClick={handleGoToDaire1}
              >
                Dissemination and Communication Department
              </div>
            ) : (
              ""
            )}
          </Html>
        </group>
        <group
          position={[874.247, -842.166, -701.694]}
          rotation={[Math.PI, -0.004, Math.PI / 2]}
          scale={190}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh099.geometry}
            material={materials.Metalg}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh099_1.geometry}
            material={materials["DarkerMetal.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh099_2.geometry}
            material={materials["Emission.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh099_3.geometry}
            material={materials["Metal.006"]}
          />
          <Html>
            {!showInfoAfisDergi && !showInfoAfisKurulus ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  backgroundColor: "#323632a4",
                  width: "140px",
                  textAlign: "center",
                  top: -280,
                  left: -50,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightblue",
                  padding: "4px",
                }}
                onClick={handleGoToDaire2}
              >
                Foreign Relations Department
              </div>
            ) : (
              ""
            )}
          </Html>
        </group>
        <group
          position={[874.247, -842.166, -1318.287]}
          rotation={[Math.PI, -0.004, Math.PI / 2]}
          scale={190}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh100.geometry}
            material={materials.Metalg}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh100_1.geometry}
            material={materials["DarkerMetal.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh100_2.geometry}
            material={materials["Emission.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh100_3.geometry}
            material={materials["Metal.006"]}
          />
        </group>
        <group
          position={[-1042.048, -842.166, -1337.826]}
          rotation={[0, 0.004, -Math.PI / 2]}
          scale={190}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh101.geometry}
            material={materials.Metalg}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh101_1.geometry}
            material={materials["DarkerMetal.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh101_2.geometry}
            material={materials["Emission.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh101_3.geometry}
            material={materials["Metal.006"]}
          />
          <Html>
            {!showInfoAfisDergi && !showInfoAfisKurulus ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  backgroundColor: "#323632a4",
                  width: "140px",
                  textAlign: "center",
                  top: -180,
                  left: -10,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightblue",
                  padding: "4px",
                }}
                onClick={handleGoToDaire5}
              >
                Software Department
              </div>
            ) : (
              ""
            )}
          </Html>
        </group>
        <group
          position={[-1042.047, -842.166, -721.233]}
          rotation={[0, 0.004, -Math.PI / 2]}
          scale={190}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh102.geometry}
            material={materials.Metalg}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh102_1.geometry}
            material={materials["DarkerMetal.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh102_2.geometry}
            material={materials["Emission.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh102_3.geometry}
            material={materials["Metal.006"]}
          />
          <Html>
            {!showInfoAfisDergi && !showInfoAfisKurulus ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  backgroundColor: "#323632a4",
                  width: "140px",
                  textAlign: "center",
                  top: -280,
                  left: -50,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightblue",
                  padding: "4px",
                }}
                onClick={handleGoToDaire4}
              >
                Data Collection Department
              </div>
            ) : (
              ""
            )}
          </Html>
        </group>
        <group
          position={[-1042.047, -842.166, -104.64]}
          rotation={[0, 0.004, -Math.PI / 2]}
          scale={190}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh103.geometry}
            material={materials.Metalg}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh103_1.geometry}
            material={materials["DarkerMetal.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh103_2.geometry}
            material={materials["Emission.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh103_3.geometry}
            material={materials["Metal.006"]}
          />
          <Html>
            {!showInfoAfisDergi && !showInfoAfisKurulus ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  backgroundColor: "#323632a4",
                  width: "140px",
                  textAlign: "center",
                  top: -220,
                  left: -50,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightblue",
                  padding: "4px",
                }}
                onClick={handleGoToDaire3}
              >
                Press and Public Relations Consultancy
              </div>
            ) : (
              ""
            )}
          </Html>
        </group>
        <group
          position={[-4021.948, -1034.457, 1371.181]}
          rotation={[0, -1.571, 0]}
          scale={-199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh131.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh131_1.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh131_2.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh131_3.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh131_4.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh131_5.geometry}
            material={materials["Material.029"]}
          />
        </group>
        <group
          position={[4099.195, -1034.457, 1230.633]}
          rotation={[0, -1.571, 0]}
          scale={-199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh137.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh137_1.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh137_2.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh137_3.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh137_4.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh137_5.geometry}
            material={materials["Material.029"]}
          />
        </group>
        <group
          position={[1141.433, -1034.457, 541.775]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={-199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh143.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh143_1.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh143_2.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh143_3.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh143_4.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh143_5.geometry}
            material={materials["Material.029"]}
          />
        </group>
        <group
          position={[-1875.728, -1034.457, 540.575]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={-199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh149.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh149_1.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh149_2.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh149_3.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh149_4.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh149_5.geometry}
            material={materials["Material.029"]}
          />
        </group>
        <group
          position={[785.263, -1034.457, 1627.626]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={-199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh155.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh155_1.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh155_2.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh155_3.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh155_4.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh155_5.geometry}
            material={materials["Material.029"]}
          />
        </group>
        <group
          position={[2925.006, -1034.457, 1627.627]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={-199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh161.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh161_1.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh161_2.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh161_3.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh161_4.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh161_5.geometry}
            material={materials["Material.029"]}
          />
        </group>
        <group
          position={[-2842.485, -1034.457, 1627.626]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={-199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh167.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh167_1.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh167_2.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh167_3.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh167_4.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh167_5.geometry}
            material={materials["Material.029"]}
          />
        </group>
        <group
          position={[-2135.949, -1034.457, 1627.626]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={-199.653}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh169.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh169_1.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh169_2.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh169_3.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh169_4.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh169_5.geometry}
            material={materials["Material.029"]}
          />
        </group>
        <group
          position={[-4020.082, -1031.828, 1009.746]}
          rotation={[0, 0, -Math.PI]}
          scale={-25.257}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh126.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh126_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh126_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh126_3.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh126_4.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[4101.062, -1031.828, 869.197]}
          rotation={[0, 0, -Math.PI]}
          scale={-25.257}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh132.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh132_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh132_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh132_3.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh132_4.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[1502.868, -1031.828, 543.641]}
          rotation={[Math.PI, -1.571, 0]}
          scale={-25.257}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh138.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh138_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh138_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh138_3.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh138_4.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-1514.292, -1031.828, 542.441]}
          rotation={[Math.PI, -1.571, 0]}
          scale={-25.257}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh144.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh144_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh144_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh144_3.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh144_4.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[1146.699, -1031.828, 1650.529]}
          rotation={[Math.PI, -1.571, 0]}
          scale={-25.257}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh150.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh150_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh150_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh150_3.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh150_4.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[3286.441, -1031.828, 1629.494]}
          rotation={[Math.PI, -1.571, 0]}
          scale={-25.257}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh156.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh156_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh156_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh156_3.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh156_4.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-2481.049, -1031.828, 1629.494]}
          rotation={[Math.PI, -1.571, 0]}
          scale={-25.257}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh162.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh162_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh162_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh162_3.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh162_4.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-1774.514, -1031.828, 1629.494]}
          rotation={[Math.PI, -1.571, 0]}
          scale={-25.257}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh168.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh168_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh168_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh168_3.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh168_4.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-1337.995, -962.632, 1127.439]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[1, 0.38, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh176.geometry}
            material={materials["sehpa1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh176_1.geometry}
            material={materials["sehpa2.001"]}
          />
        </group>
        <group
          position={[-2718.348, -962.632, 644.369]}
          rotation={[0, 1.571, 0]}
          scale={[1, 0.38, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh122.geometry}
            material={materials["sehpa1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh122_1.geometry}
            material={materials["sehpa2.001"]}
          />
        </group>
        <group
          position={[-2733.722, -962.632, 1186.335]}
          rotation={[0, -1.571, 0]}
          scale={[1, 0.38, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh118.geometry}
            material={materials["sehpa1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh118_1.geometry}
            material={materials["sehpa2.001"]}
          />
        </group>
        <group
          position={[3206.8, -962.632, 644.369]}
          rotation={[0, 1.571, 0]}
          scale={[1, 0.38, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh114.geometry}
            material={materials["sehpa1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh114_1.geometry}
            material={materials["sehpa2.001"]}
          />
        </group>
        <group
          position={[3191.426, -962.632, 1186.336]}
          rotation={[0, -1.571, 0]}
          scale={[1, 0.38, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh110.geometry}
            material={materials["sehpa1.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh110_1.geometry}
            material={materials["sehpa2.001"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tavan002.geometry}
          material={materials["alm.002"]}
          position={[-33.071, 9853.379, 515.687]}
          rotation={[0, -1.571, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.thali001.geometry}
          material={materials["thali.001"]}
          position={[-37.486, -1034.261, 1105.603]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.walls002.geometry}
          material={materials["wall.002"]}
          position={[7113.955, 9853.379, -3488.638]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[100, 100, 526.281]}
        />
        <group
          position={[881.412, -535.349, -393.346]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh178.geometry}
            material={materials["zeminyt.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh178_1.geometry}
            material={materials["Ceramic.001"]}
          />
        </group>
        <group
          position={[-1049.212, -535.349, -414.833]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh189.geometry}
            material={materials["zeminyt.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh189_1.geometry}
            material={materials["Ceramic.001"]}
          />
        </group>
      </group>
      <group position={[-5.411, 8.701, -8.63]} scale={0.01}>
        <group
          position={[-451.787, -983.186, -1979.831]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[126.814, 164.823, 164.823]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh003.geometry}
            material={materials["defaut.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh003_1.geometry}
            material={materials.cop_mavi}
          />
        </group>
        <group
          position={[-347.606, -983.186, -1979.831]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[126.814, 164.823, 164.823]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh002.geometry}
            material={materials["03 - Default.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_1.geometry}
            material={materials.cop_mavi}
          />
        </group>
        <group
          position={[-243.259, -983.186, -1979.831]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[126.814, 164.823, 164.823]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={materials["02 - Default.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_1.geometry}
            material={materials.cop_mavi}
          />
        </group>
        <group
          position={[-138.684, -983.186, -1979.831]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[126.814, 164.823, 164.823]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials["01 - Default.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials.cop_mavi}
          />
        </group>
      </group>
      <group position={[-5.411, 8.701, -8.63]} scale={0.01}>
        <group
          position={[-65.333, 200.552, -2030.163]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.8, 0.8, 0.8]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh005.geometry}
            material={materials["afis_ataturk.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh005_1.geometry}
            material={materials.afisk}
          />
        </group>
      </group>
      <group position={[-5.411, 8.701, -8.63]} scale={0.01}>
        <group
          position={[714.166, -561.893, -2032.564]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.469}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh007.geometry}
            material={materials.afis4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh007_1.geometry}
            material={materials["afisk.003"]}
          />
        </group>
        <group
          position={[-828.349, -561.893, -2032.429]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.469}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh008.geometry}
            material={materials.afis3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh008_1.geometry}
            material={materials["afisk.003"]}
          />
        </group>
      </group>
      <group position={[-5.411, 8.701, -8.63]} scale={0.01}>
        <group
          position={[-1593.644, -604.458, 454.373]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.469}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh010.geometry}
            material={materials.era}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh010_1.geometry}
            material={materials["afisk.005"]}
          />
          <Html>
            <div
              className={`information-button ${
                showInfoAfisKurulus ? "clicked" : ""
              }`}
              style={{ left: "60px", top: "-170px" }}
              onClick={handleButtonClickKurulus}
              onMouseEnter={handleMouseEnterKurulus}
              onMouseLeave={handleMouseLeaveKurulus}
            >
              <img src={informationBtn} alt="Information" />
            </div>

            <div>
              {hoveredKurulus ? (
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "#323632a4",
                    width: "180px",
                    textAlign: "center",
                    top: -150,
                    left: 0,
                    fontSize: "14pt",
                    cursor: "pointer",
                    color: "lightblue",
                    padding: "4px",
                  }}
                >
                  Establishment Law of the Institution Signed by Gazi Mustafa
                  Kemal ATATÜRK{" "}
                </div>
              ) : (
                ""
              )}
            </div>
          </Html>
        </group>
        <group
          position={[1421.788, -604.458, 454.282]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.469}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh009.geometry}
            material={materials.e2a}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh009_1.geometry}
            material={materials["afisk.004"]}
          />

          <Html>
            <div
              className={`information-button ${
                showInfoAfisDergi ? "clicked" : ""
              }`}
              style={{ left: "-120px", top: "-170px" }}
              onClick={handleButtonClickDergi}
              onMouseEnter={handleMouseEnterDergi}
              onMouseLeave={handleMouseLeaveDergi}
            >
              <img src={informationBtn} alt="Information" />
            </div>

            <div>
              {hoveredDergi ? (
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "#323632a4",
                    width: "180px",
                    textAlign: "center",
                    top: -150,
                    left: -180,
                    fontSize: "14pt",
                    cursor: "pointer",
                    color: "lightblue",
                    padding: "4px",
                  }}
                >
                  Cover of the 1927 Population Census Themed Weekly Magazine
                  published by the TurkStat{" "}
                </div>
              ) : (
                ""
              )}
            </div>
          </Html>
        </group>
      </group>
    </group>
  );
};

const TextPopup = ({ src_image, onClose }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for transparency
          zIndex: 999, // Make sure the overlay is on top
        }}
        onClick={onClose} // Close the popup when clicking on the overlay
      ></div>

      <div className="imagePopup">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-2rem",
          }}
        >
          <button onClick={onClose}>X</button>
        </div>

        <img
          src={src_image}
          alt=""
          style={{
            height: "840px",
            position: "absolute",
            borderRadius: "24px",
            boxShadow: "0 12px 18px rgba(0, 0, 0, 0.6)",
          }}
        />
      </div>
    </>
  );
};

const TuikIcLoby = () => {
  const isDaire1Triggered = useZustandStore((state) => state.isDaire1Triggered);
  const isDaire2Triggered = useZustandStore((state) => state.isDaire2Triggered);
  const isDaire3Triggered = useZustandStore((state) => state.isDaire3Triggered);
  const isDaire4Triggered = useZustandStore((state) => state.isDaire4Triggered);
  const isDaire5Triggered = useZustandStore((state) => state.isDaire5Triggered);

  const setIsDaire1Triggered = useZustandStore(
    (state) => state.setIsDaire1Triggered
  );
  const setIsDaire2Triggered = useZustandStore(
    (state) => state.setIsDaire2Triggered
  );
  const setIsDaire3Triggered = useZustandStore(
    (state) => state.setIsDaire3Triggered
  );
  const setIsDaire4Triggered = useZustandStore(
    (state) => state.setIsDaire4Triggered
  );

  const setIsDaire5Triggered = useZustandStore(
    (state) => state.setIsDaire5Triggered
  );

  const isTuikGateTriggered = useZustandStore(
    (state) => state.isTuikGateTriggered
  );

  const setIsTuikGateTriggered = useZustandStore(
    (state) => state.setIsTuikGateTriggered
  );

  const setIsGeriClickedInTuik = useZustandStore(
    (state) => state.setIsGeriClickedInTuik
  );

  const setIsGeriClickedInSolarSystem = useZustandStore(
    (state) => state.setIsGeriClickedInSolarSystem
  );

  const setIsBilgiIcTriggered = useZustandStore(
    (state) => state.setIsBilgiIcTriggered
  );

  const setIsBilgiGateTriggered = useZustandStore(
    (state) => state.setIsBilgiGateTriggered
  );

  const handleTuikGateTrigger = () => {
    setIsTuikGateTriggered(false);
    setIsGeriClickedInTuik(true);
    setIsGeriClickedInSolarSystem(false);
    setIsBilgiIcTriggered(false);
    setIsBilgiGateTriggered(true);
  };

  const handleDaire1Geri = () => {
    setIsDaire1Triggered(false);
  };
  const handleDaire2Geri = () => {
    setIsDaire2Triggered(false);
  };

  const handleDaire3Geri = () => {
    setIsDaire3Triggered(false);
  };

  const handleDaire4Geri = () => {
    setIsDaire4Triggered(false);
  };

  const handleDaire5Geri = () => {
    setIsDaire5Triggered(false);
  };

  const setShowInfoAfisDergi = useZustandStore(
    (state) => state.setShowInfoAfisDergi
  );

  const showInfoAfisDergi = useZustandStore((state) => state.showInfoAfisDergi);

  const handleInfoDergiClose = () => {
    setShowInfoAfisDergi(false);
  };

  const setShowInfoAfisKurulus = useZustandStore(
    (state) => state.setShowInfoAfisKurulus
  );

  const showInfoAfisKurulus = useZustandStore(
    (state) => state.showInfoAfisKurulus
  );

  const handleInfoKurulusClose = () => {
    setShowInfoAfisKurulus(false);
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(
      !!userAgent.match(
        /android|webos|iphone|ipad|ipod|blackberry|windows phone/i
      )
    );
  }, []);

  return (
    <>
      <button
        className="button i-button"
        onClick={() => {
          // isDaire1Triggered ? handleDairelerGeri() : handleTuikGateTrigger();
          if (isDaire1Triggered) {
            handleDaire1Geri();
          } else if (isDaire2Triggered) {
            handleDaire2Geri();
          } else if (isDaire3Triggered) {
            handleDaire3Geri();
          } else if (isDaire4Triggered) {
            handleDaire4Geri();
          } else if (isDaire5Triggered) {
            handleDaire5Geri();
          } else {
            handleTuikGateTrigger();
          }
        }}
        style={{
          position: "absolute",
          zIndex: 2,
          transform: "scale(0.6)",
          lineHeight: 1.4,
          fontSize: 34,
        }}
      >
        Back
      </button>

      <div
        style={{
          position: "absolute",
          marginTop: "75vh",
          marginLeft: "5vh",
          fontSize: "20px",
          color: "lightblue",
          zIndex: 1,
          textAlign: "left",
          userSelect: "none",
        }}
      ></div>

      <Canvas>
        <Suspense fallback={<LoaderBase />}>
          <Environment
            background={false}
            blur={0.5}
            files="/env/paul_lobe_haus_1k.hdr"
          />

          <ambientLight intensity={0.01} />
          <pointLight intensity={0.5} position={[0, 0, 0]} />
          {/* {isDaire1Triggered ? <TuikIcDaire1 /> : <TuikIcBina />} */}
          {isDaire1Triggered ? (
            <TuikIcDaire1 />
          ) : isDaire2Triggered ? (
            <TuikIcDaire2 />
          ) : isDaire3Triggered ? (
            <TuikIcDaire3 />
          ) : isDaire4Triggered ? (
            <TuikIcDaire4 />
          ) : isDaire5Triggered ? (
            <TuikIcDaire5 />
          ) : (
            <TuikIcBina />
          )}

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            makeDefault
            rotateSpeed={0.6}
            maxPolarAngle={1.5}
            minPolarAngle={1.1}
            minAzimuthAngle={-0.9}
            maxAzimuthAngle={0.9}
            minDistance={25}
            maxDistance={60}
            target={[0, 14, 0]}
          />

          <PerspectiveCamera
            makeDefault
            position={[0, 12, 60]}
            fov={isMobile ? 90 : 65}
            far={10000}
          />

          <EffectComposer disableNormalPass>
            <Bloom mipmapBlur intensity={0.38} luminanceThreshold={0.8} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      {/* {showInfoAfisDergi && (
        <div className="information-text">
          Türkiye İstatistik Kurumu tarafından çıkarılan 1927 Nüfus Sayımı
          Temalı Haftalık Dergi Kapağı
        </div>
      )} */}

      {showInfoAfisDergi && (
        <TextPopup src_image={dergiSrc} onClose={handleInfoDergiClose} />
      )}

      {showInfoAfisKurulus && (
        <TextPopup src_image={kurulusSrc} onClose={handleInfoKurulusClose} />
      )}
    </>
  );
};

export default TuikIcLoby;
