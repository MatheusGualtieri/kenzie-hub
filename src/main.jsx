import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Reset from "./styles/reset";
import Global from "./styles/global";
import Font from "./styles/font";
import { BrowserRouter } from "react-router-dom";
import Providers from "./components/Providers";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Reset />
    <Global />
    <Font />
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
