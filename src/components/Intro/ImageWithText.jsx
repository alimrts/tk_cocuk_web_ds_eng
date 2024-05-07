import React, { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rootOfCanvas: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  canvas: {
    border: "1px solid black",
    width: "100%",
    height: "100%",
  },
}));

const ImageWithText = ({
  text,
  fullText,
  imageUrl,
  fontColor,
  text1Left,
  text1Top,
  text2Left,
  text2Top,
  text3Left,
  text3Top,
  text3Width,
  text4Left,
  text4Top,
  fontFamily,
}) => {
  const [canvas, setCanvas] = useState(null);
  const [canvasInitialized, setCanvasInitialized] = useState(false);
  const canvasRef = useRef(null);

  const classes = useStyles();

  useEffect(() => {
    const img = new Image();

    const options = { year: "numeric", month: "long", day: "numeric" };
    const today = new Date().toLocaleDateString("en", options);

    img.onload = () => {
      if (!canvasInitialized && canvasRef.current) {
        try {
          const newCanvas = new fabric.Canvas(canvasRef.current);

          newCanvas.setWidth(img.naturalWidth);
          newCanvas.setHeight(img.naturalHeight);

          const fabricImg = new fabric.Image(img, { selectable: false });
          newCanvas.add(fabricImg);

          // Add the first text object to the canvas
          const fabricText1 = new fabric.Text("Dear", {
            selectable: false,
            left: text1Left,
            top: text1Top,
            fontSize: 18,
            fontFamily: fontFamily,
            fontStyle: "italic",
            fill: "grey",
          });
          newCanvas.add(fabricText1);

          // Add the second text object to the canvas
          const fabricText2 = new fabric.Text(text, {
            selectable: false,
            left: text2Left,
            top: text2Top,
            fontSize: 38,
            fontFamily: fontFamily,
            fontStyle: "italic",
            fill: fontColor,
            textAlign: "center",
            originX: "center",
            originY: "center",
          });
          newCanvas.add(fabricText2);

          // Add the third text object to the canvas
          const fabricText3 = new fabric.Textbox(fullText, {
            selectable: false,
            left: text3Left,
            top: text3Top,
            fontSize: 12,
            fontFamily: fontFamily,
            fontStyle: "italic",
            fill: "grey",
            width: text3Width,
            lineHeight: 1.2,
          });
          newCanvas.add(fabricText3);

          // Add the fourth text object to the canvas
          const fabricText4 = new fabric.Text("Date: " + today, {
            selectable: false,
            left: text4Left,
            top: text4Top,
            fontSize: 14,
            fontFamily: fontFamily,
            fontStyle: "italic",
            fill: "grey",
          });
          newCanvas.add(fabricText4);

          setCanvas(newCanvas);
          setCanvasInitialized(true);
        } catch (error) {
          console.error("Error creating canvas:", error);
        }
      }
    };

    img.onerror = (error) => {
      console.error("Error loading image:", error);
    };

    img.src = imageUrl;
  }, [
    imageUrl,
    fontColor,
    fontFamily,
    text,
    fullText,
    text1Left,
    text1Top,
    text2Left,
    text2Top,
    text3Left,
    text3Top,
    text3Width,
    text4Left,
    text4Top,
    canvasInitialized,
  ]);

  const handleDownload = () => {
    try {
      if (canvas) {
        const dataURL = canvas.toDataURL({ format: "png" });
        const link = document.createElement("a");
        link.download = text + "-tuik-cocuk-sertifika.png";
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error("Canvas not initialized yet.");
      }
    } catch (error) {
      console.error("Error handling download:", error);
    }
  };

  return (
    <div className={classes.rootOfCanvas}>
      <canvas
        className={classes.canvas}
        id="canvas"
        ref={canvasRef}
        style={{ display: canvasInitialized ? "block" : "none" }}
      />
      {canvasInitialized && (
        <>
          <button
            className="button"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            onClick={handleDownload}
          >
            Download
          </button>
        </>
      )}
    </div>
  );
};

export default ImageWithText;
