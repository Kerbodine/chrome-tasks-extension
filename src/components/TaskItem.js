import React from "react";
import { HiX } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";

const TaskItem = ({
  data: { id, title, completed, toggleTask, updateTitle, deleteTask },
}) => {
  return (
    <li className="w-full flex items-center group relative">
      {/* <input
        type="checkbox"
        checked={completed}
        className="h-7 w-7 flex-none cursor-pointer rounded-lg border-2 border-gray-200 bg-transparent text-2xl text-black dark:text-font focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-font/20 dark:checked:border-none"
        onChange={() => toggleTask(id)}
      /> */}
      <button
        onClick={() => toggleTask(id)}
        className={`h-7 w-7 flex items-center justify-center flex-none cursor-pointer rounded-lg border-2 border-gray-200 bg-transparent text-lg focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-font/20 dark:checked:border-none ${
          completed && "border-none bg-font text-bg"
        }`}
      >
        {completed && <FaCheck />}
      </button>
      <input
        className={`${
          completed
            ? "text-font/50 line-through"
            : "text-gray-700 dark:text-font/75"
        } w-full ml-2 bg-transparent text-[17px]`}
        value={title}
        onChange={(e) => updateTitle(id, e.target.value)}
      ></input>
      <button
        onClick={() => deleteTask(id)}
        className="w-6 text-gray-400 dark:text-font/25 text-xl hidden group-hover:flex bg-white dark:bg-bg justify-center flex-none"
      >
        <HiX />
      </button>
    </li>
  );
};

export default TaskItem;
