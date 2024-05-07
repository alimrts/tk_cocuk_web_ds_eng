import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { LoopOnce } from "three";

export default function Mod({ mixer, actions }) {
  const ref = useRef();
  const { nodes, materials, animations } = useGLTF("./models/mod_td.glb");
  const idleAnimation = useGLTF("./models/mod_idle.glb").animations;
  const walkAnimation = useGLTF("./models/mod_walk.glb").animations;
  const jumpAnimation = useGLTF("./models/mod_jump.glb").animations;

  useEffect(() => {
    actions["default"] = mixer.clipAction(animations[0], ref.current);
    actions["walk"] = mixer.clipAction(walkAnimation[0], ref.current);
    actions["jump"] = mixer.clipAction(jumpAnimation[0], ref.current);
    actions["jump"].loop = LoopOnce;
    actions["jump"].clampWhenFinished = true;

    actions["idle"] = mixer.clipAction(idleAnimation[0], ref.current);
    actions["walk"].play();
  });

  return (
    <group ref={ref} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
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
