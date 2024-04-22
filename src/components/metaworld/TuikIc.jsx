import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./SoloarSystemStyle.css";
import useZustandStore from "../../zustandStore";
import {
  useGLTF,
  Environment,
  PerspectiveCamera,
  OrbitControls,
  Html,
  useProgress,
  useCursor,
  Text,
} from "@react-three/drei";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import mySvgImage from "./cursor_360.svg";

function LoaderBase() {
  const { progress } = useProgress();

  console.log("prog: ", progress);
  return (
    <Html center>
      {" "}
      <div style={{ fontSize: 28, color: "white" }}>
        Yükleniyor... {Math.round(progress)} %
      </div>
    </Html>
  );
}

const TuikIcBina = (props) => {
  const { nodes, materials } = useGLTF("./models/tuik_ic.glb");

  const group = useRef();

  const [hovered, set] = useState();
  useCursor(hovered, "pointer", "auto", document.body);

  return (
    <group ref={group} {...props} dispose={null} scale={[3, 3, 3]}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="95aa6071f75145a3bb8b0e977ae4027dfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode">
              <group
                name="Cube_dec"
                position={[-1823.353, 355.15, -855.587]}
                rotation={[-1.231, 0.4, 0.834]}
                scale={[418.331, 113.488, 325.782]}
              />
              <group
                name="Cube_light"
                position={[-1773.136, 316.913, 458.878]}
                rotation={[Math.PI, 0.193, 0.717]}
                scale={[359.582, 97.55, 280.03]}
              >
                <mesh
                  name="Cube_light_Cube_light1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_light_Cube_light1_0.geometry}
                  material={materials.Cube_light1}
                />
                <mesh
                  name="Cube_light_Cube_light2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_light_Cube_light2_0.geometry}
                  material={materials.Cube_light2}
                />
                <mesh
                  name="Cube_light_Cube_light3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_light_Cube_light3_0.geometry}
                  material={materials.Cube_light3}
                />
                <mesh
                  name="Cube_light_Cube_light4_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_light_Cube_light4_0.geometry}
                  material={materials.Cube_light4}
                />
              </group>
              <group
                name="dec"
                position={[-1435.453, 946.575, -215.334]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[22.008, 574.789, 100]}
              >
                <mesh
                  name="dec_dec1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.dec_dec1_0.geometry}
                  material={materials.dec1}
                />
                <mesh
                  name="dec_dec2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.dec_dec2_0.geometry}
                  material={materials.dec2}
                />
              </group>
              <group
                name="floor"
                position={[45.134, 340.95, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[4456.016, 4456.016, 341.147]}
              >
                <mesh
                  name="floor_floor_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.floor_floor_0.geometry}
                  material={materials.floor}
                />
              </group>
              <group
                name="frame"
                position={[0, 600.51, -301.167]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[976.004, 3.161, 443.101]}
              >
                <mesh
                  name="frame_frame1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.frame_frame1_0.geometry}
                  material={materials.frame1}
                  position={[0, 1.819, 0.045]}
                  scale={1.057}
                />
                <mesh
                  name="frame_frame2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.frame_frame2_0.geometry}
                  material={materials.frame2}
                  position={[0, 1.819, 0.045]}
                  scale={1.057}
                />
              </group>
              <group
                name="house"
                position={[45.134, 340.95, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[4456.016, 4456.016, 341.147]}
              >
                <mesh
                  name="house_house_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.house_house_0.geometry}
                  material={materials.house}
                />
              </group>
              <group
                name="lighting"
                position={[0, 52.159, 115.188]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[726.455, 691.253, 22.138]}
              >
                <mesh
                  name="lighting_lighting_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.lighting_lighting_0.geometry}
                  material={materials.lighting}
                />
              </group>
              <group
                name="roof"
                position={[0, 1336.289, -67.294]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1205.933, 1148.85, 58.488]}
              >
                <mesh
                  name="roof_roof2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.roof_roof2_0.geometry}
                  material={materials.roof2}
                  position={[0, 0, 3.338]}
                />
              </group>
              <group name="screen" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="screen_screen001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.screen_screen001_0.geometry}
                  material={materials["screen.001"]}
                  position={[0, -0.115, -0.145]}
                  scale={1.057}
                />
              </group>
              <group
                name="stage"
                position={[0, 122.556, -99.564]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[237.378, 243.106, 10.544]}
              >
                <mesh
                  name="stage_stage1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.stage_stage1_0.geometry}
                  material={materials.stage1}
                />
                <mesh
                  name="stage_stage2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.stage_stage2_0.geometry}
                  material={materials.stage2}
                />
                <mesh
                  name="stage_stage3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.stage_stage3_0.geometry}
                  material={materials.stage3}
                />
                <mesh
                  name="stage_stage4_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.stage_stage4_0.geometry}
                  material={materials.stage4}
                />
                <mesh
                  name="stage_stage5_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.stage_stage5_0.geometry}
                  material={materials.stage5}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Plane003"
          position={[-15.627, 2.188, 4.853]}
          rotation={[1.327, 0.894, -1.256]}
          scale={0.165}
        >
          <mesh
            name="Plane003_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Plane003_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_2.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <mesh
          name="Object_40"
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.material_6}
        />
        <group name="root">
          <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Cube001_9" position={[0.048, 0, 0]}>
              <mesh
                name="Object_6"
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.Glass}
              />
            </group>
            <group name="Cube002_10" position={[0.048, 0, 0]}>
              <mesh
                name="Object_8"
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.Block}
              />
            </group>
            <group name="Cube003_11" position={[0.048, 0, 0]}>
              <mesh
                name="Object_10"
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials.Glass}
              />
            </group>
            <group name="Cube004_12" position={[0.048, 0, 0]}>
              <mesh
                name="Object_12"
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials.Block}
              />
            </group>
            <group name="Cube005_13" position={[0.048, 0, 0]}>
              <mesh
                name="Object_14"
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials.Glass}
              />
            </group>
            <group name="Cube006_14" position={[0.048, 0, 0]}>
              <mesh
                name="Object_16"
                castShadow
                receiveShadow
                geometry={nodes.Object_16.geometry}
                material={materials.Block_Bawah}
              />
            </group>
            <group name="Cube_8" position={[0.048, 0, 0]}>
              <mesh
                name="Object_4"
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.Block}
              />
            </group>
            <group
              name="Empty017_15"
              position={[0.591, 0.261, 1.124]}
              rotation={[0, 0.5, 0]}
              scale={2.29}
            />
          </group>
        </group>
        <group
          name="Plane001"
          position={[15.572, 2.188, 4.561]}
          rotation={[1.367, -0.901, 1.319]}
          scale={0.165}
        >
          <mesh
            name="Plane001_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="Plane001_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["MAT_Monitors02.001"]}
          position={[-14.932, 2.106, -14.334]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.569, 1.569, 1.687]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.006"]}
          position={[-16.721, 5.478, -14.32]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.569}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["MAT_Monitors02.002"]}
          position={[15.117, 2.106, -14.311]}
          rotation={[Math.PI / 2, 0, 3.132]}
          scale={[1.569, 1.569, 1.687]}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.007"]}
          position={[16.906, 5.478, -14.343]}
          rotation={[Math.PI / 2, 0, 3.132]}
          scale={1.569}
        />
        <mesh
          name="Object_10001"
          castShadow
          receiveShadow
          geometry={nodes.Object_10001.geometry}
          material={materials["Glass.001"]}
          position={[16.748, 0.181, -1.988]}
          rotation={[0, -0.89, 0]}
          scale={20.408}
        />
        <mesh
          name="Object_12001"
          castShadow
          receiveShadow
          geometry={nodes.Object_12001.geometry}
          material={materials["Block.001"]}
          position={[16.748, 0.181, -1.988]}
          rotation={[0, -0.89, 0]}
          scale={20.408}
        />
        <mesh
          name="Object_14001"
          castShadow
          receiveShadow
          geometry={nodes.Object_14001.geometry}
          material={materials["Glass.001"]}
          position={[16.748, 0.181, -1.988]}
          rotation={[0, -0.89, 0]}
          scale={20.408}
        />
        <mesh
          name="Object_16001"
          castShadow
          receiveShadow
          geometry={nodes.Object_16001.geometry}
          material={materials["Block_Bawah.001"]}
          position={[16.748, 0.181, -1.988]}
          rotation={[0, -0.89, 0]}
          scale={20.408}
        />
        <mesh
          name="Object_4001"
          castShadow
          receiveShadow
          geometry={nodes.Object_4001.geometry}
          material={materials["Block.001"]}
          position={[16.748, 0.181, -1.988]}
          rotation={[0, -0.89, 0]}
          scale={20.408}
        />
        <mesh
          name="Object_6001"
          castShadow
          receiveShadow
          geometry={nodes.Object_6001.geometry}
          material={materials["Glass.001"]}
          position={[16.748, 0.181, -1.988]}
          rotation={[0, -0.89, 0]}
          scale={20.408}
        />
        <mesh
          name="Object_8001"
          castShadow
          receiveShadow
          geometry={nodes.Object_8001.geometry}
          material={materials["Block.001"]}
          position={[16.748, 0.181, -1.988]}
          rotation={[0, -0.89, 0]}
          scale={20.408}
        />
        <mesh
          name="Object_10002"
          castShadow
          receiveShadow
          geometry={nodes.Object_10002.geometry}
          material={materials["Glass.002"]}
          position={[-16.43, 0.508, -1.813]}
          rotation={[-Math.PI, -0.874, -Math.PI]}
          scale={20.408}
        />
        <mesh
          name="Object_12002"
          castShadow
          receiveShadow
          geometry={nodes.Object_12002.geometry}
          material={materials["Block.002"]}
          position={[-16.43, 0.508, -1.813]}
          rotation={[-Math.PI, -0.874, -Math.PI]}
          scale={20.408}
        />
        <mesh
          name="Object_14002"
          castShadow
          receiveShadow
          geometry={nodes.Object_14002.geometry}
          material={materials["Glass.002"]}
          position={[-16.43, 0.508, -1.813]}
          rotation={[-Math.PI, -0.874, -Math.PI]}
          scale={20.408}
        />
        <mesh
          name="Object_16002"
          castShadow
          receiveShadow
          geometry={nodes.Object_16002.geometry}
          material={materials["Block_Bawah.002"]}
          position={[-16.43, 0.508, -1.813]}
          rotation={[-Math.PI, -0.874, -Math.PI]}
          scale={20.408}
        />
        <mesh
          name="Object_4002"
          castShadow
          receiveShadow
          geometry={nodes.Object_4002.geometry}
          material={materials["Block.002"]}
          position={[-16.43, 0.508, -1.813]}
          rotation={[-Math.PI, -0.874, -Math.PI]}
          scale={20.408}
        />
        <mesh
          name="Object_6002"
          castShadow
          receiveShadow
          geometry={nodes.Object_6002.geometry}
          material={materials["Glass.002"]}
          position={[-16.43, 0.508, -1.813]}
          rotation={[-Math.PI, -0.874, -Math.PI]}
          scale={20.408}
        />
        <mesh
          name="Object_8002"
          castShadow
          receiveShadow
          geometry={nodes.Object_8002.geometry}
          material={materials["Block.002"]}
          position={[-16.43, 0.508, -1.813]}
          rotation={[-Math.PI, -0.874, -Math.PI]}
          scale={20.408}
        />
        <mesh
          name="gr1"
          castShadow
          receiveShadow
          geometry={nodes.gr1.geometry}
          material={materials["gr1.001"]}
          position={[-17.44, 7.665, 0.64]}
          rotation={[0, 1.566, 0]}
          scale={0.094}
        />
        <mesh
          name="gr2"
          castShadow
          receiveShadow
          geometry={nodes.gr2.geometry}
          material={materials.gr2}
          position={[17.464, 7.622, 0.652]}
          rotation={[0, -1.57, 0]}
          scale={0.096}
        />
        <mesh
          name="gr3"
          castShadow
          receiveShadow
          geometry={nodes.gr3.geometry}
          material={materials.gr3}
          position={[14.124, 8.098, -2.077]}
          rotation={[Math.PI, -1.57, Math.PI]}
          scale={[0.1, 0.074, 0.1]}
        />
        <mesh
          name="gr4"
          castShadow
          receiveShadow
          geometry={nodes.gr4.geometry}
          material={materials.gr4}
          position={[-14.131, 8.084, -2.157]}
          rotation={[-Math.PI, 1.567, -Math.PI]}
          scale={[0.1, 0.074, 0.1]}
        />
      </group>
      <group name="Texts" position={[0, -0.5, 0]}>
        <Text
          scale={[0.75, 0.75, 0.75]}
          position={[0.0, 9.8, -2.7]}
          rotation={[0, 0, 0]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
        >
          Türkiye İstatistik Kurumu
        </Text>
        <Text
          scale={[0.36, 0.36, 0.36]}
          position={[-0.4, 8.8, -2.7]}
          rotation={[0, 0, 0]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
        >
          Türkiye İstatistik Kurumu'nun (TÜİK) temel görevi, ülkenin ihtiyaç
          duyduğu alanlarda, veri ve
        </Text>
        <Text
          scale={[0.36, 0.36, 0.36]}
          position={[0.05, 8.2, -2.7]}
          rotation={[0, 0, 0]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
        >
          bilgilerin, derlenmesini, gerekli istatistiklerin üretilmesini,
          yayımlanmasını ve dağıtımını yapmaktır.
        </Text>
        <Text
          scale={[0.36, 0.36, 0.36]}
          position={[-0.85, 7.6, -2.7]}
          rotation={[0, 0, 0]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
        >
          TÜİK bireylerden, hanelerden, işyerlerinden araştırmalar ve sayımlar
          yoluyla veri toplar.
        </Text>
        <Text
          scale={[0.36, 0.36, 0.36]}
          position={[-0.15, 7, -2.7]}
          rotation={[0, 0, 0]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
        >
          Topladığı verileri analiz eder ve istatistiki bilgi haline dönüştürür.
          Bu istatistiki bilgiler, toplumun
        </Text>
        <Text
          scale={[0.36, 0.36, 0.36]}
          position={[-0.02, 6.4, -2.7]}
          rotation={[0, 0, 0]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
        >
          her kesiminde karar alma aşamalarında güvenilir yol göstericilerdir.
          Ayrıca, verilerin hangi tanım,
        </Text>
        <Text
          scale={[0.36, 0.36, 0.36]}
          position={[-0.15, 5.8, -2.7]}
          rotation={[0, 0, 0]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
        >
          yöntem, kapsam ve sınıflama kullanılarak hangi kurum tarafından, hangi
          sıklıkta derleneceği ve
        </Text>
        <Text
          scale={[0.36, 0.36, 0.36]}
          position={[0.0, 5.2, -2.7]}
          rotation={[0, 0, 0]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
        >
          yayınlanacağı bilgilerini içeren Resmi İstatistik Programı'nı
          kurum/kuruluşlar ile koordineli olarak
        </Text>
        <Text
          scale={[0.36, 0.36, 0.36]}
          position={[-1.25, 4.6, -2.7]}
          rotation={[0, 0, 0]}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
          font="/fontsFor3d/SpecifyPersonalNormalBlackItalic-787E.ttf"
        >
          hazırlayarak programda yer alan faaliyetlerin izleme ve
          değerlendirmesini raporlar.
        </Text>
      </group>
    </group>
  );
};

const TuikIc = () => {
  const isTuikGateTriggered = useZustandStore(
    (state) => state.isTuikGateTriggered
  );
  const setIsTuikGateTriggered = useZustandStore(
    (state) => state.setIsTuikGateTriggered
  );

  const setIsGeriClickedInTuik = useZustandStore(
    (state) => state.setIsGeriClickedInTuik
  );

  const setIsGeriClickedInSolarSystem = useZustandStore(
    (state) => state.setIsGeriClickedInSolarSystem
  );

  const setIsBilgiIcTriggered = useZustandStore(
    (state) => state.setIsBilgiIcTriggered
  );

  const setIsBilgiGateTriggered = useZustandStore(
    (state) => state.setIsBilgiGateTriggered
  );

  const handleTuikGateTrigger = () => {
    setIsTuikGateTriggered(false);
    setIsGeriClickedInTuik(true);
    setIsGeriClickedInSolarSystem(false);
    setIsBilgiIcTriggered(false);
    setIsBilgiGateTriggered(true);
  };

  return (
    <>
      <button
        className="button i-button"
        onClick={() => {
          handleTuikGateTrigger();
        }}
        style={{
          position: "absolute",
          zIndex: 2,
          transform: "scale(0.6)",
          lineHeight: 1.4,
          fontSize: 34,
        }}
      >
        Geri
      </button>

      <div
        style={{
          position: "absolute",
          marginTop: "75vh",
          marginLeft: "5vh",
          fontSize: "20px",
          color: "lightblue",
          zIndex: 1,
          textAlign: "left",
          userSelect: "none",
        }}
      ></div>

      <Canvas>
        <Suspense fallback={<LoaderBase />}>
          <Environment
            background={false}
            blur={0.5}
            files="/env/paul_lobe_haus_1k.hdr"
          />

          <ambientLight intensity={0.1} />
          <pointLight intensity={2} position={[0, 0, 0]} />
          <TuikIcBina />

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            makeDefault
            rotateSpeed={0.6}
            maxPolarAngle={1.5}
            minPolarAngle={1.1}
            minAzimuthAngle={-0.3}
            maxAzimuthAngle={0.3}
            minDistance={25}
            maxDistance={60}
            target={[0, 14, 0]}
          />

          <PerspectiveCamera makeDefault position={[0, 12, 60]} fov={65} />

          <EffectComposer disableNormalPass>
            <Bloom mipmapBlur intensity={0.38} luminanceThreshold={0.8} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
};

export default TuikIc;
