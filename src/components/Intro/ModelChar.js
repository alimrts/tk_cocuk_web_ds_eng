import React, { useRef, useEffect,useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";

export default function ModelChar({ ...props }) {
  const group = useRef()
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  useFrame(() => {
    if (hover) {
      group.current.rotation.y += 0.005;
    }
  });
  // const { nodes, materials, animations } = useGLTF('/ece.glb')
  const { nodes, materials, animations } = useGLTF('./models/ece.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['idle'].play()
  })
  return (
    <group ref={group} {...props} dispose={null} >
      
      <group name="Scene" onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}>
        
       
        <group name="Armature" rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.01}>
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
  )
}

useGLTF.preload('./models/ece.glb')
