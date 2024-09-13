import { useRef } from "react";
import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import textureImage from "../../img/metaverse_images/grid.png";

export default function Floor(props) {
  const [ref] = usePlane(() => ({ ...props }), useRef());
  const texture = useLoader(TextureLoader, textureImage);

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[28, 40]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
