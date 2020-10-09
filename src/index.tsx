import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";

import "./assets/styles.scss";
import Tabs from "./components/Header/Header";
import { MuiThemeProvider } from "@material-ui/core/styles";

import theme from "./components/Theme";

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Tabs />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
