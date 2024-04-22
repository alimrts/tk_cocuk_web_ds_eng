import { useMemo, useRef, useEffect } from "react";
import { Vector3, Euler, Quaternion, Matrix4, AnimationMixer } from "three";
import Ece from "./Ece";
import Ege from "./Ege";
import { useCompoundBody } from "@react-three/cannon";
import useKeyboard from "./useKeyboard";
import { useFrame } from "@react-three/fiber";
import { Vec3 } from "cannon-es";
import useFollowCam from "./useFollowCam";
import useZustandStore from "../../zustandStore";

export default function PlayerCollider(props) {
  const isAnyGameOpened = useZustandStore((state) => state.isAnyGameOpened);

  const cinsiyet = props.cinsiyet;

  const { pivot } = useFollowCam();
  const canJump = useRef(false);
  const group = useRef();
  const velocity = useMemo(() => new Vector3(), []);
  const inputVelocity = useMemo(() => new Vector3(), []);
  const euler = useMemo(() => new Euler(), []);
  const quat = useMemo(() => new Quaternion(), []);
  const targetQuaternion = useMemo(() => new Quaternion(), []);
  const worldPosition = useMemo(() => new Vector3(), []);
  const contactNormal = useMemo(() => new Vec3(0, 0, 0), []);
  const upAxis = useMemo(() => new Vec3(0, -1, 0), []);

  const mixer = useMemo(() => new AnimationMixer(), []);
  const actions = {};

  const keyboard = useKeyboard();

  const isLeftButtonPressed = useZustandStore(
    (state) => state.isLeftButtonPressed
  );

  const isRightButtonPressed = useZustandStore(
    (state) => state.isRightButtonPressed
  );

  const isUpButtonPressed = useZustandStore((state) => state.isUpButtonPressed);

  const isDownButtonPressed = useZustandStore(
    (state) => state.isDownButtonPressed
  );

  const [ref, body] = useCompoundBody(
    () => ({
      mass: 1,
      shapes: [
        { args: [0.5], position: [0, 0.5, 0], type: "Sphere" },
        { args: [0.5], position: [0, 1.5, 0], type: "Sphere" },
      ],
      onCollide: (e) => {
        if (e.contact.bi === e.body) {
          e.contact.ni.negate(contactNormal);
        } else {
          contactNormal.set(...e.contact.ni);
        }
        if (contactNormal.dot(upAxis) > 0.5) {
          if (!canJump.current) {
            actions["jump"].fadeOut(0.1);
            actions["idle"].stop();
            actions["walk"].reset().fadeIn(0.1).play();
            canJump.current = true;
          }
        }
      },
      ...props,
    }),
    useRef()
  );

  useFrame((_, delta) => {
    body.angularFactor.set(0, 0, 0);

    ref.current.getWorldPosition(worldPosition);
    const distance = worldPosition.distanceTo(group.current.position);

    if (canJump.current) {
      // walking
      mixer.update(delta * distance * 3);
    } else {
      // in the air
      mixer.update(delta);
    }

    const rotationMatrix = new Matrix4();

    rotationMatrix.lookAt(
      worldPosition,
      group.current.position,
      group.current.up
    );

    targetQuaternion.setFromRotationMatrix(rotationMatrix);

    if (!group.current.quaternion.equals(targetQuaternion)) {
      targetQuaternion.z = 0;
      targetQuaternion.x = 0;
      targetQuaternion.normalize();
      group.current.quaternion.rotateTowards(targetQuaternion, delta * 10);
    }

    // if (!document.pointerLockElement)
    if (!isAnyGameOpened) {
      inputVelocity.set(0, 0, 0);

      if (keyboard["KeyW"] || keyboard["ArrowUp"] || isUpButtonPressed) {
        inputVelocity.z = -10 * delta;
        // console.log("delta: ", delta);
        // console.log("group.current.position: ", group.current.position);
      }
      if (keyboard["KeyS"] || keyboard["ArrowDown"] || isDownButtonPressed) {
        inputVelocity.z = 10 * delta;
      }
      if (keyboard["KeyA"] || keyboard["ArrowLeft"] || isLeftButtonPressed) {
        inputVelocity.x = -10 * delta;
      }
      if (keyboard["KeyD"] || keyboard["ArrowRight"] || isRightButtonPressed) {
        inputVelocity.x = 10 * delta;
      }

      /////
      if (keyboard["KeyW"] && keyboard["KeyA"]) {
        inputVelocity.z = (-10 * delta) / 1.5;
        inputVelocity.x = (-10 * delta) / 1.5;
      }
      /////
      /////
      if (keyboard["KeyW"] && keyboard["KeyD"]) {
        inputVelocity.z = (-10 * delta) / 1.5;
        inputVelocity.x = (10 * delta) / 1.5;
      }
      /////
      /////
      if (keyboard["KeyS"] && keyboard["KeyA"]) {
        inputVelocity.z = (10 * delta) / 1.5;
        inputVelocity.x = (-10 * delta) / 1.5;
      }
      /////
      /////
      if (keyboard["KeyS"] && keyboard["KeyD"]) {
        inputVelocity.z = (10 * delta) / 1.5;
        inputVelocity.x = (10 * delta) / 1.5;
      }
      /////
      //////////////////
      /////
      if (keyboard["ArrowUp"] && keyboard["ArrowLeft"]) {
        inputVelocity.z = (-10 * delta) / 1.5;
        inputVelocity.x = (-10 * delta) / 1.5;
      }
      /////
      /////
      if (keyboard["ArrowUp"] && keyboard["ArrowRight"]) {
        inputVelocity.z = (-10 * delta) / 1.5;
        inputVelocity.x = (10 * delta) / 1.5;
      }
      /////
      /////
      if (keyboard["ArrowDown"] && keyboard["ArrowLeft"]) {
        inputVelocity.z = (10 * delta) / 1.5;
        inputVelocity.x = (-10 * delta) / 1.5;
      }
      /////
      /////
      if (keyboard["ArrowDown"] && keyboard["ArrowRight"]) {
        inputVelocity.z = (10 * delta) / 1.5;
        inputVelocity.x = (10 * delta) / 1.5;
      }
      /////
      //////////////////

      if (keyboard["Space"]) {
        if (canJump.current) {
          canJump.current = false;
          inputVelocity.y = 9;
          actions["walk"].fadeOut(0.1).stop();
          actions["jump"].reset().fadeIn(0.1).play();
        }
      }

      euler.y = pivot.rotation.y;
      euler.order = "XYZ";
      quat.setFromEuler(euler);
      inputVelocity.applyQuaternion(quat);
      velocity.set(inputVelocity.x, inputVelocity.y, inputVelocity.z);

      body.applyImpulse([velocity.x, velocity.y, velocity.z], [0, 0, 0]);
    }

    group.current.position.lerp(worldPosition, 0.1);

    pivot.position.lerp(worldPosition, 0.2);
  });

  return (
    <>
      <group ref={group}>
        {cinsiyet === "1" ? (
          <Ege mixer={mixer} actions={actions} />
        ) : (
          <Ece mixer={mixer} actions={actions} />
        )}
      </group>
    </>
  );
}
