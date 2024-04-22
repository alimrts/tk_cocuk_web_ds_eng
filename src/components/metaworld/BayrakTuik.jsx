import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function BayrakTuik(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/bayrak_tuik.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Anim_0.play();
    // actions.flag1.setDuration(50);
  }, [actions]);
  return (
    <group {...props} dispose={null} position={[-2, 0, 8]}>
      <group name="Scene">
        <mesh
          ref={group}
          name="Flag_Main_Textured_Sized002"
          castShadow
          receiveShadow
          geometry={nodes.Flag_Main_Textured_Sized002.geometry}
          material={materials["Mat.001"]}
          morphTargetDictionary={
            nodes.Flag_Main_Textured_Sized002.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Flag_Main_Textured_Sized002.morphTargetInfluences
          }
          position={[-55.196, 12.415, 32.597]}
          rotation={[0, 0.853, 0]}
          scale={0.01}
        />
        <group
          name="Flagpole001"
          position={[-56.223, 13.812, 33.851]}
          rotation={[0, 0.668, 0]}
          scale={0.01}
        >
          <mesh
            name="Mesh006"
            castShadow
            receiveShadow
            geometry={nodes.Mesh006.geometry}
            material={materials["03 - Default.001"]}
          />
          <mesh
            name="Mesh006_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_1.geometry}
            material={materials["08 - Default.001"]}
          />
          <mesh
            name="Mesh006_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_2.geometry}
            material={materials["09 - Default.001"]}
          />
          <mesh
            name="Mesh006_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh006_3.geometry}
            material={materials["07 - Default.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/bayrak_tuik.glb");
