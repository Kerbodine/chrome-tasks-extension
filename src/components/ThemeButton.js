import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useSettings } from "../contexts/SettingsContext";

const ThemeButton = () => {
  const { settings, toggleTheme } = useSettings();

  return (
    <button
      onClick={toggleTheme}
      className="absolute right-4 top-4 text-2xl bg-gray-100 rounded-full p-2 text-black dark:bg-gray-800 dark:text-white transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
    >
      {settings.darkMode ? <BiSun /> : <BiMoon />}
    </button>
  );
};

export default ThemeButton;
