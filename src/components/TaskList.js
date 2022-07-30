import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { nanoid } from "nanoid";
import { useSettings } from "../contexts/SettingsContext";
import FocusDetector from "./FocusDetector";
import { HiPlusSm } from "react-icons/hi";

const TaskList = () => {
  const { tasks, setTasks, settings } = useSettings();

  const [inputText, setInputText] = useState("");

  const newTask = (e) => {
    e.preventDefault();
    if (inputText) {
      const newTask = {
        id: nanoid(),
        title: inputText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  const toggleTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const updateTitle = (id, title) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.title = title;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-sm w-full flex flex-col gap-2 p-2 border-2 border-gray-100 dark:border-gray-800 rounded-2xl transition-c">
      {tasks && tasks.length > 0 && (
        <ul
          className={`max-h-[244px] h-full w-full flex flex-col gap-2 overflow-y-auto p-2 ${
            settings.darkMode && "dark-scroll"
          }`}
        >
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              data={{ ...task, toggleTask, updateTitle, deleteTask }}
            />
          ))}
        </ul>
      )}
      <form className="w-full flex gap-2">
        <input
          className="flex-auto bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 px-3 py-2 placeholder-gray-400 dark:placeholder-gray-500 dark:caret-gray-400 dark:text-gray-300 transition-c"
          value={inputText}
          placeholder="Add a task"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="h-full aspect-square grid place-items-center text-2xl bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-black hover:text-white dark:text-white dark:hover:text-black dark:hover:bg-white"
          onClick={newTask}
        >
          <HiPlusSm />
        </button>
      </form>
      <FocusDetector />
    </div>
  );
};

export default TaskList;
