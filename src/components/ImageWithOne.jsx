import React, { useState } from "react";

const TextPopup = ({ src_image, onClose }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value for transparency
          zIndex: 999, // Make sure the overlay is on top
        }}
        onClick={onClose}
      ></div>

      <div className="imagePopup">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-2rem",
          }}
        >
          <button onClick={onClose}>X</button>
        </div>

        <img
          src={src_image}
          alt=""
          style={{
            height: "840px",
            position: "absolute",
            borderRadius: "24px",
            boxShadow: "0 12px 18px rgba(0, 0, 0, 0.6)",
          }}
        />
      </div>
    </>
  );
};

const ImageWithOne = ({ title, src_cover, src_image, onClick, isOpen }) => {
  const [hovered, setHovered] = useState(false);

  const handleImageHover = () => {
    setHovered(true);
  };

  const handleImageHoverLeave = () => {
    setHovered(false);
  };

  const handleImageClick = () => {
    onClick();
  };
  const handleTextClose = () => {
    onClick();
  };

  return (
    <>
      <div className="imageWithRowEdit">
        <div
          className="imageWrapperEdit"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageHoverLeave}
          onClick={handleImageClick}
        >
          <div className={"imageContainer"}>
            <img
              src={src_cover}
              alt=""
              style={{
                margin: "6px",
                span: "6px",
                height: "400px",
                position: "absolute",
                filter: !hovered ? "none" : "brightness(110%)",
                zIndex: !hovered ? 0 : 1,
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            />

            <div
              style={{
                color: "orange",
                background: "rgba(25, 25, 55, 0.45)", // 75% transparent black
                marginBottom: "17rem",
                fontSize: "18pt",
                paddingRight: "8px",
                paddingLeft: "8px",
                zIndex: 1,
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
      {isOpen && <TextPopup src_image={src_image} onClose={handleTextClose} />}
    </>
  );
};

export default ImageWithOne;
