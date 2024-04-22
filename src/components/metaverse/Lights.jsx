import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

const Lights = (props) => {
  const lightRef = useRef();

  // useHelper(lightRef, DirectionalLightHelper, 50, "red");

  return (
    <>
      <ambientLight intensity={0.4} />
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      {/* <directionalLight
        ref={lightRef}
        intensity={0.8}
        position={[80, 80, 30]}
        castShadow
        shadow-camera-left={-80}
        shadow-camera-right={80}
        shadow-camera-top={80}
        shadow-camera-bottom={-80}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      /> */}

      <directionalLight
        ref={lightRef}
        intensity={0.8}
        position={[80, 80, 30]}
        castShadow
        shadow-mapSize={[512, 512]}
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
      </directionalLight>

      {/* <pointLight position={[-10, -10, -10]} /> */}
      <hemisphereLight args={["#7cdbe6", "#5e9c49", 0.2]} />
    </>
  );
};

export default Lights;
