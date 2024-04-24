// import { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
// import { useEffect } from 'react'
// import { LoopOnce } from 'three'

// export default function Ece({ mixer, actions }) {
//   const ref = useRef()
//   const { nodes, materials, animations } = useGLTF('./models/ece.glb')
//   const idleAnimation = useGLTF('./models/ece@idle.glb').animations
//   const walkAnimation = useGLTF('./models/ece@walking.glb').animations
//   const jumpAnimation = useGLTF('./models/ece@jump.glb').animations

//   useEffect(() => {
//     actions['default'] = mixer.clipAction(animations[0], ref.current)
//     actions['walk'] = mixer.clipAction(walkAnimation[0], ref.current)
//     actions['jump'] = mixer.clipAction(jumpAnimation[0], ref.current)
//     actions['jump'].loop = LoopOnce
//     actions['jump'].clampWhenFinished = true

//     actions['idle'] = mixer.clipAction(idleAnimation[0], ref.current)

//     actions['walk'].play()
//   })

//   return (
//     <group ref={ref} dispose={null}>
//       <group name="Scene">
//         <group name="ece_basePelvis" position={[0, 0.82, -0.11]} rotation={[3.14, 0, -Math.PI / 2]} scale={0.01}>
//           <group name="ece_baseSpine1" position={[3.73, 0, -1]} rotation={[0, 0.1, 0]}>
//             <group name="ece_baseSpine2" position={[11.69, 0, 0]} rotation={[0, -0.11, 0]}>
//               <group name="ece_baseSpine3" position={[9.98, 0, 0]} rotation={[0, -0.15, 0]}>
//                 <group name="ece_baseSpine4" position={[10.87, 0, 0]} rotation={[0, 0.11, 0]}>
//                   <group name="ece_baseRibcage" position={[14.63, 0, 0]} rotation={[0, 0.04, 0]}>
//                     <group name="ece_baseNeck" position={[0.07, 0, -3.19]} rotation={[0, 0.09, 0]}>
//                       <group name="ece_baseHead" position={[16.62, 0, 0]} rotation={[0, -0.09, 0]}>
//                         <group name="ecegoz_base_dumy" position={[1.17, 0, 1.5]} rotation={[-Math.PI, 0, -Math.PI / 2]}>
//                           <group name="eceeye_face_c_y33" position={[9.09, 5.8, -9.81]}>
//                             <group name="eceeye_face_c_y34">
//                               <group name="eceeye_face_c_y39" rotation={[0, 0.01, Math.PI / 2]} />
//                             </group>
//                           </group>
//                           <group name="eceeye_face_c_y42" position={[9.09, -5.8, -9.81]}>
//                             <group name="eceeye_face_c_y43">
//                               <group name="eceeye_face_c_y49" rotation={[0, 0.01, Math.PI / 2]} />
//                             </group>
//                           </group>
//                         </group>
//                       </group>
//                     </group>
//                   </group>
//                 </group>
//               </group>
//             </group>
//           </group>
//         </group>
//         <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
//           <primitive object={nodes.mixamorigHips} />

//           <skinnedMesh
//             castShadow
//             frustumCulled={false}
//             name="ecekirpik_sag"
//             geometry={nodes.ecekirpik_sag.geometry}
//             material={materials['Material #26']}
//             skeleton={nodes.ecekirpik_sag.skeleton}
//           />
//           <skinnedMesh
//             castShadow
//             frustumCulled={false}
//             name="ecekirpik_sol"
//             geometry={nodes.ecekirpik_sol.geometry}
//             material={materials['Material #26']}
//             skeleton={nodes.ecekirpik_sol.skeleton}
//           />
//           <skinnedMesh castShadow frustumCulled={false} name="eceg1_1" geometry={nodes.eceg1_1.geometry} material={materials['Material #25']} skeleton={nodes.eceg1_1.skeleton} />
//           <skinnedMesh castShadow frustumCulled={false} name="eceg2_2" geometry={nodes.eceg2_2.geometry} material={materials['Material #25']} skeleton={nodes.eceg2_2.skeleton} />
//           <skinnedMesh castShadow frustumCulled={false} name="eceeller" geometry={nodes.eceeller.geometry} material={materials.kc1_hand} skeleton={nodes.eceeller.skeleton} />
//           <skinnedMesh
//             castShadow
//             frustumCulled={false}
//             name="ecekafaa_aaa"
//             geometry={nodes.ecekafaa_aaa.geometry}
//             material={materials.kc1_kafa}
//             skeleton={nodes.ecekafaa_aaa.skeleton}
//           />
//           <skinnedMesh
//             castShadow
//             frustumCulled={false}
//             name="ecekiz1_govde"
//             geometry={nodes.ecekiz1_govde.geometry}
//             material={materials.kc1_thirt_pnt}
//             skeleton={nodes.ecekiz1_govde.skeleton}
//           />
//           <skinnedMesh castShadow frustumCulled={false} name="ecesac_r_d" geometry={nodes.ecesac_r_d.geometry} material={materials.kc1_sac} skeleton={nodes.ecesac_r_d.skeleton} />
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload(['./models/ece.glb', './models/ece@walking.glb', './models/ece@jump.glb'])

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { LoopOnce } from "three";

export default function Ece({ mixer, actions }) {
  const ref = useRef();
  const { nodes, materials, animations } = useGLTF("./models/ece.glb");
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
          <primitive object={nodes.mixamorigHips} />

          <skinnedMesh
            geometry={nodes.ece_gozler.geometry}
            material={materials.ece_goz}
            skeleton={nodes.ece_gozler.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ece_ayak.geometry}
            material={materials.ece_ayakkabi}
            skeleton={nodes.ece_ayak.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ece_tshirt.geometry}
            material={materials.ece_tshirt}
            skeleton={nodes.ece_tshirt.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ece_pnt.geometry}
            material={materials.ece_pnt}
            skeleton={nodes.ece_pnt.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ece_eller.geometry}
            material={materials.ece_kol}
            skeleton={nodes.ece_eller.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ece_sac.geometry}
            material={materials.ece_sac}
            skeleton={nodes.ece_sac.skeleton}
          />
          <skinnedMesh
            geometry={nodes.ece_kafa.geometry}
            material={materials.ece_kafa}
            skeleton={nodes.ece_kafa.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload([
//   "./models/ece.glb",
//   "./models/ege_walking.glb",
//   "./models/ege_jump.glb",
//   "./models/ege_idle.glb",
// ]);
