// import React, { useRef, useEffect,useState } from 'react'
// import { useGLTF, useAnimations } from '@react-three/drei'
// import {  useFrame } from "@react-three/fiber";

// export default function ModelCharEge({ ...props }) {
//   const group = useRef()
//   const [active, setActive] = useState(false);
//   const [hover, setHover] = useState(false);
//   useFrame(() => {
//     if (hover) {
//       group.current.rotation.y += 0.005;
//     }
//   });
//   const { nodes, materials, animations } = useGLTF('/ege.glb')
//   const { actions } = useAnimations(animations, group)

//   useEffect(() => {
//     actions['idle'].play()
//   })
//   return (
//     <group ref={group} {...props} dispose={null} >

//       <group name="Scene" onPointerOver={() => {
//           setHover(true);
//         }}
//         onPointerOut={() => {
//           setHover(false);
//         }}>

//         <group name="Armature" rotation={[-Math.PI, 0, -Math.PI]}>
//           <primitive object={nodes.mixamorigHips} />
//           <primitive object={nodes.Ctrl_Master} />
//           <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
//           <primitive object={nodes.Ctrl_Hand_IK_Left} />
//           <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
//           <primitive object={nodes.Ctrl_Hand_IK_Right} />
//           <primitive object={nodes.Ctrl_Foot_IK_Left} />
//           <primitive object={nodes.Ctrl_LegPole_IK_Left} />
//           <primitive object={nodes.Ctrl_Foot_IK_Right} />
//           <primitive object={nodes.Ctrl_LegPole_IK_Right} />
//           <skinnedMesh
//             name="egeg1_002"
//             geometry={nodes.egeg1_002.geometry}
//             material={materials.ege_goz}
//             skeleton={nodes.egeg1_002.skeleton}
//           />
//           <skinnedMesh
//             name="egeg1_003"
//             geometry={nodes.egeg1_003.geometry}
//             material={materials.ege_goz}
//             skeleton={nodes.egeg1_003.skeleton}
//           />
//           <skinnedMesh
//             name="ege_kafa_d"
//             geometry={nodes.ege_kafa_d.geometry}
//             material={materials.ege_kafa}
//             skeleton={nodes.ege_kafa_d.skeleton}
//           />
//           <skinnedMesh
//             name="ege_govde_done"
//             geometry={nodes.ege_govde_done.geometry}
//             material={materials.ege_g}
//             skeleton={nodes.ege_govde_done.skeleton}
//           />
//           <skinnedMesh
//             name="ege_koll"
//             geometry={nodes.ege_koll.geometry}
//             material={materials.ege_kol}
//             skeleton={nodes.ege_koll.skeleton}
//           />
//           <skinnedMesh
//             name="ege_sac"
//             geometry={nodes.ege_sac.geometry}
//             material={materials.ege_sac}
//             skeleton={nodes.ege_sac.skeleton}
//           />
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/ege.glb')

import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ModelCharEge({ ...props }) {
  const group = useRef();
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  useFrame(() => {
    if (hover) {
      group.current.rotation.y += 0.005;
    }
  });
  // const { nodes, materials, animations } = useGLTF('/ege.glb')
  const { nodes, materials, animations } = useGLTF("./models/ege.glb");
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

useGLTF.preload("./models/ege.glb");
