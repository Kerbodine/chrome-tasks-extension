import React from "react";
import Links from "./components/Links";
import SettingsButton from "./components/SettingsButton";
import TaskList from "./components/TaskList";
import ThemeButton from "./components/ThemeButton";
import TimeDisplay from "./components/TimeDisplay";

const App = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center gap-6 text-base transition-c">
      <TimeDisplay />
      {/* <Links /> */}
      <TaskList />
      <ThemeButton />
      <SettingsButton />
    </div>
  );
};

export default App;
