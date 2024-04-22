import React from "react";
import { useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import { Color } from "three";
import useZustandStore from "../../zustandStore";

import textureImage from "../../img/metaverse_images/gunes_sistemi_eng.png";

export function GezegenlerBinasi(props) {
  const { nodes, materials } = useGLTF("/models/gezegenler_binasi.glb");

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(textureImage);
  const defaultColor = new Color("#FFffff");

  const isBilgiGateTriggered = useZustandStore(
    (state) => state.isBilgiGateTriggered
  );

  const setIsGunesGateTriggered = useZustandStore(
    (state) => state.setIsGunesGateTriggered
  );

  const handleGoToGunes = () => {
    setIsGunesGateTriggered(true);
  };

  // useEffect(() => {
  //   // ComponentDidMount - Set up any subscriptions or initializations here
  //   // ComponentWillUnmount - Cleanup and reset isGunesGateTriggered to false
  // }, [isBilgiGateTriggered]);

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Sphere001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials["gunes.001"]}
          position={[-0.268, 12.066, 77.031]}
          scale={0.01}
        />
        <mesh
          name="Sphere002"
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials["mars.001"]}
          position={[-14.54, 20.661, 68.616]}
          scale={0.01}
        />
        <mesh
          name="base"
          castShadow
          receiveShadow
          geometry={nodes.base.geometry}
          material={materials["Poles.001"]}
          position={[0.288, 25.59, 76.413]}
          scale={0.01}
        />
        <mesh
          name="Sphere006"
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={materials["mercury.001"]}
          position={[13.107, 35.511, 85.567]}
          scale={0.01}
        />
        <mesh
          name="Sphere009"
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={materials["neptune.001"]}
          position={[-0.706, 28.059, 76.959]}
          scale={0.01}
        />
        <mesh
          name="Sphere007"
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials["jupiter.001"]}
          position={[-13.909, 35.511, 84.695]}
          scale={0.01}
        />
        <mesh
          name="Sphere004"
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials["saturn.001"]}
          position={[-0.717, 43.069, 76.969]}
          rotation={[0, 0, -0.289]}
          scale={0.01}
        />
        <mesh
          name="Sphere005"
          castShadow
          receiveShadow
          geometry={nodes.Sphere005.geometry}
          material={materials["uranus.001"]}
          position={[12.549, 20.438, 69.331]}
          scale={0.01}
        />
        <mesh
          name="Sphere008"
          castShadow
          receiveShadow
          geometry={nodes.Sphere008.geometry}
          material={materials["venus.001"]}
          position={[-0.095, 20.483, 93.322]}
          scale={0.01}
        />
        <mesh
          name="Sphere003"
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={materials["dunya.001"]}
          position={[-1.269, 35.5, 60.711]}
          rotation={[1.977, 0.611, Math.PI]}
          scale={0.01}
        />
        <mesh
          name="saturn_ring"
          castShadow
          receiveShadow
          geometry={nodes.saturn_ring.geometry}
          material={materials["saturn_halka.001"]}
          position={[-0.717, 43.069, 76.969]}
          rotation={[0, 0, -0.262]}
          scale={0.018}
        />
        <mesh
          name="gezegenler_tabela"
          castShadow
          receiveShadow
          geometry={nodes.gezegenler_tabela.geometry}
          material={materials["g_bina_g.002"]}
          position={[-0.233, 5.361, 69.2]}
          scale={[0.01, 0.011, 0.003]}
        />
        <group name="g_bina" position={[-0.27, 5.361, 77.036]} scale={0.011}>
          {isBilgiGateTriggered ? (
            <Html>
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  backgroundColor: "#323632a4",
                  width: "220px",
                  textAlign: "center",
                  top: -200,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightblue",
                  padding: "4px",
                }}
                onClick={handleGoToGunes}
              >
                Solar System
              </div>
            </Html>
          ) : (
            <></>
          )}
          <mesh
            name="Mesh055"
            castShadow
            receiveShadow
            geometry={nodes.Mesh055.geometry}
            material={materials["g_bina.003"]}
          />
          <mesh
            name="Mesh055_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh055_1.geometry}
            material={materials["g_bina_k.003"]}
          />
          <mesh
            name="Mesh055_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh055_2.geometry}
            material={materials["g_bina_g.003"]}
          />
          <mesh
            name="Mesh055_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh055_3.geometry}
            material={materials["Light Mirror.001"]}
          />

          <mesh
            position={[20, 200, -980]}
            rotation={[0.0, 3.14, 0.0]}
            scale={5.2}
          >
            <planeGeometry args={[120, 40]} />

            <meshBasicMaterial
              map={texture}
              color={defaultColor}
              transparent
              alphaTest={0.5} // Adjust as needed
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/gezegenler_binasi.glb");
