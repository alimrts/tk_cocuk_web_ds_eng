import { useRef } from "react";
import { Birds1 } from "./Birds1";
import { Birds2 } from "./Birds2";
import { Birds3 } from "./Birds3";

export default function BirdsGroups() {
  return (
    <>
      <Birds1
        rotation={[0, 0, 0]}
        position={[-15, 15, 3]}
        scale={[1, 1, 1]}
        firstPosition={-30}
      />

      <Birds2
        rotation={[0, 0, 0]}
        position={[15, 10, 3]}
        scale={[1, 1, 1]}
        firstPosition={-50}
      />

      <Birds3
        rotation={[0, 0, 0]}
        position={[0, 35, 3]}
        scale={[1, 1, 1]}
        firstPosition={-20}
      />
    </>
  );
}
