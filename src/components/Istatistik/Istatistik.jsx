import React from "react";
import "./Istatistik.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

import SwiperCore, { Navigation } from "swiper/core";

import arrowSlider from "../../img/arrow_slider.png";

import tkc_istatistik_timeline from "../../img/tkc_istatistik_timeline.png";

import tkc_kuslar1 from "../../img/tkc_kuslar1.png";

import istatistik1i from "../../img/istatistik_cards/istatistik1.png";
import istatistik2i from "../../img/istatistik_cards/istatistik2.png";
import istatistik3i from "../../img/istatistik_cards/istatistik3.png";
import istatistik4i from "../../img/istatistik_cards/istatistik4.png";
import istatistik5i from "../../img/istatistik_cards/istatistik5.png";
import istatistik6i from "../../img/istatistik_cards/istatistik6.png";
import istatistik7i from "../../img/istatistik_cards/istatistik7.png";
import istatistik8i from "../../img/istatistik_cards/istatistik8.png";
import istatistik9i from "../../img/istatistik_cards/istatistik9.png";
import istatistik10i from "../../img/istatistik_cards/istatistik10.png";
import istatistik11i from "../../img/istatistik_cards/istatistik11.png";
import istatistik12i from "../../img/istatistik_cards/istatistik12.png";

// Initialize the Navigation module
SwiperCore.use([Navigation]);

const swiperProps = {
  navigation: {
    prevEl: ".swiper-button-prev-istatistik",
    nextEl: ".swiper-button-next-istatistik",
  },
};

const istatistik1 = (
  <img src={istatistik1i} alt="" className="istatistik-images" />
);
const istatistik2 = (
  <img src={istatistik2i} alt="" className="istatistik-images" />
);
const istatistik3 = (
  <img src={istatistik3i} alt="" className="istatistik-images" />
);
const istatistik4 = (
  <img src={istatistik4i} alt="" className="istatistik-images" />
);
const istatistik5 = (
  <img src={istatistik5i} alt="" className="istatistik-images" />
);
const istatistik6 = (
  <img src={istatistik6i} alt="" className="istatistik-images" />
);
const istatistik7 = (
  <img src={istatistik7i} alt="" className="istatistik-images" />
);
const istatistik8 = (
  <img src={istatistik8i} alt="" className="istatistik-images" />
);
const istatistik9 = (
  <img src={istatistik9i} alt="" className="istatistik-images" />
);
const istatistik10 = (
  <img src={istatistik10i} alt="" className="istatistik-images" />
);
const istatistik11 = (
  <img src={istatistik11i} alt="" className="istatistik-images" />
);
const istatistik12 = (
  <img src={istatistik12i} alt="" className="istatistik-images" />
);

let bullet;
bullet = "\u007F" + "\u007F" + "\u2022";

// ---
const Istatistik = () => {
  const infos = [
    {
      image: istatistik1,
    },
    {
      image: istatistik2,
    },
    {
      image: istatistik3,
    },
    {
      image: istatistik4,
    },
    {
      image: istatistik5,
    },
    {
      image: istatistik6,
    },
    {
      image: istatistik7,
    },
    {
      image: istatistik8,
    },
    {
      image: istatistik9,
    },
    {
      image: istatistik10,
    },
    {
      image: istatistik11,
    },
    {
      image: istatistik12,
    },
  ];

  return (
    <div className="container-istatistik" id="istatistik">
      <div className="left-column">
        <img src={tkc_istatistik_timeline} alt="" />
      </div>
      <div className="right-column">
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

        <div className="swiper-button-prev-istatistik">
          <img src={arrowSlider} />
        </div>
        <div className="swiper-button-next-istatistik">
          <img src={arrowSlider} />
        </div>
        <div
          style={{
            backgroundImage: `url(${tkc_kuslar1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "18rem",
            height: "8rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "-4rem",
            marginTop: "-4rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Istatistik;
