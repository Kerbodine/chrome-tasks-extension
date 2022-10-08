import { createContext, useContext, useState, useEffect } from "react";
import { defaultSettings, defaultTasks } from "../config/default";

const SettingsContext = createContext();

export function useSettings() {
  return useContext(SettingsContext);
}

export function SettingsProvider({ children }) {
  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify(defaultTasks));
    }
    return JSON.parse(localStorage.getItem("tasks"));
  };

  const [tasks, setTasks] = useState(getLocalTasks);

  const getLocalStorage = () => {
    if (localStorage.getItem("settings") === null) {
      localStorage.setItem("settings", JSON.stringify(defaultSettings));
    }
    return JSON.parse(localStorage.getItem("settings"));
  };

  const [settings, setSettings] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const [font, setFont] = useState(localStorage.font);

  const changeFont = (newFont) => {
    localStorage.setItem("font", newFont);
    document.documentElement.classList.remove(font);
    document.documentElement.classList.add(newFont);
    setFont(newFont);
  };

  const [themeColor, setThemeColor] = useState(
    localStorage.themeColor ? JSON.parse(localStorage.themeColor) : false
  );

  const updateColor = () => {
    document.documentElement.style.setProperty("--color-h", themeColor.h);
    document.documentElement.style.setProperty("--color-s", themeColor.s + "%");
    document.documentElement.style.setProperty("--color-l", themeColor.l + "%");
    document.documentElement.style.setProperty(
      "--bg",
      `hsl(${themeColor.h}, ${themeColor.s}%, ${themeColor.l}%)`
    );
    // determine optimal text color (black or white) based on hsl values
    document.documentElement.style.setProperty(
      "--text",
      themeColor.l > 50 ? "#000" : "#fff"
    );
    // document.documentElement.style.setProperty("--text", themeColor.text);

    let primaryLum = themeColor.l > 50 ? themeColor.l - 4 : themeColor.l + 6;
    if (themeColor.l > 50) {
      document.documentElement.style.setProperty("--primary", "#000");
    }
    document.documentElement.style.setProperty(
      "--primary",
      `hsl(${themeColor.h}, ${themeColor.s - 2}%, ${primaryLum}%)`
    );
  };

  if (themeColor) {
    updateColor();
  }

  const changeThemeColor = (color) => {
    localStorage.setItem("themeColor", JSON.stringify(color));
    // change root css variables
    setThemeColor(color);
    updateColor();
  };

  const value = {
    settings,
    setSettings,
    tasks,
    setTasks,
    font,
    changeFont,
    themeColor,
    changeThemeColor,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
