import React from "react";
import { BiAlarm } from "react-icons/bi";

export default function LinkItem() {
  return (
    <button className="w-12 h-12 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-2xl dark:text-gray-300 text-gray-700">
      <BiAlarm />
    </button>
  );
}
