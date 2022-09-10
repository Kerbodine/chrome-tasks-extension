import React from "react";

export default function FontCard({ selected, onClick, text, label }) {
  return (
    <div
      className={`${
        selected
          ? "bg-black text-white"
          : "bg-gray-100 hover:bg-gray-200 transition-colors"
      } h-14 rounded-lg flex flex-col items-center justify-center cursor-pointer`}
    >
      <p className={`text-xl ${label}`}>{text}</p>
      <p
        className={`${
          selected ? "text-gray-300" : "text-gray-600"
        } text-sm -mt-1 capitalize`}
      >
        {label}
      </p>
    </div>
  );
}
