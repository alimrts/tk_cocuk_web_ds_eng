import React, { useContext } from "react";
import "./Footer.css";
import { themeContext } from "../../Context";

import FooterBg from "../../img/tkc_footer_bg.png";
import FooterDarkBg from "../../img/tkc_footer_dark_bg.png";

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="footer">
      {darkMode ? (
        <img src={FooterDarkBg} alt="" style={{ width: "100%" }} />
      ) : (
        <img src={FooterBg} alt="" style={{ width: "100%" }} />
      )}
      {/* <img src={FooterBg} alt="" style={{ width: "100%" }} /> */}
      <div className="f-content">
        {/* <span>TÜİK Çocuk 2023 - Tüm Hakları Saklıdır</span> */}
        <div className="f-icons">{/* © 2024, Tüm hakları saklıdır. */}</div>
      </div>
    </div>
  );
};

export default Footer;
