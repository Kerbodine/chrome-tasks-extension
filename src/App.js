import React from "react";
import SettingsButton from "./components/SettingsButton";
import TaskList from "./components/TaskList";
import ThemeButton from "./components/ThemeButton";
import TimeDisplay from "./components/TimeDisplay";
import { useSettings } from "./contexts/SettingsContext";

const App = () => {
  const { settings } = useSettings();

  if (
    settings.darkMode &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-8 text-base transition-colors">
      <TimeDisplay />
      <TaskList />
      <ThemeButton />
      <SettingsButton />
    </div>
  );
};

export default App;
