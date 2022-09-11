import React from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { HiCheck } from "react-icons/hi";

const TaskItem = ({
  data: { id, title, completed, toggleTask, updateTitle, deleteTask },
}) => {
  return (
    <li className="w-full flex items-center group relative">
      <input
        type="checkbox"
        checked={completed}
        className="h-7 w-7 flex-none cursor-pointer rounded-lg border-2 border-gray-200 bg-transparent text-2xl text-black dark:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-gray-700 dark:checked:border-none"
        onChange={() => toggleTask(id)}
      />
      <input
        className={`${
          completed
            ? "text-gray-500 line-through"
            : "text-gray-700 dark:text-gray-300"
        } w-full ml-2 bg-transparent text-[17px]`}
        value={title}
        onChange={(e) => updateTitle(id, e.target.value)}
      ></input>
      <button
        onClick={() => deleteTask(id)}
        className="w-6 text-gray-400 dark:text-gray-500 text-2xl hidden group-hover:flex bg-white dark:bg-gray-900 justify-center flex-none"
      >
        <BiX />
      </button>
    </li>
  );
};

export default TaskItem;
