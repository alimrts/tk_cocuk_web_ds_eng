import React, { useRef, useState, useEffect } from "react";

import { useGLTF, Text } from "@react-three/drei";

import { Color } from "three";

import * as THREE from "three";

import textureForwardImport from "../../img/arrow_slider.png";
import textureMain from "../../img/daireler/bilgi_d_main_eng.png";
import textureMain2 from "../../img/daireler/bilgi_d_main2_eng.png";
import textureMain3 from "../../img/daireler/bilgi_d_main3_eng.png";
import textureMain4 from "../../img/daireler/bilgi_d_main4_eng.png";
import textureMain5 from "../../img/daireler/bilgi_d_main5_eng.png";
import textureMain6 from "../../img/daireler/bilgi_d_main6_eng.png";
import textureMain7 from "../../img/daireler/bilgi_d_main7_eng.png";
import textureMain8 from "../../img/daireler/bilgi_d_main8_eng.png";
import textureMain9 from "../../img/daireler/bilgi_d_main9_eng.png";
import textureMain10 from "../../img/daireler/bilgi_d_main10_eng.png";
import textureMain11 from "../../img/daireler/bilgi_d_main11_eng.png";
import textureMain12 from "../../img/daireler/bilgi_d_main12_eng.png";

const textures = [
  textureMain,
  textureMain2,
  textureMain3,
  textureMain4,
  textureMain5,
  textureMain6,
  textureMain7,
  textureMain8,
  textureMain9,
  textureMain10,
  textureMain11,
  textureMain12,
];

