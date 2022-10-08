import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SettingsProvider } from "./contexts/SettingsContext";

if (!localStorage.themeColor) {
  // set theme color to light mode default
  document.documentElement.style.setProperty("--bg", "#fff");
  document.documentElement.style.setProperty("--primary", "#f4f4f5");
  document.documentElement.style.setProperty("--text", "rgb(0, 0, 0)");
}
if (localStorage.font === "display") {
  document.documentElement.classList.add("display");
} else if (localStorage.font === "mono") {
  document.documentElement.classList.add("mono");
} else if (localStorage.font === "serif") {
  document.documentElement.classList.add("serif");
} else {
  document.documentElement.classList.remove("display");
  document.documentElement.classList.remove("mono");
  document.documentElement.classList.remove("serif");
}

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
