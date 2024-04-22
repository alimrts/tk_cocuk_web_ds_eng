// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import { ThemeProvider } from './Context';
// import { BrowserRouter as Router } from 'react-router-dom';

// ReactDOM.render(
//   <Router>
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>
//   </Router>,
//   document.getElementById('root')
// );

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "./Context";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router basename="/index.html">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);
