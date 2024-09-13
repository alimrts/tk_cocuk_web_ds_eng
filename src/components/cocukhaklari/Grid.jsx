import React from "react";
import FlippableCard from "./flippable-card";
import { FilterTabs } from "./constants";
import styled from "styled-components";
import texts from "./texts_cocukhaklari2.json";
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  grid-gap: 1vh;
  padding-bottom: 8vh;
  max-width: 1600px;
  flex-wrap: wrap;
  padding-right: 1vh;
  padding-left: 0;
  margin-left: -2vh;

  @media only screen and (max-width: 319px) {
    grid-template-columns: repeat(2, 1fr);
    transform: scale(0.75);
    margin-left: 2rem;
  }

  @media only screen and (min-width: 320px) and (max-width: 374px) {
    grid-template-columns: repeat(2, 1fr);
    transform: scale(0.75);
    margin-left: 2rem;
  }

  @media only screen and (min-width: 375px) and (max-width: 424px) {
    grid-template-columns: repeat(2, 1fr);
    transform: scale(0.85);
    margin-left: 2.4rem;
  }

  @media only screen and (min-width: 425px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    transform: scale(1);
    margin-left: 2.4rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1199px) {
    grid-template-columns: repeat(4, 1fr);
    transform: scale(0.9);
    margin-left: 2.4rem;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1439px) {
    grid-template-columns: repeat(4, 1fr);
    transform: scale(1);
    margin-left: 2.4rem;
  }

  @media only screen and (min-width: 1440px) and (max-width: 1919px) {
    grid-template-columns: repeat(6, 1fr);
    transform: scale(1);
    margin-left: 2.4rem;
  }

  @media only screen and (min-width: 1920px) {
    grid-template-columns: repeat(8, 1fr);
    transform: scale(1);
    margin-left: 0rem;
  }
`;
const CardsGrid = () => {
  return (
    <Grid>
      {FilterTabs.map((tab) => (
        <FlippableCard
          key={tab.nameFront}
          nameFront={tab.nameFront}
          nameBack={tab.nameBack}
          icon={tab.icon}
        />
      ))}

      <span
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
          fontSize: "10pt",
          marginTop: "0.85rem",

          backgroundColor: "#ffad66",
          paddingLeft: "4px",
          paddingRight: "4px",
          borderRadius: "4px",
          border: "4px solid white",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)",
          width: "92%",
          height: "96%",
          userSelect: "none",
        }}
      >
        {texts.textSonCard}
      </span>
    </Grid>
  );
};

export default CardsGrid;
