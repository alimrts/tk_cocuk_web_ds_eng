import React, { useContext } from "react";
import "./Unicef.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import tkc_kuslar1 from "../../img/tkc_kuslar1.png";

import { themeContext } from "../../Context";
const Unicef = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="unicef">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Unicef Nedir?</span>
      <span>Unicefi Tanıyalım</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={tkc_kuslar1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tkc_kuslar1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tkc_kuslar1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Unicef;
