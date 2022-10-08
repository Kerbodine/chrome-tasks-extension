import React from "react";
import { HiX } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";

const TaskItem = ({
  data: { id, title, completed, toggleTask, updateTitle, deleteTask },
}) => {
  return (
    <li className="w-full flex items-center group relative">
      <button
        onClick={() => toggleTask(id)}
        className={`checkbox ${
          completed ? "checkbox-checked" : "checkbox-empty"
        }`}
      >
        {completed && <FaCheck />}
      </button>
      <input
        className={`${
          completed ? "font-50 line-through" : "font-75"
        } w-full ml-2 bg-transparent text-[17px]`}
        value={title}
        onChange={(e) => updateTitle(id, e.target.value)}
      ></input>
      <button
        onClick={() => deleteTask(id)}
        className="w-6 font-25 text-xl hidden group-hover:flex bg-bg justify-center flex-none"
      >
        <HiX />
      </button>
    </li>
  );
};

export default TaskItem;
