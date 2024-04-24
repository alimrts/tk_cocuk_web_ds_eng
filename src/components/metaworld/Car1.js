import React, { useState, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import { MeshBasicMaterial, MeshStandardMaterial, Color } from "three";

import { useFrame } from "@react-three/fiber";

import { useBox } from "@react-three/cannon";

export function Car1(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/car1anim.glb");
  const { actions } = useAnimations(animations, group);

  const [obstaclePosition, setObstaclePosition] = useState([-25, 0, 42.5]);

  const [speed, setSpeed] = useState(0.1);

  const [rotationOfWheels, setRotationOfWheels] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationOfWheels(
        (prevRotationOfWheels) => prevRotationOfWheels + speed
      );
    }, 30); // Adjust interval for smoother animation if needed, 16ms is roughly 60 frames per second

    return () => clearInterval(interval);
  }, [speed]); // Empty dependency array to run the effect only once

  useEffect(() => {
    actions.car1anim.play();
    actions.car1anim.setDuration(40);
  }, [actions]); // Empty dependency array to run the effect only once

  useFrame(() => {
    const carPosition = group.current.position;
    // console.log("car position: ", carPosition);
    setObstaclePosition([carPosition.x + 1, carPosition.y, carPosition.z + 3]);
  });

  const Obstacle = ({ args, onCollide, ...props }) => {
    const [ref] = useBox(
      () => ({
        args,
        type: "Static",
        mass: 10,
        isTrigger: false, //true for not to stop character
        onCollide,
        ...props,
      }),
      useRef()
    );

    return (
      <mesh ref={ref}>
        {/* <boxGeometry args={[...args]} />
        <meshStandardMaterial color="red" wireframe /> */}
      </mesh>
    );
  };

  const Trigger = ({ args, onCollide, ...props }) => {
    const [ref] = useBox(
      () => ({
        args,
        type: "Static",
        mass: 5,
        isTrigger: false, //true for not to stop character
        onCollide,
        ...props,
      }),
      useRef()
    );

    return (
      <mesh ref={ref}>
        <boxGeometry args={[...args]} />
        <meshStandardMaterial color="red" wireframe />
      </mesh>
    );
  };

  const handleContinue = () => {
    actions.car1anim.setDuration(50000);
    console.log("Collision event on car1");
    setSpeed(0);
  };

  const handleStop = () => {
    actions.car1anim.setDuration(100);
    console.log("Collision trigger on car1");
    setSpeed(0.1);
  };

  return (
    <>
      <group {...props} dispose={null}>
        <group name="Scene">
          <group
            name="car1"
            ref={group}
            position={[-25.866, 1.091, 39.512]}
            scale={0.01}
          >
            <mesh
              name="car1base"
              castShadow
              receiveShadow
              geometry={nodes.car1base.geometry}
              material={materials["Material #580"]}
              // material-color={"#1E56ff"}
              position={[0, -109.066, 0]}
              rotation={[0, 1.571, 0]}
            />
            <mesh
              name="cw1"
              castShadow
              receiveShadow
              geometry={nodes.cw1.geometry}
              material={materials["Material #580"]}
              position={[224.313, -68.68, 107.008]}
              // rotation={[Math.PI / 2, 0.219, -Math.PI / 2]}
              rotation={[-Math.PI / 2, rotationOfWheels, -Math.PI / 2]}
            />
            <mesh
              name="cw2"
              castShadow
              receiveShadow
              geometry={nodes.cw2.geometry}
              material={materials["Material #580"]}
              position={[224.313, -68.68, -106.961]}
              // rotation={[Math.PI / 2, 0.219, -Math.PI / 2]}
              rotation={[-Math.PI / 2, rotationOfWheels, -Math.PI / 2]}
            />
            <mesh
              name="cw3"
              castShadow
              receiveShadow
              geometry={nodes.cw3.geometry}
              material={materials["Material #580"]}
              position={[-214.52, -68.68, -106.961]}
              // rotation={[Math.PI / 2, 0.219, -Math.PI / 2]}
              rotation={[-Math.PI / 2, rotationOfWheels, -Math.PI / 2]}
            />
            <mesh
              name="cw4"
              castShadow
              receiveShadow
              geometry={nodes.cw4.geometry}
              material={materials["Material #580"]}
              position={[-214.52, -68.68, 107.008]}
              // rotation={[Math.PI / 2, 0.219, -Math.PI / 2]}
              rotation={[-Math.PI / 2, rotationOfWheels, -Math.PI / 2]}
            />
          </group>
        </group>
      </group>

      {/* Render the obstacle */}
      {/* <Obstacle
        args={[6, 4, 9]}
        rotation={[0, 1.57, 0]}
        position={obstaclePosition}
        onCollide={(e) => {
          // handleContinue();
        }}
      /> */}

      <Obstacle
        args={[6, 4, 6]}
        rotation={[0, 0.78, 0]}
        position={obstaclePosition}
        onCollide={(e) => {
          // handleContinue();
        }}
      />

      {/* <Trigger
        args={[0.2, 4.1, 12]}
        rotation={[0, 1.57, 0]}
        position={[
          obstaclePosition[0],
          obstaclePosition[1],
          obstaclePosition[2] + 4,
        ]}
        material={"ground"}
        onCollide={(e) => {
          console.log("Collision trigger on car1", e);
          handleStop();
        }}
      /> */}

      {/* <Trigger
        args={[0.2, 4.1, 12]}
        rotation={[0, 1.57, 0]}
        position={[
          obstaclePosition[0],
          obstaclePosition[1],
          obstaclePosition[2] - 4,
        ]}
        // position={[positionX - 20, 0, 46.5]}

        onCollide={(e) => {
          console.log("Collision trigger on car1", e);
          handleStop();
        }}
      /> */}

      {/* 

      <Trigger
        args={[0.2, 4.1, 8.1]}
        rotation={[0, 3.14, 0]}
        position={[
          obstaclePosition[0] - 7,
          obstaclePosition[1],
          obstaclePosition[2],
        ]}
        material={"ground"}
        onCollide={(e) => {
          console.log("Collision trigger on car1", e);
          handleStop();
        }}
      />

      <Trigger
        args={[0.2, 4.1, 8.1]}
        rotation={[0, 3.14, 0]}
        position={[
          obstaclePosition[0] + 7,
          obstaclePosition[1],
          obstaclePosition[2],
        ]}
        material={"ground"}
        onCollide={(e) => {
          console.log("Collision trigger on car1", e);
          handleStop();
        }}
      /> */}
    </>
  );
}

// useGLTF.preload("./models/car1anim.glb");
