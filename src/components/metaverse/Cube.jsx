import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function MyCube(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/cube.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions?.swipe?.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cube" castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Material} />
      </group>
    </group>
  );
}

useGLTF.preload("./models/cube.glb");