const TuikIcDaire1 = (props) => {
  const { nodes, materials } = useGLTF("./models/bilgi_daire.glb");

  const group = useRef();
  const [hoveredForward, setHoverForward] = useState(false);
  const [hoveredBackward, setHoverBackward] = useState(false);

  const [hoveredBilgi1, setHoverBilgi1] = useState(false);
  const [hoveredBilgi2, setHoverBilgi2] = useState(false);
  const [hoveredBilgi3, setHoverBilgi3] = useState(false);
  const [hoveredBilgi4, setHoverBilgi4] = useState(false);

  const hoverColor = new Color("#000afa");

  const [currentTextureIndex, setCurrentTextureIndex] = useState(0);

  const textureLoader = new THREE.TextureLoader();

  const textureForward = textureLoader.load(textureForwardImport);
  textureForward.flipY = false;

  // Load current texture based on currentTextureIndex
  const texture = textureLoader.load(textures[currentTextureIndex]);
  // Flip the texture vertically
  texture.flipY = false;

  const handleGoBilgi = (url) => {
    window.open(url, "_blank");
  };

  const handleForward = () => {
    const nextIndex = (currentTextureIndex + 1) % textures.length;
    setCurrentTextureIndex(nextIndex);
  };

  const handleBackward = () => {
    const nextIndex =
      (currentTextureIndex - 1 + textures.length) % textures.length;
    setCurrentTextureIndex(nextIndex);
  };

  useEffect(() => {
    document.body.style.cursor =
      hoveredForward ||
      hoveredBackward ||
      hoveredBilgi1 ||
      hoveredBilgi2 ||
      hoveredBilgi3 ||
      hoveredBilgi4
        ? "pointer"
        : "auto";

    return () => (document.body.style.cursor = "auto");
  }, [
    hoveredForward,
    hoveredBackward,
    hoveredBilgi1,
    hoveredBilgi2,
    hoveredBilgi3,
    hoveredBilgi4,
  ]);

  return (
    <group ref={group} {...props} dispose={null} scale={[3, 3, 3]}>
      <group
        position={[15.572, 2.188, 4.561]}
        rotation={[1.367, -0.901, 1.319]}
        scale={0.165}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group position={[0, 0.508, 9.06]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials["Block.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials["Glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_2.geometry}
          material={materials["Block.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gr1001.geometry}
        material={materials.gr1}
        position={[-17.44, 7.665, 0.64]}
        rotation={[0, 1.566, 0]}
        scale={0.094}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gr2001.geometry}
        material={materials["gr4.001"]}
        position={[17.464, 7.622, 0.652]}
        rotation={[-0.081, -1.57, -0.081]}
        scale={0.096}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gr3001.geometry}
        material={materials["gr3.001"]}
        position={[14.124, 8.098, -2.077]}
        rotation={[3.107, -1.57, 3.107]}
        scale={[0.1, 0.074, 0.1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gr4001.geometry}
        material={materials["gr2.001"]}
        position={[-14.131, 8.084, -2.157]}
        rotation={[3.136, 1.567, -3.136]}
        scale={[0.1, 0.074, 0.1]}
      />
      <group
        position={[-15.627, 2.188, 4.853]}
        rotation={[1.327, 0.894, -1.256]}
        scale={0.165}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_1.geometry}
          material={materials["Material.011"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tavan.geometry}
        material={materials["house.001"]}
        position={[0.451, 3.409, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[44.56, 44.56, 3.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof_roof2_0001.geometry}
        material={materials["roof2.001"]}
        position={[0, 15.315, -0.673]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[12.059, 11.488, 0.585]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor001.geometry}
        material={materials["floor.001"]}
        position={[0.451, 3.409, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[44.56, 44.56, 3.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dec_dec2_0001.geometry}
        material={materials["dec2.001"]}
        position={[-14.355, 9.466, -2.153]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.22, 5.748, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.dec_dec1_0001.geometry}
        material={materials.dec1}
        position={[-14.355, 9.466, -2.153]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.22, 5.748, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame_frame2_0001.geometry}
        material={materials["frame2.001"]}
        position={[0, 6.204, -3.069]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[10.319, 0.033, 4.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame_frame1_0001.geometry}
        material={materials["frame1.001"]}
        position={[0, 6.204, -3.069]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[10.319, 0.033, 4.685]}
      />
      <group
        position={[0, 1.226, -0.996]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[2.374, 2.431, 0.105]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021.geometry}
          material={materials["stage4.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021_1.geometry}
          material={materials["stage1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021_2.geometry}
          material={materials["lighting.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021_3.geometry}
          material={materials["stage3.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh021_4.geometry}
          material={materials["stage2.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stage_stage5_0001.geometry}
        material={materials["stage5.001"]}
        position={[0, 1.226, -0.996]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[2.374, 2.431, 0.105]}
      />
      <group position={[-17.731, 3.169, 4.589]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023.geometry}
          material={materials["Cube_light2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_1.geometry}
          material={materials["Cube_light1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_2.geometry}
          material={materials["Cube_light3.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh023_3.geometry}
          material={materials["Cube_light4.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.main_screen.geometry}
        // material={materials.main_sc}
        position={[0, -0.145, 0.115]}
        scale={0.01}
      >
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>

      <group name="Texts" position={[0, -0.5, 0]}>
        <Text
          scale={[0.75, 0.75, 0.75]}
          position={[0.0, 11.8, -2.7]}
          rotation={[0, 0, 0]}
          color="orange"
          anchorX="center"
          anchorY="middle"
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
        >
          Dissemination and Communication Department
        </Text>
        <mesh
          position={[9.1, 2.91, -2.7]}
          rotation={[0, 0.0, 0]}
          visible={true}
          scale={hoveredForward ? 1.5 : 1.4}
          onPointerOver={(event) => {
            setHoverForward(true);
          }}
          onPointerOut={(event) => {
            setHoverForward(false);
          }}
          onClick={handleForward}
        >
          <planeGeometry args={[0.65, 0.65]} />

          <meshBasicMaterial
            map={textureForward}
            transparent
            alphaTest={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh
          position={[-9.07, 2.91, -2.7]}
          rotation={[0, 0.0, 3.1]}
          visible={true}
          scale={hoveredBackward ? 1.5 : 1.4}
          onPointerOver={(event) => {
            setHoverBackward(true);
          }}
          onPointerOut={(event) => {
            setHoverBackward(false);
          }}
          onClick={handleBackward}
        >
          <planeGeometry args={[0.65, 0.65]} />

          <meshBasicMaterial
            map={textureForward}
            transparent
            alphaTest={0.5} // Adjust as needed
            side={THREE.DoubleSide}
          />
        </mesh>

        <Text
          visible={currentTextureIndex === 2 ? true : false}
          scale={hoveredBilgi1 ? 0.42 : 0.418}
          position={[6.08, 7.08, -2.7]}
          rotation={[0, 0, 0]}
          color={hoveredBilgi1 ? "#005aff" : hoverColor}
          anchorX="center"
          anchorY="middle"
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
          onPointerOver={(event) => {
            setHoverBilgi1(true);
          }}
          onPointerOut={(event) => {
            setHoverBilgi1(false);
          }}
          onClick={() => handleGoBilgi("https://www.tuik.gov.tr")}
        >
          www.tuik.gov.tr
        </Text>

        <Text
          visible={currentTextureIndex === 2 ? true : false}
          scale={hoveredBilgi2 ? 0.42 : 0.418}
          position={[-0.15, 4.78, -2.7]}
          rotation={[0, 0, 0]}
          color={hoveredBilgi2 ? "#005aff" : hoverColor}
          anchorX="center"
          anchorY="middle"
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
          onPointerOver={(event) => {
            setHoverBilgi2(true);
          }}
          onPointerOut={(event) => {
            setHoverBilgi2(false);
          }}
          onClick={() => handleGoBilgi("https://ty.tuik.gov.tr")}
        >
          https://ty.tuik.gov.tr
        </Text>

        <Text
          visible={currentTextureIndex === 6 ? true : false}
          scale={hoveredBilgi3 ? 0.42 : 0.418}
          position={[0, 3.46, -2.7]}
          rotation={[0, 0, 0]}
          color={hoveredBilgi3 ? "#005aff" : hoverColor}
          anchorX="center"
          anchorY="middle"
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
          onPointerOver={(event) => {
            setHoverBilgi3(true);
          }}
          onPointerOut={(event) => {
            setHoverBilgi3(false);
          }}
          onClick={() =>
            handleGoBilgi(
              "https://resmiistatistik.gov.tr/media/pdf/rip/resmi_istatistik_programi.pdf "
            )
          }
        >
          https://resmiistatistik.gov.tr/media/pdf/rip/resmi_istatistik_programi.pdf
        </Text>

        <Text
          visible={currentTextureIndex === 11 ? true : false}
          scale={hoveredBilgi4 ? 0.42 : 0.418}
          position={[0, 5.93, -2.7]}
          rotation={[0, 0, 0]}
          color={hoveredBilgi4 ? "#005aff" : hoverColor}
          anchorX="center"
          anchorY="middle"
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
          onPointerOver={(event) => {
            setHoverBilgi4(true);
          }}
          onPointerOut={(event) => {
            setHoverBilgi4(false);
          }}
          onClick={() => handleGoBilgi("https://kutuphane.tuik.gov.tr")}
        >
          https://kutuphane.tuik.gov.tr
        </Text>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls.geometry}
        material={materials["house.002"]}
        position={[0.451, 3.409, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[44.389, 44.389, 3.411]}
      />
      <group
        position={[-18.558, 2.27, -2.865]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.705, 1.705, 1.833]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh014.geometry}
          material={materials["MAT_Monitors02.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh014_1.geometry}
          material={materials["Material.012"]}
        />
      </group>
    </group>
  );
};

export default TuikIcDaire1;
