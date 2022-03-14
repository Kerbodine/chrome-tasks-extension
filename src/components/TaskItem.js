import React from "react";
import { BiCheck, BiX } from "react-icons/bi";

const TaskItem = ({
  data: { id, title, completed, toggleTask, updateTitle, deleteTask },
}) => {
  return (
    <div className="w-full flex items-center group overflow-hidden relative">
      <button
        onClick={() => toggleTask(id)}
        className={`${
          completed
            ? "border-0 bg-black text-white dark:bg-white dark:text-black"
            : "border-2 border-gray-200 text-black dark:border-gray-700"
        } w-7 h-7 rounded-md grid place-items-center text-2xl transition-all`}
      >
        {completed && <BiCheck />}
      </button>
      <input
        className={`${
          completed
            ? "text-gray-500 line-through"
            : "text-gray-700 dark:text-gray-300"
        } transition-all flex-auto truncate ml-2 bg-transparent`}
        value={title}
        onChange={(e) => updateTitle(id, e.target.value)}
      ></input>
      <button
        onClick={() => deleteTask(id)}
        className="w-10 absolute -right-10 group-hover:right-0 text-gray-400 dark:text-gray-500 text-2xl justify-center flex transition-all opacity-0 group-hover:opacity-100 ease-in-out"
      >
        <BiX />
      </button>
    </div>
  );
};

export default TaskItem;
