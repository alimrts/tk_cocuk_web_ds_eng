import React from "react";
import useZustandStore from "../../zustandStore";

const LoadingIntroApiError = () => {
  const { language, setLanguage, languageData } = useZustandStore();
  const strings = languageData[language];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "20rem",
        textAlign: "center",
      }}
    >
      {strings.apiHatasi}
      <br />
      {strings.apiHatasiAciklama}
    </div>
  );
};

export default LoadingIntroApiError;
