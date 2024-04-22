import { useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { Object3D } from "three";
import useZustandStore from "../../zustandStore";

export default function useFollowCam() {
  const { scene, camera } = useThree();

  const isAnyGameOpened = useZustandStore((state) => state.isAnyGameOpened);

  const pivot = useMemo(() => new Object3D(), []);
  const followCam = useMemo(() => {
    const o = new Object3D();
    o.position.set(0, 1, 1.5);
    return o;
  }, []);

  const MAX_VERTICAL_ANGLE = 0.4; // Maximum vertical angle in radians
  const MIN_VERTICAL_ANGLE = -0.6; // Minimum vertical angle in radians

  let touchStartX = 0;
  let touchStartY = 0;

  const onTouchMove = (e) => {
    if (e.touches.length === 1 && !document.pointerLockElement) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;
      pivot.rotation.y -= deltaX * 0.0025;
      let newVerticalRotation = followCam.rotation.x - deltaY * 0.0015;
      newVerticalRotation = Math.min(
        MAX_VERTICAL_ANGLE,
        Math.max(MIN_VERTICAL_ANGLE, newVerticalRotation)
      ); // Clamp the vertical rotation
      followCam.rotation.x = newVerticalRotation;
      followCam.position.y = -newVerticalRotation * followCam.position.z + 1;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    }
    return false;
  };

  const onTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  };

  const onTouchEnd = () => {
    // Reset rotation or perform any cleanup if needed
  };

  const onDocumentMouseMove = (e) => {
    if (e.buttons === 1 && !document.pointerLockElement) {
      pivot.rotation.y -= e.movementX * 0.0025;
      let newVerticalRotation = followCam.rotation.x - e.movementY * 0.0015;
      newVerticalRotation = Math.min(
        MAX_VERTICAL_ANGLE,
        Math.max(MIN_VERTICAL_ANGLE, newVerticalRotation)
      ); // Clamp the vertical rotation
      followCam.rotation.x = newVerticalRotation;
      followCam.position.y = -newVerticalRotation * followCam.position.z + 1;
    }
    return false;
  };

  const onDocumentMouseWheel = (e) => {
    if (!document.pointerLockElement) {
      const v = followCam.position.z + e.deltaY * 0.0015;
      if (v >= 0.5 && v <= 4) {
        followCam.position.z = v;
      }
    }
    return false;
  };

  useEffect(() => {
    if (!isAnyGameOpened) {
      camera.position.set(0, 0.5, 0.6);

      followCam.add(camera);
      pivot.add(followCam);
      scene.add(pivot);

      document.addEventListener("mousemove", onDocumentMouseMove);
      document.addEventListener("mousewheel", onDocumentMouseWheel);
    }
    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      document.removeEventListener("mousewheel", onDocumentMouseWheel);
    };
  });

  useEffect(() => {
    if (!isAnyGameOpened) {
      camera.position.set(0, 0.5, 0.6);

      followCam.add(camera);
      pivot.add(followCam);
      scene.add(pivot);

      document.addEventListener("touchstart", onTouchStart);
      document.addEventListener("touchmove", onTouchMove, { passive: false });
      document.addEventListener("touchend", onTouchEnd);
    }
    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  });

  return { pivot };
}
