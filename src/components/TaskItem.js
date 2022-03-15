import React from "react";
import { BiCheck, BiX } from "react-icons/bi";

const TaskItem = ({
  data: { id, title, completed, toggleTask, updateTitle, deleteTask },
}) => {
  return (
    <div className="w-full flex items-center group relative">
      <button
        onClick={() => toggleTask(id)}
        className={`${
          completed
            ? "border-0 bg-black text-white dark:bg-white dark:text-black"
            : "border-2 border-gray-200 text-black dark:border-gray-700"
        } w-7 h-7 rounded-md grid place-items-center text-2xl transition-colors flex-none`}
      >
        {completed && <BiCheck />}
      </button>
      <input
        className={`${
          completed
            ? "text-gray-500 line-through"
            : "text-gray-700 dark:text-gray-300"
        } transition-colors w-full ml-3 text-lg bg-transparent`}
        value={title}
        onChange={(e) => updateTitle(id, e.target.value)}
      ></input>
      <button
        onClick={() => deleteTask(id)}
        className="w-10 text-gray-400 dark:text-gray-500 text-2xl hidden group-hover:flex bg-white dark:bg-gray-900 justify-center flex-none"
      >
        <BiX />
      </button>
    </div>
  );
};

export default TaskItem;
