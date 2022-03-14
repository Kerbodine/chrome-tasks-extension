import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import TaskList from "./components/TaskList";
import TimeDisplay from "./components/TimeDisplay";
import { useSettings } from "./contexts/SettingsContext";

const App = () => {
  const { settings, toggleTheme } = useSettings();

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
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
      <button
        onClick={toggleTheme}
        className="absolute right-4 top-4 text-2xl bg-gray-100 rounded-full p-2 text-black dark:bg-gray-800 dark:text-white"
      >
        {settings.darkMode ? <BiSun /> : <BiMoon />}
      </button>
    </div>
  );
};

export default App;
