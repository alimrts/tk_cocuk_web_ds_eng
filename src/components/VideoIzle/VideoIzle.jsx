import React, { useContext, useState } from "react";
import "./VideoIzle.css";

import VideoPopup from "./VideoPopup";
import { themeContext } from "../../Context";

import FloatinDivForIntroRight from "../FloatingDiv/FloatinDivForIntroRight";

import tkc_video_left from "../../img/video_images/tkc_video_left.png";

import tkc_video_istatistiknedir from "../../img/video_images/tkc_video_istatistiknedir.png";
import tkc_video_ulkemizitaniyalim from "../../img/video_images/tkc_video_ulkemizitaniyalim.png";
import tkc_video_cocukhaklari from "../../img/video_images/tkc_video_cocukhaklari.png";

import IstatistikNedir from "../../video/IstatistikNedir.mp4";
import UlkemiziTaniyalim from "../../video/UlkemiziTaniyalim.mp4";
import CocukHaklari from "../../video/CocukHaklari.mp4";

const VideoIzle = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showPopup, setShowPopup] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  // const handlePdfClick = (pdfUrl) => {
  //   window.open(pdfUrl, "_blank");
  // };

  const handleVideoClick = (videoSrc) => {
    // const video = document.getElementById("videoElement");
    // video.src = videoSrc;
    // video.play();

    setSelectedVideo(videoSrc);
    setShowPopup(true);

    console.log("click worked...");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedVideo("");
  };

  return (
    <>
      <div className="videolar">
        <div className="videorow" id="video">
          <div className="left-column-video">
            <img src={tkc_video_left} alt="" />
          </div>
          <div className="right-column-video" style={{}}>
            <div className="w-right">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onClick={() => handleVideoClick(IstatistikNedir)}
              >
                <FloatinDivForIntroRight img={tkc_video_istatistiknedir} />
                <span>What is Statistics?</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onClick={() => handleVideoClick(UlkemiziTaniyalim)}
              >
                <FloatinDivForIntroRight img={tkc_video_ulkemizitaniyalim} />
                <span>Let's Get to Know Our Country</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onClick={() => handleVideoClick(CocukHaklari)}
              >
                <FloatinDivForIntroRight img={tkc_video_cocukhaklari} />
                <span>Children's Rights</span>
              </div>
            </div>
          </div>
        </div>
        {showPopup && (
          <VideoPopup videoSrc={selectedVideo} onClose={handleClosePopup} />
        )}
      </div>
    </>
  );
};

export default VideoIzle;
