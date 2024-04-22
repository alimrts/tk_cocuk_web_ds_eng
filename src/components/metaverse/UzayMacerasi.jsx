import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import useZustandStore from "../../zustandStore";

function UzayMacerasi({ closeTheGame }) {
  const { unityProvider, unload, loadingProgression, isLoaded } =
    useUnityContext({
      loaderUrl: "UzayMacerasi/UzayMacerasi.loader.js",
      dataUrl: "UzayMacerasi/UzayMacerasi.data",
      frameworkUrl: "UzayMacerasi/UzayMacerasi.framework.js",
      codeUrl: "UzayMacerasi/UzayMacerasi.wasm",
    });

  const closeGame = async () => {
    await unload();
    closeTheGame(); // Notify the parent component about the closure
  };

  const setIsAnyGameOpened = useZustandStore(
    (state) => state.setIsAnyGameOpened
  );

  useEffect(() => {
    setIsAnyGameOpened(true);

    return () => setIsAnyGameOpened(false);
  }, []);

  return (
    <>
      {!isLoaded && (
        <div
          style={{
            color: "black",
            background: "lightGrey",
          }}
        >
          <p>Yükleniyor... {Math.round(loadingProgression * 100)}%</p>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: 420,
          height: 747,
          visibility: isLoaded ? "visible" : "hidden",
        }}
      />
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

export default UzayMacerasi;
