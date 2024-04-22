import React from "react";

import { Route,Link , Redirect, Switch } from "react-router-dom";


const TestIcerik = () => {
  return (
    <div  style={{
        background: "white",
        width: 300,
        height: "100%",
        borderRadius: 8,
       
      }}>
  
    <span>Test İçerik Test İçerik  Test İçerik  <br/></span>
    <span>Test İçerik Test İçerik Test İçerik <br/></span>
    <span>Test İçerik Test İçerik Test İçerik <br/></span>
    <span>Test İçerik Test İçerik <br/></span>
    <span>Test İçerik <br/></span>
    <a href="https://www.tuik.gov.tr/" target="_blank">
          Click to open https://www.tuik.gov.tr/ (new tab)
        </a>
   
    </div>
  );
};

export default TestIcerik;
