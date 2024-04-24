import React, { useState, useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import { useBox } from "@react-three/cannon";

export function Car1(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/car1.glb");
  const { actions } = useAnimations(animations, group);

  const isObstacleMeshesRendered = false;

  const [positionX, setPositionX] = useState(0);

  const [speed, setSpeed] = useState(0.1);

  const [rotationOfWheels, setRotationOfWheels] = useState(0);

  const [isCar1Triggered, setIsCar1Triggered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionX((prevPositionX) => (prevPositionX + speed) % 100);

      setRotationOfWheels(
        (prevRotationOfWheels) => prevRotationOfWheels + speed
      );
    }, 16); // Adjust interval for smoother animation if needed, 16ms is roughly 60 frames per second

    return () => clearInterval(interval);
  }, [speed]); // Empty dependency array to run the effect only once

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
        {!isObstacleMeshesRendered ? null : (
          <>
            <boxGeometry args={[...args]} />
            <meshStandardMaterial color="red" wireframe />
          </>
        )}
      </mesh>
    );
  };

  const Trigger = ({ args, onCollide, ...props }) => {
    const [ref] = useBox(
      () => ({
        args,
        type: "Static",
        mass: 10,
        isTrigger: true, //true for not to stop character
        onCollide,
        ...props,
      }),
      useRef()
    );

    return (
      <mesh ref={ref}>
        {!isObstacleMeshesRendered ? null : (
          <>
            <boxGeometry args={[...args]} />
            <meshStandardMaterial color="red" wireframe />
          </>
        )}
      </mesh>
    );
  };

  const handleCar1Trigger = () => {
    setIsCar1Triggered(true);
    setSpeed(0);
    console.log("isCar1Triggered: " + isCar1Triggered);
  };

  const handleCar1TriggerFirst = () => {
    setIsCar1Triggered(false);
    setSpeed(0.1);
    console.log("isCar1Triggeredfirst: " + isCar1Triggered);
  };

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="car1" position={[0, 1.091, positionX]} scale={0.01}>
            <group>
              <mesh
                name="car1base"
                castShadow
                receiveShadow
                geometry={nodes.car1base.geometry}
                material={materials["COLOR.001"]}
                position={[0, -109.108, 0]}
              />
            </group>
            <mesh
              name="cw1"
              castShadow
              receiveShadow
              geometry={nodes.cw1.geometry}
              material={materials["COLOR.001"]}
              position={[-107.008, -68.722, 225.015]}
              rotation={[rotationOfWheels, 0, 0]}
            />
            <mesh
              name="cw2"
              castShadow
              receiveShadow
              geometry={nodes.cw2.geometry}
              material={materials["COLOR.001"]}
              position={[106.961, -68.722, 225.015]}
              rotation={[rotationOfWheels, 0, 0]}
            />
            <mesh
              name="cw3"
              castShadow
              receiveShadow
              geometry={nodes.cw3.geometry}
              material={materials["COLOR.001"]}
              position={[106.961, -68.722, -213.818]}
              rotation={[rotationOfWheels, 0, 0]}
            />
            <mesh
              name="cw4"
              castShadow
              receiveShadow
              geometry={nodes.cw4.geometry}
              material={materials["COLOR.001"]}
              position={[-107.008, -68.722, -213.818]}
              rotation={[rotationOfWheels, 0, 0]}
            />
          </group>
        </group>
      </group>

      <Obstacle
        args={[5, 4, 8]}
        rotation={[0, 1.57, 0]}
        position={[positionX - 20, 0, 42.5]}
        material={"ground"}
        onCollide={(e) => {
          console.log("Collision event on car1", e);
          handleCar1Trigger();
        }}
      />

      <Trigger
        args={[0.1, 4.1, 8.1]}
        rotation={[0, 1.57, 0]}
        position={[positionX - 20, 0, 38.5]}
        material={"ground"}
        onCollide={(e) => {
          console.log("Collision trigger on car1", e);
          handleCar1TriggerFirst();
        }}
      />

      <Trigger
        args={[0.1, 4.1, 8.1]}
        rotation={[0, 1.57, 0]}
        position={[positionX - 20, 0, 46.5]}
        material={"ground"}
        onCollide={(e) => {
          console.log("Collision trigger on car1", e);
          handleCar1TriggerFirst();
        }}
      />

      <Trigger
        args={[0.1, 4.1, 8.1]}
        rotation={[0, 3.14, 0]}
        position={[positionX - 14.5, 0, 42.5]}
        material={"ground"}
        onCollide={(e) => {
          console.log("Collision trigger on car1", e);
          handleCar1TriggerFirst();
        }}
      />

      <Trigger
        args={[0.1, 4.1, 8.1]}
        rotation={[0, 3.14, 0]}
        position={[positionX - 25.5, 0, 42.5]}
        material={"ground"}
        onCollide={(e) => {
          console.log("Collision trigger on car1", e);
          handleCar1TriggerFirst();
        }}
      />
    </>
  );
}

// useGLTF.preload("./models/car1.glb");
