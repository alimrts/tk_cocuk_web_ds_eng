import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import tkc_istatistik from "../../img/Intro_images/tkc_istatistik.png";

import FloatinDivForAltMenu from "../FloatingDiv/FloatinDivForAltMenu";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

import LoadingIntro from "./LoadingIntro";

import texts from "./texts_intro.json";

import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

import { dummyData } from "./dummyData";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "95vw",
    height: "90vh",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    // overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      width: "94vw",
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid lightblue",
    borderRadius: "6px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
    overflowY: "auto",
    maxHeight: "calc(100% - 88px)",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      maxWidth: "900px",
    },
  },
  variablesInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 columns initially
    gap: "0.5rem",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)", // 2 columns on medium screens and below
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr", // 1 column on small screens and below
    },
  },
  boxes1: {
    display: "flex",
    backgroundColor: "lightgray",
    width: "12rem",
    height: "6rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  boxes2: {
    display: "flex",
    backgroundColor: "#F8B12F",
    width: "12rem",
    height: "6rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  boxes3: {
    display: "flex",
    backgroundColor: "lightblue",
    width: "12rem",
    height: "6rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  boxes4: {
    display: "flex",
    backgroundColor: "lightgreen",
    width: "12rem",
    height: "6rem",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

export default function AnimatedModalIstatistik(props) {
  // const isMale = props.cinsiyet === "1";

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [loading, setLoading] = useState(true);

  const [variables, setVariables] = useState({
    isminIlkVerildigiYil: 1950,
    isminVerilisSirasiEnDusukYil: 1998,
    isminVerilisSirasiEnYuksekYil: 1965,
    isminEnSonVerildigiYil: 2022,
  });

  const [minValue, setMinValue] = useState(null);
  const [maxValue, setMaxValue] = useState(null);

  const [firstValue, setFirstValue] = useState(null);
  const [lastValue, setLastValue] = useState(null);

  const turkishUpperCase = (str) => {
    return str.replace(/i/g, "İ").replace(/ı/g, "I").toUpperCase();
  };

  const [options, setOptions] = useState({
    chart: {
      fontFamily: "Noteworthy, Noteworthy-Bold, Arial, sans-serif",
      fontSize: "10pt",
      width: "100%",
      height: 400,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: false, // Disable data labels on the chart
    },
    stroke: {
      curve: "smooth",
    },
    // title: {
    //   text: turkishUpperCase(props.ad ?? "") + " " + texts.isminSirasi,
    //   align: "center",
    // },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
      hover: {
        size: 6,
      },
    },
    xaxis: {
      categories: dummyData.yilSiraList.map((item) => item.dogumYil),
      title: {
        text: texts.yil,
      },
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: true,
        hideOverlappingLabels: true,
        formatter: function (value) {
          return value % 10 === 0 ? value : "";
        },
      },
    },
    yaxis: {
      reversed: true,
      title: {
        text: texts.sira,
      },
      tickAmount: 5,
      labels: {
        formatter: function (value) {
          if (value === 1) {
            return 1;
          }
          // const formattedValue = Math.floor(value / 2) * 2;
          // return formattedValue < 5 ? 5 : formattedValue;
          return Math.floor(value);
        },
      },
      min: 1,
      max: 600,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        formatter: undefined,
      },
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  });

  const [series, setSeries] = useState([]);

  //////////////////////////////////////////////////
  const setChartData = (data) => {
    const filteredData = data.yilSiraList.sort(
      (a, b) => a.dogumYil - b.dogumYil
    );
    const minY = Math.min(...filteredData.map((item) => item.sira));
    const maxY = Math.max(...filteredData.map((item) => item.sira));

    setMinValue(minY);
    setMaxValue(maxY);

    const firstValue = filteredData[0] ? filteredData[0].sira : null;
    const lastValue = filteredData[filteredData.length - 1]
      ? filteredData[filteredData.length - 1].sira
      : null;

    setFirstValue(firstValue);
    setLastValue(lastValue);

    const sortedYears = filteredData.map((item) => item.dogumYil).reverse();

    const reversedSortedYears = sortedYears.reverse();

    setOptions((prevOptions) => ({
      ...prevOptions,
      xaxis: {
        ...prevOptions.xaxis,
        categories: sortedYears,
      },

      yaxis: {
        ...prevOptions.yaxis,
        min: 1,
        max: maxY,
      },
      tooltip: {
        shared: true,
        intersect: false,
        x: {
          // formatter: function (value) {
          //   // Reversed year for tooltip display
          //   return reversedSortedYears[value]; // Reverse the years array on tooltip only
          // },
          formatter: function (_, { dataPointIndex }) {
            return sortedYears[dataPointIndex]; // Directly use the index from categories
          },
        },
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    }));

    setSeries([
      {
        name: texts.sira,
        data: filteredData.map((item) => item.sira),
      },
    ]);

    setVariables({
      isminIlkVerildigiYil:
        data.isminIlkVerildigiYil || dummyData.isminIlkVerildigiYil,
      isminVerilisSirasiEnDusukYil:
        data.isminVerilisSirasiEnDusukYil ||
        dummyData.isminVerilisSirasiEnDusukYil,
      isminVerilisSirasiEnYuksekYil:
        data.isminVerilisSirasiEnYuksekYil ||
        dummyData.isminVerilisSirasiEnYuksekYil,
      isminEnSonVerildigiYil:
        data.isminEnSonVerildigiYil || dummyData.isminEnSonVerildigiYil,
    });
  };

  ///////
  const [apiData, setApiData] = useState(null);

  const getInfo = () => {
    if (apiData) {
      setChartData(apiData);
      setLoading(false);
      return;
    }
    if (props.cinsiyet != null) {
      axios
        .post(
          // `${process.env.REACT_APP_PROXY_FOR_NIP_URL}/External/GetYilCocukIsimListWithParams`,
          `/External/GetYilCocukIsimListWithParams`,
          {
            isim: turkishUpperCase(props.ad ?? ""),
            cinsiyet: parseInt(props.cinsiyet, 10),
          }
        )
        .then((dashboardResponse) => {
          const data = dashboardResponse.data;
          setApiData(data);
          setChartData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error getting istatistik data:", error);
          setChartData(dummyData); // Fallback to dummy data on error
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };
  //////////////////////////////////////////////////

  const handleOpen = () => {
    setOpen(true);
    getInfo();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDownload = () => {
    const modalElement = document.getElementById("modal-content");

    if (!modalElement) {
      console.error("Element not found!");
      return;
    }

    const clonedElement = modalElement.cloneNode(true);
    document.body.appendChild(clonedElement);

    clonedElement.style.overflow = "hidden";
    clonedElement.style.position = "absolute";
    clonedElement.style.top = "0";
    clonedElement.style.left = "0";
    modalElement.style.width = "auto";
    clonedElement.style.height = "auto";
    clonedElement.style.zIndex = "-10";

    const downloadButton = clonedElement.querySelector("#modal-button");
    const downloadButtonX = clonedElement.querySelector("#modal-buttonx");
    if (downloadButton) {
      downloadButton.style.display = "none";
      downloadButtonX.style.display = "none";
    }
    setTimeout(() => {
      toPng(clonedElement, {
        width: clonedElement.style.width,
        height: clonedElement.scrollHeight,
      })
        .then((dataUrl) => {
          saveAs(dataUrl, props.ad + "_istatistik.png");
          document.body.removeChild(clonedElement);
        })
        .catch((error) => {
          console.error("Failed to download modal content:", error);
          document.body.removeChild(clonedElement);
        });
    }, 300);
  };
  return (
    <div>
      <FloatinDivForAltMenu img={tkc_istatistik} onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} id="modal-content">
            <div style={{ marginLeft: "14rem" }}>
              <button
                className="certCloseBtn"
                id="modal-buttonx"
                onClick={handleClose}
              >
                X
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                color: "orange",
              }}
            >
              <h2
                style={{
                  fontSize: "15pt",
                }}
              >
                {texts.isminSirasi1 +
                  " " +
                  turkishUpperCase(props.ad ?? "") +
                  " " +
                  texts.isminSirasi2 +
                  " " +
                  (props.cinsiyet === "1"
                    ? texts.isminSirasiErkek
                    : texts.isminSirasiKiz) +
                  " " +
                  texts.isminSirasi2_1}
              </h2>

              <h2
                style={{
                  fontSize: "14pt",
                }}
              ></h2>
            </div>

            {loading ? (
              <LoadingIntro />
            ) : (
              <>
                <div>
                  <ReactApexChart
                    options={options}
                    series={series}
                    type="line"
                    height="400px"
                    maxWidth="890px"
                  />
                </div>
                <div
                  className={classes.variablesInfo}
                  style={{ marginTop: "20px" }}
                >
                  <div className={classes.boxes1}>
                    <p style={{ fontSize: "12pt" }}>
                      {texts.isminIlkVerildigiYil} <br />
                      {variables.isminIlkVerildigiYil}
                      <br />
                      {texts.sira}
                      {": "}
                      {firstValue}
                    </p>
                  </div>
                  <div className={classes.boxes2}>
                    <p style={{ fontSize: "12pt" }}>
                      {texts.isminVerilisSirasiEnDusukYil}
                      <br />
                      {variables.isminVerilisSirasiEnDusukYil}
                      <br />
                      {texts.sira}
                      {": "}
                      {minValue}
                    </p>
                  </div>
                  <div className={classes.boxes3}>
                    <p style={{ fontSize: "12pt" }}>
                      {texts.isminVerilisSirasiEnYuksekYil}
                      <br />
                      {variables.isminVerilisSirasiEnYuksekYil} <br />
                      {texts.sira}
                      {": "}
                      {maxValue}
                    </p>
                  </div>
                  <div className={classes.boxes4}>
                    <p style={{ fontSize: "12pt" }}>
                      {texts.isminEnSonVerildigiYil}
                      <br />
                      {variables.isminEnSonVerildigiYil}
                      <br />
                      {texts.sira}
                      {": "}
                      {lastValue}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    marginTop: "1rem",
                    fontSize: "12pt",
                    textAlign: "center",
                  }}
                >
                  {texts.verilerMevcuttur}
                </div>

                <button
                  className="button"
                  id="modal-button"
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                  onClick={handleDownload}
                >
                  {texts.indir}
                </button>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
