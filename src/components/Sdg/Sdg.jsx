import React, { useContext } from "react";
import "./Sdg.css";

import { themeContext } from "../../Context";

import WrapperComponent from "../WrapperComponent";
import NavbarRegister from "../../components/Navbar/NavbarCocukSdg";
import sdgData from "./sdgData.json";
import texts from "./texts_sdg.json";

const Sdg = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <>
      {" "}
      <NavbarRegister />
      <div className="sdg">
        <div className="t-heading-sdg ">
          <span>{texts.textHeader1}</span>
          <span> {texts.textHeader2}</span>
          <span style={{ fontSize: "14pt" }}>
            <br />
            {texts.textAciklama}
          </span>
        </div>

        <div className="sdg-grid">
          <WrapperComponent data={sdgData} />
        </div>
      </div>
    </>
  );
};

export default Sdg;
