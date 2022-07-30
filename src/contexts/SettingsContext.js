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

  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  };

  const value = {
    settings,
    setSettings,
    toggleTheme,
    tasks,
    setTasks,
    dark,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
