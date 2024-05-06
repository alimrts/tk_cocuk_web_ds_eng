import { useRef } from "react";
import { useBox } from "@react-three/cannon";

function Obstacle({ args, position, ...props }) {
  const [ref] = useBox(
    () => ({ args, type: "Static", mass: 10, position: position, ...props }),
    useRef()
  );

  return (
    <mesh ref={ref}>
      {/* on/off collision boxes */}
      {/* <boxGeometry args={[...args]} />
      <meshStandardMaterial color="red" wireframe /> */}
    </mesh>
  );
}

export default function Obstacles() {
  return (
    <>
      {/* front blocks */}

      {/* right blocks */}
      <Obstacle
        position={[8, 0, 10]}
        args={[2, 4, 11]}
        rotation={[0, 2.3, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[-8, 0, 10]}
        args={[2, 4, 11]}
        rotation={[0, -2.3, 0]}
        material={"ground"}
      />

      {/* back blocks */}

      {/* left blocks */}

      {/* control room screens */}
      <Obstacle
        position={[0, 0, -7]}
        args={[7, 4, 16]}
        rotation={[0, 1.58, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[8.9, 0, 0]}
        args={[3, 4, 16]}
        rotation={[0, 0, 0]}
        material={"ground"}
      />

      <Obstacle
        position={[-8.7, 0, -1]}
        args={[3, 4, 16]}
        rotation={[0, 0, 0]}
        material={"ground"}
      />

      <Obstacle
        position={[0, 0, 6.8]}
        args={[2.6, 4, 2.6]}
        rotation={[0, 1.58, 0]}
        material={"ground"}
      />

      {/* around dom */}
      <Obstacle
        position={[13.5, 0, 3.2]}
        args={[6.8, 4, 1]}
        rotation={[0, -1.8, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[13.8, 0, -2.3]}
        args={[4.2, 4, 1]}
        rotation={[0, -1.4, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[12.5, 0, -6.5]}
        args={[4.2, 4, 1]}
        rotation={[0, -1.05, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[9.8, 0, -9.8]}
        args={[4.2, 4, 1]}
        rotation={[0, -0.75, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[6.2, 0, -12.5]}
        args={[4.2, 4, 1]}
        rotation={[0, -0.45, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[2, 0, -13.8]}
        args={[4.2, 4, 1]}
        rotation={[0, -0.1, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[-2.4, 0, -13.6]}
        args={[4.2, 4, 1]}
        rotation={[0, 0.2, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[-6.2, 0, -12.2]}
        args={[4.2, 4, 1]}
        rotation={[0, 0.5, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[-9.6, 0, -9.8]}
        args={[4, 4, 1]}
        rotation={[0, 0.82, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[-12.2, 0, -6.6]}
        args={[4, 4, 1]}
        rotation={[0, 1.11, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[-13.4, 0, -2.2]}
        args={[5, 4, 1]}
        rotation={[0, 1.39, 0]}
        material={"ground"}
      />
      <Obstacle
        position={[-13, 0, 3.5]}
        args={[7, 4, 1]}
        rotation={[0, 1.8, 0]}
        material={"ground"}
      />

      {/* obstacles for city */}
      <Obstacle
        args={[12.5, 4, 4]}
        position={[26.003, 1.672, 28]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[8, 4, 3]}
        position={[15.4, 0.421, 29.717]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[35, 50, 194]}
        position={[6, -0.017, -138.889]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[50, 50, 50]}
        position={[74, -0.017, 4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[59, 50, 47]}
        position={[140, -0.017, 4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[105, 50, 47]}
        position={[140, -0.017, -104]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[47, 50, 47]}
        position={[140, -0.017, 71]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[47, 50, 13]}
        position={[94, -0.017, 71]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[25, 50, 14]}
        position={[54, -0.017, 71]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* arka bolum */}
      <Obstacle
        args={[60, 50, 320]}
        position={[15, -0.017, 135]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* on sinir */}
      <Obstacle
        args={[10, 50, 320]}
        position={[15, -0.017, -161]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* yan sinir1 */}
      <Obstacle
        args={[50, 50, 300]}
        position={[-125, -0.017, -40]}
        rotation={[0, 0, 0]}
        material={"ground"}
      />

      {/* yan sinir2 */}
      <Obstacle
        args={[10, 50, 300]}
        position={[168, -0.017, -40]}
        rotation={[0, 0, 0]}
        material={"ground"}
      />

      {/* ---- */}
      <Obstacle
        args={[57, 50, 22]}
        position={[57, -0.017, -80]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[11, 50, 11]}
        position={[98, -0.017, -58]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      {/* little trees in yard */}
      <Obstacle
        args={[1.5, 4, 1.5]}
        position={[91, -0.017, -51.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.5, 4, 1.5]}
        position={[78.8, -0.017, -51.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.5, 4, 1.5]}
        position={[91, -0.017, -108.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.5, 4, 1.5]}
        position={[78.8, -0.017, -108.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 3]}
        position={[72.7, -0.017, -108]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 3]}
        position={[85.4, -0.017, -108]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[11, 50, 11]}
        position={[-54, -0.017, -58]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[11, 50, 13]}
        position={[-49.5, -0.017, -103]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[35, 50, 16]}
        position={[-80, -0.017, -80]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 3]}
        position={[-83.8, -0.017, -105.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 3]}
        position={[-71.5, -0.017, -105.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[-44.7, -0.017, -75.1]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[-44.7, -0.017, -87.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* arka park  */}
      <Obstacle
        args={[3, 4, 1.2]}
        position={[-26.5, -0.017, -105.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[-26.5, -0.017, -88.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[-26.5, -0.017, -71.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[-26.5, -0.017, -54.3]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[3, 4, 1.2]}
        position={[1.2, -0.017, -105.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[1.2, -0.017, -88.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[1.2, -0.017, -71.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[1.2, -0.017, -54.3]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[3, 4, 1.2]}
        position={[28.5, -0.017, -105.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[28.5, -0.017, -88.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[28.5, -0.017, -71.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[3, 4, 1.2]}
        position={[28.5, -0.017, -54.3]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* arka park trees */}
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[21.5, -0.017, -55.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-18.4, -0.017, -55.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[21.7, -0.017, -80]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[21.4, -0.017, -106.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[25.4, -0.017, -102.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[7.8, -0.017, -102.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[2.8, -0.017, -85]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[9.7, -0.017, -64.3]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-7.8, -0.017, -99.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-23.8, -0.017, -102.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-18.8, -0.017, -80]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-15, -0.017, -69.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-24, -0.017, -59.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* arka yol orta elementler */}
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-40, -0.017, -59.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-40, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-45.5, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-53.4, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-77.6, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-85.6, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-91, -0.017, -36.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-91, -0.017, -38.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-30.8, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-19.2, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-8.4, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[15.5, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[20.9, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[32.2, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[41.5, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[53.9, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[61.3, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[85.4, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[94, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[104.6, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[113.9, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[119.3, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[128.6, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[151.2, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[159.5, -0.017, -37.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[164.8, -0.017, -38.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[164.8, -0.017, -36.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[134.2, -0.017, -26.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* arka ara elementler trafik lambasi vb. */}
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-30.5, -0.017, -76.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-40, -0.017, -111.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-30.5, -0.017, -104.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-30, -0.017, -120.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[32.4, -0.017, -111.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[42.3, -0.017, -120.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[55.6, -0.017, -120.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[94, -0.017, -111.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[104.5, -0.017, -111.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[113.8, -0.017, -120.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[114.2, -0.017, -126]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[104.7, -0.017, -99.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[104.2, -0.017, -91]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[113.8, -0.017, -53.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[2, -0.017, -121]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-68.5, -0.017, -120.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-1.2, -0.017, -111.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* yan uzun park agaclar vb. */}

      {/* yan park yan lamba etc. */}

      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-100.1, -0.017, 70.2]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-100.6, -0.017, 45.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-100.6, -0.017, 23.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-100.1, -0.017, 3.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-100.3, -0.017, -79.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-100.6, -0.017, -115]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* tuik binasi cevre  */}
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-91, -0.017, 36]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      {/* tuik trees */}
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-87.2, -0.017, 84.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-87.2, -0.017, 92.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-78.5, -0.017, 84.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-78.5, -0.017, 92.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-69.8, -0.017, 84.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-69.8, -0.017, 92.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-61.1, -0.017, 84.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-61.1, -0.017, 92.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-52.5, -0.017, 84.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-52.5, -0.017, 92.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-44.9, -0.017, 84]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-44.9, -0.017, 92.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-44.9, -0.017, 75.2]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-44.9, -0.017, 66.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-44.9, -0.017, 57.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-44.9, -0.017, 19.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-44.9, -0.017, 11]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* bayraklar */}
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-58.2, -0.017, 42]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-58.2, -0.017, 46.2]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-40.2, -0.017, 17.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-44.9, -0.017, 2.3]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-44.9, -0.017, -6.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-45.4, -0.017, -14.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-45.4, -0.017, -24]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-54.1, -0.017, -14.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-54.1, -0.017, -24]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-62.8, -0.017, -14.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-62.8, -0.017, -24]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-71.5, -0.017, -14.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-71.5, -0.017, -24]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-80.2, -0.017, -14.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-80.2, -0.017, -24]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* tuik binasi coll */}
      <Obstacle
        args={[69, 80, 19]}
        position={[-71.9, -0.017, 42]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[8, 4, 2]}
        position={[-61.2, -0.017, 71.2]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* dom cevre coll */}
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.3, -0.017, 21.3]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[0.3, 4, 0.3]}
        position={[-7.5, -0.017, 35.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.3, -0.017, 12.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.3, -0.017, 3.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.3, -0.017, -4.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.3, -0.017, -13.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[10, 4, 10]}
        position={[-24.3, -0.017, -21]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-30.6, -0.017, -22.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-30.7, -0.017, 35.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-11.4, -0.017, 35.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[7.3, -0.017, 35.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[12.8, -0.017, 35.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[32.1, -0.017, 29.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[32.1, -0.017, 9.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, 12.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, 21.1]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, -4.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, -13.3]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      {/* gezegenler coll */}
      <Obstacle
        args={[16, 80, 16]}
        position={[0.5, -0.017, 77]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[0.3, 4, 0.3]}
        position={[-27.25, -0.017, 84.55]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.4, -0.017, 48.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-16.2, -0.017, 48.9]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.4, -0.017, 55.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-16.2, -0.017, 55.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.4, -0.017, 61.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-16.2, -0.017, 61.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.4, -0.017, 68.1]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-16.2, -0.017, 68.1]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.4, -0.017, 74.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-16.2, -0.017, 74.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.4, -0.017, 81.2]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-16.2, -0.017, 81.2]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.4, -0.017, 87.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-16.2, -0.017, 87.5]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-28.4, -0.017, 93.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-16.2, -0.017, 93.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-4.2, -0.017, 48.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[5.1, -0.017, 48.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-4.2, -0.017, 55.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[5.1, -0.017, 55.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-4.2, -0.017, 61.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[5.1, -0.017, 61.7]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[-4.2, -0.017, 68.1]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[5.1, -0.017, 68.1]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[17.8, -0.017, 48.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, 48.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[17.8, -0.017, 55.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, 55.4]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[17.8, -0.017, 61.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, 61.8]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[17.8, -0.017, 68.2]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, 68.2]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[17.8, -0.017, 74.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, 74.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[17.8, -0.017, 81.2]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, 81.2]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[17.8, -0.017, 87.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, 87.6]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[17.8, -0.017, 94]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
      <Obstacle
        args={[1.2, 4, 1.2]}
        position={[30.2, -0.017, 94]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[32.1, -0.017, 45.1]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />

      <Obstacle
        args={[0.5, 4, 0.5]}
        position={[-30.4, -0.017, 45.1]}
        rotation={[0, 1.571, 0]}
        material={"ground"}
      />
    </>
  );
}
