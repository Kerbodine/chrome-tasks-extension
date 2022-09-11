import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SettingsProvider } from "./contexts/SettingsContext";

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
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
