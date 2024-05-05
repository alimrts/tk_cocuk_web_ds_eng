import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ModelCharMod({ ...props }) {
  const group = useRef();
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  useFrame(() => {
    if (hover) {
      group.current.rotation.y += 0.005;
    }
  });
  // const { nodes, materials, animations } = useGLTF('/ege.glb')
  const { nodes, materials, animations } = useGLTF("./models/mod_td.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["idle"].play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="Scene"
        onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}
      >
        <group
          name="Armature"
          rotation={[Math.PI / 2, 0, -Math.PI / 0.8]}
          scale={0.01}
        >
          <group name="body">
            <skinnedMesh
              name="Mesh004"
              geometry={nodes.Mesh004.geometry}
              material={materials.kol_bacak}
              skeleton={nodes.Mesh004.skeleton}
            />
            <skinnedMesh
              name="Mesh004_1"
              geometry={nodes.Mesh004_1.geometry}
              material={materials.Belt}
              skeleton={nodes.Mesh004_1.skeleton}
            />
            <skinnedMesh
              name="Mesh004_2"
              geometry={nodes.Mesh004_2.geometry}
              material={materials.Armor}
              skeleton={nodes.Mesh004_2.skeleton}
            />
          </group>
          <skinnedMesh
            name="head"
            geometry={nodes.head.geometry}
            material={materials.head}
            skeleton={nodes.head.skeleton}
          />
          <skinnedMesh
            name="kemer_canta"
            geometry={nodes.kemer_canta.geometry}
            material={materials.Belt}
            skeleton={nodes.kemer_canta.skeleton}
          />
          <skinnedMesh
            name="kemer_toka"
            geometry={nodes.kemer_toka.geometry}
            material={materials.Belt}
            skeleton={nodes.kemer_toka.skeleton}
          />
          <skinnedMesh
            name="omuz_light"
            geometry={nodes.omuz_light.geometry}
            material={materials.Armor}
            skeleton={nodes.omuz_light.skeleton}
          />
          <skinnedMesh
            name="wings"
            geometry={nodes.wings.geometry}
            material={materials.wingss}
            skeleton={nodes.wings.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}
