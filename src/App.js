import React from "react";
import TaskList from "./components/TaskList";
import TimeDisplay from "./components/TimeDisplay";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8 text-base">
      <TimeDisplay />
      <TaskList />
    </div>
  );
};

export default App;
