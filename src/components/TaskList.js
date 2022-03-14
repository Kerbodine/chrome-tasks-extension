import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { nanoid } from "nanoid";
import { BiPlus } from "react-icons/bi";

const TaskList = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: nanoid(),
        title: "Task 1",
        completed: false,
      },
    ]
  );

  const [inputText, setInputText] = useState("");

  const newTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: nanoid(),
      title: inputText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputText("");
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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(tasks);

  return (
    <div className="max-w-sm w-full flex flex-col p-4 border-2 border-gray-200 rounded-lg gap-4">
      {tasks && tasks.length > 0 && (
        <div className="max-h-[244px] h-full w-full flex flex-col gap-2 overflow-y-auto">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              data={{ ...task, toggleTask, updateTitle, deleteTask }}
            />
          ))}
        </div>
      )}
      <form className="w-full flex gap-2">
        <input
          type="text"
          className="flex-auto bg-gray-100 rounded-md text-gray-700"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="h-full aspect-square grid place-items-center text-2xl bg-gray-100 rounded-md hover:bg-black hover:text-white transition-all"
          onClick={newTask}
        >
          <BiPlus />
        </button>
      </form>
    </div>
  );
};

export default TaskList;
