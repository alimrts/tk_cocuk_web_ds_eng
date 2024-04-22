import React from "react";
import { useRef, useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Yaris1({ closeTheGame }) {
  const { unityProvider, unload } = useUnityContext({
    loaderUrl: "yaris1/Build/Build.loader.js",
    dataUrl: "yaris1/Build/Build.data",
    frameworkUrl: "yaris1/Build/Build.framework.js",
    codeUrl: "yaris1/Build/Build.wasm",
  });

  const closeGame = async () => {
    await unload();
    closeTheGame(); // Notify the parent component about the closure
  };

  return (
    <>
      <Unity
        unityProvider={unityProvider}
        style={{ width: 800, height: 600 }}
      />
      {/* <button onClick={handleClickBack}>Back</button> */}
      <button
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          color: "red",
          zIndex: "1",
          cursor: "pointer",
        }}
        onClick={closeGame}
      >
        X
      </button>
    </>
  );
}

export default Yaris1;
