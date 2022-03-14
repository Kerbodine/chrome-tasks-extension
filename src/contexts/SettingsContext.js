import { createContext, useContext, useState } from "react";
import { defaultSettings } from "../config/default";

const SettingsContext = createContext();

export function useSettings() {
  return useContext(SettingsContext);
}

export function SettingsProvider({ children }) {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || defaultSettings
  );

  const getLocalStorage = () => {
    if (localStorage.getItem("settings") === null) {
      localStorage.setItem("settings", JSON.stringify(defaultSettings));
    }
    return JSON.parse(localStorage.getItem("settings"));
  };

  const [settings, setSettings] = useState(getLocalStorage);

  const value = {
    settings,
    setSettings,
    tasks,
    setTasks,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
