import { Debug, useContactMaterial, useBox } from "@react-three/cannon";
import { useState, useRef, useEffect } from "react";
import useZustandStore from "../../zustandStore";
import Floor from "./Floor";
import Obstacles from "./Obstacles";
import Player from "./Player";
import { CityScene1 } from "./CityScene1";
import { Car1 } from "./Car1";

import { Dome } from "./Dome";

import { useControls } from "leva";

import { TuikBinasi } from "./TuikBinasi";
import { BayrakTr } from "./BayrakTr";
import { BayrakTuik } from "./BayrakTuik";
import { GezegenlerBinasi } from "./GezegenlerBinasi";
import { DemoScene, KontrolOdasi } from "./KontrolOdasi";
import BirdsGroups from "./BirdsGroups";

function ToggleDebug({ children }) {
  const debugRendererVisible = useControls("Debug Renderer", {
    visible: false,
  });

  return (
    <>
      {debugRendererVisible.visible ? (
        <Debug>{children}</Debug>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

function ObstacleTriggerBilgiIc({ args, onCollide, position, ...props }) {
  const [ref] = useBox(
    () => ({
      args,
      type: "Static",
      isTrigger: true,
      onCollide,
      mass: 10,
      position: position,
      ...props,
    }),
    useRef()
  );
  return (
    <mesh ref={ref}>
      {/* on/off collision boxes */}
      {/* <boxGeometry args={[...args]} />
      <meshStandardMaterial wireframe color="red" /> */}
    </mesh>
  );
}

function ObstacleTriggerBilgi({ args, onCollide, position, ...props }) {
  const [ref] = useBox(
    () => ({
      args,
      type: "Static",
      isTrigger: true,
      onCollide,
      mass: 10,
      position: position,
      ...props,
    }),
    useRef()
  );
  return (
    <mesh ref={ref}>
      {/* on/off collision boxes */}
      {/* <boxGeometry args={[...args]} />
      <meshStandardMaterial wireframe color="red" /> */}
    </mesh>
  );
}

function ObstacleTriggerGunes({ args, onCollide, position, ...props }) {
  const [ref] = useBox(
    () => ({
      args,
      type: "Static",
      isTrigger: false,
      onCollide,
      mass: 10,
      position: position,
      ...props,
    }),
    useRef()
  );
  return (
    <mesh ref={ref}>
      {/* on/off collision boxes */}
      {/* <boxGeometry args={[...args]} />
      <meshStandardMaterial wireframe color="red" /> */}
    </mesh>
  );
}

function ObstacleTriggerTuik({ args, onCollide, position, ...props }) {
  const [ref] = useBox(
    () => ({
      args,
      type: "Static",
      isTrigger: false,
      onCollide,
      mass: 10,
      position: position,
      ...props,
    }),
    useRef()
  );
  return (
    <mesh ref={ref}>
      {/* on/off collision boxes */}
      {/* <boxGeometry args={[...args]} />
      <meshStandardMaterial wireframe color="red" /> */}
    </mesh>
  );
}

export default function Game(props) {
  const cinsiyet = props.cinsiyet;
  // console.log("cinsiyet in game: " + cinsiyet);

  useContactMaterial("ground", "slippery", {
    friction: 0,
    restitution: 0.3,
    contactEquationStiffness: 1e8,
    contactEquationRelaxation: 3,
  });

  ///

  const playerPosition = useZustandStore((state) => state.playerPosition);

  const isBilgiIcTriggered = useZustandStore(
    (state) => state.isBilgiIcTriggered
  );
  const setIsBilgiIcTriggered = useZustandStore(
    (state) => state.setIsBilgiIcTriggered
  );

  const handleBilgiIcTrigger = () => {
    setIsBilgiIcTriggered(true);
    setIsBilgiGateTriggered(false);

    // console.log("bilgi ic: " + isBilgiIcTriggered);
  };

  const isBilgiGateTriggered = useZustandStore(
    (state) => state.isBilgiGateTriggered
  );
  const setIsBilgiGateTriggered = useZustandStore(
    (state) => state.setIsBilgiGateTriggered
  );

  const handleBilgiGateTrigger = () => {
    setIsBilgiGateTriggered(true);
    setIsBilgiIcTriggered(false);
    // console.log("bilgi gate: " + isBilgiGateTriggered);
  };
  ///

  const isGunesGateTriggered = useZustandStore(
    (state) => state.isGunesGateTriggered
  );
  const setIsGunesGateTriggered = useZustandStore(
    (state) => state.setIsGunesGateTriggered
  );

  const handleGunesGateTrigger = () => {
    setIsGunesGateTriggered(true);
    console.log("gunes gate: " + isGunesGateTriggered);
  };

  const isTuikGateTriggered = useZustandStore(
    (state) => state.isTuikGateTriggered
  );
  const setIsTuikGateTriggered = useZustandStore(
    (state) => state.setIsTuikGateTriggered
  );
  const handleTuikGateTrigger = () => {
    setIsTuikGateTriggered(true);
    // console.log("tuiks gate: " + isTuikGateTriggered);
  };

  const isGeriClickedInSolarSystem = useZustandStore(
    (state) => state.isGeriClickedInSolarSystem
  );
  const isGeriClickedInTuik = useZustandStore(
    (state) => state.isGeriClickedInTuik
  );

  const setIsGeriClickedInTuik = useZustandStore(
    (state) => state.setIsGeriClickedInTuik
  );
  const setIsGeriClickedInSolarSystem = useZustandStore(
    (state) => state.setIsGeriClickedInSolarSystem
  );

  useEffect(() => {
    setIsGeriClickedInTuik(false);
    setIsGeriClickedInSolarSystem(false);
    return () => {
      handleBilgiIcTrigger();
    };
  }, []);

  return (
    <>
      {/* <ToggleDebug>*/}
      <Floor
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.0295, 0]}
        material={"ground"}
      />
      <Obstacles />
      <CityScene1
        position={[0.5, -0.05, 3]}
        // rotation={[0, 3.1, 0]}
        scale={[1, 1, 1]}
      />
      <Car1
        position={[0.5, -0.05, 3]}
        scale={[1, 1, 1]}
        // rotation={[0, 1.57, 0]}
      />

      <BirdsGroups />

      {/* <Car1
        // position={[0.5, -0.05, 3]}
        scale={[1, 1, 1]}
        // rotation={[0, 1.57, 0]}
      /> */}
      <KontrolOdasi
        position={[0.5, 0.15, 3]}
        rotation={[0, 3.1, 0]}
        scale={[1.2, 1.2, 1.2]}
      />
      <Dome scale={[0.885, 0.885, 0.885]} />
      <TuikBinasi scale={[0.885, 0.885, 0.885]} />
      <BayrakTr scale={[1, 1, 1]} />
      <BayrakTuik scale={[1, 1, 1]} />

      <GezegenlerBinasi scale={[0.7, 0.7, 0.7]} position={[0.5, -0.75, 23]} />

      <ObstacleTriggerBilgiIc
        position={[0, 0, 11]}
        args={[0.1, 4, 9]}
        rotation={[0, 1.6, 0]}
        material={"ground"}
        onCollide={(e) => {
          // console.log("Collision event on BoxTrigger Bilgi Ic", e);
          handleBilgiIcTrigger();
        }}
      />

      <ObstacleTriggerBilgi
        position={[0, 0, 13.2]}
        args={[0.1, 4, 8]}
        rotation={[0, 1.6, 0]}
        material={"ground"}
        onCollide={(e) => {
          // console.log("Collision event on BoxTrigger Bilgi", e);
          handleBilgiGateTrigger();
        }}
      />

      <ObstacleTriggerGunes
        position={[0.5, 0, 65.8]}
        args={[4.6, 4, 4.6]}
        rotation={[0, 1.6, 0]}
        material={"ground"}
        onCollide={(e) => {
          // console.log("Collision event on BoxTrigger gunes", e);
          handleGunesGateTrigger();
        }}
      />

      <ObstacleTriggerTuik
        position={[-59, 0, 30]}
        args={[8, 5, 22]}
        rotation={[0, 0, 0]}
        material={"ground"}
        onCollide={(e) => {
          // console.log("Collision event on BoxTrigger tuik", e);
          handleTuikGateTrigger();
        }}
      />

      <Player
        position={
          isGeriClickedInSolarSystem
            ? [0.5, 0, 60.5]
            : isGeriClickedInTuik
            ? [-50.5, 0, 28.7]
            : playerPosition
        }
        linearDamping={0.95}
        material={"slippery"}
        cinsiyet={cinsiyet}
      />

      {/* </ToggleDebug> */}
    </>
  );
}
