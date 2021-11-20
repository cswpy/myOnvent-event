import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/router"
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
  rootElement
);
