import React from "react";
import "./Cocukhaklari.css";
import Grid from "./Grid";
// import NavbarRegister from "../../components/Navbar/NavbarRegister";

import NavbarRegister from "../../components/Navbar/NavbarCocukSdg";
import arrowSlider from "../../img/arrow_slider.png";

/// for first texts
import "../../components/Tuik/Tuik.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import cocukhak1i from "../../img/cocuk_haklari_cards/cocuk_hak1.png";
import cocukhak2i from "../../img/cocuk_haklari_cards/cocuk_hak2.png";
import cocukhak3i from "../../img/cocuk_haklari_cards/cocuk_hak3.png";

import texts from "./texts_cocukhaklari2.json";

// Initialize the Navigation module
SwiperCore.use([Navigation]);

const swiperProps = {
  navigation: {
    prevEl: ".swiper-button-prev-cocuk",
    nextEl: ".swiper-button-next-cocuk",
  },
};

const cocukhak1 = <img src={cocukhak1i} className="cocuk-images" alt="" />;
const cocukhak2 = <img src={cocukhak2i} className="cocuk-images" alt="" />;
const cocukhak3 = <img src={cocukhak3i} className="cocuk-images" alt="" />;

const Cocukhaklari = () => {
  const infos = [
    {
      image: cocukhak1,
    },
    {
      image: cocukhak2,
    },
    {
      image: cocukhak3,
    },
  ];

  return (
    <>
      {" "}
      <NavbarRegister />
      <div className="cocuk-content">
        <div className="t-heading-cocuk">
          <span>{texts.textHeader1}</span>
          <span>{texts.textHeader2}</span>
          <span style={{ fontSize: "14pt" }}>
            <br />
            {texts.textAciklama}
          </span>
        </div>
        <div className="right-column-cocuk">
          <Swiper
            {...swiperProps}
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {infos.map((info, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      aligntItems: "center",
                      marginBottom: "2rem",
                      cursor: "pointer",
                    }}
                  >
                    {info.image}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div
            className="swiper-button-prev-cocuk"
            style={{ marginLeft: "8rem" }}
          >
            <img src={arrowSlider} />
          </div>
          <div
            className="swiper-button-next-cocuk"
            style={{ marginRight: "8rem" }}
          >
            <img src={arrowSlider} />
          </div>
        </div>
        <div className="cocuk-grid">
          <Grid />
        </div>
      </div>
    </>
  );
};

export default Cocukhaklari;
