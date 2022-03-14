import React from "react";
import TaskList from "./components/TaskList";
import TimeDisplay from "./components/TimeDisplay";
import { useSettings } from "./contexts/SettingsContext";

const App = () => {
  const { settings } = useSettings();

  console.log(settings.darkMode);

  return (
    <div className={`${settings.darkMode && "dark"}`}>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-8 text-base dark:bg-gray-900">
        <TimeDisplay />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
