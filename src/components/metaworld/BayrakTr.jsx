import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function BayrakTr(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/bayrak_tr.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Anim_0.play();
    actions.Anim_0.setDuration(10);
  }, [actions]);
  return (
    <group {...props} dispose={null} position={[-2, 0, 8]}>
      <group name="Scene">
        <mesh
          ref={group}
          name="Flag_Main_Textured_Sized1"
          castShadow
          receiveShadow
          geometry={nodes.Flag_Main_Textured_Sized1.geometry}
          material={materials.Mat}
          morphTargetDictionary={
            nodes.Flag_Main_Textured_Sized1.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Flag_Main_Textured_Sized1.morphTargetInfluences
          }
          position={[-55.196, 12.415, 36.968]}
          rotation={[0, 0.853, 0]}
          scale={0.01}
        />
        <group
          name="Flagpole"
          position={[-56.223, 13.812, 38.223]}
          rotation={[0, 0.668, 0]}
          scale={0.01}
        >
          <mesh
            name="Mesh004"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004.geometry}
            material={materials["03 - Default"]}
          />
          <mesh
            name="Mesh004_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_1.geometry}
            material={materials["08 - Default"]}
          />
          <mesh
            name="Mesh004_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_2.geometry}
            material={materials["09 - Default"]}
          />
          <mesh
            name="Mesh004_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_3.geometry}
            material={materials["07 - Default"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/bayrak_tr.glb");
