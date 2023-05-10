import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { globalStyles } from "./styles/theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="mist-consult">
      <ThemeProvider theme={globalStyles}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
