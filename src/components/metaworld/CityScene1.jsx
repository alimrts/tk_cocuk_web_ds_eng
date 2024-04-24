import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

function Obstacle({ args, position, ...props }) {
  const [ref] = useBox(
    () => ({ args, type: "Static", mass: 10, position: position, ...props }),
    useRef()
  );

  return (
    <mesh ref={ref}>
      {/* on/off collision boxes */}
      <boxGeometry args={[...args]} />
      <meshStandardMaterial color="red" wireframe />
    </mesh>
  );
}

export function CityScene1(props) {
  const { nodes, materials } = useGLTF("./models/city_c9_eng.glb");

  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Road.geometry}
          material={materials["COLOR.002"]}
          position={[48.492, -0.018, -34.86]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Walking_Road001.geometry}
          material={materials["COLOR.002"]}
          position={[36.438, -0.018, -46.914]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Straight_Road031.geometry}
          material={materials["COLOR.002"]}
          position={[96.707, -0.018, -167.452]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Not_Walking_Road3004.geometry}
          material={materials["COLOR.002"]}
          position={[-132.317, -0.018, 170.056]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tuik_zemin.geometry}
          material={materials["COLOR.002"]}
          position={[-47.939, -0.018, 1.302]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground059.geometry}
          material={materials["COLOR.002"]}
          position={[72.599, -0.018, -10.752]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground081.geometry}
          material={materials["COLOR.002"]}
          position={[60.546, -0.018, -83.075]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground101.geometry}
          material={materials["COLOR.002"]}
          position={[0.276, -0.018, -71.021]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground134.geometry}
          material={materials["COLOR.002"]}
          position={[-59.993, -0.018, -95.129]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground157.geometry}
          material={materials["COLOR.002"]}
          position={[-23.832, -0.018, -143.345]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground195.geometry}
          material={materials["COLOR.002"]}
          position={[-120.263, -0.018, 1.302]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground287.geometry}
          material={materials["COLOR.002"]}
          position={[-11.778, -0.018, 145.949]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground351.geometry}
          material={materials["COLOR.002"]}
          position={[72.599, -0.018, 73.625]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SCHOOL.geometry}
          material={materials["COLOR.002"]}
          position={[95.034, -0.015, 67.71]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RESTAURANT.geometry}
          material={materials["COLOR.002"]}
          position={[-82.127, -0.017, 149.774]}
          rotation={[0, 1.571, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TENNIS_STADIUM2.geometry}
          material={materials["COLOR.002"]}
          position={[46.189, -0.044, 140.852]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FOOTBALL_STADIUM.geometry}
          material={materials["COLOR.002"]}
          position={[9.163, -0.014, 139.897]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HOSPITAL.geometry}
          material={materials["COLOR.002"]}
          position={[55.73, -0.017, -81.93]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COFFEE.geometry}
          material={materials["COLOR.002"]}
          position={[-41.728, -0.233, 151.208]}
          rotation={[0, 1.571, 0]}
          scale={0.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GasStationGround.geometry}
          material={materials["COLOR.002"]}
          position={[7.319, -0.017, 67.598]}
          rotation={[0, -1.571, 0]}
          scale={[0.008, 0.01, 0.01]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIBRARY.geometry}
          material={materials["COLOR.002"]}
          position={[-16.893, 0.397, 149.186]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Parking_Ground.geometry}
          material={materials["COLOR.002"]}
          position={[0.091, -0.018, 1.038]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FRUIT_SHOP.geometry}
          material={materials["COLOR.002"]}
          position={[95.817, -0.017, -153.312]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING.geometry}
          material={materials["COLOR.002"]}
          position={[49.214, -0.017, -134.889]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING.geometry}
          material={materials["COLOR.002"]}
          position={[80.608, -0.017, -152.47]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3001.geometry}
          material={materials["COLOR.002"]}
          position={[63.958, -0.012, -155.284]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ORANGE_BUILDING3.geometry}
          material={materials["COLOR.002"]}
          position={[52.595, -0.017, 18.333]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ORANGE_BUILDING3001.geometry}
          material={materials["COLOR.002"]}
          position={[52.595, -0.017, -18.285]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ORANGE_SMALL_TOWER.geometry}
          material={materials["COLOR.002"]}
          position={[35.105, 0.287, -155.692]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_SMALL_TOWER.geometry}
          material={materials["COLOR.002"]}
          position={[35.29, -0.017, -135.427]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HOTEL.geometry}
          material={materials["COLOR.002"]}
          position={[21.722, 0.287, -142.958]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3002.geometry}
          material={materials["COLOR.002"]}
          position={[4.033, -0.012, -155.87]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BROWN_BUILDING3.geometry}
          material={materials["COLOR.002"]}
          position={[4.704, -0.017, -131.207]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COURT.geometry}
          material={materials["COLOR.002"]}
          position={[53.147, -0.017, 67.569]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.COFFEE_SHOP.geometry}
          material={materials["COLOR.002"]}
          position={[-23.347, -0.017, -22.086]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CLOTHES_SHOP.geometry}
          material={materials["COLOR.002"]}
          position={[-64.576, -0.223, 150.782]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PHARMACY.geometry}
          material={materials["COLOR.002"]}
          position={[97.308, -0.017, -61.17]}
          rotation={[0, 0.182, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING2.geometry}
          material={materials["COLOR.002"]}
          position={[73.039, -0.017, -15.891]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING2001.geometry}
          material={materials["COLOR.002"]}
          position={[73.039, -0.017, 20.172]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TOOLS_SHOP.geometry}
          material={materials["COLOR.002"]}
          position={[-12.039, -0.017, -132.781]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FAST_FOOD.geometry}
          material={materials["COLOR.002"]}
          position={[-14.877, -0.017, -151.74]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CENTER_BUILDING.geometry}
          material={materials["COLOR.002"]}
          position={[67.581, -0.017, -133.308]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground328.geometry}
          material={materials["COLOR.002"]}
          position={[132.869, -0.018, -83.075]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground367.geometry}
          material={materials["COLOR.002"]}
          position={[132.869, -0.018, 1.302]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground382.geometry}
          material={materials["COLOR.002"]}
          position={[132.869, -0.018, 85.679]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ground399.geometry}
          material={materials["COLOR.002"]}
          position={[132.869, -0.018, 145.949]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3003.geometry}
          material={materials["COLOR.002"]}
          position={[94.448, -0.012, -17.691]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3004.geometry}
          material={materials["COLOR.002"]}
          position={[94.448, -0.012, 19.352]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.POLICE_STATION.geometry}
          material={materials["COLOR.002"]}
          position={[126.904, -0.017, 67.662]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ORANGE_BUILDING3002.geometry}
          material={materials["COLOR.002"]}
          position={[121.444, -0.017, 154.463]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3005.geometry}
          material={materials["COLOR.002"]}
          position={[157.563, -0.012, 154.61]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING001.geometry}
          material={materials["COLOR.002"]}
          position={[155.098, -0.017, 128.481]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OPEN_ROAD006.geometry}
          material={materials["COLOR.002"]}
          position={[36.438, -0.02, 1.302]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, -157.014]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE004.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, -149.904]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE004.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, -143.33]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE007.geometry}
          material={materials["COLOR.002"]}
          position={[-8.341, -0.017, -102.888]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE008.geometry}
          material={materials["COLOR.002"]}
          position={[9.116, -0.017, -67.303]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE009.geometry}
          material={materials["COLOR.002"]}
          position={[-19.426, -0.017, -82.957]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE010.geometry}
          material={materials["COLOR.002"]}
          position={[21.228, -0.017, -82.957]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE010.geometry}
          material={materials["COLOR.002"]}
          position={[-15.44, -0.017, -72.569]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE011.geometry}
          material={materials["COLOR.002"]}
          position={[7.302, -0.017, -105.57]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1006.geometry}
          material={materials["COLOR.002"]}
          position={[-18.878, -0.017, -58.867]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1007.geometry}
          material={materials["COLOR.002"]}
          position={[20.926, -0.017, -58.867]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1008.geometry}
          material={materials["COLOR.002"]}
          position={[20.926, -0.017, -109.782]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE.geometry}
          material={materials["COLOR.002"]}
          position={[2.42, -0.017, -87.914]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE001.geometry}
          material={materials["COLOR.002"]}
          position={[-24.421, -0.017, -62.532]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE002.geometry}
          material={materials["COLOR.002"]}
          position={[-24.421, -0.017, -105.72]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE003.geometry}
          material={materials["COLOR.002"]}
          position={[24.905, -0.017, -105.72]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE.geometry}
          material={materials["COLOR.002"]}
          position={[65.176, 0.159, -105.601]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE001.geometry}
          material={materials["COLOR.002"]}
          position={[78.333, 0.159, -111.725]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE002.geometry}
          material={materials["COLOR.002"]}
          position={[90.642, 0.159, -111.725]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE003.geometry}
          material={materials["COLOR.002"]}
          position={[64.954, 0.159, -58.65]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE004.geometry}
          material={materials["COLOR.002"]}
          position={[78.333, 0.159, -54.621]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE005.geometry}
          material={materials["COLOR.002"]}
          position={[90.642, 0.159, -54.621]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE006.geometry}
          material={materials["COLOR.002"]}
          position={[64.271, 0.159, 128.119]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE007.geometry}
          material={materials["COLOR.002"]}
          position={[64.271, 0.159, 154.866]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE008.geometry}
          material={materials["COLOR.002"]}
          position={[28.11, 0.159, 128.119]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE009.geometry}
          material={materials["COLOR.002"]}
          position={[28.11, 0.159, 154.866]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE012.geometry}
          material={materials["COLOR.002"]}
          position={[99.867, 0.159, 128.119]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SQUARE_TREE013.geometry}
          material={materials["COLOR.002"]}
          position={[99.867, 0.159, 154.866]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1017.geometry}
          material={materials["COLOR.002"]}
          position={[133.548, -0.017, -56.478]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1018.geometry}
          material={materials["COLOR.002"]}
          position={[144.166, -0.017, -56.478]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1019.geometry}
          material={materials["COLOR.002"]}
          position={[133.548, -0.017, -157.522]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE1020.geometry}
          material={materials["COLOR.002"]}
          position={[144.166, -0.017, -157.522]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE011.geometry}
          material={materials["COLOR.002"]}
          position={[121.958, -0.017, -137.984]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE012.geometry}
          material={materials["COLOR.002"]}
          position={[138.752, -0.017, -123.199]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE013.geometry}
          material={materials["COLOR.002"]}
          position={[138.752, -0.017, -103.098]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE014.geometry}
          material={materials["COLOR.002"]}
          position={[160.358, -0.017, -123.199]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE015.geometry}
          material={materials["COLOR.002"]}
          position={[160.358, -0.017, -159.82]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE016.geometry}
          material={materials["COLOR.002"]}
          position={[160.358, -0.017, -55.219]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR002.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -149.162]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR003.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -137.402]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR012.geometry}
          material={materials["COLOR.002"]}
          position={[84.859, -0.017, -110.781]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR013.geometry}
          material={materials["COLOR.002"]}
          position={[72.134, -0.017, -110.781]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PHARMACY001.geometry}
          material={materials["COLOR.002"]}
          position={[-26.731, -0.017, -133.37]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3.geometry}
          material={materials["COLOR.002"]}
          position={[52.55, -0.017, 0.055]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3007.geometry}
          material={materials["COLOR.002"]}
          position={[94.752, -0.017, 0.055]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING2002.geometry}
          material={materials["COLOR.002"]}
          position={[73.179, -0.017, 1.584]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3008.geometry}
          material={materials["COLOR.002"]}
          position={[146.19, -0.017, 154.557]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3009.geometry}
          material={materials["COLOR.002"]}
          position={[134.149, -0.012, 154.61]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT004.geometry}
          material={materials["COLOR.002"]}
          position={[113.418, -0.444, -40.859]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT005.geometry}
          material={materials["COLOR.002"]}
          position={[104.143, -0.444, -40.859]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT012.geometry}
          material={materials["COLOR.002"]}
          position={[41.119, -0.035, 32.785]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT013.geometry}
          material={materials["COLOR.002"]}
          position={[31.79, -0.002, 42.085]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT014.geometry}
          material={materials["COLOR.002"]}
          position={[-31.232, -0.035, 32.785]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT015.geometry}
          material={materials["COLOR.002"]}
          position={[-30.952, -0.002, 42.085]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT016.geometry}
          material={materials["COLOR.002"]}
          position={[113.455, -0.342, 32.785]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT017.geometry}
          material={materials["COLOR.002"]}
          position={[104.127, -0.308, 42.085]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT030.geometry}
          material={materials["COLOR.002"]}
          position={[-91.467, -0.47, -41.927]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT032.geometry}
          material={materials["COLOR.002"]}
          position={[-91.467, -0.47, -39.778]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT034.geometry}
          material={materials["COLOR.002"]}
          position={[-91.479, -0.368, 32.989]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT035.geometry}
          material={materials["COLOR.002"]}
          position={[-101.17, -0.312, 42.354]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT036.geometry}
          material={materials["COLOR.002"]}
          position={[-40.42, -0.007, -114.751]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT037.geometry}
          material={materials["COLOR.002"]}
          position={[-30.417, -0.005, -123.715]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT038.geometry}
          material={materials["COLOR.002"]}
          position={[31.86, -0.009, -114.751]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT039.geometry}
          material={materials["COLOR.002"]}
          position={[41.863, 0.001, -123.715]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT040.geometry}
          material={materials["COLOR.002"]}
          position={[103.986, -0.019, -114.751]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT041.geometry}
          material={materials["COLOR.002"]}
          position={[113.286, -0.019, -123.715]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT042.geometry}
          material={materials["COLOR.002"]}
          position={[164.427, -0.354, 42.048]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT043.geometry}
          material={materials["COLOR.002"]}
          position={[173.727, -0.387, 33.083]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT001.geometry}
          material={materials["COLOR.002"]}
          position={[41.006, -0.138, -40.859]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT002.geometry}
          material={materials["COLOR.002"]}
          position={[31.731, -0.138, -40.859]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT003.geometry}
          material={materials["COLOR.002"]}
          position={[-31.244, -0.138, -40.859]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT006.geometry}
          material={materials["COLOR.002"]}
          position={[-40.519, -0.138, -40.859]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT018.geometry}
          material={materials["COLOR.002"]}
          position={[164.292, -0.49, -41.984]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_LIGHT019.geometry}
          material={materials["COLOR.002"]}
          position={[164.336, -0.49, -39.788]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET.geometry}
          material={materials["COLOR.002"]}
          position={[113.51, -0.323, -26.043]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET001.geometry}
          material={materials["COLOR.002"]}
          position={[104.158, -0.019, 24.338]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET002.geometry}
          material={materials["COLOR.002"]}
          position={[173.81, -0.065, -26.043]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET003.geometry}
          material={materials["COLOR.002"]}
          position={[164.458, -0.065, 24.338]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET004.geometry}
          material={materials["COLOR.002"]}
          position={[173.81, -0.065, -123.035]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET005.geometry}
          material={materials["COLOR.002"]}
          position={[164.458, -0.065, -72.654]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET006.geometry}
          material={materials["COLOR.002"]}
          position={[173.81, -0.065, 82.608]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET016.geometry}
          material={materials["COLOR.002"]}
          position={[-46.04, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET017.geometry}
          material={materials["COLOR.002"]}
          position={[-86.146, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET018.geometry}
          material={materials["COLOR.002"]}
          position={[20.463, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET019.geometry}
          material={materials["COLOR.002"]}
          position={[-19.644, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET020.geometry}
          material={materials["COLOR.002"]}
          position={[93.441, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET021.geometry}
          material={materials["COLOR.002"]}
          position={[53.334, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET022.geometry}
          material={materials["COLOR.002"]}
          position={[158.96, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET023.geometry}
          material={materials["COLOR.002"]}
          position={[118.853, -0.138, -41.001]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET024.geometry}
          material={materials["COLOR.002"]}
          position={[138.904, -0.002, 42.174]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET025.geometry}
          material={materials["COLOR.002"]}
          position={[63.481, -0.002, 42.039]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET026.geometry}
          material={materials["COLOR.002"]}
          position={[6.895, -0.035, 32.869]}
          scale={0.007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET027.geometry}
          material={materials["COLOR.002"]}
          position={[-31.035, 0.014, -107.901]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET028.geometry}
          material={materials["COLOR.002"]}
          position={[-1.649, 0.01, -114.693]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET029.geometry}
          material={materials["COLOR.002"]}
          position={[-68.933, 0.017, -123.858]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET030.geometry}
          material={materials["COLOR.002"]}
          position={[55.055, 0.01, -123.858]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET031.geometry}
          material={materials["COLOR.002"]}
          position={[93.453, 0.015, -114.603]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET032.geometry}
          material={materials["COLOR.002"]}
          position={[31.95, 0.287, -76.132]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET033.geometry}
          material={materials["COLOR.002"]}
          position={[113.231, -0.019, -56.717]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET034.geometry}
          material={materials["COLOR.002"]}
          position={[104.187, -0.038, -102.772]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET035.geometry}
          material={materials["COLOR.002"]}
          position={[-91.556, -0.046, -145.797]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET036.geometry}
          material={materials["COLOR.002"]}
          position={[-100.751, -0.023, -82.57]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET037.geometry}
          material={materials["COLOR.002"]}
          position={[-40.463, 0.019, -62.658]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET038.geometry}
          material={materials["COLOR.002"]}
          position={[-31.18, 0.287, -25.542]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET040.geometry}
          material={materials["COLOR.002"]}
          position={[40.925, 0.287, -25.542]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET041.geometry}
          material={materials["COLOR.002"]}
          position={[31.57, 0.012, 26.334]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET042.geometry}
          material={materials["COLOR.002"]}
          position={[-100.566, -0.023, 0.506]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET043.geometry}
          material={materials["COLOR.002"]}
          position={[-100.566, -0.023, 67.193]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET045.geometry}
          material={materials["COLOR.002"]}
          position={[-31.587, 0.005, 87.337]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE003.geometry}
          material={materials["COLOR.002"]}
          position={[171.891, -0.017, 88.156]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE004.geometry}
          material={materials["COLOR.002"]}
          position={[169.022, -0.017, 88.156]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE005.geometry}
          material={materials["COLOR.002"]}
          position={[166.216, -0.017, 88.156]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE006.geometry}
          material={materials["COLOR.002"]}
          position={[171.891, -0.017, 49.089]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE007.geometry}
          material={materials["COLOR.002"]}
          position={[169.022, -0.017, 49.089]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CONE008.geometry}
          material={materials["COLOR.002"]}
          position={[166.216, -0.017, 49.089]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER.geometry}
          material={materials["COLOR.002"]}
          position={[163.511, -0.065, 85.677]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER001.geometry}
          material={materials["COLOR.002"]}
          position={[163.511, -0.065, 77.176]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER002.geometry}
          material={materials["COLOR.002"]}
          position={[163.511, -0.065, 67.725]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER003.geometry}
          material={materials["COLOR.002"]}
          position={[163.511, -0.065, 59.019]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER004.geometry}
          material={materials["COLOR.002"]}
          position={[163.511, -0.065, 49.674]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER005.geometry}
          material={materials["COLOR.002"]}
          position={[114.212, -0.019, 85.677]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER006.geometry}
          material={materials["COLOR.002"]}
          position={[114.212, -0.019, 77.176]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER007.geometry}
          material={materials["COLOR.002"]}
          position={[114.212, -0.019, 67.725]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER008.geometry}
          material={materials["COLOR.002"]}
          position={[114.212, -0.019, 59.019]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRAFFIC_CYLINDER009.geometry}
          material={materials["COLOR.002"]}
          position={[114.212, -0.019, 49.674]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CONCRETE001.geometry}
          material={materials["COLOR.002"]}
          position={[126.765, -0.017, 45.418]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CONCRETE002.geometry}
          material={materials["COLOR.002"]}
          position={[150.165, -0.017, 89.941]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CONCRETE003.geometry}
          material={materials["COLOR.002"]}
          position={[126.765, -0.017, 89.941]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2.geometry}
          material={materials["COLOR.002"]}
          position={[95.3, -0.004, -172.053]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2001.geometry}
          material={materials["COLOR.002"]}
          position={[12.451, -0.004, -172.053]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2002.geometry}
          material={materials["COLOR.002"]}
          position={[-68.248, -0.004, -172.053]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2003.geometry}
          material={materials["COLOR.002"]}
          position={[-114.202, -0.281, -162.794]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2004.geometry}
          material={materials["COLOR.002"]}
          position={[-28.212, -0.004, -162.794]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2005.geometry}
          material={materials["COLOR.002"]}
          position={[64.107, -0.004, -162.794]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2014.geometry}
          material={materials["COLOR.002"]}
          position={[-137.428, -0.021, 84.239]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2015.geometry}
          material={materials["COLOR.002"]}
          position={[-137.428, -0.021, 10.428]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2016.geometry}
          material={materials["COLOR.002"]}
          position={[-137.428, -0.021, -69.952]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2018.geometry}
          material={materials["COLOR.002"]}
          position={[-127.909, -0.021, 45.317]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2019.geometry}
          material={materials["COLOR.002"]}
          position={[-127.909, -0.415, -30.196]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LIGHT_STREET2020.geometry}
          material={materials["COLOR.002"]}
          position={[-127.909, -0.021, -126.445]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN.geometry}
          material={materials["COLOR.002"]}
          position={[148.546, 0.018, 102.517]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN001.geometry}
          material={materials["COLOR.002"]}
          position={[-40.752, 0.032, 14.698]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN002.geometry}
          material={materials["COLOR.002"]}
          position={[113.673, -0.019, -129.003]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN003.geometry}
          material={materials["COLOR.002"]}
          position={[-101.184, -0.023, -117.935]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN006.geometry}
          material={materials["COLOR.002"]}
          position={[103.878, -0.019, -10.351]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN007.geometry}
          material={materials["COLOR.002"]}
          position={[-31.022, 0.023, -79.86]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN008.geometry}
          material={materials["COLOR.002"]}
          position={[103.758, -0.019, -94.046]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN009.geometry}
          material={materials["COLOR.002"]}
          position={[12.399, -0.054, 32.434]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN010.geometry}
          material={materials["COLOR.002"]}
          position={[-101.202, -0.023, 20.613]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN012.geometry}
          material={materials["COLOR.002"]}
          position={[140.782, -0.035, 32.47]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN013.geometry}
          material={materials["COLOR.002"]}
          position={[1.55, -0.107, -29.836]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN014.geometry}
          material={materials["COLOR.002"]}
          position={[1.55, 0.026, -124.06]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREEN_RECYCLE_BIN015.geometry}
          material={materials["COLOR.002"]}
          position={[133.662, -0.107, -29.904]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CARS_PARKING.geometry}
          material={materials["COLOR.002"]}
          position={[70.943, 0.019, 80.325]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_BUILDING3006.geometry}
          material={materials["COLOR.002"]}
          position={[-42.783, -0.017, -153.3]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR022.geometry}
          material={materials["COLOR.002"]}
          position={[0.632, -0.017, -57.347]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR023.geometry}
          material={materials["COLOR.002"]}
          position={[0.632, -0.017, -74.788]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR024.geometry}
          material={materials["COLOR.002"]}
          position={[0.632, -0.017, -91.385]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR025.geometry}
          material={materials["COLOR.002"]}
          position={[0.632, -0.017, -108.826]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR026.geometry}
          material={materials["COLOR.002"]}
          position={[27.979, -0.017, -57.347]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR027.geometry}
          material={materials["COLOR.002"]}
          position={[27.979, -0.017, -74.788]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR028.geometry}
          material={materials["COLOR.002"]}
          position={[27.979, -0.017, -91.385]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR029.geometry}
          material={materials["COLOR.002"]}
          position={[27.979, -0.017, -108.826]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR030.geometry}
          material={materials["COLOR.002"]}
          position={[-26.999, -0.017, -57.347]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR031.geometry}
          material={materials["COLOR.002"]}
          position={[-26.999, -0.017, -74.788]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR032.geometry}
          material={materials["COLOR.002"]}
          position={[-26.999, -0.017, -91.385]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR033.geometry}
          material={materials["COLOR.002"]}
          position={[-26.999, -0.017, -108.826]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SWEET_SHOP.geometry}
          material={materials["COLOR.002"]}
          position={[-26.952, -0.017, -153.526]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE032.geometry}
          material={materials["COLOR.002"]}
          position={[-78.087, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE033.geometry}
          material={materials["COLOR.002"]}
          position={[-53.84, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE034.geometry}
          material={materials["COLOR.002"]}
          position={[-8.832, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE035.geometry}
          material={materials["COLOR.002"]}
          position={[15.076, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE036.geometry}
          material={materials["COLOR.002"]}
          position={[60.849, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE037.geometry}
          material={materials["COLOR.002"]}
          position={[85.009, -0.042, -40.924]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE038.geometry}
          material={materials["COLOR.002"]}
          position={[128.078, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE039.geometry}
          material={materials["COLOR.002"]}
          position={[150.777, 0.037, -40.924]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR038.geometry}
          material={materials["COLOR.002"]}
          position={[28.65, -0.017, 147.373]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR039.geometry}
          material={materials["COLOR.002"]}
          position={[28.65, -0.017, 138.784]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR040.geometry}
          material={materials["COLOR.002"]}
          position={[64.202, -0.017, 147.373]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR041.geometry}
          material={materials["COLOR.002"]}
          position={[64.202, -0.017, 138.784]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FRUIT_SHOP002.geometry}
          material={materials["COLOR.002"]}
          position={[-43.005, -0.017, -133.282]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ORANGE_SMALL_TOWER001.geometry}
          material={materials["COLOR.002"]}
          position={[-57.047, 0.287, -154.033]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WHITE_SMALL_TOWER001.geometry}
          material={materials["COLOR.002"]}
          position={[-56.862, -0.017, -133.768]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPORT_CENTER.geometry}
          material={materials["COLOR.002"]}
          position={[-77.078, -0.017, -151.93]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE017.geometry}
          material={materials["COLOR.002"]}
          position={[160.358, -0.017, -26.627]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE018.geometry}
          material={materials["COLOR.002"]}
          position={[160.707, -0.017, 29.521]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE019.geometry}
          material={materials["COLOR.002"]}
          position={[118.662, -0.017, -26.627]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE020.geometry}
          material={materials["COLOR.002"]}
          position={[128.133, -0.017, 29.521]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.House004.geometry}
          material={materials["COLOR.002"]}
          position={[120.864, -0.017, -149.575]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.House002.geometry}
          material={materials["COLOR.002"]}
          position={[120.864, -0.017, -15.097]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SMALL_HOUSE002.geometry}
          material={materials["COLOR.002"]}
          position={[121.241, -0.017, -114.366]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SMALL_HOUSE001.geometry}
          material={materials["COLOR.002"]}
          position={[155.026, -0.017, -112.17]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.House001.geometry}
          material={materials["COLOR.002"]}
          position={[157.026, 0.287, -149.136]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.House003.geometry}
          material={materials["COLOR.002"]}
          position={[157.026, 0.287, -15.2]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BIG_HOUSE001.geometry}
          material={materials["COLOR.002"]}
          position={[121.829, -0.016, -73.19]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BIG_HOUSE004.geometry}
          material={materials["COLOR.002"]}
          position={[155.517, -0.016, -73.19]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BIG_HOUSE002.geometry}
          material={materials["COLOR.002"]}
          position={[121.829, -0.016, 18.881]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BIG_HOUSE003.geometry}
          material={materials["COLOR.002"]}
          position={[155.517, -0.016, 18.881]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE021.geometry}
          material={materials["COLOR.002"]}
          position={[138.907, -0.017, -26.627]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE022.geometry}
          material={materials["COLOR.002"]}
          position={[138.907, -0.017, 29.313]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GREY_BUILDING2003.geometry}
          material={materials["COLOR.002"]}
          position={[134.85, -0.017, 129.573]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FRUIT_SHOP001.geometry}
          material={materials["COLOR.002"]}
          position={[120.416, -0.017, 128.512]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FL_WHEEL.geometry}
          material={materials["COLOR.002"]}
          position={[27.003, 0.672, 28.984]}
          rotation={[0, 1.571, 0]}
          scale={0.011}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT061.geometry}
          material={materials["COLOR.002"]}
          position={[4.624, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT062.geometry}
          material={materials["COLOR.002"]}
          position={[-4.699, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polis_car.geometry}
          material={materials["COLOR.002"]}
          position={[142.196, 0.402, 66.521]}
          scale={0.011}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FL_WHEEL007.geometry}
          material={materials["COLOR.002"]}
          position={[16.238, 0.421, 29.717]}
          rotation={[Math.PI, -1.222, Math.PI]}
          scale={[0.012, 0.011, 0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TENNIS_STADIUM.geometry}
          material={materials["COLOR.002"]}
          position={[83.415, -0.017, 141.067]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Book_Shop.geometry}
          material={materials["COLOR.002"]}
          position={[-49.83, -0.017, -107.005]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Market001.geometry}
          material={materials["COLOR.002"]}
          position={[-81.227, -0.017, -82.631]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR004.geometry}
          material={materials["COLOR.002"]}
          position={[-45.129, -0.017, -78.149]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR014.geometry}
          material={materials["COLOR.002"]}
          position={[-45.129, -0.017, -90.623]}
          rotation={[0, 1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR015.geometry}
          material={materials["COLOR.002"]}
          position={[-71.939, -0.017, -108.826]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR016.geometry}
          material={materials["COLOR.002"]}
          position={[-84.362, -0.017, -108.826]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE026.geometry}
          material={materials["COLOR.002"]}
          position={[-87.971, 0.159, -66.036]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["COLOR.002"]}
          position={[-55.028, -0.017, -60.893]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BIG_BUILDING.geometry}
          material={materials["COLOR.002"]}
          position={[155.496, 0.287, 51.161]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE023.geometry}
          material={materials["COLOR.002"]}
          position={[-72.282, 0.159, -66.036]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE024.geometry}
          material={materials["COLOR.002"]}
          position={[-87.971, 0.159, -99.3]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE025.geometry}
          material={materials["COLOR.002"]}
          position={[-72.282, 0.159, -99.3]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Game_Shop.geometry}
          material={materials["COLOR.002"]}
          position={[-80.951, -0.017, -133.392]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials["COLOR.002"]}
          position={[-11.798, -0.035, 32.555]}
          scale={0.008}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["COLOR.002"]}
          position={[31.466, 0.285, 6.429]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT065.geometry}
          material={materials["COLOR.002"]}
          position={[4.624, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT066.geometry}
          material={materials["COLOR.002"]}
          position={[-4.699, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT067.geometry}
          material={materials["COLOR.002"]}
          position={[4.624, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT068.geometry}
          material={materials["COLOR.002"]}
          position={[-4.699, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT069.geometry}
          material={materials["COLOR.002"]}
          position={[4.624, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT070.geometry}
          material={materials["COLOR.002"]}
          position={[-4.699, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT071.geometry}
          material={materials["COLOR.002"]}
          position={[-16.669, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT072.geometry}
          material={materials["COLOR.002"]}
          position={[-29.027, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT073.geometry}
          material={materials["COLOR.002"]}
          position={[-16.669, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT074.geometry}
          material={materials["COLOR.002"]}
          position={[-29.027, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT075.geometry}
          material={materials["COLOR.002"]}
          position={[-16.669, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT076.geometry}
          material={materials["COLOR.002"]}
          position={[-29.027, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT077.geometry}
          material={materials["COLOR.002"]}
          position={[-16.669, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT078.geometry}
          material={materials["COLOR.002"]}
          position={[-29.027, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT079.geometry}
          material={materials["COLOR.002"]}
          position={[29.663, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT080.geometry}
          material={materials["COLOR.002"]}
          position={[17.305, -0.118, 58.781]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT081.geometry}
          material={materials["COLOR.002"]}
          position={[29.663, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT082.geometry}
          material={materials["COLOR.002"]}
          position={[17.305, -0.118, 65.175]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT083.geometry}
          material={materials["COLOR.002"]}
          position={[29.663, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT084.geometry}
          material={materials["COLOR.002"]}
          position={[17.305, -0.118, 52.464]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT085.geometry}
          material={materials["COLOR.002"]}
          position={[29.663, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT086.geometry}
          material={materials["COLOR.002"]}
          position={[17.305, -0.118, 45.853]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT087.geometry}
          material={materials["COLOR.002"]}
          position={[-16.669, -0.118, 84.584]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT088.geometry}
          material={materials["COLOR.002"]}
          position={[-29.027, -0.118, 84.584]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT089.geometry}
          material={materials["COLOR.002"]}
          position={[-16.669, -0.118, 90.977]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT090.geometry}
          material={materials["COLOR.002"]}
          position={[-29.027, -0.118, 90.977]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT091.geometry}
          material={materials["COLOR.002"]}
          position={[-16.669, -0.118, 78.266]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT092.geometry}
          material={materials["COLOR.002"]}
          position={[-29.027, -0.118, 78.266]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT093.geometry}
          material={materials["COLOR.002"]}
          position={[-16.669, -0.118, 71.656]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT094.geometry}
          material={materials["COLOR.002"]}
          position={[-29.027, -0.118, 71.656]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT095.geometry}
          material={materials["COLOR.002"]}
          position={[29.636, -0.118, 84.584]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT096.geometry}
          material={materials["COLOR.002"]}
          position={[17.279, -0.118, 84.584]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT097.geometry}
          material={materials["COLOR.002"]}
          position={[29.636, -0.118, 90.977]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT098.geometry}
          material={materials["COLOR.002"]}
          position={[17.279, -0.118, 90.977]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT099.geometry}
          material={materials["COLOR.002"]}
          position={[29.636, -0.118, 78.266]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT100.geometry}
          material={materials["COLOR.002"]}
          position={[17.279, -0.118, 78.266]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT101.geometry}
          material={materials["COLOR.002"]}
          position={[29.636, -0.118, 71.656]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TREE_POT102.geometry}
          material={materials["COLOR.002"]}
          position={[17.279, -0.118, 71.656]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE025.geometry}
          material={materials["COLOR.002"]}
          position={[-45.466, 0.159, 72.362]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE030.geometry}
          material={materials["COLOR.002"]}
          position={[-29.05, 0.159, 1]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE031.geometry}
          material={materials["COLOR.002"]}
          position={[29.596, 0.159, 1]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE040.geometry}
          material={materials["COLOR.002"]}
          position={[-45.466, 0.159, 8.089]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE041.geometry}
          material={materials["COLOR.002"]}
          position={[-63.193, 0.159, -17.856]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE042.geometry}
          material={materials["COLOR.002"]}
          position={[-63.193, 0.159, -26.992]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE043.geometry}
          material={materials["COLOR.002"]}
          position={[-70.24, 0.159, 89.664]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE044.geometry}
          material={materials["COLOR.002"]}
          position={[-70.24, 0.159, 81.463]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE027.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, -149.904]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE001.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, -157.014]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE002.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, -157.014]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE028.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, -121.736]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE029.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, -121.736]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE005.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, -115.162]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR042.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -120.994]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR043.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -109.234]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE003.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, -128.846]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE004.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, -128.846]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE005.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, -128.846]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE030.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, -93.569]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE031.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, -93.569]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE006.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, -86.994]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR044.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -92.826]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR045.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -81.067]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE006.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, -100.678]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE007.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, -100.678]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE008.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, -100.678]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE032.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, -65.401]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE033.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, -65.401]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE007.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, -58.826]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR046.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -64.658]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR047.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -52.899]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE009.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, -72.51]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE010_1.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, -72.51]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE011_1.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, -72.51]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE034.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, -37.233]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE035.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, -37.233]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE008.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, -30.658]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR048.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -36.49]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR049.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -24.731]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE012.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, -44.342]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE013.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, -44.342]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE014.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, -44.342]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE036.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, -9.065]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE037.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, -9.065]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE009.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, -2.49]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR050.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, -8.322]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR051.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 3.437]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE015.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, -16.174]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE016.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, -16.174]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE017.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, -16.174]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE038.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, 19.103]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE039.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, 19.103]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE010.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, 25.678]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR052.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 19.846]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR053.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 31.605]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE018.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, 11.994]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE019.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, 11.994]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE020.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, 11.994]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE040.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, 47.271]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE041.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, 47.271]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE011.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, 53.845]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR054.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 48.013]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR055.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 59.773]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE021.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, 40.162]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE022.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, 40.162]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE023.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, 40.162]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE042.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, 75.439]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE043.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, 75.439]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE012.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, 82.013]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR056.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 76.181]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR057.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 87.941]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE024.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, 68.329]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE025_1.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, 68.329]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE026.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, 68.329]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE044.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, 103.607]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE045.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, 103.607]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE013.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, 110.181]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR058.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 104.349]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR059.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 116.109]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE027.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, 96.497]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE028.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, 96.497]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE029.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, 96.497]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE046.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, 131.774]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE047.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, 131.774]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE014.geometry}
          material={materials["COLOR.002"]}
          position={[-113.823, -0.017, 138.349]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR060.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 132.517]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR061.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 144.276]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE030_1.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, 124.665]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE031_1.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, 124.665]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE032.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, 124.665]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE048.geometry}
          material={materials["COLOR.002"]}
          position={[-105.29, -0.017, 159.942]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE049.geometry}
          material={materials["COLOR.002"]}
          position={[-123.919, -0.017, 159.942]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR062.geometry}
          material={materials["COLOR.002"]}
          position={[-114.216, -0.017, 160.685]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE033.geometry}
          material={materials["COLOR.002"]}
          position={[-104.818, -0.084, 152.833]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE034.geometry}
          material={materials["COLOR.002"]}
          position={[-123.447, -0.084, 152.833]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE035.geometry}
          material={materials["COLOR.002"]}
          position={[-114.045, -0.084, 152.833]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001.geometry}
          material={materials["COLOR.002"]}
          position={[48.492, -0.018, -34.86]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE050.geometry}
          material={materials["COLOR.002"]}
          position={[-17.914, -0.017, 126.964]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE051.geometry}
          material={materials["COLOR.002"]}
          position={[-17.914, -0.017, 108.335]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE052.geometry}
          material={materials["COLOR.002"]}
          position={[-46.082, -0.017, 126.964]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE053.geometry}
          material={materials["COLOR.002"]}
          position={[-46.082, -0.017, 108.335]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE015.geometry}
          material={materials["COLOR.002"]}
          position={[-24.489, -0.017, 118.431]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR063.geometry}
          material={materials["COLOR.002"]}
          position={[-18.657, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR064.geometry}
          material={materials["COLOR.002"]}
          position={[-30.416, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR065.geometry}
          material={materials["COLOR.002"]}
          position={[-46.825, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE036.geometry}
          material={materials["COLOR.002"]}
          position={[-10.805, -0.084, 127.436]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE037.geometry}
          material={materials["COLOR.002"]}
          position={[-10.805, -0.084, 108.807]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE038.geometry}
          material={materials["COLOR.002"]}
          position={[-10.805, -0.084, 118.209]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE039.geometry}
          material={materials["COLOR.002"]}
          position={[-38.973, -0.084, 127.436]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE040_1.geometry}
          material={materials["COLOR.002"]}
          position={[-38.973, -0.084, 108.807]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE041_1.geometry}
          material={materials["COLOR.002"]}
          position={[-38.973, -0.084, 118.209]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE054.geometry}
          material={materials["COLOR.002"]}
          position={[-65.097, -0.017, 126.964]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE055.geometry}
          material={materials["COLOR.002"]}
          position={[-65.097, -0.017, 108.335]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE056.geometry}
          material={materials["COLOR.002"]}
          position={[-93.265, -0.017, 126.964]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE057.geometry}
          material={materials["COLOR.002"]}
          position={[-93.265, -0.017, 108.335]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE016.geometry}
          material={materials["COLOR.002"]}
          position={[-71.672, -0.017, 118.431]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR066.geometry}
          material={materials["COLOR.002"]}
          position={[-65.84, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR067.geometry}
          material={materials["COLOR.002"]}
          position={[-77.599, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR068.geometry}
          material={materials["COLOR.002"]}
          position={[-94.008, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE042_1.geometry}
          material={materials["COLOR.002"]}
          position={[-57.988, -0.084, 127.436]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE043_1.geometry}
          material={materials["COLOR.002"]}
          position={[-57.988, -0.084, 108.807]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE044_1.geometry}
          material={materials["COLOR.002"]}
          position={[-57.988, -0.084, 118.209]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE045.geometry}
          material={materials["COLOR.002"]}
          position={[-86.156, -0.084, 127.436]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE046.geometry}
          material={materials["COLOR.002"]}
          position={[-86.156, -0.084, 108.807]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE047.geometry}
          material={materials["COLOR.002"]}
          position={[-86.156, -0.084, 118.209]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE059.geometry}
          material={materials["COLOR.002"]}
          position={[31.364, -0.017, 108.335]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE061.geometry}
          material={materials["COLOR.002"]}
          position={[3.196, -0.017, 108.335]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE017.geometry}
          material={materials["COLOR.002"]}
          position={[24.79, -0.017, 118.431]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR069.geometry}
          material={materials["COLOR.002"]}
          position={[30.622, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR070.geometry}
          material={materials["COLOR.002"]}
          position={[18.862, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR071.geometry}
          material={materials["COLOR.002"]}
          position={[2.454, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE049.geometry}
          material={materials["COLOR.002"]}
          position={[38.473, -0.084, 108.807]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE050.geometry}
          material={materials["COLOR.002"]}
          position={[38.473, -0.084, 118.209]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE052.geometry}
          material={materials["COLOR.002"]}
          position={[10.306, -0.084, 108.807]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE053.geometry}
          material={materials["COLOR.002"]}
          position={[10.306, -0.084, 118.209]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE063.geometry}
          material={materials["COLOR.002"]}
          position={[92.609, -0.017, 108.335]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.REAL_TREE065.geometry}
          material={materials["COLOR.002"]}
          position={[64.441, -0.017, 108.335]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SPHEREICAL_TREE018.geometry}
          material={materials["COLOR.002"]}
          position={[86.035, -0.017, 118.431]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR072.geometry}
          material={materials["COLOR.002"]}
          position={[91.867, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR073.geometry}
          material={materials["COLOR.002"]}
          position={[80.107, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TALL_CHAIR074.geometry}
          material={materials["COLOR.002"]}
          position={[63.699, -0.017, 118.038]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE055.geometry}
          material={materials["COLOR.002"]}
          position={[99.719, -0.084, 108.807]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE056.geometry}
          material={materials["COLOR.002"]}
          position={[99.719, -0.084, 118.209]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE058.geometry}
          material={materials["COLOR.002"]}
          position={[71.551, -0.084, 108.807]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TRIANGLE_TREE059.geometry}
          material={materials["COLOR.002"]}
          position={[71.551, -0.084, 118.209]}
          rotation={[0, -1.571, 0]}
          scale={0.01}
        />
        <group position={[-7.977, 1.647, 32.43]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh1382.geometry}
            material={materials["tabela_d.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh1382_1.geometry}
            material={materials["gunes_s_tabela.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh1382_2.geometry}
            material={materials["oyun_m_tabela.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh1382_3.geometry}
            material={materials["tuik_b_tabela.001"]}
          />
        </group>
        <group position={[-27.737, 1.647, 81.558]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh1383.geometry}
            material={materials["tabela_d.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh1383_1.geometry}
            material={materials["gunes_s_tabela.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh1383_2.geometry}
            material={materials["oyun_m_tabela.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh1383_3.geometry}
            material={materials["tuik_b_tabela.001"]}
          />
        </group>
      </group>
    </>
  );
}

// useGLTF.preload("./models/city_c9_eng.glb");
