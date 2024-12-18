import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { SimpsonApp } from "./SimpsonApp";
import { BrowserRouter } from "react-router-dom";
import { MainRender } from "./MainRender/MainRender";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRender />
    </BrowserRouter>
  </React.StrictMode>
);
