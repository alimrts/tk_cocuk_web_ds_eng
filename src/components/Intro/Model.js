import React, { useRef, useEffect,useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef()
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  useFrame(() => {
    if (hover) {
      group.current.rotation.y += 0.005;
    }
  });
  const { nodes, materials, animations } = useGLTF('./models/lab.glb')
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
                  <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Cube_parent_49"
                position={[-0.25, -1, 0.12]}
                scale={[20, 1, 20]}
              >
                <group name="Object_122">
                  <mesh
                    name="Object_73"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73.geometry}
                    material={materials.floor}
                  />
                  <mesh
                    name="Object_73_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_1.geometry}
                    material={materials.Metal_1}
                  />
                  <mesh
                    name="Object_73_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_2.geometry}
                    material={materials.Screen}
                  />
                  <mesh
                    name="Object_73_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_3.geometry}
                    material={materials.walls}
                  />
                  <mesh
                    name="Object_73_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_4.geometry}
                    material={materials.reilling}
                  />
                  <mesh
                    name="Object_73_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_5.geometry}
                    material={materials.inset}
                  />
                  <mesh
                    name="Object_73_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_6.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Object_73_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_7.geometry}
                    material={materials["Material.003"]}
                  />
                  <mesh
                    name="Object_73_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_8.geometry}
                    material={materials.black}
                  />
                  <mesh
                    name="Object_73_9"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_9.geometry}
                    material={materials.glass}
                  />
                  <mesh
                    name="Object_73_10"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_10.geometry}
                    material={materials["Material.005"]}
                  />
                  <mesh
                    name="Object_73_11"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_11.geometry}
                    material={materials.tubes_metal}
                  />
                  <mesh
                    name="Object_73_12"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_12.geometry}
                    material={materials.tube_holders}
                  />
                  <mesh
                    name="Object_73_13"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_13.geometry}
                    material={materials.light_white}
                  />
                  <mesh
                    name="Object_73_14"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_73_14.geometry}
                    material={materials.control_desk}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Char"
          castShadow
          receiveShadow
          geometry={nodes.Char.geometry}
          material={materials["screenlight.001"]}
          position={[0.66, 12.03, 1.54]}
          scale={[1.42, 1.86, 1.42]}
        />
        <group
          name="Object_73001"
          position={[9.85, 18.59, -15.9]}
          rotation={[3.14, 0, Math.PI]}
          scale={4.03}
        >
          <mesh
            name="Object_40001"
            castShadow
            receiveShadow
            geometry={nodes.Object_40001.geometry}
            material={materials["Metal_1.001"]}
          />
          <mesh
            name="Object_40001_1"
            castShadow
            receiveShadow
            geometry={nodes.Object_40001_1.geometry}
            material={materials["Screen.001"]}
          />
        </group> 
            
      </group>
    </group>
  )
}

useGLTF.preload('./models/lab.glb')
