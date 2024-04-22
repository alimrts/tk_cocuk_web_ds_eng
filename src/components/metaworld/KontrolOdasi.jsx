import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Color } from "three";

export function KontrolOdasi(props) {
  const { nodes, materials } = useGLTF("./models/kontrolodasi2.glb");

  return (
    <group {...props} dispose={null}>
      <group
        position={[-6.238, 1.177, 8.829]}
        rotation={[0, -0.595, 0]}
        scale={0.874}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh017.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh017_1.geometry}
          material={materials["MAT_Monitors02.006"]}
        />
      </group>
      <group
        position={[6.622, 1.177, 9.001]}
        rotation={[0, 0.587, 0]}
        scale={0.874}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_1.geometry}
          material={materials["MAT_Monitors02.006"]}
        />
      </group>
      <group
        position={[8.751, 1.485, 4.841]}
        rotation={[0, 1.554, 0]}
        scale={0.874}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh019.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh019_1.geometry}
          material={materials["MAT_Monitors02.006"]}
        />
      </group>
      <group
        position={[-8.096, 1.485, 4.636]}
        rotation={[Math.PI, -1.539, Math.PI]}
        scale={0.874}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_1.geometry}
          material={materials["MAT_Monitors02.006"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kontrol_odasi_04.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[1.269, 0.624, -4.107]}
        rotation={[-2.426, 0.627, 2.67]}
      />
      <group position={[0.272, -0.158, -3.148]} rotation={[0, 0.353, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022.geometry}
          material={materials.PolygonScifiSpace_Material_01_A}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_1.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh022_2.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group
        position={[7.809, 1.1, -1.881]}
        rotation={[1.571, 1.372, -1.571]}
        scale={[0.746, 0.826, 0.768]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023.geometry}
          material={materials.FX_HUD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_1.geometry}
          material={materials["FX_HUD_02.002"]}
        />
      </group>
      <group
        position={[-6.834, 0.384, 7.59]}
        rotation={[0.278, -0.766, 0.195]}
        scale={[0.986, 1.093, 1.016]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh024.geometry}
          material={materials.FX_HUD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh024_1.geometry}
          material={materials["FX_HUD_02.002"]}
        />
      </group>
      <group
        position={[-7.255, 1.08, -1.881]}
        rotation={[1.571, -1.393, 1.571]}
        scale={[0.746, 0.826, 0.768]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025.geometry}
          material={materials.FX_HUD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_1.geometry}
          material={materials["FX_HUD_02.002"]}
        />
      </group>
      <group
        position={[-7.182, 1.12, 2.3]}
        rotation={[1.571, -1.384, 1.571]}
        scale={[0.799, 0.885, 0.822]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026.geometry}
          material={materials.FX_HUD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_1.geometry}
          material={materials["FX_HUD_02.002"]}
        />
      </group>
      <group
        position={[1.824, 1.052, 7.36]}
        rotation={[0.197, 0, 0]}
        scale={[0.979, 1.085, 1.008]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027.geometry}
          material={materials.FX_HUD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh027_1.geometry}
          material={materials["FX_HUD_02.002"]}
        />
      </group>
      <group
        position={[-1.336, 1.052, 7.36]}
        rotation={[0.197, 0, 0]}
        scale={[0.979, 1.085, 1.008]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh028.geometry}
          material={materials.FX_HUD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_1.geometry}
          material={materials["FX_HUD_02.002"]}
        />
      </group>
      <group
        position={[7.343, 0.317, 7.62]}
        rotation={[0.278, 0.766, -0.195]}
        scale={[0.979, 1.085, 1.008]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029.geometry}
          material={materials.FX_HUD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_1.geometry}
          material={materials["FX_HUD_02.002"]}
        />
      </group>
      <group
        position={[7.879, 1.14, 2.3]}
        rotation={[1.571, 1.443, -1.571]}
        scale={[0.799, 0.885, 0.822]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh030.geometry}
          material={materials.FX_HUD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh030_1.geometry}
          material={materials["FX_HUD_02.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kontrol_odasi_14.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[-7.211, 0, -4.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kontrol_odasi_duvarlar.geometry}
        material={materials.PolygonScifiSpace_Material_01_A}
        position={[0.324, 1.797, 10.708]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.565, 1.139, 1.139]}
      />
      <group position={[0.131, 1.514, 8.595]} scale={0.874}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh033.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh033_1.geometry}
          material={materials["MAT_Monitors02.006"]}
        />
      </group>
    </group>
  );
}
useGLTF.preload("./models/kontrolodasi2.glb");
