import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App";
import ReactGA from "react-ga4";

ReactGA.initialize("G-3V71DWC81M");
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
