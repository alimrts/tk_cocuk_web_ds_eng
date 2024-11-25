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
} from "@react-three/drei";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import mySvgImage from "./cursor_360.svg";
import { extend } from "@react-three/fiber";
import { RingGeometry } from "three";

// Extend the THREE namespace
extend({ RingGeometry });


function LoaderBase() {
  const { progress } = useProgress();

  console.log("prog: ", progress);
  return (
    <Html center>
      {" "}
      <div style={{ fontSize: 28, color: "white" }}>
        Loading... {Math.round(progress)} %
      </div>
    </Html>
  );
}

const Orbit = ({ radius, thickness, rotation, children }) => {
  const orbitRef = useRef();

  return (
    <group ref={orbitRef} rotation={rotation}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry
          args={[radius - thickness / 2, radius + thickness / 2, 128]}
        />
        <meshBasicMaterial color="gray" side={THREE.DoubleSide} />
      </mesh>
      {children}
    </group>
  );
};

const Orbits = ({ props }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const group = useRef();
  const groupRef = useRef();

  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      40
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    // Calculate the rotation angle based on the clock
    const rotationAngle = clock.elapsedTime;

    // Update the rotation of the group
    groupRef.current.rotation.y = rotationAngle / 8;
  });

  const glowColorForFrontlight = 0x22ff88;
  const redGlowColor = 0xff4400;
  const glowIntensity = 8; // Adjust as needed

  const lightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "yellow",
    emissive: redGlowColor,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.08,
  });

  const orbitMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "green",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 10,
    transparent: true,
    opacity: 0.8,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="mercury_BezierCircle001_34" scale={9.695}>
                <mesh
                  name="Object_36"
                  geometry={nodes.Object_36.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="venus_BezierCircle001_35"
                rotation={[0, 0.028, 0]}
                scale={12.235}
              >
                <mesh
                  name="Object_38"
                  geometry={nodes.Object_38.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="erath_BezierCircle001_36" scale={16.115}>
                <mesh
                  name="Object_40"
                  geometry={nodes.Object_40.geometry}
                  material={orbitMaterial}
                />
              </group>
              <group name="mars_BezierCircle001_37" scale={20.451}>
                <mesh
                  name="Object_42"
                  geometry={nodes.Object_42.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="jupiter_BezierCircle001_38" scale={28.775}>
                <mesh
                  name="Object_44"
                  geometry={nodes.Object_44.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="saturn_BezierCircle001_39" scale={36.61}>
                <mesh
                  name="Object_46"
                  geometry={nodes.Object_46.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="uranus_BezierCircle001_40" scale={44.26}>
                <mesh
                  name="Object_48"
                  geometry={nodes.Object_48.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="neptune_BezierCircle001_41" scale={49.927}>
                <mesh
                  name="Object_50"
                  geometry={nodes.Object_50.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="pluto_BezierCircle001_42" scale={54.22}>
                <mesh
                  name="Object_52"
                  geometry={nodes.Object_52.geometry}
                  material={materials.Material}
                />
              </group>

              <group ref={groupRef} name="sun_53" scale={5.997}>
                <mesh
                  ref={planetRef}
                  geometry={nodes.Object_56.geometry}
                  material={materials.material}
                  onClick={handlePointerClick}
                  onPointerOver={handlePointerOver1}
                  onPointerOut={handlePointerOut1}
                />
                <mesh
                  geometry={nodes.Object_56.geometry}
                  material={lightMaterial}
                />
                {isClicked ? (
                  <Html>
                    <div
                      className="glassFrame"
                      style={{
                        position: "relative",
                        top: -200,
                        left: -125,
                        fontSize: "14pt",
                        cursor: "pointer",
                        color: "lightGreen",
                        padding: "4px",
                      }}
                    >
                      The Sun
                      <div
                        class="glassFrameContent"
                        style={{
                          fontSize: "12pt",
                          width: "240px",
                        }}
                      >
                        The Sun is the star at the center of the solar system.{" "}
                        <br />
                        <br />
                        The Sun's gravity holds the solar system together.
                        <br />
                        <br />
                        In the solar system; there are planets Mercury, Venus,
                        Earth, Mars, Jupiter, Saturn, Uranus and Neptune; dwarf
                        planets Pluto, Ceres, Makemake, Haumea and Eris with
                        hundreds of moons; and millions of asteroids, comets,
                        and meteoroids.
                      </div>
                    </div>
                    <button
                      className="closeButton"
                      onClick={handleCloseButtonClick}
                      style={{ top: "-198px", right: "-138px" }}
                    />
                  </Html>
                ) : (
                  <Html>
                    <div
                      className="glassFrame"
                      style={{
                        position: "relative",
                        top: -100,
                        left: -34,
                        cursor: "pointer",
                        fontSize: "12pt",
                      }}
                      onClick={handlePointerClick}
                    >
                      <div
                        class="glassFrameContent"
                        style={{
                          fontSize: "12pt",
                        }}
                      >
                        Sun
                      </div>
                    </div>
                  </Html>
                )}
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

const PlanetMercury = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.002,
  });

  const handlePointerClick = () => {
    // Toggle the click
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_5"
          scale={planetScale * 3}
          geometry={nodes.Object_5.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_5"
          scale={planetScale}
          geometry={nodes.Object_5.geometry}
          material={materials.mercury}
        />

        <mesh
          name="Object_5"
          scale={planetScale * 1.1}
          geometry={nodes.Object_5.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                MERCURY
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  A day on Mercury lasts approximately 59 Earth days.
                  <br />
                  <br />
                  Merkür'de bir yıl, 88 Dünya günü sürer.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Backward
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                MERCURY
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  It is the smallest planet in our solar system and closest to
                  the Sun. <br />
                  <br />
                  Its surface is covered with rocks and craters. <br />
                  <br />
                  Mercury has no atmosphere and no moons.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  Forward
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}{" "}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -60,
                left: -34,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                MERCURY
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetVenus = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y -= rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_8"
          scale={planetScale * 1.5}
          geometry={nodes.Object_8.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_8"
          scale={planetScale}
          geometry={nodes.Object_8.geometry}
          material={materials.venus}
        />

        <mesh
          name="Object_8"
          scale={planetScale * 1.1}
          geometry={nodes.Object_8.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Venus
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  It rotates in the opposite direction to Earth and most other
                  planets. Because it rotates in the opposite direction, the Sun
                  rises in the west and sets in the east.
                  <br />
                  <br />
                  A day on Venus lasts approximately 243 Earth days.
                  <br />
                  <br />A year on Venus lasts 225 Earth days. This means that
                  the Sun rises twice each year on Venus, although it is still
                  the same day on Venus.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Backward
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Venus
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Although Mercury is the closest planet to the Sun, Venus is
                  the hottest planet. This is because it has a thick atmosphere
                  containing dense greenhouse gases. These gases trap heat from
                  the Sun and make Venus hot. <br />
                  <br />
                  There are mountains and volcanoes on the surface of Venus.{" "}
                  <br />
                  <br />
                  Venus has no moons.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  Forward
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -75,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Venus
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetEarth = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.02);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_11"
          scale={planetScale * 1.5}
          geometry={nodes.Object_11.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_11"
          scale={planetScale}
          geometry={nodes.Object_11.geometry}
          material={materials.earth}
        />

        <mesh
          name="Object_11"
          scale={planetScale * 1.1}
          geometry={nodes.Object_11.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Earth
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Earth's satellite is the Moon.
                  <br />
                  <br />
                  A day on Earth lasts slightly less than 24 hours (23.9 hours).
                  <br />
                  <br />A year on Earth lasts 365.25 days. This extra 0.25 is
                  added as a day to our calendar every four years. This is
                  called a leap day (in a leap year).
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Backward
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Earth
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  It is the planet we live in. <br />
                  <br />
                  It is a terrestrial and rocky planet. It has a solid crust, a
                  surface that includes mountains, valleys, canyons, plains,
                  volcanoes, and many landforms. 70% of it consists of oceans
                  and seas.
                  <br />
                  <br />
                  The atmosphere consists mostly of nitrogen and contains plenty
                  of oxygen so we can breathe.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  Forward
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}{" "}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -70,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Earth
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetMars = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.02);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_14"
          scale={planetScale * 1.5}
          geometry={nodes.Object_14.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_14"
          scale={planetScale}
          geometry={nodes.Object_14.geometry}
          material={materials.mars}
        />

        <mesh
          name="Object_14"
          scale={planetScale * 1.1}
          geometry={nodes.Object_14.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Mars
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Mars is the only planet on which a rover has been sent to
                  orbit, take photographs and make measurements to find out
                  whether life has existed in the past or future.
                  <br />
                  <br />
                  A day on Mars lasts approximately 1 Earth day (24.6 hours).
                  <br />
                  <br />A year on Mars lasts 687 Earth days.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Backward
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Mars
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  It appears red due to the iron in its soil, and therefore it
                  is also called the "Red Planet".
                  <br />
                  <br />
                  It is a cold desert planet. Like Earth, Mars has seasons,
                  polar ice caps, volcanoes, canyons and weather.
                  <br />
                  <br />
                  Its atmosphere is very thin.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  Forward
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -65,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Mars
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetJupiter = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_17"
          scale={planetScale * 1.5}
          geometry={nodes.Object_17.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_17"
          scale={planetScale}
          geometry={nodes.Object_17.geometry}
          material={materials.jupiter}
        />

        <mesh
          name="Object_17"
          scale={planetScale * 1.1}
          geometry={nodes.Object_17.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Jupiter
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  It has big storms like the Great Red Spot, which has been
                  going for hundreds of years.
                  <br />
                  <br />
                  Jupiter also has rings, but they're too faint to see very
                  well.
                  <br />
                  <br />A day on Jupiter lasts 10 hours. A year on Jupiter lasts
                  approximately 11.8 Earth years.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Backward
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Jupiter
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  It is the largest planet in our solar system.
                  <br />
                  <br />
                  Jupiter is a gas giant, so it does not have a solid surface.
                  <br />
                  <br />
                  It has a very thick atmosphere. It is covered in swirling
                  cloud stripes.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  Forward
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -70,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Jupiter
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetSaturn = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 2
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };
  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_20"
          scale={planetScale * 1.5}
          geometry={nodes.Object_20.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object20"
          scale={planetScale}
          geometry={nodes.Object_20.geometry}
          material={materials.saturn}
        />

        <mesh
          name="Object_20"
          scale={planetScale * 1.1}
          geometry={nodes.Object_20.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />
        <mesh
          name="Object_22"
          scale={planetScale * 1.65}
          geometry={nodes.Object_22.geometry}
          material={materials.saturn_ring}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Saturn
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Saturn is a gas giant. It has a thick atmosphere.
                  <br />
                  <br />
                  A day on Saturn lasts 10.7 hours.
                  <br />
                  <br />A year on Saturn lasts 29 Earth years.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Backward
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Saturn
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  It is the planet with the most beautiful rings in our solar
                  system.
                  <br />
                  <br />
                  Saturn has 7 main rings with gaps between them.
                  <br />
                  <br />
                  These rings are made of chunks of ice and rock.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  Forward
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -70,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Saturn
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetUranus = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 1.4
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_25"
          scale={planetScale * 2}
          geometry={nodes.Object_25.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_25"
          scale={planetScale}
          geometry={nodes.Object_25.geometry}
          material={materials.uranus}
        />

        <mesh
          name="Object_25"
          scale={planetScale * 1.1}
          geometry={nodes.Object_25.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Uranus
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Uranus' atmosphere is blue-green because it contains large
                  amounts of methane.
                  <br />
                  <br />
                  Uranus is surrounded by a set of 13 rings. The inner rings are
                  narrow and dark. The outer rings are brightly coloured and
                  easier to see.
                  <br />
                  <br />
                  One day on Uranus lasts a little over 17 hours. A year on
                  Uranus lasts 84 Earth years.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Backward
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Uranus
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Uranus rotates at an angle of almost 90 degrees from its
                  orbital plane. Its axial tilt is higher than other planets.
                  <br />
                  <br />
                  Uranus, like Venus, rotates from east to west, unlike most
                  planets.
                  <br />
                  <br />
                  Uranus is an ice giant, very cold and windy.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  Forward
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -60,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Uranus
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetNeptune = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 1.25
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_28"
          scale={planetScale * 2}
          geometry={nodes.Object_28.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_28"
          scale={planetScale}
          geometry={nodes.Object_28.geometry}
          material={materials.neptune}
        />

        <mesh
          name="Object_28"
          scale={planetScale * 1.1}
          geometry={nodes.Object_28.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Neptun
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Neptune has 6 rings, but they are very difficult to see.
                  <br />
                  <br />
                  A day on Neptune lasts 16 hours.
                  <br />
                  <br />A year on Neptune lasts 165 Earth years.
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Backward
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Neptun
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  It is the last of the planets in our solar system. It is more
                  than 30 times farther from the Sun than the Earth.
                  <br />
                  <br />
                  It is a dark, cold and very windy planet.
                  <br />
                  <br />
                  Neptune is an ice giant and is structurally similar to the gas
                  giant. It has a thick and windy atmosphere. Methane is what
                  gives Neptune its blue colour.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  Forward
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -60,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Neptun
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const PlanetPluto = ({ orbitRadius, speed, orbitRotation, planetScale }) => {
  const { nodes, materials } = useGLTF(
    "./solar_system/solar_system_animation.glb"
  );
  const planetRef = useRef();
  const { camera } = useThree();
  const [rotationSpeed] = useState(0.01);

  const [isHovered, setIsHovered] = useState(false);
  const [lightsOn1, setLightsOn1] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDetayClicked, setIsDetayClicked] = useState(false);
  const handlePointerDetayClick = () => {
    setIsDetayClicked((prevIsDetayClicked) => !prevIsDetayClicked);
  };

  const glowColorForFrontlight = 0x9ad2e6;
  const glowIntensity = 8;

  const frontLightMaterial = new MeshStandardMaterial({
    toneMapped: false,
    color: "blue",
    emissive: glowColorForFrontlight,
    emissiveIntensity: glowIntensity + 80,
    transparent: true,
    opacity: 0.001,
  });

  const handlePointerClick = () => {
    // Toggle the click state when the camera element is clicked
    setIsClicked((prevIsClicked) => !prevIsClicked);
    // const newPosition = new THREE.Vector3(0, 10, orbitRadius * 1.25);
    const newPosition = new THREE.Vector3(
      planetRef.current.position.x,
      planetRef.current.position.y + 10,
      orbitRadius * 1.3
    );
    camera.position.copy(newPosition);
    camera.lookAt(planetRef.current.position);
  };

  const handleCloseButtonClick = () => {
    // Close the div element when the close button is clicked
    setIsClicked(false);
  };

  const handlePointerOver1 = () => {
    setIsHovered(true);
    setLightsOn1(true);
  };

  const handlePointerOut1 = () => {
    setIsHovered(false);
    setLightsOn1(false);
  };

  useEffect(() => {
    const handleCursor = () => {
      document.body.style.cursor = isHovered ? "pointer" : "auto";
    };

    document.addEventListener("mousemove", handleCursor);

    // Remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleCursor);
    };
  }, [isHovered]);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const elapsedTime = -clock.getElapsedTime(); // Negate the elapsedTime
      const orbitRotationY = orbitRotation[1];
      const orbitRotationMatrix = new THREE.Matrix4().makeRotationY(
        orbitRotationY
      );
      const orbitPosition = new THREE.Vector3(
        Math.cos(elapsedTime * speed) * orbitRadius,
        0,
        Math.sin(elapsedTime * speed) * orbitRadius
      );

      orbitPosition.applyMatrix4(orbitRotationMatrix);

      planetRef.current.position.copy(orbitPosition);
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <>
      <group ref={planetRef} dispose={null}>
        <mesh
          name="Object_31"
          scale={planetScale * 3}
          geometry={nodes.Object_31.geometry}
          material={""}
          onClick={handlePointerClick}
          onPointerOver={handlePointerOver1}
          onPointerOut={handlePointerOut1}
        />
        <mesh
          name="Object_31"
          scale={planetScale}
          geometry={nodes.Object_31.geometry}
          material={materials.pluto}
        />

        <mesh
          name="Object_31"
          scale={planetScale * 1.1}
          geometry={nodes.Object_31.geometry}
          material={lightsOn1 === false ? "" : frontLightMaterial}
        />

        {isClicked ? (
          <Html>
            {isDetayClicked ? (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Pluto
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Pluto consists mainly of nitrogen ice and rock.
                  <br />
                  <br />
                  Its surface is covered with mountains, valleys and craters.
                  Its surface varies in both gloss and colour.
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                >
                  Backward
                </button>
              </div>
            ) : (
              <div
                className="glassFrame"
                style={{
                  position: "relative",
                  top: -250,
                  left: -125,
                  fontSize: "14pt",
                  cursor: "pointer",
                  color: "lightGreen",
                  padding: "4px",
                }}
              >
                Pluto
                <div
                  class="glassFrameContent"
                  style={{
                    fontSize: "12pt",
                    width: "240px",
                  }}
                >
                  Pluto was classified as a planet until 2006.
                  <br />
                  <br />
                  Pluto is no longer considered a planet but a dwarf planet due
                  to its size, although it is the largest of the dwarf planets.
                  <br />
                  <br />
                </div>
                <button
                  className="detayButton"
                  onClick={handlePointerDetayClick}
                  style={{ marginLeft: "10.5rem" }}
                >
                  Forward
                </button>
                <button
                  className="closeButton"
                  onClick={handleCloseButtonClick}
                  style={{ top: "-248px", right: "-138px" }}
                />
              </div>
            )}
            <button
              className="closeButton"
              onClick={handleCloseButtonClick}
              style={{ top: "-248px", right: "-138px" }}
            />
          </Html>
        ) : (
          <Html>
            <div
              className="glassFrame"
              style={{
                position: "relative",
                top: -60,
                left: -30,
                cursor: "pointer",
                fontSize: "12pt",
              }}
              onClick={handlePointerClick}
            >
              <div
                class="glassFrameContent"
                style={{
                  fontSize: "12pt",
                }}
              >
                Pluto
              </div>
            </div>
          </Html>
        )}
      </group>
    </>
  );
};

const SolarSystem = () => {
  const orbitRadiusOfMercury = 9.7;
  const orbitRadiusOfVenus = 12.24;
  const orbitRadiusOfEarth = 16.12;
  const orbitRadiusOfMars = 20.45;
  const orbitRadiusOfJupiter = 28.8;
  const orbitRadiusOfSaturn = 36.62;
  const orbitRadiusOfUranus = 44.28;
  const orbitRadiusOfNeptune = 49.91;
  const orbitRadiusOfPluto = 54.21;

  const [isVisible, setIsVisible] = useState(true);

  const [zIndexC, setZIndexC] = useState(99);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(
      !!userAgent.match(
        /android|webos|iphone|ipad|ipod|blackberry|windows phone/i
      )
    );
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setZIndexC(-1);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const isGunesGateTriggered = useZustandStore(
    (state) => state.isGunesGateTriggered
  );
  const setIsGunesGateTriggered = useZustandStore(
    (state) => state.setIsGunesGateTriggered
  );
  const setIsGeriClickedInSolarSystem = useZustandStore(
    (state) => state.setIsGeriClickedInSolarSystem
  );

  const setIsGeriClickedInTuik = useZustandStore(
    (state) => state.setIsGeriClickedInTuik
  );

  const setIsBilgiIcTriggered = useZustandStore(
    (state) => state.setIsBilgiIcTriggered
  );

  const setIsBilgiGateTriggered = useZustandStore(
    (state) => state.setIsBilgiGateTriggered
  );

  const handleGunesGateTrigger = () => {
    setIsGunesGateTriggered(false);
    setIsGeriClickedInSolarSystem(true);
    setIsGeriClickedInTuik(false);

    setIsBilgiIcTriggered(false);
    setIsBilgiGateTriggered(true);
  };

  return (
    <>
      <div
        className={`fixedImageContainer ${isVisible ? "visible" : ""}`}
        style={{ zIndex: zIndexC, marginBottom: "25rem" }}
      >
        <img className="fixedImage" src={mySvgImage} alt="" />
      </div>

      <button
        className="button i-button"
        onClick={() => {
          handleGunesGateTrigger();
        }}
        style={{
          position: "absolute",
          zIndex: 2,
          transform: "scale(0.6)",
          lineHeight: 1.4,
          fontSize: 34,
        }}
      >
        Back
      </button>

      {isMobile ? (
        <div></div>
      ) : (
        <div
          style={{
            position: "absolute",
            marginTop: "78vh",
            marginLeft: "5vh",
            fontSize: "20px",
            color: "lightblue",
            zIndex: 1,
            textAlign: "left",
            userSelect: "none",
          }}
        >
          You can rotate with the left mouse button.
          <br />
          <br />
          You can zoom with the middle mouse button.
          <br />
          <br />
          Exit with ESC key.
        </div>
      )}

      <Canvas>
        <Suspense fallback={<LoaderBase />}>
          {/* <Environment background={true} files="/solar_system/old_depot_2k.hdr" /> */}
          <Environment
            background={true}
            files={[
              "/solar_system/2K_Resolution/Left_2K_TEX.png",
              "/solar_system/2K_Resolution/Right_2K_TEX.png",
              "/solar_system/2K_Resolution/Up_2K_TEX.png",
              "/solar_system/2K_Resolution/Down_2K_TEX.png",
              "/solar_system/2K_Resolution/Front_2K_TEX.png",
              "/solar_system/2K_Resolution/Back_2K_TEX.png",
            ]}
          />
          <ambientLight intensity={0.1} />
          <pointLight intensity={2} position={[0, 0, 0]} />

          <Orbit
            radius={orbitRadiusOfMercury}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetMercury
              planetScale={0.345}
              orbitRadius={orbitRadiusOfMercury}
              speed={0.6 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfVenus}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetVenus
              planetScale={0.95}
              orbitRadius={orbitRadiusOfVenus}
              speed={0.4 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfEarth}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetEarth
              planetScale={1}
              orbitRadius={orbitRadiusOfEarth}
              speed={0.65 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfMars}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetMars
              planetScale={0.575}
              orbitRadius={orbitRadiusOfMars}
              speed={0.5 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfJupiter}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetJupiter
              planetScale={2.8}
              orbitRadius={orbitRadiusOfJupiter}
              speed={0.3 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfSaturn}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetSaturn
              planetScale={2.15}
              orbitRadius={orbitRadiusOfSaturn}
              speed={0.22 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfUranus}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetUranus
              planetScale={0.8}
              orbitRadius={orbitRadiusOfUranus}
              speed={0.16 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfNeptune}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetNeptune
              planetScale={1.2}
              orbitRadius={orbitRadiusOfNeptune}
              speed={0.11 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbit
            radius={orbitRadiusOfPluto}
            thickness={0.02}
            rotation={[0 * (Math.PI / 180), 0, 0]}
            rotationOrder="XYZ"
          >
            <PlanetPluto
              planetScale={0.22}
              orbitRadius={orbitRadiusOfPluto}
              speed={0.08 / 4}
              orbitRotation={[Math.PI / 2, 0, 0]}
            />
          </Orbit>

          <Orbits />

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            makeDefault
            rotateSpeed={0.6}
            maxPolarAngle={1.4}
            minPolarAngle={0.2}
            minDistance={20}
            maxDistance={100}
            target={[0, 0, 0]}
          />
          <PerspectiveCamera makeDefault position={[0, 80, 130]} fov={60} />

          <EffectComposer disableNormalPass>
            <Bloom mipmapBlur intensity={0.38} luminanceThreshold={0.2} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
};

export default SolarSystem;
