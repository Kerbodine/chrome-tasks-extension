import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { nanoid } from "nanoid";
import { useSettings } from "../contexts/SettingsContext";
import FocusDetector from "./FocusDetector";
import { HiReply } from "react-icons/hi";

const TaskList = () => {
  const { tasks, setTasks } = useSettings();

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
    <div className="max-w-sm w-full flex flex-col gap-2 rounded-lg">
      <form className="w-full flex">
        <input
          className="task-input transition-colors"
          value={inputText}
          placeholder="Add a task"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className={`${
            inputText === "" ? "w-0" : "w-10 ml-2"
          } task-submit transition-colors`}
          onClick={newTask}
        >
          <span className="flip-180">
            <HiReply />
          </span>
        </button>
      </form>
      {tasks && tasks.length > 0 && (
        <ul
          className={`max-h-[324px] h-full w-full flex flex-col gap-3 overflow-y-auto p-2 task-scroll`}
        >
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              data={{ ...task, toggleTask, updateTitle, deleteTask }}
            />
          ))}
        </ul>
      )}
      <FocusDetector />
    </div>
  );
};

export default TaskList;
