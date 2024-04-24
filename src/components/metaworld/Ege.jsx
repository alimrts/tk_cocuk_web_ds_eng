import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { LoopOnce } from "three";

export default function Ege({ mixer, actions }) {
  const ref = useRef();
  const { nodes, materials, animations } = useGLTF("./models/ege.glb");
  const idleAnimation = useGLTF("./models/ege_idle.glb").animations;
  const walkAnimation = useGLTF("./models/ege_walking.glb").animations;
  const jumpAnimation = useGLTF("./models/ege_jump.glb").animations;

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
          {/* <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="egeg1_002"
            geometry={nodes.egeg1_002.geometry}
            material={materials.ege_goz}
            skeleton={nodes.egeg1_002.skeleton}
          />
          <skinnedMesh
            name="egeg1_003"
            geometry={nodes.egeg1_003.geometry}
            material={materials.ege_goz}
            skeleton={nodes.egeg1_003.skeleton}
          />
          <skinnedMesh
            name="ege_kafa_d"
            geometry={nodes.ege_kafa_d.geometry}
            material={materials.ege_kafa}
            skeleton={nodes.ege_kafa_d.skeleton}
          />
          <skinnedMesh
            name="ege_govde_done"
            geometry={nodes.ege_govde_done.geometry}
            material={materials.ege_g}
            skeleton={nodes.ege_govde_done.skeleton}
          />
          <skinnedMesh
            name="ege_koll"
            geometry={nodes.ege_koll.geometry}
            material={materials.ege_kol}
            skeleton={nodes.ege_koll.skeleton}
          />
          <skinnedMesh
            name="ege_sac"
            geometry={nodes.ege_sac.geometry}
            material={materials.ege_sac}
            skeleton={nodes.ege_sac.skeleton}
          /> */}
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            geometry={nodes.ege_bacak.geometry}
            material={materials.ege_pnt}
            skeleton={nodes.ege_bacak.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ege_gozler.geometry}
            material={materials.ege_goz}
            skeleton={nodes.ege_gozler.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ege_ayakkabi.geometry}
            material={materials.ege_ayakkabi}
            skeleton={nodes.ege_ayakkabi.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ege_govde.geometry}
            material={materials.ege_tshirt}
            skeleton={nodes.ege_govde.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ege_kafa.geometry}
            material={materials.ege_kafa}
            skeleton={nodes.ege_kafa.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ege_kol.geometry}
            material={materials.ege_kol}
            skeleton={nodes.ege_kol.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ege_sac.geometry}
            material={materials.ege_sac}
            skeleton={nodes.ege_sac.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload([
//   "./models/ege.glb",
//   "./models/ege_walking.glb",
//   "./models/ege_jump.glb",
//   "./models/ege_idle.glb",
// ]);
