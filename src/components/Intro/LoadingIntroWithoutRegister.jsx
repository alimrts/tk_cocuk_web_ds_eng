import React from "react";
import useZustandStore from "../../zustandStore";

const LoadingIntroWithoutRegister = () => {
  const { language, setLanguage, languageData } = useZustandStore();
  const strings = languageData[language];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "2rem",
        width: "20rem",
        textAlign: "center",
      }}
    >
      {/* {strings.apiHatasi} */}
      <br />
      {strings.bilgilerAciklama}
    </div>
  );
};

export default LoadingIntroWithoutRegister;
