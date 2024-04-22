import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useInput } from "../../hooks/UseInput";
import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

import * as THREE from "three";

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

const directionOffset = ({ forward, backward, left, right }) => {
  var directionOffset = 0; // W
  if (forward) {
    if (left) {
      directionOffset = Math.PI / 4; // w+a
    } else if (right) {
      directionOffset = -Math.PI / 4; // w+d
    }
  } else if (backward) {
    if (left) {
      directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
    } else if (right) {
      directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
    } else {
      directionOffset = Math.PI; // s
    }
  } else if (left) {
    directionOffset = Math.PI / 2; // a
  } else if (right) {
    directionOffset = -Math.PI / 2; // d
  }
  return directionOffset;
};

const Player = (props) => {
  const cinsiyet = props.cinsiyet;
  console.log("gelen cinsiyet Player: ", props.cinsiyet);
  const maxX = 5; // maximum limit for x parameter
  const maxZ = 3; // maximum limit for z parameter
  const maxY = 3; // maximum limit for y parameter
  const minY = 2; // minimum limit for y parameter

  const { forward, backward, left, right, jump, shift } = useInput();

  // const model = useGLTF("./ege.glb");

  const glbPath = cinsiyet === "1" ? "./ege.glb" : "./ece.glb";
  const model = useGLTF(glbPath);

  model.scene.scale.set(1.25, 1.25, 1.25);

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });
  const { actions } = useAnimations(model.animations, model.scene);

  const currentAction = useRef("");
  const controlsRef = useRef("");
  const camera = useThree((state) => state.camera);

  // const updateCameraTarget = (moveX, moveZ) => {
  //   // move camera
  //   camera.position.x += moveX;
  //   camera.position.z += moveZ;
  //   // update camera target
  //   cameraTarget.x = model.scene.position.x;
  //   cameraTarget.y = model.scene.position.y + 1;
  //   cameraTarget.z = model.scene.position.z;
  //   if (controlsRef.current) controlsRef.current.target = cameraTarget;
  // };

  const updateCameraTarget = (moveX, moveZ) => {
    // move camera
    // if (
    //   camera.position.x > !model.scene.position.x &&
    //   camera.position.z > !model.scene.position.z &&
    //   camera.position.x > 10 &&
    //   camera.position.z > 10
    // ) {
    //   camera.position.x += moveX;
    //   camera.position.z += moveZ;
    // }
    camera.position.x += moveX;
    camera.position.z += moveZ;

    // update camera target
    cameraTarget.x = model.scene.position.x;

    cameraTarget.z = model.scene.position.z;
    if (controlsRef.current) controlsRef.current.target = cameraTarget;
  };

  cameraTarget.y = model.scene.position.y + 2;
  useEffect(() => {
    // actions?.walking?.play()
    let action = "";

    if (forward || backward || left || right) {
      action = "walking";
      if (shift) {
        action = "running";
      }
    } else if (jump) {
      action = "jump";
    } else {
      action = "idle";
    }

    if (currentAction.current !== action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, jump, shift]);

  useFrame((state, delta) => {
    if (
      currentAction.current === "running" ||
      currentAction.current === "walking"
    ) {
      // calculate towards camera direction
      let angleYCameraDirection = Math.atan2(
        camera.position.x - model.scene.position.x,
        camera.position.z - model.scene.position.z
      );

      // diagonal movement angle offset
      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right,
      });

      // rotate model
      rotateQuarternion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionOffset
      );
      model.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);

      // calculate direction
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);
      // run/walk velocity
      const velocity = currentAction.current === "running" ? 5 : 2;
      // move model & camera
      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;

      model.scene.position.z += moveZ;
      model.scene.position.x += moveX;

      // // limit x parameter
      // if (model.scene.position.x + moveX > maxX) {
      //   model.scene.position.x = maxX;
      // } else if (model.scene.position.x + moveX < -maxX) {
      //   model.scene.position.x = -maxX;
      // } else {
      //   model.scene.position.x += moveX;
      // }

      // // limit z parameter
      // if (model.scene.position.z + moveZ > maxZ) {
      //   model.scene.position.z = maxZ;
      // } else if (model.scene.position.z + moveZ < -maxZ) {
      //   model.scene.position.z = -maxZ;
      // } else {
      //   model.scene.position.z += moveZ;
      // }
      updateCameraTarget(moveX, moveZ);
    }
  });

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        enablePan={true}
        maxPolarAngle={1.4}
        minPolarAngle={1.1}
        maxZoom={0.5}
      />
      <primitive object={model.scene} position={[0, 0, 0]} />
    </>
  );
};

export default Player;
